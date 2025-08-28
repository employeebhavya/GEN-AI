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
        .value { background: white; padding: 10px; border-radius: 5px; border-left: 4px solid #28a745; }
        .footer { text-align: center; margin-top: 20px; color: #6c757d; font-size: 14px; }
        .attachment-info { background: #e9ecef; padding: 15px; border-radius: 5px; margin-top: 10px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>💼 New Career Application Received</h1>
            <p>Nexcura Healthcare - Career Form</p>
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
            <div class="field">
                <span class="label">📱 Phone:</span>
                <div class="value">${formData.phone}</div>
            </div>
            ${
              formData.position
                ? `
            <div class="field">
                <span class="label">🎯 Position Applied For:</span>
                <div class="value">${formData.position}</div>
            </div>
            `
                : ""
            }
            ${
              formData.experience
                ? `
            <div class="field">
                <span class="label">⏱️ Years of Experience:</span>
                <div class="value">${formData.experience}</div>
            </div>
            `
                : ""
            }
            ${
              formData.location
                ? `
            <div class="field">
                <span class="label">📍 Preferred Location:</span>
                <div class="value">${formData.location}</div>
            </div>
            `
                : ""
            }
            ${
              formData.currentCompany
                ? `
            <div class="field">
                <span class="label">🏢 Current Company:</span>
                <div class="value">${formData.currentCompany}</div>
            </div>
            `
                : ""
            }
            ${
              formData.expectedSalary
                ? `
            <div class="field">
                <span class="label">💰 Expected Salary:</span>
                <div class="value">${formData.expectedSalary}</div>
            </div>
            `
                : ""
            }
            <div class="field">
                <span class="label">💬 Cover Letter / Message:</span>
                <div class="value">${formData.message}</div>
            </div>
            ${
              formData.resumeAttached
                ? `
            <div class="field">
                <span class="label">📎 Resume:</span>
                <div class="value">
                    Resume attached (${formData.resumeFileName})
                    <div class="attachment-info">
                        <strong>📄 File Details:</strong><br>
                        Name: ${formData.resumeFileName}<br>
                        Size: ${formData.resumeFileSize}<br>
                        Type: ${formData.resumeFileType}
                    </div>
                </div>
            </div>
            `
                : `
            <div class="field">
                <span class="label">📎 Resume:</span>
                <div class="value">No resume attached</div>
            </div>
            `
            }
            <div class="field">
                <span class="label">🕒 Submitted:</span>
                <div class="value">${new Date().toLocaleString()}</div>
            </div>
        </div>
        <div class="footer">
            <p>This application was submitted through the Nexcura Healthcare career form.</p>
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
        .highlight { background: linear-gradient(135deg, #28a745 0%, #20c997 100%); color: white; padding: 20px; border-radius: 10px; margin: 20px 0; text-align: center; }
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
            <h1>Thank You, ${formData.name}! 💼</h1>
            <p>Your career application has been received and we're excited to review your profile.</p>
        </div>
        <div class="content">
            <div class="highlight">
                <h2>🎉 Application Submitted Successfully!</h2>
                <p>We've received your application${
                  formData.position
                    ? ` for the ${formData.position} position`
                    : ""
                } and our HR team will review it shortly.</p>
            </div>
            
            <div class="info-box">
                <h3>📋 What happens next?</h3>
                <ul>
                    <li>✅ Our HR team will review your application and resume</li>
                    <li>📞 If your profile matches our requirements, we'll contact you within 5-7 business days</li>
                    <li>🤝 We'll schedule an initial screening call if there's a good fit</li>
                    <li>🚀 Next steps will include technical interviews and final discussions</li>
                </ul>
            </div>

            ${
              formData.position
                ? `
            <div class="info-box">
                <h3>🎯 Application Details</h3>
                <p><strong>Position:</strong> ${formData.position}</p>
                ${
                  formData.experience
                    ? `<p><strong>Experience:</strong> ${formData.experience}</p>`
                    : ""
                }
                ${
                  formData.location
                    ? `<p><strong>Preferred Location:</strong> ${formData.location}</p>`
                    : ""
                }
                <p><em>We'll match your preferences with our current openings and future opportunities.</em></p>
            </div>
            `
                : ""
            }

            <div class="info-box">
                <h3>🌟 Why Join Nexcura Healthcare?</h3>
                <p>While we review your application, here's what makes our team special:</p>
                <ul>
                    <li>🚀 Cutting-edge AI and healthcare technology</li>
                    <li>💡 Innovation-driven work environment</li>
                    <li>📈 Continuous learning and growth opportunities</li>
                    <li>🏥 Making a real impact in healthcare</li>
                    <li>🤝 Collaborative and supportive team culture</li>
                    <li>⚖️ Work-life balance and competitive benefits</li>
                </ul>
            </div>

            <div style="text-align: center;">
                <a href="https://www.genaihealth.care/" class="cta">🔗 Learn More About Us</a>
            </div>

            <div class="footer">
                <p><strong>Questions about your application?</strong></p>
                <p>📧 Email: careers@nexcura.com</p>
                <p>🌐 Visit us at: https://www.genaihealth.care/</p>
                <hr style="margin: 20px 0; border: none; border-top: 1px solid #dee2e6;">
                <p style="font-size: 12px;">This email was sent because you submitted a career application through our website. If you have any questions, please reply to this email.</p>
                <p style="font-size: 12px;"><strong>Note:</strong> Please do not reply with additional documents. If you need to update your application, please submit a new one through our website.</p>
            </div>
        </div>
    </div>
</body>
</html>
`;

export async function POST(request) {
  try {
    const formData = await request.formData();

    // Extract form fields
    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const message = formData.get("message");
    const position = formData.get("position");
    const experience = formData.get("experience");
    const location = formData.get("location");
    const currentCompany = formData.get("currentCompany");
    const expectedSalary = formData.get("expectedSalary");
    const resume = formData.get("resume");

    // Validate required fields
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: "Missing required fields (name, email, phone, message)" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Prepare form data object for email templates
    const emailFormData = {
      name,
      email,
      phone,
      message,
      position,
      experience,
      location,
      currentCompany,
      expectedSalary,
      resumeAttached: !!resume,
      resumeFileName: resume ? resume.name : null,
      resumeFileSize: resume ? `${(resume.size / 1024).toFixed(2)} KB` : null,
      resumeFileType: resume ? resume.type : null,
    };

    // Create transporter (using same configuration as contact API)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER, // Your Gmail address
        pass: process.env.GMAIL_APP_PASSWORD, // Your Gmail app password
      },
    });

    // Prepare attachments array
    let attachments = [];
    if (resume) {
      // Validate file type (allow common resume formats)
      const allowedTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        "text/plain",
      ];

      if (!allowedTypes.includes(resume.type)) {
        return NextResponse.json(
          {
            error:
              "Invalid file type. Please upload PDF, DOC, DOCX, or TXT files only.",
          },
          { status: 400 }
        );
      }

      // Validate file size (max 5MB)
      if (resume.size > 5 * 1024 * 1024) {
        return NextResponse.json(
          {
            error: "File size too large. Please upload files smaller than 5MB.",
          },
          { status: 400 }
        );
      }

      // Convert file to buffer for attachment
      const resumeBuffer = Buffer.from(await resume.arrayBuffer());

      attachments.push({
        filename: resume.name,
        content: resumeBuffer,
        contentType: resume.type,
      });
    }

    // Admin notification email
    const adminMailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.ADMIN_EMAIL || process.env.GMAIL_USER,
      subject: `💼 New Career Application from ${name}${
        position ? ` - ${position}` : ""
      }`,
      html: adminEmailTemplate(emailFormData),
      attachments: attachments,
    };

    // User thank you email (no attachment needed)
    const userMailOptions = {
      from: process.env.GMAIL_USER,
      to: email,
      subject: `💼 Thank you for your application to Nexcura Healthcare!`,
      html: userThankYouTemplate(emailFormData),
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(userMailOptions),
    ]);

    return NextResponse.json(
      {
        message: "Career application submitted successfully",
        success: true,
        resumeAttached: !!resume,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing career application:", error);
    return NextResponse.json(
      {
        error: "Failed to submit career application",
        details: error.message,
      },
      { status: 500 }
    );
  }
}
