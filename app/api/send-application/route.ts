import { NextResponse } from "next/server";
import nodemailer, { SendMailOptions } from "nodemailer";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const position = formData.get("position") as string;
    const experience = formData.get("experience") as string;
    const education = formData.get("education") as string;
    const coverLetter = formData.get("coverLetter") as string;
    const linkedinUrl = formData.get("linkedinUrl") as string;
    const cvFile = formData.get("cv") as File | null;

    // Récupération de la configuration SMTP
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = parseInt(process.env.SMTP_PORT || "587");
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const smtpSecure = process.env.SMTP_SECURE === "true";
    const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "contact@inter-rh.com";

    // Mode simulation si aucune variable SMTP n'est définie (facilite le dev et test local)
    if (!smtpHost || !smtpUser || !smtpPass) {
      console.warn(
        "⚠️ Configuration SMTP manquante dans le fichier .env. Les données de candidature ont été reçues avec succès (Mode Simulation) :"
      );
      console.log({
        firstName,
        lastName,
        email,
        phone,
        position,
        experience,
        education,
        linkedinUrl,
        cvFile: cvFile ? { name: cvFile.name, size: cvFile.size } : null,
      });

      // Simulation de délai
      await new Promise((resolve) => setTimeout(resolve, 1500));
      return NextResponse.json({ success: true, simulated: true });
    }

    // Création du transporteur SMTP
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    // Construction du mail
    const mailOptions: SendMailOptions = {
      from: `"${firstName} ${lastName}" <${smtpUser}>`,
      to: contactEmail,
      replyTo: email,
      subject: `[Candidature Site Web] ${position} — ${firstName} ${lastName}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
          <h2 style="color: #1e3a8a; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px; margin-top: 0;">Nouvelle Candidature reçue sur INTER-RH</h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; width: 150px;">Candidat :</td>
              <td style="padding: 8px 0;">${firstName} ${lastName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Adresse email :</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Téléphone :</td>
              <td style="padding: 8px 0;">${phone}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Poste visé :</td>
              <td style="padding: 8px 0; font-weight: bold; color: #dc2626;">${position}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Expérience :</td>
              <td style="padding: 8px 0;">${experience}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Formation :</td>
              <td style="padding: 8px 0;">${education}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Profil LinkedIn :</td>
              <td style="padding: 8px 0;">${linkedinUrl ? `<a href="${linkedinUrl}" target="_blank">${linkedinUrl}</a>` : "Non spécifié"}</td>
            </tr>
          </table>
          <div style="margin-top: 20px; padding: 15px; border-left: 4px solid #1e3a8a; background: #f9fafb;">
            <h4 style="margin-top: 0; color: #1e3a8a;">Lettre de motivation :</h4>
            <p style="white-space: pre-wrap; font-size: 14px; line-height: 1.5; color: #374151;">${coverLetter}</p>
          </div>
          <p style="margin-top: 25px; font-size: 11px; color: #6b7280; text-align: center; border-top: 1px solid #e5e7eb; padding-top: 15px;">
            Cet e-mail a été généré automatiquement depuis le formulaire de candidature du site web INTER-RH.
          </p>
        </div>
      `,
    };

    // Gestion de la pièce jointe (CV)
    if (cvFile && cvFile.size > 0) {
      const buffer = Buffer.from(await cvFile.arrayBuffer());
      mailOptions.attachments = [
        {
          filename: cvFile.name,
          content: buffer,
        },
      ];
    }

    // Envoi de l'e-mail
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erreur lors de l'envoi de la candidature:", error);
    return NextResponse.json(
      { error: "Une erreur est survenue lors de l'envoi de votre candidature. Veuillez réessayer." },
      { status: 500 }
    );
  }
}
