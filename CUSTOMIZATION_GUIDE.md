# 🌹 Rose Day Website - Customization Guide

Welcome to your beautiful Rose Day Valentine's website! This guide will help you personalize the site with your own photos, messages, and music.

## 📸 Adding Your Photos (Memory Gallery)

### Step 1: Prepare Your Photos
1. Collect your favorite photos from your dates
2. Optimize them for web (recommended size: 1200x900px or similar 4:3 ratio)
3. Upload them to an image hosting service or use local files

### Step 2: Update the Memory Gallery
Open `src/components/MemoryGallery.tsx` and find the `memories` array (around line 16):

```typescript
const memories: Memory[] = [
  {
    id: 1,
    image: 'YOUR_IMAGE_URL_HERE',
    title: 'Your Date Title',
    date: 'January 14, 2026',
    description: 'Your memory description 💕'
  },
  // Add more memories...
];
```

**To use local images:**
1. Create a folder `src/assets/photos/`
2. Add your images there (e.g., `date1.jpg`, `date2.jpg`)
3. Import them at the top of the file:
   ```typescript
   import date1 from '@/assets/photos/date1.jpg';
   ```
4. Use them in the array:
   ```typescript
   image: date1,
   ```

---

## 🎵 Adding Your Spotify Playlist

### Step 1: Create Your Playlist
1. Go to Spotify and create a playlist with your favorite love songs
2. Make sure the playlist is **public**

### Step 2: Get the Embed Code
1. Open your playlist in Spotify
2. Click the three dots (•••) menu
3. Select **Share** → **Embed Playlist**
4. Copy the embed URL (looks like: `https://open.spotify.com/embed/playlist/...`)

### Step 3: Update the Component
Open `src/components/SpotifyPlaylist.tsx` and update line 7:

```typescript
const spotifyEmbedUrl = "YOUR_SPOTIFY_EMBED_URL_HERE";
```

Also update the song suggestions array (around line 9) with your favorite songs:

```typescript
const songSuggestions = [
  { title: "Your Song", artist: "Artist Name", emoji: "💕" },
  // Add more songs...
];
```

---

## 💌 Customizing Love Letters

Open `src/components/LoveLetter.tsx` and find the `messages` array (around line 20):

```typescript
const messages: Message[] = [
  {
    id: 1,
    date: "December 25, 2024",
    preview: "The first line of your letter...",
    fullMessage: "Your full love letter here.\n\nUse \\n\\n for paragraphs.",
    sender: "From your loving partner",
    emoji: "💌"
  },
  // Add more letters...
];
```

**Tips for writing love letters:**
- Keep preview text short (under 50 characters)
- Use `\n\n` to create paragraph breaks in fullMessage
- Choose emojis that match the theme: 💌 🌹 💕 💖 ❤️ 💝

---

## 🎶 Adding Background Music

### Option 1: Use Your Own Audio File

1. Add your audio file to `public/audio/background.mp3`
2. Open `src/components/BackgroundMusic.tsx`
3. Update line 12:
   ```typescript
   const musicUrl = "/audio/background.mp3";
   ```

### Option 2: Use a Streaming URL

If you have a direct link to an audio file:
```typescript
const musicUrl = "https://youraudiourl.com/song.mp3";
```

**Recommended music:**
- Romantic instrumental
- Royalty-free love songs
- Your favorite slow song (ensure you have rights to use it)

---

## 🎨 Changing Colors

All colors are defined in `src/index.css` under the `:root` section:

```css
:root {
  --rose-deep: 355 85% 41%;     /* Main rose color */
  --rose-soft: 351 100% 86%;    /* Light rose/pink */
  --rose-blush: 351 78% 92%;    /* Very light pink */
  --rose-glow: 351 100% 75%;    /* Bright rose */
  --cream: 36 100% 97%;         /* Background cream */
}
```

Change these HSL values to customize your color scheme!

---

## 📝 Editing Text Content

### Hero Section
Edit `src/components/HeroSection.tsx`:
- Line 70: Main heading
- Line 78: Subtitle quote
- Line 94: Button text

### Gender Selection
Edit `src/components/GenderSelection.tsx`:
- Line 13-24: Customize the gender options and messages

### Rose Message
Edit `src/components/RoseMessage.tsx`:
- Line 7: The typewriter message

---

## 🚀 Running the Website

### Development Mode
```bash
npm run dev
```
Visit `http://localhost:5173`

### Building for Production
```bash
npm run build
```

The built files will be in the `dist/` folder.

---

## 📱 Mobile Optimization

The website is already mobile-first! All buttons have:
- Minimum 44px touch targets
- Proper spacing for finger taps
- Responsive layouts that adapt to screen size

Test on mobile by:
1. Running `npm run dev`
2. Opening on your phone's browser
3. Or use Chrome DevTools mobile emulator

---

## 💡 Tips for Best Experience

1. **Image Optimization**: Compress images before adding (use TinyPNG or similar)
2. **Audio Files**: Keep under 5MB for faster loading
3. **Testing**: Always test on both desktop and mobile
4. **Performance**: Avoid adding too many high-res images (10-15 is good)

---

## 🎯 Quick Customization Checklist

- [ ] Add your own photos to Memory Gallery
- [ ] Update Spotify playlist URL
- [ ] Write personalized love letters
- [ ] Add background music file
- [ ] Customize hero section text
- [ ] Update rose message quote
- [ ] Test on mobile device
- [ ] Check all buttons work on phone

---

## ❤️ Need Help?

If you need assistance with customization:
1. Check the code comments in each component
2. Test changes incrementally
3. Use browser developer tools to debug

Enjoy your personalized Rose Day website! 🌹💕
