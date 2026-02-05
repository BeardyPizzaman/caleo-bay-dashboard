# Adding SSH Key to GitHub

## Your SSH Public Key:

```
ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIOnwLPZEUssJhpYZxMLP1aVBGmnI9O+Rdp3g7vPll29d beardypizzaman@github
```

## Steps to Add to GitHub:

1. **Go to**: https://github.com/settings/keys

2. **Click**: "New SSH key" (green button)

3. **Fill in**:
   - **Title**: `Mac - Caleo Dashboard`
   - **Key type**: Leave as "Authentication Key"
   - **Key**: Paste the entire key above (it's already in your clipboard - just press Cmd+V)

4. **Important**: Make sure you copy the ENTIRE line including:
   - `ssh-ed25519` (the beginning)
   - The long string of characters
   - `beardypizzaman@github` (the end)

5. **Click**: "Add SSH key"

6. **Confirm** with your GitHub password if prompted

---

## Troubleshooting:

If GitHub says "Key is invalid", make sure:
- ✅ You copied the entire line (including `ssh-ed25519` at the start)
- ✅ There are NO extra spaces or line breaks
- ✅ You're pasting into the "Key" field (not Title)

The key should be ONE SINGLE LINE with spaces only between the three parts.

