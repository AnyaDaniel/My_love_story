# Background Music Files

Please add the following audio files to this directory:

1. **lovin-you.mp3** - "Lovin' You" (Main background music)
2. **cant-help-falling.mp3** - "Can't Help Falling in Love" (Secondary background music & letter music)

## How to add music files:

1. Download or convert your music files to MP3 format
2. Rename them to match the file names above:
   - `lovin-you.mp3`
   - `cant-help-falling.mp3`
3. Copy them into this `public/music/` folder

## Notes:

- The background music will play "Lovin' You" first, then automatically switch to "Can't Help Falling in Love" when the first song ends, and loop between them
- When a love letter is opened, "Can't Help Falling in Love" will play as the letter music
- Make sure your audio files are properly licensed or royalty-free

## File locations in the app:

- Background music configuration: `src/components/BackgroundMusic.tsx`
- Letter music configuration: `src/components/LoveLetter.tsx`
