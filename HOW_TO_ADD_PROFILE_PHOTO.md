# How to Add Your Profile Photo

Your LinkedIn profile photo has been integrated into the Hero section! Here's how to add your actual photo:

## Steps:

1. **Save your LinkedIn photo** to your computer
   - Right-click on your LinkedIn profile photo
   - Select "Save image as..." or "Download image"
   - Remember where you saved it

2. **Add it to the portfolio project**
   - Copy your photo file
   - Paste it into the `public` folder in your portfolio
   - Rename it to: `profile-photo.jpg`
   
   The path should be: `/Users/kanishkasonkar/portfolio/public/profile-photo.jpg`

3. **Supported formats**
   - `.jpg` or `.jpeg` (recommended)
   - `.png`
   - `.webp`

4. **If using a different filename**
   - Open `components/Hero.tsx`
   - Find the line: `src="/profile-photo.jpg"`
   - Change it to match your filename (e.g., `src="/your-photo-name.jpg"`)

## Image Requirements:

- **Recommended size**: 400x400 pixels or larger (square)
- **Format**: JPG or PNG
- **File size**: Keep it under 2MB for fast loading

## Current Setup:

The Hero component is already configured to display your photo in a beautiful circular frame with:
- Purple ring border (matching your theme)
- Smooth fade-in animation
- Responsive sizing (smaller on mobile, larger on desktop)
- Shadow effects for depth

Once you add the image file to the `public` folder, it will automatically appear on your portfolio!

## Alternative: Using a URL

If you prefer to host the image elsewhere, you can:
1. Upload to a service like Imgur, Cloudinary, or your own hosting
2. Update `components/Hero.tsx` line with `src="/profile-photo.jpg"` to use the full URL
3. Example: `src="https://your-domain.com/your-photo.jpg"`
