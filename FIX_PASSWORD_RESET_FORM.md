# Fix Password Reset Form Not Showing

## The Problem

You're on the admin page with a recovery token, but you only see the regular login form, not a password reset form.

## Solution: Updated Admin Page

I've updated `admin/index.html` to include the Netlify Identity widget, which will properly handle password recovery tokens.

## Next Steps

### Step 1: Push the Updated File

The admin page has been updated. You need to push it to GitHub so Netlify can deploy it:

```bash
cd "C:\Sample Website"
git add admin/index.html
git commit -m "Add Netlify Identity widget for password recovery"
git push origin main
```

### Step 2: Wait for Netlify to Deploy

1. **Wait 1-2 minutes** for Netlify to automatically deploy the changes
2. **Check Netlify dashboard** → Deploys tab to see when it's done

### Step 3: Request a New Password Reset

After the update is deployed:

1. **Go to:** `https://samplewebsite-cms.netlify.app/admin/`
2. **Click "Forgot password?"** or look for a password reset link
3. **Enter your email:** `mielle.yoo@gmail.com`
4. **Check your email** for a new reset link
5. **Click the new reset link** - this time it should show the password reset form

## Alternative: Manual Password Reset via Netlify Dashboard

If you want to reset the password right now without waiting:

### Option 1: Reset via Netlify Dashboard

1. **Go to:** https://app.netlify.com/projects/samplewebsite-cms
2. **Click "Site settings"** (top nav)
3. **Click "Identity"** (left sidebar)
4. **Scroll to "Users" section**
5. **Find `mielle.yoo@gmail.com`** in the list
6. **Click on it** (or the three dots menu)
7. **Click "Send password reset email"**
8. **Check your email** for the new reset link
9. **After the admin page update is deployed**, click the link and you should see the reset form

### Option 2: Create New User (If Needed)

If you don't see your email in the Users list:

1. **Go to:** Site settings → Identity
2. **Scroll to "Invite users"**
3. **Enter:** `mielle.yoo@gmail.com`
4. **Click "Invite"**
5. **Check email** for invitation
6. **Click invitation link** to set password

## What Changed

The updated `admin/index.html` now includes:
- Netlify Identity widget script
- Code to detect recovery tokens in the URL
- Automatic opening of password recovery modal when token is present

## After Password Reset Works

Once you successfully reset your password:

1. **Log in to CMS** with:
   - Email: `mielle.yoo@gmail.com`
   - Password: Your new password

2. **You'll see the collections:**
   - Homepage
   - Worship Schedule
   - Notices
   - Footer
   - etc.

## Quick Summary

1. ✅ Admin page updated (needs to be pushed)
2. ⏳ Push to GitHub: `git add admin/index.html && git commit -m "Fix password recovery" && git push origin main`
3. ⏳ Wait 1-2 minutes for Netlify to deploy
4. ⏳ Request new password reset from admin page
5. ⏳ Click reset link - should now show password reset form
6. ⏳ Set new password and log in!
