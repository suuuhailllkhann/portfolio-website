import { NextResponse } from "next/server";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_LENGTH = { name: 100, email: 254, subject: 160, message: 5000 } as const;

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.RESEND_FROM_EMAIL;
  const toEmail = process.env.CONTACT_TO_EMAIL || "suhailkhan.dev@outlook.com";

  if (!apiKey || !fromEmail) {
    console.error("Contact form email configuration is missing.");
    return NextResponse.json({ error: "The contact form is temporarily unavailable." }, { status: 503 });
  }

  let payload: Record<string, unknown>;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = clean(payload.name);
  const email = clean(payload.email).toLowerCase();
  const subject = clean(payload.subject);
  const message = clean(payload.message);
  const website = clean(payload.website);

  // Bots commonly fill hidden fields. Return success without sending anything.
  if (website) return NextResponse.json({ ok: true });

  if (!name || !email || !subject || !message) {
    return NextResponse.json({ error: "Please complete every field." }, { status: 400 });
  }

  if (
    !EMAIL_PATTERN.test(email) ||
    name.length > MAX_LENGTH.name ||
    email.length > MAX_LENGTH.email ||
    subject.length > MAX_LENGTH.subject ||
    message.length > MAX_LENGTH.message
  ) {
    return NextResponse.json({ error: "Please check the information you entered." }, { status: 400 });
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      reply_to: email,
      subject: `Portfolio contact: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\n${message}`,
    }),
  });

  if (!response.ok) {
    console.error("Resend rejected a contact form submission.", response.status, await response.text());
    return NextResponse.json({ error: "Your message could not be sent. Please try again." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
