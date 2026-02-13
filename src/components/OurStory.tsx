import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { Heart } from 'lucide-react';

interface Chapter {
  id: number;
  number: string;
  title: string;
  content: string;
  emoji: string;
  image?: string;
  badge?: string;
}

const OurStory = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const chapters: Chapter[] = [
    {
      id: 1,
      number: 'Chapter 1 of 3',
      title: 'The First Glance',
      badge: '❤️',
      content: 'From the moment our eyes met, I knew there was something extraordinary about you. Time seemed to stand still, and in that instant, everything changed.',
      emoji: '💕',
    },
    {
      id: 2,
      number: 'Chapter 2 of 3',
      title: 'Falling Deeper',
      badge: '💝',
      content: 'Every conversation drew me closer. Your laugh became my favorite sound, your smile my favorite sight. I found myself thinking of you at every moment.',
      emoji: '💖',
    },
    {
      id: 3,
      number: 'Chapter 3 of 3',
      title: 'Forever Starts Now',
      badge: '💍',
      content: 'This is not the end, but the beginning of our greatest adventure. With you, I have found my home, my peace, my everything.',
      emoji: '💫',
    },
  ];

  // Scroll progress indicator
  const progressHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section id="our-story" className="relative bg-rose-blush">
      {/* Progress Indicator - Desktop only */}
      <motion.div
        className="fixed left-8 top-1/2 -translate-y-1/2 z-40 hidden lg:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <div className="relative h-64 w-1 bg-rose-soft/30 rounded-full overflow-hidden">
          <motion.div
            style={{ height: progressHeight }}
            className="absolute top-0 left-0 right-0 bg-rose-deep rounded-full"
          />
        </div>
        <div className="flex flex-col gap-4 absolute left-1/2 -translate-x-1/2 top-0 bottom-0 justify-around -ml-1">
          {chapters.map((_, index) => (
            <motion.div
              key={index}
              className="w-3 h-3 rounded-full bg-rose-soft border-2 border-rose-deep"
              whileHover={{ scale: 1.5 }}
            />
          ))}
        </div>
      </motion.div>

      {/* Chapters Container */}
      <div ref={containerRef} className="snap-y snap-mandatory md:h-screen overflow-y-auto">
        {chapters.map((chapter, index) => (
          <div
            key={chapter.id}
            className="snap-start snap-always min-h-screen flex items-center justify-center px-4 py-20 md:py-0 relative"
          >
            {/* Floating decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute text-4xl opacity-5"
                  style={{
                    left: `${10 + i * 12}%`,
                    top: `${15 + (i % 3) * 25}%`,
                  }}
                  animate={{
                    y: [0, -30, 0],
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 5 + i * 0.5,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                >
                  {chapter.emoji}
                </motion.div>
              ))}
            </div>

            <div className="container mx-auto max-w-6xl relative z-10">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className={`${index % 2 === 0 ? 'md:order-1' : 'md:order-2'} text-center md:text-left`}
                >
                  {/* Badge */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", delay: 0.3 }}
                    className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6"
                  >
                    <span className="text-2xl">{chapter.badge}</span>
                    <span className="text-sm text-rose-deep font-medium">
                      {chapter.number}
                    </span>
                  </motion.div>

                  {/* Title */}
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-rose-deep mb-6"
                  >
                    {chapter.title}
                  </motion.h2>

                  {/* Decorative Line */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '80px' }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="h-1 bg-rose-deep rounded-full mb-8 mx-auto md:mx-0"
                  />

                  {/* Content */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7 }}
                    className="text-lg sm:text-xl text-foreground leading-relaxed mb-8"
                  >
                    {chapter.content}
                  </motion.p>

                  {/* Decorative hearts */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.9 }}
                    className="flex items-center gap-2 justify-center md:justify-start"
                  >
                    <Heart className="w-4 h-4 fill-rose-deep text-rose-deep" />
                    <span className="h-px w-16 bg-rose-soft" />
                    <Heart className="w-4 h-4 fill-rose-deep text-rose-deep" />
                  </motion.div>
                </motion.div>

                {/* Image/Visual Content */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className={`${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}
                >
                  <div className="relative">
                    {/* Frame with photo placeholder */}
                    <div className="glass rounded-3xl p-4 sm:p-6 shadow-2xl">
                      <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-rose-soft to-rose-blush flex items-center justify-center">
                        {/* You can replace this with actual images */}
                        <motion.div
                          animate={{
                            scale: [1, 1.1, 1],
                            rotate: [0, 5, -5, 0],
                          }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                          }}
                          className="text-8xl sm:text-9xl"
                        >
                          {chapter.emoji}
                        </motion.div>
                      </div>
                    </div>

                    {/* Decorative floating hearts */}
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute text-3xl"
                        style={{
                          top: `${20 + i * 25}%`,
                          right: i % 2 === 0 ? '-10%' : 'auto',
                          left: i % 2 === 1 ? '-10%' : 'auto',
                        }}
                        animate={{
                          y: [0, -20, 0],
                          rotate: [0, 15, -15, 0],
                          scale: [1, 1.2, 1],
                        }}
                        transition={{
                          duration: 3 + i * 0.5,
                          repeat: Infinity,
                          delay: i * 0.4,
                        }}
                      >
                        💕
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Scroll Indicator - Only on first chapter */}
              {index === 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2 }}
                  className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
                >
                  <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="flex flex-col items-center gap-2 text-muted-foreground"
                  >
                    <span className="text-xs uppercase tracking-widest">Scroll to continue</span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 5v14M5 12l7 7 7-7" />
                    </svg>
                  </motion.div>
                </motion.div>
              )}
            </div>
          </div>
        ))}

        {/* Transition to next section */}
        <div className="snap-start min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-rose-blush via-rose-soft/30 to-cream" />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative text-center z-10"
          >
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 360],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="text-8xl mb-8 inline-block"
            >
              ❤️
            </motion.div>

            <h3 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-rose-deep mb-6">
              I've been carrying this in my heart for so long...
            </h3>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mb-8"
            >
              <p className="text-5xl sm:text-6xl md:text-7xl font-bold text-rose-deep mb-4">
                Love
              </p>
              <p className="text-xl sm:text-2xl italic text-muted-foreground">
                Every moment since you walked into my life,<br />
                the universe feels a little more magical.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", delay: 1 }}
              className="inline-block"
            >
              <a
                href="#memory-section"
                className="group relative inline-block"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#memory-section')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="glass rounded-full p-8 shadow-xl cursor-pointer touch-manipulation"
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  >
                    <Heart className="w-16 h-16 fill-rose-deep text-rose-deep" />
                  </motion.div>
                </motion.div>
                <p className="mt-4 text-rose-deep font-medium">
                  Click the heart when you're ready...
                </p>
                <p className="text-sm text-muted-foreground italic mt-2">
                  (Some feelings are too precious to rush)
                </p>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
