# Contact Form Setup Guide

## 🚀 Quick Setup

Your contact form is ready to use! Follow these simple steps to enable email functionality:

### 1. Configure Email Settings

1. Copy `.env.example` to `.env.local`:

   ```bash
   copy .env.example .env.local
   ```

2. Edit `.env.local` with your Gmail credentials:
   ```env
   GMAIL_USER=your-email@gmail.com
   GMAIL_APP_PASSWORD=your-16-character-app-password
   ADMIN_EMAIL=admin@nexcura.com
   ```

### 2. Generate Gmail App Password

1. **Enable 2-Factor Authentication** on your Gmail account (required)
2. Go to [Google Account Settings](https://myaccount.google.com/)
3. Navigate to **Security** → **2-Step Verification** → **App passwords**
4. Generate a new app password for "Contact Form"
5. Copy the 16-character password (no spaces)

### 3. Test the Form

1. Start your development server:

   ```bash
   npm run dev
   ```

2. Navigate to your contact page
3. Fill out and submit the form
4. Check your email for both admin notification and user thank you message

## 📧 Email Templates

The contact form sends two types of emails:

### Admin Notification

- **To**: Admin email specified in `ADMIN_EMAIL`
- **Content**: Contact form submission details
- **Design**: Professional notification template

### User Thank You

- **To**: User's submitted email address
- **Content**: Thank you message with next steps
- **Design**: Branded Nexcura template

## 🎨 Visual Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Smooth Animations**: Framer Motion powered interactions
- **Two Form Types**: Send Message and Book Appointment
- **Calendar Integration**: Date and time selection for appointments
- **Success Modal**: Beautiful confirmation popup
- **Loading States**: User feedback during form submission
- **Error Handling**: Graceful error messages

## 🔧 Customization

### Update Company Information

Edit the contact details in `ContactMainPageNew.jsx`:

- Email address
- Phone number
- Office address
- Business hours

### Modify Email Templates

Edit templates in `src/app/api/contact/route.js`:

- Admin notification HTML
- User thank you HTML
- Email subject lines

### Styling

The component uses Tailwind CSS with custom gradients and animations. Modify classes in `ContactMainPageNew.jsx` to match your brand.

## 🚨 Troubleshooting

### Common Issues:

1. **"Invalid credentials" error**

   - Ensure 2FA is enabled on Gmail
   - Use App Password, not regular password
   - Check for typos in `.env.local`

2. **Form submission fails**

   - Check console for error messages
   - Verify API route is accessible at `/api/contact`
   - Ensure all required environment variables are set

3. **Emails not sending**
   - Check Gmail account activity
   - Verify ADMIN_EMAIL is a valid email address
   - Test with different email providers

### Support

If you encounter issues, check the browser console for detailed error messages.

## 🎯 Usage

Replace the old contact component import with the new one:

```jsx
// Replace this:
import ContactMainPage from "@/contactcomponents/ContactMainPage";

// With this:
import ContactMainPage from "@/contactcomponents/ContactMainPageNew";
```

Your contact form is now ready with beautiful design and full email functionality! 🎉
