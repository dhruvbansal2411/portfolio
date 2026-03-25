# Netlify Deployment Guide - Angular Portfolio

## Date: March 25, 2026

---

## ✅ Netlify Routing Issue Fixed

### Problem
- Website showed "Page not found" after deployment
- Angular routes returned 404 errors
- Only homepage worked, internal routes failed

### Solution
- ✅ Added `_redirects` file for SPA routing
- ✅ Updated `angular.json` to include `_redirects` in build
- ✅ Added `netlify.toml` for deployment configuration

---

## Files Created/Modified

### 1. ✅ src/_redirects (NEW)
**Location:** `portfolio-fronted/src/_redirects`

**Content:**
```
/* /index.html 200
```

**Purpose:**
- Redirects all routes to index.html
- Allows Angular router to handle navigation
- Returns 200 status (not 404)

### 2. ✅ angular.json (MODIFIED)
**Change:** Added `_redirects` to assets array

**Before:**
```json
"assets": [
  "src/favicon.ico",
  "src/assets"
]
```

**After:**
```json
"assets": [
  "src/favicon.ico",
  "src/assets",
  "src/_redirects"
]
```

**Purpose:**
- Ensures `_redirects` is copied to build output
- File will be in `dist/portfolio-frontend/_redirects`

### 3. ✅ netlify.toml (NEW)
**Location:** `portfolio-fronted/netlify.toml`

**Content:**
```toml
[build]
  publish = "dist/portfolio-frontend"
  command = "npm run build"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

**Purpose:**
- Configures Netlify build settings
- Specifies correct publish directory
- Provides backup redirect configuration

---

## How It Works

### Angular SPA Routing
Angular is a Single Page Application (SPA):
1. All routes are handled client-side by Angular Router
2. Server only needs to serve `index.html` for all routes
3. Angular Router then loads the correct component

### Without _redirects:
```
User visits: https://yoursite.netlify.app/about
Netlify looks for: /about/index.html
Result: 404 Not Found ❌
```

### With _redirects:
```
User visits: https://yoursite.netlify.app/about
Netlify redirects to: /index.html (200 status)
Angular Router loads: AboutComponent ✅
```

---

## Deployment Methods

### Method 1: Deploy via Netlify Dashboard (RECOMMENDED)

**Steps:**
1. Go to https://app.netlify.com/
2. Click "Add new site" → "Import an existing project"
3. Connect to GitHub
4. Select repository: `dhruvbansal2411/portfolio`
5. Configure build settings:
   ```
   Base directory: portfolio-fronted
   Build command: npm run build
   Publish directory: portfolio-fronted/dist/portfolio-frontend
   ```
6. Click "Deploy site"

**Netlify Settings:**
```
Base directory: portfolio-fronted
Build command: npm run build
Publish directory: portfolio-fronted/dist/portfolio-frontend
Node version: 18.x or 20.x
```

### Method 2: Deploy via Netlify CLI

**Install Netlify CLI:**
```bash
npm install -g netlify-cli
```

**Deploy:**
```bash
cd portfolio/portfolio-fronted
npm run build
netlify deploy --prod --dir=dist/portfolio-frontend
```

### Method 3: Drag & Drop (Manual)

**Steps:**
1. Build locally: `npm run build`
2. Go to https://app.netlify.com/drop
3. Drag `dist/portfolio-frontend` folder
4. Site deployed instantly

---

## Build Verification

### ✅ Local Build Test
```bash
cd portfolio/portfolio-fronted
npm install
npm run build
```

**Expected Output:**
```
✓ Browser application bundle generation complete
✓ Copying assets complete
✓ Index html generation complete

Output: dist/portfolio-frontend/
```

### ✅ Verify _redirects in Build
```bash
# Check if file exists
ls dist/portfolio-frontend/_redirects

