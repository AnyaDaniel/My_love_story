import { motion } from 'framer-motion';
import { Music, Play } from 'lucide-react';

const SpotifyPlaylist = () => {
  // Replace this with your actual Spotify playlist embed URL
  // Get it from: Spotify > Your Playlist > Share > Embed Playlist
  const spotifyEmbedUrl = "https://open.spotify.com/embed/playlist/1mD1oIburGsf6h68bix5fu";

  const songSuggestions = [
    { title: "Perfect", artist: "Ed Sheeran", emoji: "💕" },
    { title: "All of Me", artist: "John Legend", emoji: "❤️" },
    { title: "No one like you", artist: "P-Square", emoji: "💝" },
    { title: "Make You Feel My Love", artist: "Adele", emoji: "🌹" },
    { title: "Can't Help Falling in Love", artist: "Elvis Presley", emoji: "💘" },
    { title: "Loving You", artist: "Minnie Riperton", emoji: "💞" },
  ];

  return (
    <section className="relative py-16 sm:py-24 px-4 overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, hsl(351, 78%, 96%) 0%, hsl(36, 100%, 97%) 50%, hsl(351, 78%, 94%) 100%)',
        }}
      />

      {/* Decorative music notes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-4xl opacity-10"
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + (i % 3) * 20}%`,
            }}
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 10, -10, 0]
            }}
            transition={{ 
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.2
            }}
          >
            🎵
          </motion.div>
        ))}
      </div>

      <div className="relative container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.div
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-5xl sm:text-6xl mb-4 inline-block"
          >
            🎶
          </motion.div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Love Playlist
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto px-4">
            Songs that remind me of us, every beat, every word...
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Spotify Player */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <div className="glass rounded-3xl p-4 sm:p-6 shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-rose-deep/10 p-3 rounded-full">
                  <Music className="w-6 h-6 text-rose-deep" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground">Love Songs for Us</h3>
                  <p className="text-sm text-muted-foreground">Curated with love 💕</p>
                </div>
              </div>

              {/* Spotify Embed */}
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <iframe
                  src={spotifyEmbedUrl}
                  width="100%"
                  height="380"
                  frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  className="w-full"
                  title="Spotify Playlist"
                ></iframe>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="mt-6 text-center"
              >
                <a
                  href="https://open.spotify.com/playlist/1mD1oIburGsf6h68bix5fu?si=KngpmqC5TNq-pV6lVzoCHw&pi=g35zHxbcRQWsK"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-[#1DB954] text-white rounded-full font-medium shadow-lg hover:shadow-xl hover:bg-[#1ed760] transition-all duration-300 text-sm sm:text-base touch-manipulation min-h-[44px]"
                >
                  <Play className="w-5 h-5" />
                  Open in Spotify
                </a>
              </motion.div>
            </div>
          </motion.div>

          {/* Song Suggestions */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <div className="space-y-4">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-rose-deep mb-6 text-center lg:text-left">
                Songs that make me think of you
              </h3>
              
              {songSuggestions.map((song, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 10, scale: 1.02 }}
                  className="glass rounded-2xl p-4 sm:p-6 flex items-center gap-4 cursor-pointer group touch-manipulation"
                >
                  <motion.div
                    className="text-3xl sm:text-4xl min-w-[48px] sm:min-w-[56px]"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                  >
                    {song.emoji}
                  </motion.div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-base sm:text-lg text-foreground group-hover:text-rose-deep transition-colors">
                      {song.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">{song.artist}</p>
                  </div>
                  <motion.div
                    className="bg-rose-deep/10 p-2 sm:p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Play className="w-4 h-4 sm:w-5 sm:h-5 text-rose-deep" />
                  </motion.div>
                </motion.div>
              ))}

              {/* Add Song Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full mt-6 px-6 py-4 border-2 border-dashed border-rose-soft rounded-2xl text-rose-deep font-medium hover:bg-rose-soft/20 transition-all duration-300 flex items-center justify-center gap-2 touch-manipulation min-h-[44px]"
              >
                <span className="text-2xl">+</span>
                {/* <span className="text-sm sm:text-base">Favorite Songs</span> */}
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Decorative note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center mt-12 sm:mt-16"
        >
          <p className="font-serif text-lg sm:text-xl italic text-muted-foreground max-w-2xl mx-auto px-4">
            "Every song on this playlist holds a special memory of us together" 💕
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SpotifyPlaylist;
