import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Heart, X } from 'lucide-react';
import { useMusicContext } from '@/contexts/MusicContext';

interface Message {
  id: number;
  date: string;
  preview: string;
  fullMessage: string;
  sender: string;
  emoji: string;
}

const LoveLetter = () => {
  const [selectedLetter, setSelectedLetter] = useState<Message | null>(null);
  const letterMusicRef = useRef<HTMLAudioElement>(null);
  const { pauseBackgroundMusic, resumeBackgroundMusic } = useMusicContext();

  // Play music when a letter is opened
  useEffect(() => {
    if (selectedLetter && letterMusicRef.current) {
      // Pause background music
      pauseBackgroundMusic();
      
      // Play letter music
      letterMusicRef.current.volume = 0.4;
      letterMusicRef.current.loop = true;
      letterMusicRef.current.currentTime = 0;
      letterMusicRef.current.play().catch(err => console.log('Audio play failed:', err));
    } else if (!selectedLetter && letterMusicRef.current) {
      // Stop letter music and resume background music
      letterMusicRef.current.pause();
      resumeBackgroundMusic();
    }
  }, [selectedLetter, pauseBackgroundMusic, resumeBackgroundMusic]);

  const messages: Message[] = [
    {
      id: 1,
      date: "November 21, 2025",
      preview: "After Our First Movie Date...",
      fullMessage: `Tonight, I keep replaying our movie date in my mind — the softness of your smile in the dim lights, the way sitting beside you felt so natural and warm. Even the scent of you stayed with me long after I dropped you off at the market, like a quiet reminder of how beautiful the moment was. I already find myself hoping for more days like this — more shared scenes, more laughter, more moments where your presence makes everything feel lighter. And somewhere in my heart, there's a gentle wish that one day you might join this little ship I'm sailing, and maybe… drift into love with me too. Sleep peacefully tonight. Good night, Boss Baby Lawyer❤️. Love you 🥹`,
      sender: "Your biggest fan",
      emoji: "💌"
    },
    {
      id: 2,
      date: "November 23, 2025",
      preview: "Good Morning Message...",
      fullMessage: `Good morning, my Boss Baby Lawyer. I hope your Sunday begins as beautifully as the light you carry in your smile.
As you head to church today, do one small thing for me — please put on that radiant smile anytime the camera finds your face. And when you step up to the front for thanksgiving, give that same warm smile that melts through my thoughts.
If you can, look up toward the gallery where the media stand is… just once… and gift me that gentle, heart-stealing smile of yours. I'll be watching you all through the service, getting blessed in more ways than one.
Have a beautiful Sunday, love.`,
      sender: "Your biggest fan",
      emoji: "🌹"
    },
    {
      id: 3,
      date: "November 25, 2025",
      preview: "Babe's Call to bar...",
      fullMessage: `To My Everything,

If I had a flower for every time I thought of you, I could walk through my garden forever. You are my today and all of my tomorrows.

Thank you for being you. Thank you for choosing me. Thank you for making every day feel like Valentine's Day.

I love you more than words could ever say.

Yours eternally,
Your Forever Valentine`,
      sender: "Your one and only",
      emoji: "💕"
    },
    {
      id: 4,
      date: "December 25th, 2025",
      preview: "Our First Christmas Together...",
      fullMessage: `My love, 🎄✨

This Christmas feels different — softer, warmer, more alive — because it is our first, wrapped in the magic of you and I.
Among carols, lights, and quiet prayers, my greatest gift isn't in a box or hampers… it's you, right here.

In your smile, I've found my season of joy.
In your love, my heart has learned a new song.
This first Christmas with you is not just a moment — it's a promise my soul wants to keep.

I hope this is the beginning of many more Christmas mornings, many more candles lit side by side, many more years of laughter, faith, and love shared in the glow of the same tree.

As we celebrate today, my prayer is simple and true: may every Christmas ahead find me loving you deeper, choosing you again, and thanking God for you, year after year.

Merry Christmas, my heart.
I look forward to spending all the Christmases ahead with you. ❤️🎄✨`,
      sender: "Your biggest fan",
      emoji: "💖"
    },
    {
      id: 5,
      date: "January 26, 2026",
      preview: "Always in my thoughts.",
      fullMessage: `Good afternoon Nwa….
You've been on my mind all day, even in the middle of the busyness. I got so engaged with work that time just kept running, but please know this, I never forgot you for a second.
I just wanted to check on you and see how your day and work are going. I hope everything is going smoothly and that you're doing okay. You mean so much to me, and even in the quiet moments, my heart still finds its way to you.
I miss you… I miss your smile, your warmth, and those soft pink lips of yours. I wouldn't mind stealing a kiss from you very soon and holding you close again, just feeling you in my arms.
I love you, always. 💕`,
      sender: "Your biggest fan",
      emoji: "💖"
    },
    {
      id: 6,
      date: "Just Because",
      preview: "I woke up thinking about you...",
      fullMessage: `Hey Beautiful,

I just wanted to remind you that you're amazing. I'm so lucky to have you in my life. You make ordinary moments extraordinary just by being there.

I can't wait to make more memories with you. Let's keep writing our love story together.

Love you endlessly,
Me`,
      sender: "Your biggest fan",
      emoji: "💖"
    },
    {
      id: 7,
      date: "Valentines Day, 2026",
      preview: "Happy Valentine's Day, Nwa...",
      fullMessage: `Happy Valentine's Day, Nwa ❤️🌹
Since November, loving you has felt like stepping into a beautiful story I never want to end. There's something about you, your smile, and the way you hold me close emotionally that makes my whole world pause whenever I'm with you — even when we're just talking. It's like time itself knows you deserve my full attention.
Being with you has been fun, sweet, calming, and a little bit magical. You bring warmth into my days and softness into my thoughts. Even in busy moments, you're never far from my mind — you've quietly made your home there.
I still smile when I think about how we talk, how we care, how your voice and your laughter can turn an ordinary moment into something special. Loving you feels light and deep at the same time, playful and real.
Today is for love, but you….. You are my favorite part of it. I'm grateful for the journey so far, and I'm excited for all the memories waiting ahead for us. Stay sweet, stay you, stay mine.
Be my Valentine again and again, Nwa. 💌✨`,
      sender: "Your biggest fan",
      emoji: "💖"
    }
  ];

  return (
    <>
      {/* Hidden audio element for letter music */}
      <audio
        ref={letterMusicRef}
        src="/music/cant-help-falling.mp3"
        loop
      />
      
      <section className="relative py-16 sm:py-24 px-4 overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, hsl(36, 100%, 97%) 0%, hsl(351, 78%, 92%) 100%)',
        }}
      />

      {/* Floating envelopes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-3xl opacity-10"
            style={{
              left: `${5 + i * 15}%`,
              top: `${10 + (i % 4) * 20}%`,
            }}
            animate={{ 
              y: [0, -30, 0],
              rotate: [0, 15, -15, 0]
            }}
            transition={{ 
              duration: 4 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3
            }}
          >
            💌
          </motion.div>
        ))}
      </div>

      <div className="relative container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.div
            animate={{ 
              rotate: [0, -10, 10, -10, 0],
              scale: [1, 1.05, 1]
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="text-5xl sm:text-6xl mb-4 inline-block"
          >
            💌
          </motion.div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Love Letters for You
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto px-4">
            Click each letter to read the words straight from my heart
          </p>
        </motion.div>

        {/* Letters Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {messages.map((message, index) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="cursor-pointer"
              onClick={() => setSelectedLetter(message)}
            >
              <div className="glass rounded-3xl p-6 sm:p-8 h-full flex flex-col items-center justify-center text-center group hover:shadow-xl transition-all duration-300 touch-manipulation min-h-[200px]">
                <motion.div
                  className="text-5xl sm:text-6xl mb-4"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                >
                  {message.emoji}
                </motion.div>
                
                <div className="bg-rose-deep/10 p-2 rounded-full mb-4 group-hover:bg-rose-deep/20 transition-colors">
                  <Mail className="w-6 h-6 text-rose-deep" />
                </div>

                <h3 className="font-serif text-lg sm:text-xl font-semibold text-foreground mb-2 group-hover:text-rose-deep transition-colors">
                  {message.date}
                </h3>
                
                <p className="text-sm text-muted-foreground italic line-clamp-2">
                  "{message.preview}"
                </p>

                <motion.div
                  className="mt-4 text-sm text-rose-deep font-medium"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  Click to read →
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Add New Letter Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <button className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-rose-soft text-rose-deep rounded-full font-medium hover:bg-rose-soft/20 transition-all duration-300 text-sm sm:text-base touch-manipulation min-h-[44px] inline-flex items-center gap-2">
            <Heart className="w-5 h-5" />
            Our Story Continues...
          </button>
        </motion.div>
      </div>

      {/* Modal for selected letter */}
      <AnimatePresence>
        {selectedLetter && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedLetter(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, rotateY: -30 }}
              animate={{ scale: 1, opacity: 1, rotateY: 0 }}
              exit={{ scale: 0.8, opacity: 0, rotateY: 30 }}
              transition={{ type: "spring", duration: 0.6 }}
              className="relative bg-gradient-to-br from-cream via-white to-rose-blush rounded-3xl overflow-hidden max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              style={{
                backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffc0cb" fill-opacity="0.05"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
              }}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedLetter(null)}
                className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm rounded-full p-2 sm:p-3 hover:bg-white transition-colors shadow-lg touch-manipulation min-h-[44px] min-w-[44px] flex items-center justify-center"
                aria-label="Close love letter"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              {/* Letter Content */}
              <div className="p-8 sm:p-12">
                {/* Header */}
                <div className="text-center mb-8">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-6xl mb-4 inline-block"
                  >
                    {selectedLetter.emoji}
                  </motion.div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-rose-deep mb-2">
                    {selectedLetter.date}
                  </h3>
                  <p className="text-sm text-muted-foreground italic">
                    {selectedLetter.sender}
                  </p>
                </div>

                {/* Decorative line */}
                <div className="flex items-center justify-center gap-2 mb-8">
                  <span className="h-px w-16 bg-rose-soft"></span>
                  <Heart className="w-4 h-4 fill-rose-deep text-rose-deep" />
                  <span className="h-px w-16 bg-rose-soft"></span>
                </div>

                {/* Message */}
                <div className="prose prose-lg max-w-none">
                  <p className="font-serif text-base sm:text-lg text-foreground leading-relaxed whitespace-pre-line text-left">
                    {selectedLetter.fullMessage}
                  </p>
                </div>

                {/* Decorative hearts */}
                <div className="mt-12 flex justify-center gap-2 flex-wrap">
                  {[...Array(7)].map((_, i) => (
                    <motion.span
                      key={i}
                      className="text-2xl"
                      animate={{ 
                        scale: [1, 1.2, 1],
                        rotate: [0, 10, -10, 0]
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.2
                      }}
                    >
                      💕
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
    </>
  );
};

export default LoveLetter;
