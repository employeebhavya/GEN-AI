import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Email templates
const adminEmailTemplate = (formData) => `
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
        .content { background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px; }
        .field { margin-bottom: 20px; }
        .label { font-weight: bold; color: #495057; margin-bottom: 5px; display: block; }
        .value { background: white; padding: 10px; border-radius: 5px; border-left: 4px solid #007bff; }
        .footer { text-align: center; margin-top: 20px; color: #6c757d; font-size: 14px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🚀 New Contact Form Submission</h1>
            <p>Nexcura Healthcare - Contact Form</p>
        </div>
        <div class="content">
            <div class="field">
                <span class="label">👤 Name:</span>
                <div class="value">${formData.name}</div>
            </div>
            <div class="field">
                <span class="label">📧 Email:</span>
                <div class="value">${formData.email}</div>
            </div>
            ${
              formData.company
                ? `
            <div class="field">
                <span class="label">🏢 Company:</span>
                <div class="value">${formData.company}</div>
            </div>
            `
                : ""
            }
            ${
              formData.appointmentDate
                ? `
            <div class="field">
                <span class="label">📅 Requested Appointment:</span>
                <div class="value">${formData.appointmentDate} at ${formData.appointmentTime}</div>
            </div>
            `
                : ""
            }
            <div class="field">
                <span class="label">💬 Message:</span>
                <div class="value">${formData.message}</div>
            </div>
            <div class="field">
                <span class="label">📝 Form Type:</span>
                <div class="value">${
                  formData.type === "appointment"
                    ? "Demo Booking Request"
                    : "General Message"
                }</div>
            </div>
            <div class="field">
                <span class="label">🕒 Submitted:</span>
                <div class="value">${new Date().toLocaleString()}</div>
            </div>
        </div>
        <div class="footer">
            <p>This message was sent from the Nexcura Healthcare contact form.</p>
        </div>
    </div>
</body>
</html>
`;

const userThankYouTemplate = (formData) => `
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); color: white; padding: 40px; text-align: center; border-radius: 15px 15px 0 0; }
        .content { background: #f8f9fa; padding: 40px; border-radius: 0 0 15px 15px; }
        .highlight { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 10px; margin: 20px 0; text-align: center; }
        .info-box { background: white; padding: 20px; border-radius: 10px; margin: 20px 0; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
        .footer { text-align: center; margin-top: 30px; color: #6c757d; }
        .logo { font-size: 24px; font-weight: bold; margin-bottom: 10px; }
        .cta { background: #28a745; color: white; padding: 15px 30px; border-radius: 25px; text-decoration: none; display: inline-block; margin: 20px 0; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <div class="logo">🏥 Nexcura Healthcare</div>
            <h1>Thank You, ${formData.name}! ✨</h1>
            <p>Your message has been received and we're excited to connect with you.</p>
        </div>
        <div class="content">
            <div class="highlight">
                <h2>🎉 Message Received Successfully!</h2>
                <p>We've received your ${
                  formData.type === "appointment"
                    ? "demo booking request"
                    : "message"
                } and our team will get back to you soon.</p>
            </div>
            
            <div class="info-box">
                <h3>📋 What happens next?</h3>
                <ul>
                    <li>✅ Our team will review your ${
                      formData.type === "appointment"
                        ? "demo booking request"
                        : "message"
                    }</li>
                    <li>📞 You'll hear back from us within 24 hours</li>
                    ${
                      formData.type === "appointment"
                        ? "<li>📅 We'll confirm your preferred demo time and send calendar invite</li>"
                        : ""
                    }
                    <li>🚀 We'll help you discover how Nexcura can transform your healthcare journey</li>
                </ul>
            </div>

            ${
              formData.type === "appointment" && formData.appointmentDate
                ? `
            <div class="info-box">
                <h3>📅 Your Demo Booking Request</h3>
                <p><strong>Requested Date:</strong> ${formData.appointmentDate}</p>
                <p><strong>Requested Time:</strong> ${formData.appointmentTime}</p>
                <p><em>We'll confirm this time slot or suggest alternatives if needed. A calendar invite will be sent upon confirmation.</em></p>
            </div>
            `
                : ""
            }

            <div class="info-box">
                <h3>🌟 Why Choose Nexcura?</h3>
                <p>While you wait, here's what makes us special:</p>
                <ul>
                    <li>🤖 AI-powered healthcare solutions</li>
                    <li>📊 Personalized health insights</li>
                    <li>🔒 Secure data management</li>
                    <li>⚡ Continuous innovation in healthcare technology</li>
                </ul>
            </div>

            <div style="text-align: center;">
                <a href="https://www.genaihealth.care/" class="cta">🔗 Explore Our Platform</a>
            </div>

            <div class="footer">
                <p><strong>Need immediate assistance?</strong></p>
                <p>📧 Email: contact@nexcura.com</p>
                <p>🌐 Visit us at: https://www.genaihealth.care/</p>
                <hr style="margin: 20px 0; border: none; border-top: 1px solid #dee2e6;">
                <p style="font-size: 12px;">This email was sent because you contacted us through our website. If you have any questions, please reply to this email.</p>
            </div>
        </div>
    </div>
</body>
</html>
`;

export async function POST(request) {
  try {
    const formData = await request.json();

    // Validate required fields
    if (!formData.name || !formData.email || !formData.message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Create transporter (you'll need to configure this with your Gmail credentials)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER, // Your Gmail address
        pass: process.env.GMAIL_APP_PASSWORD, // Your Gmail app password
      },
    });

    // Admin notification email
    const adminMailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.ADMIN_EMAIL || process.env.GMAIL_USER,
      subject: `🚀 New ${
        formData.type === "appointment" ? "Demo Booking" : "Contact Form"
      } Submission from ${formData.name}`,
      html: adminEmailTemplate(formData),
    };

    // User thank you email
    const userMailOptions = {
      from: process.env.GMAIL_USER,
      to: formData.email,
      subject: `✨ Thank you for ${
        formData.type === "appointment" ? "booking a demo with" : "contacting"
      } Nexcura Healthcare!`,
      html: userThankYouTemplate(formData),
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(userMailOptions),
    ]);

    return NextResponse.json(
      {
        message: "Emails sent successfully",
        success: true,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending emails:", error);
    return NextResponse.json(
      {
        error: "Failed to send emails",
        details: error.message,
      },
      { status: 500 }
    );
  }
}
