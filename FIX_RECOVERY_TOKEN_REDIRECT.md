# Fix Recovery Token Redirect

## The Problem

When you click the password reset link from email, it goes to:
```
https://samplewebsite-cms.netlify.app/#recovery_token=...
```

But it should go to:
```
https://samplewebsite-cms.netlify.app/admin/#recovery_token=...
```

## Solution Applied

I've added a redirect script to your homepage (`index.html`) that automatically redirects recovery tokens to the admin page.

## What to Do Now

### Option 1: Use Current Link (After Deployment)

1. **Wait 1-2 minutes** for Netlify to deploy the update
2. **Go to:** `https://samplewebsite-cms.netlify.app/#recovery_token=ihP9PHQJAsqCuE9xva5o2A`
3. **The page will automatically redirect** to `/admin/` with the token
4. **You should see the password reset form**

### Option 2: Manually Add /admin/ (Works Now)

Right now, you can manually fix the URL:

1. **Take your current URL:**
   ```
   https://samplewebsite-cms.netlify.app/#recovery_token=ihP9PHQJAsqCuE9xva5o2A
   ```

2. **Add `/admin/` before the `#`:**
   ```
   https://samplewebsite-cms.netlify.app/admin/#recovery_token=ihP9PHQJAsqCuE9xva5o2A
   ```

3. **Press Enter** - you should see the password reset form

### Option 3: Request New Reset Link (After Deployment)

After the update is deployed (1-2 minutes):

1. **Go to:** `https://samplewebsite-cms.netlify.app/admin/`
2. **Click "Forgot password?"** or password reset link
3. **Enter your email:** `mielle.yoo@gmail.com`
4. **Check email** for new reset link
5. **Click the link** - it should now automatically redirect to `/admin/`

## Quick Fix (Right Now)

**Just add `/admin/` to your current URL:**

Change this:
```
https://samplewebsite-cms.netlify.app/#recovery_token=ihP9PHQJAsqCuE9xva5o2A
```

To this:
```
https://samplewebsite-cms.netlify.app/admin/#recovery_token=ihP9PHQJAsqCuE9xva5o2A
```

Then press Enter and you should see the password reset form!

## After Password Reset

Once you successfully reset your password:

1. **You'll be redirected** to the login page
2. **Log in with:**
   - Email: `mielle.yoo@gmail.com`
   - Password: Your new password
3. **You'll see the CMS collections!**

## Summary

- ✅ Homepage updated to redirect recovery tokens
- ⏳ Wait 1-2 minutes for deployment OR
- ✅ **Right now:** Manually add `/admin/` to the URL
- ⏳ Complete password reset
- ⏳ Log in to CMS
