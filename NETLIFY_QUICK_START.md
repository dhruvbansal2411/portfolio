# Netlify Deployment - Quick Start

## 🚀 Deploy in 3 Steps

### Step 1: Go to Netlify
Visit: https://app.netlify.com/start

### Step 2: Import Repository
- Click "Import from Git"
- Select GitHub
- Choose: `dhruvbansal2411/portfolio`
- Authorize access

### Step 3: Configure & Deploy
```
Base directory: portfolio-fronted
Build command: npm run build
Publish directory: portfolio-fronted/dist/portfolio-frontend
```
Click "Deploy site" → Done! ✅

---

## ⚙️ Netlify Settings (Copy-Paste)

```
Base directory: portfolio-fronted
Build command: npm run build
Publish directory: portfolio-fronted/dist/portfolio-frontend
Node.js Version: 18.x
```

---

## 📋 Pre-Deployment Checklist

- [x] ✅ `_redirects` file created
- [x] ✅ `angular.json` updated
- [x] ✅ `netlify.toml` created
- [x] ✅ Local build tested
- [x] ✅ File verified in build output

---

## 🔍 Post-Deployment Testing

Visit your deployed site and test:
- [ ] Homepage loads
- [ ] All navigation works
- [ ] Page refresh works (no 404)
- [ ] Direct URL access works
- [ ] Contact form sends email
- [ ] Resume downloads
- [ ] Images load

---

## 🆘 Quick Troubleshooting

### Routes Show 404?
→ Check `_redirects` file exists in published directory

### Build Fails?
→ Check Base directory is `portfolio-fronted`

### Blank Page?
→ Check browser console for errors

### Assets Not Loading?
→ Check Network tab (should be 200 status)

---

## 📚 Full Documentation

See `NETLIFY_DEPLOYMENT_GUIDE.md` for complete details.

---

**Status:** ✅ Ready to Deploy  
**Estimated Deploy Time:** 2-3 minutes  
**Routing Issue:** ✅ Fixed