# Check content
cat dist/portfolio-frontend/_redirects
# Should show: /* /index.html 200
```

### ✅ Build Output Structure
```
dist/portfolio-frontend/
├── _redirects              # ✅ Netlify routing file
├── index.html              # Main HTML file
├── main.[hash].js          # Application code
├── polyfills.[hash].js     # Browser polyfills
├── runtime.[hash].js       # Angular runtime
├── styles.[hash].css       # Compiled styles
├── favicon.ico             # Favicon
└── assets/                 # Static assets
    ├── dhruv_new_res.pdf
    └── [project images]
```

---

## Configuration Files

### _redirects Syntax

**Basic Redirect:**
```
/* /index.html 200
```

**Explanation:**
- `/*` - Match all routes
- `/index.html` - Redirect destination
- `200` - HTTP status code (success, not redirect)

**Alternative Formats:**
```
# With force flag
/*    /index.html   200!

# Multiple rules (order matters)
/api/*  https://api.example.com/:splat  200
/*      /index.html                     200
```

### netlify.toml Syntax

**Basic Configuration:**
```toml
[build]
  publish = "dist/portfolio-frontend"
  command = "npm run build"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

**Advanced Configuration:**
```toml
[build]
  publish = "dist/portfolio-frontend"
  command = "npm run build"
  
[build.environment]
  NODE_VERSION = "18"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
  force = false

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
```

---

## Common Issues & Solutions

### Issue 1: 404 on Page Refresh
**Problem:** Refreshing any route shows 404
**Solution:** ✅ FIXED - `_redirects` file handles this

### Issue 2: _redirects Not Working
**Problem:** File exists but routes still 404
**Causes:**
- File not in build output
- Wrong file location
- Incorrect syntax

**Solutions:**
1. Verify file is in `dist/portfolio-frontend/_redirects`
2. Check `angular.json` includes `src/_redirects` in assets
3. Rebuild: `npm run build`
4. Verify content: `/* /index.html 200`

### Issue 3: Wrong Publish Directory
**Problem:** Netlify can't find files
**Solution:** Set publish directory to `portfolio-fronted/dist/portfolio-frontend`

### Issue 4: Build Fails on Netlify
**Problem:** Build command fails
**Solutions:**
1. Check Node version (18.x or 20.x)
2. Verify build command: `npm run build`
3. Check base directory: `portfolio-fronted`
4. Review build logs for errors

### Issue 5: Assets Not Loading
**Problem:** Images, fonts, or PDF not loading
**Solution:** ✅ Already configured - assets are in build output

---

## Environment Variables (If Needed)

**For Netlify Dashboard:**
```
NODE_VERSION=18
NPM_VERSION=latest
```

**Not Required for This Project:**
- No API keys needed (EmailJS uses client-side keys)
- No backend environment variables
- All configuration is in code

---

## EmailJS Configuration

### ✅ No Changes Required

**EmailJS works client-side:**
- Service ID: service_36njm0z
- Template ID: template_2xehajj
- Public Key: z6zz4OWWnNAiL9c2b

**Configuration Location:**
```typescript
// portfolio-fronted/src/app/features/contact/contact.component.ts
private readonly EMAILJS_SERVICE_ID = 'service_36njm0z';
private readonly EMAILJS_TEMPLATE_ID = 'template_2xehajj';
private readonly EMAILJS_PUBLIC_KEY = 'z6zz4OWWnNAiL9c2b';
```

**No environment variables needed** - EmailJS is initialized in the component.

---

## Deployment Checklist

### Before Deployment
- [x] ✅ `_redirects` file created
- [x] ✅ `angular.json` updated to include `_redirects`
- [x] ✅ `netlify.toml` created
- [x] ✅ Local build tested
- [x] ✅ `_redirects` verified in build output

### During Deployment
- [ ] Set Base directory to `portfolio-fronted`
- [ ] Set Build command to `npm run build`
- [ ] Set Publish directory to `portfolio-fronted/dist/portfolio-frontend`
- [ ] Click Deploy

### After Deployment
- [ ] Test homepage loads
- [ ] Test all navigation routes
- [ ] Test page refresh (no 404)
- [ ] Test contact form (EmailJS)
- [ ] Test resume download
- [ ] Test project images load
- [ ] Test responsive design
- [ ] Test theme toggle

---

## Expected Build Output on Netlify

```
Installing dependencies...
> npm install

Building application...
> npm run build

✓ Browser application bundle generation complete
✓ Copying assets complete
✓ Index html generation complete

Build completed successfully!
Output: dist/portfolio-frontend

Deploying to Netlify...
✓ Deployment complete

Your site is live at: https://your-site.netlify.app
```

---

## Troubleshooting

### If Build Fails

**Check:**
1. Base directory is set to `portfolio-fronted`
2. Node version is 18.x or higher
3. Build command is `npm run build`
4. Publish directory is `portfolio-fronted/dist/portfolio-frontend`

**Netlify Build Logs:**
- Check for "command not found" errors
- Check for missing dependencies
- Check for TypeScript errors
- Check for memory issues

### If Deployment Succeeds but Routes Don't Work

**Check:**
1. `_redirects` file exists in published directory
2. File content is correct: `/* /index.html 200`
3. No typos in file name (must be `_redirects`, not `_redirect`)
4. File has no extension

**Verify on Netlify:**
1. Go to Netlify dashboard
2. Click on your site
3. Go to "Deploys" → Latest deploy
4. Click "Deploy log"
5. Check if `_redirects` was copied

### If Site is Blank

**Check:**
1. Browser console for errors
2. Network tab for 404s
3. Verify index.html is in publish directory
4. Check base href in index.html

---

## Performance Optimization (Optional)

### Current Build Size
```
Initial total: 968.46 kB (215.15 kB gzipped)
- main.js: 931.60 kB
- polyfills.js: 34.01 kB
- styles.css: 1.96 kB
- runtime.js: 914 bytes
```

### Netlify Performance Features
- ✅ Automatic CDN distribution
- ✅ Automatic HTTPS
- ✅ Automatic compression (gzip/brotli)
- ✅ Asset optimization
- ✅ Instant cache invalidation

---

## What Was NOT Changed

### ✅ Application Logic Preserved
- No UI changes
- No component modifications
- No business logic changes
- No functionality alterations

### ✅ EmailJS Integration Intact
- Contact form works as before
- No configuration changes needed
- Client-side implementation unchanged

### ✅ Assets Preserved
- All images included
- Resume PDF included
- Favicon included
- All static files intact

---

## Comparison: Netlify vs Vercel

| Feature | Netlify | Vercel |
|---------|---------|--------|
| Routing Config | `_redirects` file | `vercel.json` |
| Build Config | `netlify.toml` | `vercel.json` |
| Deploy Method | Dashboard/CLI/Drag-drop | Dashboard/CLI |
| Free Tier | 100 GB bandwidth | 100 GB bandwidth |
| Build Minutes | 300 min/month | Unlimited |
| Custom Domain | ✅ Yes | ✅ Yes |
| HTTPS | ✅ Auto | ✅ Auto |

**Both platforms work perfectly for this Angular portfolio!**

---

## Summary

### ✅ Fixed Issues
1. ✅ Added `_redirects` file for SPA routing
2. ✅ Updated `angular.json` to include file in build
3. ✅ Added `netlify.toml` for deployment config
4. ✅ Verified file in build output
5. ✅ Tested build locally

### ✅ Deployment Ready
- Configuration files created
- Build tested locally
- `_redirects` verified in output
- Routes configured correctly

### ✅ No Breaking Changes
- Application logic unchanged
- EmailJS functionality preserved
- All features working as before

---

## Next Steps

1. **Commit Changes:**
```bash
git add .
git commit -m "Fix Netlify deployment routing for Angular portfolio"
git push origin main
```

2. **Deploy to Netlify:**
   - Go to https://app.netlify.com/
   - Import GitHub repository
   - Set Base Directory: `portfolio-fronted`
   - Deploy

3. **Verify Deployment:**
   - Test all routes
   - Test contact form
   - Test asset loading
   - Test page refresh

---

**Configuration Date:** March 25, 2026  
**Status:** ✅ READY FOR DEPLOYMENT  
**Build Status:** ✅ TESTED LOCALLY  
**Breaking Changes:** ❌ NONE  
**Routing Issue:** ✅ FIXED
