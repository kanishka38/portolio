# Portfolio Setup Guide

## Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Open in Browser**
   Visit [http://localhost:3000](http://localhost:3000)

## Customization

### Update Email
Edit `components/Hero.tsx` and `components/Contact.tsx` to replace `your.email@example.com` with your actual email.

### Add More Projects
Edit `components/Projects.tsx` to add more projects to the `projects` array.

### Modify Colors/Styling
Edit `app/globals.css` and component files to customize colors and styling.

### Update Resume PDF
Replace `public/kanishka_BE-1.pdf` with your updated resume PDF.

## Build for Production

```bash
npm run build
npm start
```

## Deploy

This portfolio can be easily deployed on:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- Any platform that supports Next.js

## Features

✅ Modern, responsive design
✅ Smooth animations with Framer Motion
✅ Dark mode support
✅ LinkedIn integration
✅ Resume download
✅ Mobile-friendly navigation
✅ SEO optimized
