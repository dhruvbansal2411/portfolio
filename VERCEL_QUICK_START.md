# Vercel Deployment - Quick Start

## 🚀 Deploy in 3 Steps

### Step 1: Go to Vercel
Visit: https://vercel.com/new

### Step 2: Import Repository
- Click "Import Git Repository"
- Select: `dhruvbansal2411/dhruv-portfolio`
- Authorize GitHub access

### Step 3: Configure & Deploy
```
Root Directory: portfolio-fronted
Framework: Angular (auto-detected)
Build Command: npm run build (auto-detected)
Output Directory: dist/portfolio-frontend (auto-detected)
```
Click "Deploy" → Done! ✅

---

## ⚙️ Vercel Settings (Copy-Paste)

```
Root Directory: portfolio-fronted
Framework Preset: Angular
Build Command: npm run build
Output Directory: dist/portfolio-frontend
Install Command: npm install
Node.js Version: 18.x
```

---

## 📋 Pre-Deployment Checklist

- [x] ✅ Build command updated (uses npx)
- [x] ✅ vercel.json configured
- [x] ✅ Output directory correct
- [x] ✅ Local build tested
- [x] ✅ All assets included
- [x] ✅ EmailJS working

---

## 🔍 Post-Deployment Testing

Visit your deployed site and test:
- [ ] Homepage loads
- [ ] Navigation works
- [ ] Contact form sends email
- [ ] Resume downloads
- [ ] Images load
- [ ] Page refresh works (no 404)

---

## 🆘 Quick Troubleshooting

### Build Fails?
→ Check Root Directory is `portfolio-fronted`

### Blank Page?
→ Check browser console for errors

### 404 on Refresh?
→ vercel.json should have catch-all route (already configured ✅)

### Assets Not Loading?
→ Check Network tab, should be 200 status (already configured ✅)

---

## 📚 Full Documentation

See `VERCEL_DEPLOYMENT_GUIDE.md` for complete details.

---

**Status:** ✅ Ready to Deploy  
**Estimated Deploy Time:** 2-3 minutes  
**Configuration:** Complete
