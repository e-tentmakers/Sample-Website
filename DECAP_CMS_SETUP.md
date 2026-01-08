# Decap CMS Setup and Usage Guide

## What is Decap CMS?

Decap CMS (formerly Netlify CMS) is a Git-based content management system that allows you to edit your website content through a user-friendly web interface. All changes are saved directly to your GitHub repository as files.

## Initial Setup

### Step 1: Enable GitHub OAuth (Required for GitHub Pages)

Decap CMS needs GitHub OAuth to authenticate users. Follow these steps:

1. **Go to GitHub Settings:**
   - Visit: https://github.com/settings/developers
   - Click "OAuth Apps" → "New OAuth App"

2. **Create OAuth App:**
   - **Application name:** Sample Website CMS (or any name)
   - **Homepage URL:** `https://e-tentmakers.github.io/Sample-Website/`
   - **Authorization callback URL:** `https://e-tentmakers.github.io/Sample-Website/`
   - Click "Register application"

3. **Copy Credentials:**
   - Copy the **Client ID**
   - Click "Generate a new client secret" and copy the **Client secret**
   - Save these credentials securely

4. **Update admin/config.yml:**
   - Open `admin/config.yml`
   - Find the `backend` section
   - Add your GitHub OAuth credentials (see instructions below)

### Step 2: Update config.yml with OAuth Credentials

Edit `admin/config.yml` and update the backend section:

```yaml
backend:
  name: github
  repo: e-tentmakers/Sample-Website
  branch: main
  base_url: https://e-tentmakers.github.io/Sample-Website
  auth_scope: repo
  api_root: https://api.github.com
  site_domain: e-tentmakers.github.io
```

**Note:** For GitHub Pages, you may need to use the GitHub backend instead of git-gateway. However, git-gateway can work if you set up Netlify Identity (requires a Netlify account).

### Alternative: Use Netlify Identity (Easier Setup)

If you prefer an easier setup:

1. **Create a free Netlify account:** https://www.netlify.com
2. **Add your GitHub repository to Netlify**
3. **Enable Netlify Identity** in your Netlify site settings
4. **Enable Git Gateway** in Netlify Identity settings

The current `config.yml` is set up for Netlify Identity. If you use GitHub OAuth directly, update it as shown above.

## How to Access the CMS

1. **Visit:** `https://e-tentmakers.github.io/Sample-Website/admin/`
2. **Login** with your GitHub account (or Netlify account if using Netlify Identity)
3. **Start editing** your content!

## How to Use Decap CMS

### Changing an Image File

1. **Go to the CMS:** Visit `/admin/` on your website
2. **Select a collection:** For example, click "Homepage"
3. **Find the image field:** Look for fields like "Worship Schedule Background Image" or "Vision Section Image"
4. **Click the image field:**
   - Click "Choose an image" or the existing image
   - You can either:
     - **Upload a new image:** Click "Upload" and select a file from your computer
     - **Choose existing image:** Click "Choose from existing" and select from your Image files folder
5. **Save:** Click "Save" or "Publish" at the top
6. **Wait for GitHub Actions:** The changes will be committed to GitHub and deployed automatically (usually 1-2 minutes)

### Editing Text Content

1. **Go to the CMS:** Visit `/admin/`
2. **Select the collection** containing the text you want to edit (e.g., "Homepage", "Notices")
3. **Edit the text fields:**
   - Click on any text field
   - Type your changes
4. **Save:** Click "Save" or "Publish"
5. **Changes will appear** on your website after GitHub Pages rebuilds (1-2 minutes)

### Adding/Editing Worship Schedule

1. **Go to CMS:** Visit `/admin/`
2. **Click "Worship Schedule"**
3. **To edit existing:**
   - Click on an existing schedule item
   - Edit the Service Name, Time, or Venue
   - Click "Save"
4. **To add new:**
   - Click "New Worship Schedule"
   - Fill in Service Name, Time, Venue
   - Click "Save"

### Adding/Editing Notices

1. **Go to CMS:** Visit `/admin/`
2. **Click "Notices"**
3. **To edit:** Click on an existing notice, make changes, click "Save"
4. **To add:** Click "New Notice", fill in Date, Title, and Link, click "Save"

### Editing Footer Information

1. **Go to CMS:** Visit `/admin/`
2. **Click "Footer"**
3. **Edit:** Update Address, Phone, Email, or Donation Accounts
4. **Save:** Click "Save"

## Content Collections Overview

- **Homepage:** Main page content (images, vision text, YouTube link)
- **Worship Schedule:** All worship service times and venues
- **Notices:** Homepage notice items
- **Footer:** Contact information and donation accounts
- **Vision Page:** Content for the vision page
- **Staff Members:** Staff information and photos
- **Worship Pages:** Individual worship page content

## Important Notes

1. **Image Uploads:** All images are stored in the `Image files` folder
2. **File Names:** Use descriptive names without spaces (use hyphens instead)
3. **Korean Text:** Decap CMS fully supports Korean characters
4. **Auto-Deploy:** Changes are automatically deployed via GitHub Actions
5. **Backup:** All content is stored in your GitHub repository, so it's automatically backed up

## Troubleshooting

### CMS page shows blank or error
- Make sure `admin/index.html` exists
- Check browser console for errors
- Verify GitHub OAuth is set up correctly

### Changes not appearing on website
- Wait 1-2 minutes for GitHub Pages to rebuild
- Clear browser cache (Ctrl+F5)
- Check GitHub Actions for deployment status

### Can't login
- Verify OAuth credentials are correct in `config.yml`
- Check that callback URL matches your GitHub Pages URL
- Try clearing browser cookies

### Images not uploading
- Check file size (keep under 5MB for best results)
- Verify image format (JPG, PNG, GIF are supported)
- Check browser console for errors

## Need Help?

- Decap CMS Documentation: https://decapcms.org/docs/
- GitHub OAuth Setup: https://docs.github.com/en/developers/apps/building-oauth-apps/creating-an-oauth-app
