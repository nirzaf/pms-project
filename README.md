# O'Reilly's Bungalow - Property Management System

## About

O'Reilly's Bungalow is a luxury resort property management system featuring a modern, responsive web interface built with React, TypeScript, and Tailwind CSS. The project showcases a beautiful resort website with interactive 3D elements, smooth animations, and a comprehensive booking system for a premium bungalow resort located in Ethukala, Negombo, Sri Lanka.

## 🏖️ Resort Overview

**Location**: 31A Don Bosco Road, Ethukala, Negombo, Sri Lanka  
**Property Type**: Luxury Bungalow Resort  
**Contact**: +94 777 587 755 / 0777 063 239  
**Beach Distance**: 1.4km from Negombo Beach  
**Airport Distance**: 11km from Airport (15-20 minutes travel time)  
**Specialization**: Winter stays and family accommodations

### Property Features

- 3 Air-conditioned rooms
- Private swimming pool
- Fully equipped gym
- Complete kitchen with all amenities
- Oceanfront infinity pool with panoramic views
- Award-winning restaurants
- High-speed WiFi throughout the property
- Artisan coffee and beverage services
- State-of-the-art fitness center

## 🎨 Brand Guidelines

### Logo Details

#### Font Styles

- **O'Reilly's**: Aerokids (Regular)
- **BUNGALOW**: Nulshockrg (Bold)

#### Color Palette

- **Navy Blue**: `#050063`
- **Gold**: `#DEA401`
- **Black**: `#000000`
- **White**: `#FFFFFF`

### Typography
The website uses carefully selected fonts for optimal readability and aesthetic appeal:

- **Pacifico**: Used for stylized headings and brand elements
- **Quicksand**: Used for body text and UI elements (weights: 300, 400, 500, 600, 700)

## 🖼️ Image Assets

### Logo

- **Main Logo**: `https://ik.imagekit.io/fazrinphcc/O'REILLY'S%202D%20WITH%20TRANPARENT%20BACKGROUND.png.png?updatedAt=1741451666598`

### Hero Section Images

- **Hero Image 1**: `https://images.unsplash.com/photo-1484821582734-6c6c9f99a672?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`
- **Hero Image 2**: `https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80&w=2070`
- **Hero Image 3**: `https://images.unsplash.com/photo-1615880484746-a134be9a6ecf?auto=format&fit=crop&q=80&w=2070`

### Gallery Images (ImageKit CDN)
All gallery images are hosted on ImageKit CDN (fazrinphcc@gmail.com account):

#### Landscape Images

- `https://ik.imagekit.io/fazrinphcc/OReilly/image-1-1534X1024.jpeg?updatedAt=1744662350489`
- `https://ik.imagekit.io/fazrinphcc/OReilly/image-2-1534X1024.jpeg?updatedAt=1744662350269`

#### Square Images

- `https://ik.imagekit.io/fazrinphcc/OReilly/image-4-1024X1024.jpeg?updatedAt=1744662350333`
- `https://ik.imagekit.io/fazrinphcc/OReilly/image-2-1024X1024.jpeg?updatedAt=1744662350273`

#### Resort Views

- `https://ik.imagekit.io/fazrinphcc/OReilly/WhatsApp%20Image%202025-03-08%20at%2016.06.27_15c9b0c5.jpg?updatedAt=1741468432007`
- `https://ik.imagekit.io/fazrinphcc/OReilly/WhatsApp%20Image%202025-03-08%20at%2016.06.26_32424aa8.jpg?updatedAt=1741468431993`
- `https://ik.imagekit.io/fazrinphcc/OReilly/WhatsApp%20Image%202025-03-08%20at%2016.06.28_2526b803.jpg?updatedAt=1741468431968`
- `https://ik.imagekit.io/fazrinphcc/OReilly/WhatsApp%20Image%202025-03-08%20at%2016.06.27_2c7ea83c.jpg?updatedAt=1741468431870`
- `https://ik.imagekit.io/fazrinphcc/OReilly/WhatsApp%20Image%202025-03-08%20at%2016.06.27_5739e4e6.jpg?updatedAt=1741468431819`
- `https://ik.imagekit.io/fazrinphcc/OReilly/WhatsApp%20Image%202025-03-08%20at%2016.06.28_6089c75c.jpg?updatedAt=1741468431789`
- `https://ik.imagekit.io/fazrinphcc/OReilly/WhatsApp%20Image%202025-03-08%20at%2016.06.27_e12b9650.jpg?updatedAt=1741468431715`
- `https://ik.imagekit.io/fazrinphcc/OReilly/external_resort_view.jpg?updatedAt=1741539261861`

## 🛠️ Technical Stack

### Core Technologies

- **React**: ^18.2.0
- **TypeScript**: ^5.8.2
- **Vite**: ^6.2.5 (Build tool)
- **Tailwind CSS**: ^3.4.17 (Styling)

