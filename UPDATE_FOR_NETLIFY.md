# Update Config for Netlify Identity

After enabling Netlify Identity and Git Gateway, you need to update the CMS config.

## What Changed

The `admin/config.yml` has been updated to use `git-gateway` backend instead of `github` backend.

## Next Steps

1. **Push the updated config to GitHub:**
   ```bash
   cd "C:\Sample Website"
   git add admin/config.yml
   git commit -m "Switch to Netlify git-gateway backend"
   git push origin main
   ```

2. **Wait for Netlify to deploy** (usually automatic, takes 1-2 minutes)

3. **Access your CMS:**
   - Go to: `https://your-site-name.netlify.app/admin/`
   - Replace `your-site-name` with your actual Netlify site name
   - You can find it in your Netlify dashboard

4. **Login:**
   - Click "Login" or "Log in with Netlify Identity"
   - Use your Netlify account email
   - Or create a new account if needed

## Finding Your Netlify Site URL

1. Go to Netlify dashboard: https://app.netlify.com
2. Click on your site
3. Look at the top - you'll see your site URL like: `https://amazing-site-12345.netlify.app`
4. Add `/admin/` to the end: `https://amazing-site-12345.netlify.app/admin/`

## Benefits of Netlify Identity

- ✅ Much easier setup than GitHub OAuth
- ✅ No callback URL issues
- ✅ Works perfectly with Decap CMS
- ✅ Can invite team members easily
- ✅ Email-based authentication

## Troubleshooting

**Can't find Identity settings?**
- Make sure you're in "Site settings" (not account settings)
- Look for "Identity" in the left sidebar
- If you don't see it, refresh the page

**Git Gateway not showing?**
- Make sure Identity is enabled first
- Scroll down on the Identity page
- Look for "Services" or "Git Gateway" section

**Still having issues?**
- Check Netlify status: https://www.netlify.com/status
- Netlify support: https://www.netlify.com/support
