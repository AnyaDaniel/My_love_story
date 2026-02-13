import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, Play, Pause } from 'lucide-react';

const BackgroundMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.3);
  const [showControls, setShowControls] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Replace this URL with your actual background music file
  // You can use a royalty-free romantic instrumental or upload your own
  const musicUrl = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3";

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  return (
    <>
      {/* Hidden audio element */}
      <audio
        ref={audioRef}
        src={musicUrl}
        loop
        preload="auto"
      />

      {/* Floating Music Control Button */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring" }}
        className="fixed bottom-6 right-6 z-50"
        onMouseEnter={() => setShowControls(true)}
        onMouseLeave={() => setShowControls(false)}
      >
        {/* Expanded Controls */}
        <AnimatePresence>
          {showControls && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.9 }}
              className="absolute bottom-full right-0 mb-4 glass rounded-2xl p-4 shadow-xl min-w-[200px]"
            >
              <div className="text-center mb-3">
                <p className="text-sm font-medium text-foreground mb-1">Background Music</p>
                <p className="text-xs text-muted-foreground">
                  {isPlaying ? '♪ Playing ♪' : 'Paused'}
                </p>
              </div>

              {/* Volume Control */}
              <div className="flex items-center gap-2 mb-3">
                <button
                  onClick={toggleMute}
                  className="p-1.5 hover:bg-rose-soft/30 rounded-lg transition-colors touch-manipulation"
                  aria-label={isMuted ? "Unmute" : "Mute"}
                >
                  {isMuted ? (
                    <VolumeX className="w-4 h-4 text-muted-foreground" />
                  ) : (
                    <Volume2 className="w-4 h-4 text-rose-deep" />
                  )}
                </button>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={volume}
                  onChange={handleVolumeChange}
                  aria-label="Volume control"
                  className="flex-1 h-1 bg-rose-soft rounded-lg appearance-none cursor-pointer slider"
                  style={{
                    background: `linear-gradient(to right, hsl(355, 85%, 41%) 0%, hsl(355, 85%, 41%) ${volume * 100}%, hsl(351, 100%, 86%) ${volume * 100}%, hsl(351, 100%, 86%) 100%)`
                  }}
                />
              </div>

              {/* Play/Pause Button */}
              <button
                onClick={togglePlay}
                className="w-full py-2 px-4 bg-rose-deep text-white rounded-lg font-medium hover:bg-rose-deep/90 transition-colors flex items-center justify-center gap-2 text-sm touch-manipulation min-h-[40px]"
              >
                {isPlaying ? (
                  <>
                    <Pause className="w-4 h-4" />
                    Pause
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4" />
                    Play
                  </>
                )}
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Music Button */}
        <motion.button
          onClick={togglePlay}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="relative w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-rose-deep to-rose-glow text-white rounded-full shadow-xl hover:shadow-2xl transition-shadow flex items-center justify-center group touch-manipulation"
          aria-label={isPlaying ? "Pause music" : "Play music"}
        >
          {/* Ripple effect when playing */}
          {isPlaying && (
            <>
              <motion.div
                className="absolute inset-0 rounded-full bg-rose-deep/30"
                animate={{
                  scale: [1, 1.5, 1.8],
                  opacity: [0.5, 0.2, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
              />
              <motion.div
                className="absolute inset-0 rounded-full bg-rose-glow/30"
                animate={{
                  scale: [1, 1.5, 1.8],
                  opacity: [0.5, 0.2, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeOut",
                  delay: 0.5,
                }}
              />
            </>
          )}

          {/* Icon */}
          <motion.div
            animate={isPlaying ? { rotate: [0, 5, -5, 0] } : {}}
            transition={{ duration: 1, repeat: Infinity }}
          >
            {isPlaying ? (
              <Volume2 className="w-6 h-6 sm:w-7 sm:h-7" />
            ) : (
              <VolumeX className="w-6 h-6 sm:w-7 sm:h-7" />
            )}
          </motion.div>

          {/* Music note animation */}
          {isPlaying && (
            <motion.div
              className="absolute -top-2 -right-2 text-xl"
              animate={{
                y: [-5, -15],
                opacity: [1, 0],
                scale: [0.5, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
            >
              🎵
            </motion.div>
          )}
        </motion.button>

        {/* Tooltip */}
        {!showControls && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute bottom-full right-0 mb-2 whitespace-nowrap bg-black/80 text-white text-xs py-1 px-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
          >
            {isPlaying ? 'Pause Music' : 'Play Music'}
          </motion.div>
        )}
      </motion.div>

      {/* Mobile-friendly tap hint (shows on first load) */}
      <AnimatePresence>
        {!isPlaying && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ delay: 2 }}
            className="fixed bottom-24 right-6 z-40 bg-white/90 backdrop-blur-sm rounded-2xl p-3 shadow-lg max-w-[200px] sm:hidden"
          >
            <p className="text-xs text-center text-foreground">
              Tap to play romantic music 🎵
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default BackgroundMusic;
