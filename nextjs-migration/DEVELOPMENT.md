# Development Guide

## Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Open in browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## External Image Configuration

The application uses external images from:
- `images.unsplash.com` - Hero section carousel images
- `ik.imagekit.io` - Logo and gallery images

These domains are already configured in `next.config.js` for Next.js Image optimization.

## Build Commands

- **Development:** `npm run dev`
- **Production Build:** `npm run build`
- **Start Production:** `npm start`
- **Lint:** `npm run lint`

## Key Features Working

✅ **All Components Functional:**
- Navigation with smooth scrolling
- Hero section with image carousel
- 3D animations with Three.js
- Interactive gallery with modal
- Responsive design
- All animations and transitions

✅ **Performance Optimizations:**
- Next.js Image optimization
- Static site generation
- Automatic code splitting
- Font optimization

✅ **SEO Ready:**
- Meta tags configured
- Viewport settings
- Structured data ready

## Troubleshooting

If you encounter any image loading issues, ensure the domains are properly configured in `next.config.js` under the `images.domains` array.

## Development Notes

- All interactive components use `'use client'` directive
- 3D components are client-side rendered
- Images are optimized with Next.js Image component
- Fonts are loaded efficiently with next/font