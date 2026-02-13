import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Heart, X } from 'lucide-react';

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

  // You can add your actual messages here
  const messages: Message[] = [
    {
      id: 1,
      date: "December 25, 2023",
      preview: "The day I knew you were special...",
      fullMessage: "My dearest love,\n\nFrom the moment I saw you, I knew my life would never be the same. Your smile lights up my darkest days, and your laughter is my favorite melody. Every moment with you is a gift I treasure.\n\nYou make me want to be better, to love deeper, to dream bigger. With you, I've found a love I never knew existed.\n\nForever and always,\nYour Love",
      sender: "From the bottom of my heart",
      emoji: "💌"
    },
    {
      id: 2,
      date: "February 7, 2024",
      preview: "On this Rose Day, I want to say...",
      fullMessage: "My Beautiful Rose,\n\nA rose is beautiful, but not as beautiful as you. A rose smells sweet, but your presence is sweeter. A rose has thorns, but even your imperfections are perfect to me.\n\nThis Rose Day, I give you not just a flower, but my heart, my love, and my promise to cherish you forever.\n\nYou are my everything.\n\nAll my love,\nYours Forever",
      sender: "With all the love in my heart",
      emoji: "🌹"
    },
    {
      id: 3,
      date: "Valentine's Day 2024",
      preview: "Words can't express how much I love you...",
      fullMessage: "To My Everything,\n\nIf I had a flower for every time I thought of you, I could walk through my garden forever. You are my today and all of my tomorrows.\n\nThank you for being you. Thank you for choosing me. Thank you for making every day feel like Valentine's Day.\n\nI love you more than words could ever say.\n\nYours eternally,\nYour Forever Valentine",
      sender: "Your one and only",
      emoji: "💕"
    },
    {
      id: 4,
      date: "Just Because",
      preview: "I woke up thinking about you...",
      fullMessage: "Hey Beautiful,\n\nI just wanted to remind you that you're amazing. I'm so lucky to have you in my life. You make ordinary moments extraordinary just by being there.\n\nI can't wait to make more memories with you. Let's keep writing our love story together.\n\nLove you endlessly,\nMe",
      sender: "Your biggest fan",
      emoji: "💖"
    }
  ];

  return (
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
            Write a New Letter
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
  );
};

export default LoveLetter;
