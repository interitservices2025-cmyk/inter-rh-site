import { NextResponse } from "next/server";
import nodemailer, { SendMailOptions } from "nodemailer";

export async function POST(request: Request) {
  try {
    const { name, email, phone, subject, message } = await request.json();

    // Récupération de la configuration SMTP
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = parseInt(process.env.SMTP_PORT || "587");
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const smtpSecure = process.env.SMTP_SECURE === "true";
    const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "contact@inter-rh.com";

    // Mode simulation si aucune variable SMTP n'est définie
    if (!smtpHost || !smtpUser || !smtpPass) {
      console.warn(
        "⚠️ Configuration SMTP manquante dans le fichier .env. Le message de contact a été reçu avec succès (Mode Simulation) :"
      );
      console.log({ name, email, phone, subject, message });

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
      from: `"${name}" <${smtpUser}>`,
      to: contactEmail,
      replyTo: email,
      subject: `[Contact Site Web] ${subject} — ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
          <h2 style="color: #1e3a8a; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px; margin-top: 0;">Nouveau Message de Contact reçu sur INTER-RH</h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; width: 150px;">Expéditeur :</td>
              <td style="padding: 8px 0;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Adresse email :</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Téléphone :</td>
              <td style="padding: 8px 0;">${phone || "Non spécifié"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Sujet :</td>
              <td style="padding: 8px 0; font-weight: bold; color: #dc2626;">${subject}</td>
            </tr>
          </table>
          <div style="margin-top: 20px; padding: 15px; border-left: 4px solid #1e3a8a; background: #f9fafb;">
            <h4 style="margin-top: 0; color: #1e3a8a;">Message :</h4>
            <p style="white-space: pre-wrap; font-size: 14px; line-height: 1.5; color: #374151;">${message}</p>
          </div>
          <p style="margin-top: 25px; font-size: 11px; color: #6b7280; text-align: center; border-top: 1px solid #e5e7eb; padding-top: 15px;">
            Cet e-mail a été généré automatiquement depuis le formulaire de contact du site web INTER-RH.
          </p>
        </div>
      `,
    };

    // Envoi de l'e-mail
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erreur lors de l'envoi du message de contact:", error);
    return NextResponse.json(
      { error: "Une erreur est survenue lors de l'envoi de votre message. Veuillez réessayer." },
      { status: 500 }
    );
  }
}
