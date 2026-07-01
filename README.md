# SHYVANSH - Premium Portfolio Website

A stunning, premium personal portfolio website for Shyvansh, featuring glassmorphism design, smooth animations, and a cinematic user experience.

## 🎨 Features

- **Glassmorphism UI** - Apple-inspired, modern design with blur effects and transparency
- **Dark/Light Mode Toggle** - Smooth theme switching with persistent storage
- **Responsive Design** - Optimized for mobile, tablet, and desktop
- **Smooth Animations** - Fade-up, floating, and glow effects throughout
- **Multi-Page Layout** - Intro, Home, About, and Portfolio pages
- **Lightbox Gallery** - Click thumbnails to view in fullscreen
- **Video Background** - Cinematic intro screen with video
- **SEO Optimized** - Meta tags and semantic HTML
- **Performance Optimized** - Lazy loading, smooth scrolling, and efficient animations

## 📁 Project Structure

```
shyvansh-portfolio/
├── index.html          # Intro/Landing page
├── home.html           # Home with navigation cards
├── about.html          # About Shyvansh
├── portfolio.html      # Portfolio with masonry grid
├── style.css           # All styling (glassmorphism, animations, responsive)
├── script.js           # JavaScript (navigation, theme toggle, image loading)
├── README.md           # This file
└── assets/
    ├── video/
    │   └── intro.mp4           # Full-screen intro video
    ├── images/
    │   ├── Untitled156_20260609072400.png
    │   ├── Untitled157_20260609072544.png
    │   ├── Untitled158_20260609072831.png
    │   ├── Untitled158_20260609073126.png
    │   ├── Untitled159_20260609073317.png
    │   ├── Untitled160_20260609073519.png
    │   ├── Untitled161_20260609074039.png
    │   ├── Untitled162_20260609074220.png
    │   └── Untitled163_20260610180749.jpg
    └── logo/
        └── avatar.jpg          # Profile avatar
```

## 🚀 Setup Instructions

### Asset Placement Guide

**Important**: Place your files in the following structure:

**Video Setup:**
- Create folder: `assets/video/`
- Place intro video at: `assets/video/intro.mp4`
- File: "From Klickpin.com- Tender love notes..." (or your custom intro video)

**Portfolio Images:**
Create folder: `assets/images/`
Add all thumbnail images:
- Untitled156_20260609072400.png
- Untitled157_20260609072544.png
- Untitled158_20260609072831.png
- Untitled158_20260609073126.png
- Untitled159_20260609073317.png
- Untitled160_20260609073519.png
- Untitled161_20260609074039.png
- Untitled162_20260609074220.png
- Untitled163_20260610180749.jpg

**Logo/Avatar:**
- Create folder: `assets/logo/`
- Place avatar at: `assets/logo/avatar.jpg`

### Server Setup

#### Using Python 3:
```bash
python -m http.server 8000
```

#### Using Node.js:
```bash
npx http-server
```

Open `http://localhost:8000` in your browser.

## 🎨 Customization

### Contact Information

Update in `script.js` - `openLink()` function:
- **Instagram**: https://instagram.com/5hyvansh
- **Discord**: https://discord.gg/DgPevy7wej
- **Email**: shyvanshworksgmail.com

### Theme Colors

Edit CSS variables in `style.css`:
```css
:root {
    --bg-primary: #0a0a0a;
    --accent: #d4a574;
    /* ... more colors ... */
}
```

## 📱 Responsive

- Mobile: < 480px
- Tablet: 480px - 768px
- Desktop: > 768px

## ⚡ Features Included

✅ Glassmorphism Design
✅ Dark/Light Mode Toggle (Alt+T)
✅ Smooth Animations
✅ Lazy Image Loading
✅ Lightbox Gallery
✅ SEO Optimized
✅ Mobile Friendly
✅ Fast Performance
✅ No Frameworks (Pure HTML/CSS/JS)

## 🌐 Deployment

**GitHub Pages**: Push to GitHub, enable Pages in settings
**Vercel**: Connect repository, auto-deploy
**Netlify**: Drag & drop folder
**Traditional Hosting**: Upload via FTP

## 💡 Keyboard Shortcuts

- `Alt+T` (or `Cmd+T`): Toggle theme
- `Escape`: Go back to previous page
- `Escape`: Close lightbox

## 🐛 Troubleshooting

**Images not loading?**
- Check files are in `assets/images/`
- Verify file names match exactly
- Clear browser cache

**Video not playing?**
- Ensure file is `assets/video/intro.mp4`
- Check format is MP4

**Theme not saving?**
- Check localStorage is enabled
- Try incognito mode

## 📊 Browser Support

Chrome ✅ | Firefox ✅ | Safari ✅ | Edge ✅ | Mobile ✅

---

**Ready to deploy? Upload all files to your server and customize!**

*Premium. Cinematic. Modern.*
