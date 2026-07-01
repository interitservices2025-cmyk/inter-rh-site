// Autoriser les certificats SSL auto-signés ou intermédiaires des proxys d'entreprise pour le dev
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const fs = require('fs');
const path = require('path');
const https = require('https');

const IMAGES_DIR = path.join(__dirname, 'public', 'images');

console.log("📂 Dossier cible :", IMAGES_DIR);

if (!fs.existsSync(IMAGES_DIR)) {
  console.log("📁 Le dossier n'existe pas, création...");
  fs.mkdirSync(IMAGES_DIR, { recursive: true });
} else {
  console.log("📁 Le dossier existe déjà.");
}

const imagesToDownload = {
  'hero_home.jpg': 'https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?w=1600&auto=format&fit=crop&q=80',
  'team_about.jpg': 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&auto=format&fit=crop&q=80',
  'why_choose_us.jpg': 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=80',
  'mission_human.jpg': 'https://images.unsplash.com/photo-1573498930074-44c3e08b1a8a?w=800&auto=format&fit=crop&q=80',
  'employeurs_onboarding.jpg': 'https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?w=800&auto=format&fit=crop&q=80',
  'candidats_coaching.jpg': 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop&q=80',
  'offres_tenders.jpg': 'https://images.unsplash.com/photo-1580894732444-8fecef2271ff?w=800&auto=format&fit=crop&q=80',
  'offres_jobs.jpg': 'https://images.unsplash.com/photo-1580894732930-0babd100d356?w=800&auto=format&fit=crop&q=80',
  'service_recrutement.jpg': 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&auto=format&fit=crop&q=80',
  'service_strategy.jpg': 'https://images.unsplash.com/photo-1542744094-3a31f103e35f?w=800&auto=format&fit=crop&q=80',
  'service_projects.jpg': 'https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?w=800&auto=format&fit=crop&q=80',
  'service_coaching.jpg': 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&auto=format&fit=crop&q=80',
  'service_immigration.jpg': 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&auto=format&fit=crop&q=80',
  'blog_cameroun.jpg': 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&auto=format&fit=crop&q=80',
  'blog_idea_result.jpg': 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&auto=format&fit=crop&q=80',
  'blog_interview.jpg': 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&auto=format&fit=crop&q=80',
  'blog_canada.jpg': 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&auto=format&fit=crop&q=80'
};

function download(url, dest, cb) {
  console.log(`🌐 [GET] ${url.substring(0, 80)}...`);
  https.get(url, function(response) {
    console.log(`🔍 [STATUS ${response.statusCode}] pour ${path.basename(dest)}`);
    
    if ([301, 302, 307, 308].includes(response.statusCode)) {
      const redirectUrl = response.headers.location;
      console.log(`➡️ [REDIRECT] vers : ${redirectUrl.substring(0, 80)}...`);
      download(redirectUrl, dest, cb);
      return;
    }
    
    if (response.statusCode !== 200) {
      console.error(`❌ [HTTP ERROR] Code ${response.statusCode} pour ${path.basename(dest)}`);
      cb(`Statut HTTP non valide : ${response.statusCode}`);
      return;
    }

    console.log(`💾 [WRITE] Écriture dans ${dest}...`);
    const file = fs.createWriteStream(dest);
    response.pipe(file);
    
    file.on('finish', function() {
      file.close(() => {
        try {
          const stats = fs.statSync(dest);
          console.log(`⭐ [SUCCESS] Fichier écrit : ${path.basename(dest)} (${stats.size} octets)`);
          cb();
        } catch (e) {
          console.error(`❌ [STAT ERROR] Impossible de lire la taille pour ${path.basename(dest)} : ${e.message}`);
          cb(e.message);
        }
      });
    });
    
    file.on('error', function(err) {
      console.error(`❌ [WRITE ERROR] ${err.message} pour ${path.basename(dest)}`);
      fs.unlink(dest, () => {});
      cb(err.message);
    });
  }).on('error', function(err) {
    console.error(`❌ [REQUEST ERROR] ${err.message} pour ${path.basename(dest)}`);
    cb(err.message);
  });
}

const keys = Object.keys(imagesToDownload);
let completed = 0;

console.log("🚀 Lancement du téléchargement des images locales d'INTER-RH...");

keys.forEach(filename => {
  const url = imagesToDownload[filename];
  const dest = path.join(IMAGES_DIR, filename);
  download(url, dest, (err) => {
    if (err) {
      console.error(`❌ Échec pour ${filename}: ${err}`);
    } else {
      console.log(`✅ Succès final : ${filename}`);
    }
    completed++;
    if (completed === keys.length) {
      console.log("\n🎉 Téléchargement de toutes les images locales d'INTER-RH terminé !");
      
      // Liste finale des fichiers dans le dossier pour validation
      try {
        const files = fs.readdirSync(IMAGES_DIR);
        console.log(`📂 Fichiers présents dans le dossier public/images : [${files.join(', ')}]`);
      } catch (e) {
        console.error("❌ Impossible de lister le dossier public/images :", e.message);
      }
    }
  });
});