### Animation & 3D Libraries

- **React Spring**: ^9.7.3 (Web animations)
- **Framer Motion**: ^12.7.2 (Advanced animations)
- **Three.js**: ^0.162.0 (3D graphics)
- **@react-three/fiber**: ^8.18.0 (React Three.js renderer)
- **@react-three/drei**: ^9.122.0 (Three.js helpers)
- **three-mesh-bvh**: ^0.8.3 (3D collision detection)

### UI & Icons

- **Lucide React**: ^0.344.0 (Icon library)

### Development Tools

- **ESLint**: ^9.22.0 (Code linting)
- **TypeScript ESLint**: ^8.26.1
- **PostCSS**: ^8.4.35
- **Autoprefixer**: ^10.4.21

## 🏗️ Project Structure

```
src/
├── components/
│   ├── 3D/
│   │   ├── WaveAnimation.tsx      # 3D wave animation component
│   │   ├── BookingProgress.tsx    # 3D booking progress indicator
│   │   └── Scene.tsx              # Main 3D scene wrapper
│   ├── Navigation.tsx             # Main navigation component
│   ├── HeroSection.tsx            # Hero section with logo and CTA
│   ├── WinterStaySection.tsx      # Winter stay promotions
│   ├── FeatureHighlights.tsx      # Resort amenities showcase
│   ├── Gallery.tsx                # Image gallery with modal
│   ├── LocationMap.tsx            # Google Maps integration
│   ├── BookingSection.tsx         # Booking form component
│   └── Footer.tsx                 # Footer with branding
├── assets/                        # Local image assets
├── App.tsx                        # Main application component
├── main.tsx                       # Application entry point
└── index.css                      # Global styles
```

## 🎯 Key Features

### Interactive Components

1. **Navigation System**
   - Responsive mobile menu
   - Smooth scroll navigation
   - Animated menu items

2. **Hero Section**
   - Rotating background images
   - Animated logo with glassmorphism effects
   - Gradient text animations
   - Call-to-action button with hover effects

3. **Winter Stay Section**
   - Animated snowflake decorations
   - Parallax background effects
   - Interactive amenity cards
   - Hover animations on benefits

4. **Feature Highlights**
   - 3D card hover effects
   - Icon animations with color transitions
   - Glow effects on interaction
   - Responsive grid layout

5. **Gallery System**
   - Modal image viewer
   - Touch/swipe navigation
   - Keyboard navigation support
   - Animated border effects
   - Image counter and captions

6. **Location Integration**
   - Embedded Google Maps
   - Contact information display
   - Responsive map container

7. **Booking System**
   - Date picker integration
   - Guest selection
   - Room type selection
   - Form validation

### Animation Features

- **React Spring**: Smooth, physics-based animations
- **Framer Motion**: Complex gesture and layout animations
- **3D Elements**: Interactive Three.js components
- **Scroll Animations**: Intersection Observer-based reveals
- **Hover Effects**: Micro-interactions throughout the interface

### Responsive Design

- Mobile-first approach
- Breakpoint-based layouts
- Touch-friendly interactions
- Optimized image loading
- Accessible navigation

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd pms-project

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linting
npm run lint
```

### Development Server
The development server runs on `http://localhost:5173` by default.

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px
- **Large Desktop**: > 1280px

## 🎨 Design System

### Color Usage

- **Navy Blue (#050063)**: Primary brand color, headings, navigation
- **Gold (#DEA401)**: Accent color, highlights, call-to-action elements
- **Black (#000000)**: Text, overlays
- **White (#FFFFFF)**: Background, contrast elements

### Component Patterns

- Glassmorphism effects with backdrop blur
- Gradient overlays and borders
- Smooth hover transitions
- Consistent spacing using Tailwind's spacing scale
- Shadow layering for depth

## 🔧 Build Configuration

### Vite Configuration

- **Code Splitting**: Automatic chunking for optimal loading
- **Tree Shaking**: Dead code elimination
- **Source Maps**: Enabled for debugging
- **Module Optimization**: Specific handling for Three.js and animation libraries

### Performance Optimizations

- Lazy loading for 3D components
- Image optimization through ImageKit CDN
- Chunk size warnings at 2MB
- Optimized bundle splitting

## 📞 Contact & Support

**Resort Contact:**

- Phone: +94 777 587 755 / 0777 063 239
- Address: 31A Don Bosco Road, Ethukala, Negombo, Sri Lanka
- Beach Distance: 1.4km from Negombo Beach
- Airport Distance: 11km from Airport (15-20 minutes travel time)

**Development:**

- Powered by Quadrate Tech Solutions

## 📄 License

© 2024 O'Reilly's Bungalow. All rights reserved.

---

*This project showcases modern web development practices with a focus on user experience, performance, and visual appeal for the hospitality industry.*
