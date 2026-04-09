import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }
console.log("EMAIL:", process.env.CONTACT_EMAIL);
console.log("HAS PASSWORD:", !!process.env.CONTACT_EMAIL_PASSWORD);
console.log("PASSWORD LENGTH:", process.env.CONTACT_EMAIL_PASSWORD?.length);
    const transporter = nodemailer.createTransport({
      host: "smtp.zoho.eu",
      port: 465,
      secure: true,
      auth: {
        user: process.env.CONTACT_EMAIL,
        pass: process.env.CONTACT_EMAIL_PASSWORD,
      },
    });

    await transporter.verify();

    await transporter.sendMail({
      from: `"Nomadically Sav Website" <${process.env.CONTACT_EMAIL}>`,
      to: process.env.CONTACT_EMAIL,
      replyTo: email,
      subject: `New inquiry from ${name}`,
      text: `Name: ${name}
Email: ${email}

Message:
${message}`,
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Contact route error:", error);
    return NextResponse.json(
      { error: error?.message || "Failed to send email" },
      { status: 500 }
    );
  }
}