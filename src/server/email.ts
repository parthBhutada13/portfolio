"use server";

import { z } from "zod";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const emailSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  message: z.string().trim().min(5, "Tell me a little more").max(2000),
});

export async function sendContactEmail(input: z.infer<typeof emailSchema>) {
  try {
    // Send email to you
    await resend.emails.send({
      from: "noreply@example.com", // Update with your verified Resend email
      to: process.env.CONTACT_EMAIL || "your-email@example.com",
      subject: `New message from ${input.name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>From:</strong> ${input.name}</p>
        <p><strong>Email:</strong> ${input.email}</p>
        <p><strong>Message:</strong></p>
        <p>${input.message.replace(/\n/g, "<br />")}</p>
      `,
    });

    // Send confirmation email to visitor
    await resend.emails.send({
      from: "noreply@example.com", // Update with your verified Resend email
      to: input.email,
      subject: "We received your message",
      html: `
        <h2>Thanks for reaching out!</h2>
        <p>Hi ${input.name},</p>
        <p>I received your message and will get back to you soon.</p>
        <p>Best regards,<br />Your Portfolio</p>
      `,
    });

    return { success: true, message: "Email sent successfully" };
  } catch (error) {
    console.error("Email sending error:", error);
    return { success: false, message: "Failed to send email" };
  }
}
