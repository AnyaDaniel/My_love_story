import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Heart, Calendar } from 'lucide-react';

interface Memory {
  id: number;
  image: string;
  title: string;
  date: string;
  description: string;
}

const MemoryGallery = () => {
  const [selectedMemory, setSelectedMemory] = useState<Memory | null>(null);

  // Placeholder memories - you can replace these with actual photos
  const memories: Memory[] = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=800&h=600&fit=crop',
      title: 'First Date',
      date: 'January 14, 2024',
      description: 'The day everything changed 💕'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=800&h=600&fit=crop',
      title: 'Beach Sunset',
      date: 'March 20, 2024',
      description: 'Watching the sunset together 🌅'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1464047736614-af63643285bf?w=800&h=600&fit=crop',
      title: 'Mountain Adventure',
      date: 'May 10, 2024',
      description: 'Reaching new heights together ⛰️'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop',
      title: 'Cozy Dinner',
      date: 'July 7, 2024',
      description: 'Candlelit dinner for two 🕯️'
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&h=600&fit=crop',
      title: 'Stargazing Night',
      date: 'August 15, 2024',
      description: 'Under the stars, holding hands ✨'
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&h=600&fit=crop',
      title: 'Concert Night',
      date: 'September 22, 2024',
      description: 'Dancing to our favorite songs 🎶'
    }
  ];

  return (
    <section id="memory-section" className="relative py-16 sm:py-24 px-4 overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, hsl(36, 100%, 97%) 0%, hsl(351, 78%, 96%) 100%)',
        }}
      />

      <div className="relative container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="text-4xl sm:text-5xl mb-4 block">📸</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Beautiful Memories
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto px-4">
            Every moment with you is a treasure worth remembering
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {memories.map((memory, index) => (
            <motion.div
              key={memory.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl cursor-pointer shadow-md hover:shadow-xl transition-all duration-300"
              onClick={() => setSelectedMemory(memory)}
            >
              {/* Image */}
              <img
                src={memory.image}
                alt={memory.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white">
                  <h3 className="font-serif text-xl sm:text-2xl font-bold mb-2">
                    {memory.title}
                  </h3>
                  <div className="flex items-center gap-2 text-sm opacity-90">
                    <Calendar className="w-4 h-4" />
                    <span>{memory.date}</span>
                  </div>
                </div>
              </div>

              {/* Heart icon */}
              <motion.div
                className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full p-2 sm:p-2.5 opacity-0 group-hover:opacity-100 transition-opacity"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Heart className="w-4 h-4 sm:w-5 sm:h-5 fill-rose-deep text-rose-deep" />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Add Memory Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <button className="px-6 sm:px-8 py-3 sm:py-4 bg-rose-deep text-white rounded-full font-medium shadow-lg hover:shadow-xl hover:bg-rose-deep/90 transition-all duration-300 text-sm sm:text-base touch-manipulation min-h-[44px]">
            Add More Memories 💕
          </button>
        </motion.div>
      </div>

      {/* Modal for selected memory */}
      <AnimatePresence>
        {selectedMemory && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedMemory(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative bg-white rounded-3xl overflow-hidden max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedMemory(null)}
                className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm rounded-full p-2 sm:p-3 hover:bg-white transition-colors touch-manipulation min-h-[44px] min-w-[44px] flex items-center justify-center"
                aria-label="Close memory detail"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              {/* Image */}
              <div className="relative aspect-video">
                <img
                  src={selectedMemory.image}
                  alt={selectedMemory.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8">
                <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-rose-deep mb-4">
                  {selectedMemory.title}
                </h3>
                <div className="flex items-center gap-2 text-muted-foreground mb-6">
                  <Calendar className="w-5 h-5" />
                  <span className="text-base sm:text-lg">{selectedMemory.date}</span>
                </div>
                <p className="text-base sm:text-lg text-foreground leading-relaxed">
                  {selectedMemory.description}
                </p>

                {/* Decorative hearts */}
                <div className="mt-8 flex justify-center gap-2">
                  {[...Array(5)].map((_, i) => (
                    <motion.span
                      key={i}
                      className="text-2xl"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 1, repeat: Infinity, delay: i * 0.1 }}
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

export default MemoryGallery;
