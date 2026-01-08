# Decap CMS Quick Start Guide

## 🚀 Quick Setup (5 minutes)

### Step 1: Set Up GitHub OAuth

1. Go to: https://github.com/settings/developers
2. Click **"OAuth Apps"** → **"New OAuth App"**
3. Fill in:
   - **Application name:** `Sample Website CMS`
   - **Homepage URL:** `https://e-tentmakers.github.io/Sample-Website/`
   - **Authorization callback URL:** `https://e-tentmakers.github.io/Sample-Website/`
4. Click **"Register application"**
5. **Copy the Client ID** (you'll need this)
6. Click **"Generate a new client secret"** and **copy the Client secret**

### Step 2: Update admin/config.yml

Open `admin/config.yml` and add your OAuth credentials at the top:

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

**Note:** The config.yml is already set up with the GitHub backend. You just need to ensure GitHub OAuth is configured.

### Step 3: Push to GitHub

```bash
cd "C:\Sample Website"
git add .
git commit -m "Add Decap CMS"
git push origin main
```

### Step 4: Access CMS

1. Wait 1-2 minutes for GitHub Pages to deploy
2. Visit: `https://e-tentmakers.github.io/Sample-Website/admin/`
3. Click **"Login with GitHub"**
4. Authorize the application
5. Start editing!

---

## 📝 How to Change an Image (Example)

### Example: Change the Homepage Background Image

1. **Go to CMS:** Visit `https://e-tentmakers.github.io/Sample-Website/admin/`
2. **Click "Homepage"** in the left sidebar
3. **Find "Worship Schedule Background Image"** field
4. **Click the image field:**
   - Click **"Upload"** button
   - Select your new image file from your computer
   - Or click **"Choose from existing"** to use an image already in your `Image files` folder
5. **Click "Save"** (top right)
6. **Wait 1-2 minutes** for GitHub Pages to rebuild
7. **Refresh your website** to see the new image!

### Example: Change Vision Section Image

1. Go to CMS → **"Homepage"**
2. Find **"Vision Section Image"**
3. Click to upload or choose existing image
4. Click **"Save"**
5. Done! Changes appear in 1-2 minutes

---

## ✏️ How to Edit Text

### Example: Change Vision Text

1. Go to CMS → **"Homepage"**
2. Find **"Vision Main Text"** field
3. Click and edit the text
4. Click **"Save"**
5. Changes appear on website in 1-2 minutes

### Example: Edit Worship Schedule

1. Go to CMS → **"Worship Schedule"**
2. Click on any schedule item (e.g., "주일예배 1부")
3. Edit **Service Name**, **Time**, or **Venue**
4. Click **"Save"**
5. Changes appear automatically

---

## 📋 Available Content Types

- **Homepage:** Background images, vision text, YouTube links
- **Worship Schedule:** All service times and locations
- **Notices:** Homepage announcement items
- **Footer:** Contact info and donation accounts
- **Vision Page:** Vision page content and images
- **Staff:** Staff member information and photos
- **Worship Pages:** Individual worship service pages

---

## ⚠️ Important Notes

1. **All changes are saved to GitHub** - Your content is automatically backed up
2. **Images go to `Image files` folder** - Keep file names simple (use hyphens, not spaces)
3. **Changes take 1-2 minutes** - GitHub Pages needs time to rebuild
4. **Korean text works perfectly** - Decap CMS supports Korean characters
5. **Multiple users can edit** - Anyone with GitHub access can use the CMS

---

## 🔧 Troubleshooting

**Can't login?**
- Make sure GitHub OAuth app is created correctly
- Check that callback URL matches: `https://e-tentmakers.github.io/Sample-Website/`

**Changes not showing?**
- Wait 2-3 minutes for GitHub Pages to rebuild
- Clear browser cache (Ctrl+F5)
- Check GitHub Actions for deployment status

**CMS page blank?**
- Verify `admin/index.html` exists
- Check browser console (F12) for errors
- Make sure you pushed all files to GitHub

---

## 📚 More Help

- Full setup guide: See `DECAP_CMS_SETUP.md`
- Decap CMS docs: https://decapcms.org/docs/
- GitHub OAuth: https://docs.github.com/en/developers/apps/building-oauth-apps
