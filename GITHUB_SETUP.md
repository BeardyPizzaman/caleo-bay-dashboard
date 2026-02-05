# GitHub Setup Instructions

Follow these simple steps to host your dashboard on GitHub:

## Step 1: Create GitHub Repository

1. Go to https://github.com and log in to your account
2. Click the green "New" button (or the "+" icon → "New repository")
3. Fill in:
   - **Repository name**: ` `
   - **Description**: "Investment Analysis Dashboard for Caleo Bay"
   - **Public or Private**: Choose based on your preference
   - ⚠️ **IMPORTANT**: Do NOT check "Add a README file" (we already have one)
4. Click "Create repository"

## Step 2: Connect and Push Your Code

After creating the repository, GitHub will show you a page with instructions.
Copy YOUR repository URL (it will look like: https://github.com/YOUR_USERNAME/caleo-bay-dashboard.git)

Then, open Terminal and run these commands:

```bash
cd /Users/chrisbeard/Claude/caleo-bay-dashboard

# Add your GitHub repository (replace YOUR_USERNAME with your actual GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/caleo-bay-dashboard.git

# Push your code to GitHub
git push -u origin main
```

When prompted, enter your GitHub username and password (or personal access token).

## Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click the "Settings" tab
3. In the left sidebar, click "Pages"
4. Under "Source":
   - Branch: Select "main"
   - Folder: Select "/ (root)"
5. Click "Save"
6. Wait 2-3 minutes

Your dashboard will be live at:
**https://YOUR_USERNAME.github.io/caleo-bay-dashboard/**

## Alternative: Using GitHub Desktop (GUI)

If you prefer a graphical interface:

1. Download GitHub Desktop from: https://desktop.github.com
2. Install and sign in
3. File → Add Local Repository → Browse to `/Users/chrisbeard/Claude/caleo-bay-dashboard`
4. Click "Publish repository" button
5. Follow Step 3 above to enable GitHub Pages

---

## Need Help?

If you need a GitHub Personal Access Token (instead of password):
1. Go to GitHub.com → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Click "Generate new token (classic)"
3. Give it a name, check "repo" scope
4. Copy the token and use it as your password

