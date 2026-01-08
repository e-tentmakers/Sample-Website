# Netlify Identity Setup Guide

## Step-by-Step: Enable Netlify Identity

### Step 1: Access Your Site Dashboard

1. **Log in to Netlify:** https://app.netlify.com
2. **Find your site** in the dashboard (it should show your repository name)
3. **Click on your site name** to open the site dashboard

### Step 2: Navigate to Site Settings

Once you're in your site dashboard:

1. **Look at the top navigation bar** - you'll see tabs like:
   - Overview
   - Deploys
   - **Site settings** ← Click this!
   - Domain settings
   - Build & deploy
   - Functions
   - etc.

2. **Click "Site settings"** (or it might be in a menu if on mobile)

### Step 3: Enable Identity

In the Site settings page:

1. **Look at the left sidebar menu** - you'll see sections like:
   - General
   - Build & deploy
   - Domain management
   - **Identity** ← Click this!
   - Environment variables
   - etc.

2. **Click "Identity"** in the left sidebar

3. **Enable Identity:**
   - You'll see a section at the top
   - Click the **"Enable Identity"** button
   - Wait a few seconds for it to activate

### Step 4: Enable Git Gateway

After Identity is enabled:

1. **Scroll down** on the Identity page
2. **Find "Services" section** (or "Git Gateway" section)
3. **Click "Enable Git Gateway"** button
4. This allows Decap CMS to commit changes to your GitHub repository

### Step 5: Update Decap CMS Config

Now update your `admin/config.yml` to use Netlify Identity:

1. Open `admin/config.yml`
2. Change the backend from `github` to `git-gateway`
3. Push the changes to GitHub

---

## Visual Guide

```
Netlify Dashboard
  └─ Your Site Name (click)
      └─ Site settings (top nav bar)
          └─ Identity (left sidebar)
              ├─ Enable Identity (button)
              └─ Services section
                  └─ Enable Git Gateway (button)
```

---

## Alternative Navigation Paths

If you don't see "Site settings" in the top nav:

1. **Click the three dots (⋯) menu** next to your site name
2. Select **"Site settings"** from the dropdown

Or:

1. **Click your site name** in the dashboard
2. Look for **"Settings"** in the left sidebar
3. Click it, then click **"Identity"**

---

## After Enabling

Once both Identity and Git Gateway are enabled:

1. Update `admin/config.yml` (see next steps)
2. Push changes to GitHub
3. Access CMS at: `https://your-site-name.netlify.app/admin/`
4. Click "Login" and use your Netlify account or email

---

## Need Help?

- Netlify Identity Docs: https://docs.netlify.com/visitor-access/identity/
- Netlify Support: https://www.netlify.com/support/
