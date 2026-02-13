import { motion } from 'framer-motion';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  activeSection?: string;
}

const Navigation = ({ activeSection = 'story' }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'story', label: 'Our Story', href: '#our-story' },
    { id: 'memories', label: 'Memories', href: '#memory-section' },
    { id: 'surprise', label: 'Surprise', href: '#love-letters' },
    { id: 'for-you', label: 'For You', href: '#spotify-section' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 hidden md:block"
      >
        <div className="container mx-auto px-6 py-6">
          <div className="glass rounded-full px-8 py-4 flex items-center justify-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.href)}
                className={`relative px-4 py-2 font-medium transition-colors duration-300 ${
                  activeSection === item.id
                    ? 'text-rose-deep'
                    : 'text-muted-foreground hover:text-rose-deep'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-rose-deep rounded-full"
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation - Hamburger Menu */}
      <div className="fixed top-0 left-0 right-0 z-50 md:hidden">
        <div className="container mx-auto px-4 py-4">
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="glass rounded-full p-3 ml-auto block touch-manipulation min-h-[44px] min-w-[44px]"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-rose-deep" />
            ) : (
              <Menu className="w-6 h-6 text-rose-deep" />
            )}
          </motion.button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-4 right-4 mt-2 glass rounded-3xl overflow-hidden shadow-xl"
          >
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => scrollToSection(item.href)}
                className={`w-full px-6 py-4 text-left font-medium transition-colors border-b border-rose-soft/30 last:border-b-0 touch-manipulation min-h-[44px] ${
                  activeSection === item.id
                    ? 'text-rose-deep bg-rose-soft/20'
                    : 'text-muted-foreground hover:bg-rose-soft/10'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="ml-2 text-xl">💕</span>
                )}
              </motion.button>
            ))}
          </motion.div>
        )}
      </div>
    </>
  );
};

export default Navigation;
