# 🌹 Rose Day Valentine's Website

A beautiful, romantic, mobile-first website celebrating Rose Day and Valentine's love! Built with React, TypeScript, Tailwind CSS, and Framer Motion.

## ✨ Features

- 🎬 **Animated Splash Screen** - Beautiful entrance animation
- 🌹 **3D Rose Hero Section** - Interactive 3D rose with romantic messaging
- 💑 **Gender Selection** - Personalized "For Him" / "For Her" messages
- 📸 **Memory Gallery** - Showcase your date photos in an elegant grid
- 💌 **Love Letters** - Interactive love letters that open beautifully
- 🎵 **Spotify Integration** - Embedded love playlist
- 🎶 **Background Music Player** - Floating music control with volume
- 🌺 **Interactive Rose Garden** - Click roses to reveal love messages
- 🎨 **Floating Rose Petals** - Animated petal background
- 🖱️ **Custom Rose Cursor** - Rose follows your cursor
- 📱 **Mobile-First Design** - Perfect on phones, tablets, and desktop
- ♿ **Accessibility** - Proper touch targets and keyboard navigation

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher recommended)
- npm, yarn, pnpm, or bun

### Installation

```sh
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to project directory
cd rose-day

# Install dependencies
npm install
# or
bun install

# Start development server
npm run dev
# or
bun dev
```

Visit `http://localhost:5173` to see your site!

## 📝 Customization

See [CUSTOMIZATION_GUIDE.md](./CUSTOMIZATION_GUIDE.md) for detailed instructions on:

- Adding your own photos
- Customizing love letters
- Adding your Spotify playlist
- Changing background music
- Updating colors and text

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm test` - Run tests

## 📱 Mobile Optimization

The website is fully optimized for mobile:
- ✅ Touch-friendly buttons (minimum 44px)
- ✅ Responsive layouts for all screen sizes
- ✅ Smooth scrolling navigation
- ✅ Optimized images and animations
- ✅ Accessible for screen readers

## 🎨 Tech Stack

- **Framework**: React 18.3
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **3D Graphics**: React Three Fiber & Drei
- **UI Components**: Radix UI (shadcn/ui)
- **Build Tool**: Vite
- **Icons**: Lucide React

## 📂 Project Structure

```
src/
├── components/
│   ├── SplashScreen.tsx      # Opening splash animation
│   ├── HeroSection.tsx        # Hero with 3D rose
│   ├── MemoryGallery.tsx      # Photo gallery
│   ├── LoveLetter.tsx         # Love letters section
│   ├── SpotifyPlaylist.tsx    # Music playlist
│   ├── BackgroundMusic.tsx    # Music player control
│   ├── RoseGarden.tsx         # Interactive garden
│   ├── GenderSelection.tsx    # Him/Her selection
│   ├── RoseMessage.tsx        # Typewriter message
│   ├── FloatingPetals.tsx     # Petal animation
│   ├── RoseCursor.tsx         # Custom cursor
│   └── ui/                    # UI components
├── pages/
│   └── Index.tsx              # Main page
└── index.css                  # Global styles
```

## 🌹 Features Breakdown

### 1. Splash Screen
Beautiful animated entrance with floating rose petals and romantic text.

### 2. Memory Gallery
- Upload and display your date photos
- Click to view full-screen with descriptions
- Smooth animations and hover effects

### 3. Love Letters
- Multiple love letters with dates
- Click to reveal full message
- Beautiful paper-like design

### 4. Spotify Playlist
- Embedded Spotify player
- Song suggestions list
- Direct link to open in Spotify

### 5. Background Music
- Floating music control button
- Volume slider
- Play/pause with visual feedback
- Auto-loops romantic music

## 🎨 Color Palette

The site uses a romantic rose-themed palette:
- Rose Deep: `#B91C3C`
- Rose Soft: `#FBCFE8`
- Rose Blush: `#FCE7F3`
- Cream: `#FFFBEB`

## 📦 Deployment

### Build for Production
```bash
npm run build
```

The `dist/` folder will contain your production-ready files.

### Deploy Options
- **Vercel**: Connect your repo for auto-deployment
- **Netlify**: Drag & drop the `dist/` folder
- **GitHub Pages**: Use the `dist/` folder
- **Any static hosting**: Upload contents of `dist/`

## 🔒 Git Configuration

The `.gitignore` file is already configured to exclude:
- `node_modules/`
- `dist/`
- `.env` files
- Editor configs

## 💝 Perfect For

- Valentine's Day (February 14)
- Rose Day (February 7)
- Anniversaries
- Birthday surprises
- Romantic proposals
- Just because! 💕

## 🤝 Contributing

This is a personal romantic project, but feel free to fork and customize for your own love story!

## 💖 Made With Love

Created with ❤️ for celebrating love and romance.

---

**Remember**: The best gift is one made with love and personalization. Customize this site to make it uniquely yours! 🌹

## 📞 Support

For customization help, see [CUSTOMIZATION_GUIDE.md](./CUSTOMIZATION_GUIDE.md)

---

*"A rose speaks of love silently, in a language known only to the heart."* 🌹💕
