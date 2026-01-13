import nodemailer from 'nodemailer';

// Initialize transporter lazily to ensure env variables are loaded
function getTransporter() {
  const host = process.env.SMTP_HOST || 'smtp.gmail.com';
  const port = Number(process.env.SMTP_PORT) || 587;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  console.log(`Initialising Nodemailer with host: ${host}, port: ${port}, user: ${user ? '***' : 'undefined'}`);

  if (!user || !pass) {
    throw new Error("Missing SMTP credentials (SMTP_USER or SMTP_PASS). Please check your .env.local file.");
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
    // Add timeout to prevent hanging
    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 10000,
  });
}

export type EmailPayload = {
  to?: string;
  _replyto?: string;
  _subject?: string;
  [key: string]: any;
};

export async function sendEmail(payload: EmailPayload) {
  const transporter = getTransporter();
  const { _subject, _replyto, to, ...rest } = payload;

  const htmlContent = `
    <h2>New Form Submission</h2>
    <table style="width: 100%; border-collapse: collapse;">
      ${Object.entries(rest)
      .map(
        ([key, value]) => `
        <tr>
          <th style="text-align: left; padding: 8px; border-bottom: 1px solid #ddd; text-transform: capitalize;">${key.replace(/_/g, ' ')}</th>
          <td style="padding: 8px; border-bottom: 1px solid #ddd;">${value}</td>
        </tr>
      `
      )
      .join('')}
    </table>
  `;

  const info = await transporter.sendMail({
    from: `"Yogagarhi Website" <${process.env.SMTP_USER}>`,
    to: to || process.env.CONTACT_EMAIL,
    replyTo: _replyto || rest.email,
    subject: _subject || 'New Form Submission',
    html: htmlContent,
  });

  return info;
}
