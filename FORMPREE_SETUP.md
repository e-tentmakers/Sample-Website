# Formspree Setup Instructions

## Step 1: Get Your Form ID

1. Go to **https://formspree.io**
2. Login with your email: **miyoung@alumni.cmu.edu**
3. Click **"New Form"** (or select an existing form)
4. Go to the **"Integration"** tab
5. Find the section that says **"Your form's endpoint is:"**
6. You'll see a URL like: `https://formspree.io/f/abc123xyz`
7. Copy the part after `/f/` - this is your **Form ID** (e.g., `abc123xyz`)

## Step 2: Update the Contact Form

1. Open `contact.html` in a text editor
2. Find this line (around line 83):
   ```html
   <form id="contact-form" action="https://formspree.io/f/YOUR_FORM_ID_HERE" method="POST">
   ```
3. Replace `YOUR_FORM_ID_HERE` with your actual Form ID from Step 1
4. Save the file

## Step 3: Configure Formspree Settings

1. In your Formspree dashboard, go to your form's settings
2. Set the **Recipient Email** to: **my_yoo@hotmail.com**
3. (Optional) Enable email notifications

## Step 4: Test the Form

1. Push the updated `contact.html` to GitHub:
   ```bash
   git add contact.html
   git commit -m "Update Formspree form ID"
   git push origin main
   ```
2. Wait 1-2 minutes for GitHub Pages to update
3. Visit your contact page and test submitting the form
4. Check your email (my_yoo@hotmail.com) for the submission

## Troubleshooting

### If you get "Form ID is incorrect" error:
- Double-check that you copied the entire form ID correctly
- Make sure there are no extra spaces or characters
- Verify the form ID in your Formspree dashboard

### If Windows Defender blocks the form:
- Add `formspree.io` to Windows Defender exclusions
- Or temporarily disable Windows Defender for testing

### If the form still doesn't work:
- Check the browser console (F12) for error messages
- Verify your Formspree account is active
- Make sure the recipient email is set correctly in Formspree

## Need Help?

If you're still having issues:
1. Check Formspree's documentation: https://help.formspree.io
2. Verify your form ID is correct in the Formspree dashboard
3. Test with a simple form submission first

