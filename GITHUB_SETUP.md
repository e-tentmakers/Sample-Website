# GitHub Setup Instructions

## Step 1: Create a Personal Access Token (PAT)

GitHub no longer accepts passwords for HTTPS authentication. You need to create a Personal Access Token:

1. Go to GitHub.com and sign in
2. Click your profile picture → Settings
3. Scroll down to "Developer settings" (left sidebar)
4. Click "Personal access tokens" → "Tokens (classic)"
5. Click "Generate new token" → "Generate new token (classic)"
6. Give it a name (e.g., "Sample Website")
7. Select scopes: Check "repo" (full control of private repositories)
8. Click "Generate token"
9. **COPY THE TOKEN** - you won't see it again!

## Step 2: Push to GitHub

Run these commands in PowerShell from the "C:\Sample Website" directory:

```powershell
cd "C:\Sample Website"
git push -u origin main
```

When prompted:
- Username: `mielle.yoo@gmail.com`
- Password: **Paste your Personal Access Token** (not your GitHub password)

## Step 3: Enable GitHub Pages

1. Go to https://github.com/e-tentmakers/Sample-Website
2. Click "Settings" tab
3. Scroll to "Pages" in the left sidebar
4. Under "Source", select "Deploy from a branch"
5. Select "main" branch and "/ (root)" folder
6. Click "Save"
7. Your website will be available at: https://e-tentmakers.github.io/Sample-Website/

## Alternative: Use GitHub Desktop

If you prefer a GUI:
1. Download GitHub Desktop
2. Sign in with your GitHub account
3. Add the repository: File → Add Local Repository → Select "C:\Sample Website"
4. Click "Publish repository"
5. Enable GitHub Pages in the repository settings on GitHub.com

