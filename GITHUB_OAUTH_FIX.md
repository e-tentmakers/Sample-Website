# Fix GitHub OAuth 404 Error

## The Problem

When clicking "Login with GitHub" in Decap CMS, you get a 404 error. This happens because Decap CMS on GitHub Pages has issues with OAuth callbacks.

## Solution: Update GitHub OAuth App Callback URL

The callback URL in your GitHub OAuth app must match exactly what Decap CMS expects.

### Step 1: Find Your OAuth App

1. Go to: https://github.com/settings/developers
2. Click "OAuth Apps"
3. Find your "Sample Website CMS" app (or whatever you named it)
4. Click on it to edit

### Step 2: Update Callback URL

**Current callback URL might be:**
```
https://e-tentmakers.github.io/Sample-Website/
```

**Change it to:**
```
https://e-tentmakers.github.io/Sample-Website/admin/
```

**OR try:**
```
https://e-tentmakers.github.io/Sample-Website/admin/index.html
```

### Step 3: Save and Test

1. Click "Update application"
2. Go back to: https://e-tentmakers.github.io/Sample-Website/admin/
3. Try logging in again

---

## Alternative Solution: Use Netlify (Easier)

If GitHub OAuth continues to cause issues, using Netlify is much easier:

### Option A: Host on Netlify (Recommended)

1. Create free account: https://www.netlify.com
2. Click "Add new site" → "Import an existing project"
3. Connect your GitHub repository
4. Deploy (takes 1 minute)
5. Enable Netlify Identity:
   - Go to Site Settings → Identity
   - Click "Enable Identity"
   - Scroll down → Enable "Git Gateway"
6. Access CMS at: `https://your-site.netlify.app/admin/`

### Option B: Use Netlify Identity with GitHub Pages

You can use Netlify Identity even if hosting on GitHub Pages:

1. Create free Netlify account
2. Add your GitHub repo to Netlify (just for Identity, not hosting)
3. Enable Netlify Identity
4. Enable Git Gateway
5. Update `admin/config.yml` to use `git-gateway` backend
6. Keep hosting on GitHub Pages

---

## Why This Happens

GitHub Pages is a static hosting service and doesn't handle server-side OAuth callbacks well. Decap CMS needs a way to handle the OAuth callback, which is why:

- **GitHub backend** on GitHub Pages = Complex OAuth setup
- **Netlify git-gateway** = Much simpler, handles OAuth for you

---

## Quick Fix Checklist

- [ ] OAuth App callback URL is: `https://e-tentmakers.github.io/Sample-Website/admin/`
- [ ] OAuth App homepage URL is: `https://e-tentmakers.github.io/Sample-Website/`
- [ ] Cleared browser cache (Ctrl+F5)
- [ ] Tried incognito/private browsing mode
- [ ] Waited 1-2 minutes after updating OAuth app

---

## Still Not Working?

Consider switching to Netlify git-gateway - it's the recommended approach for Decap CMS and much easier to set up!
