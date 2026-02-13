import { useState } from 'react';
import RoseCursor from '@/components/RoseCursor';
import FloatingPetals from '@/components/FloatingPetals';
import Navigation from '@/components/Navigation';
import OurStory from '@/components/OurStory';
import HeroSection from '@/components/HeroSection';
import GenderSelection from '@/components/GenderSelection';
import RoseMessage from '@/components/RoseMessage';
import RoseGarden from '@/components/RoseGarden';
import MemoryGallery from '@/components/MemoryGallery';
import SpotifyPlaylist from '@/components/SpotifyPlaylist';
import LoveLetter from '@/components/LoveLetter';
import Footer from '@/components/Footer';
import SplashScreen from '@/components/SplashScreen';
import BackgroundMusic from '@/components/BackgroundMusic';

const Index = () => {
  const [showContent, setShowContent] = useState(false);

  return (
    <>
      {/* Splash Screen */}
      {!showContent && <SplashScreen onComplete={() => setShowContent(true)} />}
      
      {/* Main Content */}
      {showContent && (
        <div className="min-h-screen bg-background cursor-none overflow-x-hidden scroll-smooth">
          {/* Custom Rose Cursor */}
          <RoseCursor />
          
          {/* Floating Petals Background */}
          <FloatingPetals count={25} />
          
          {/* Navigation Bar */}
          <Navigation />
          
          {/* Background Music Player */}
          <BackgroundMusic />
          
          {/* Main Content */}
          <main className="relative">
            {/* Our Story - Full Screen Story Mode */}
            <OurStory />
            
            {/* Our Memory Gallery Section */}
            <MemoryGallery />
            
            {/* Love Letters Section */}
            <div id="love-letters">
              <LoveLetter />
            </div>
            
            {/* Spotify Playlist Section */}
            <div id="spotify-section">
              <SpotifyPlaylist />
            </div>
            
            {/* Interactive Rose Garden */}
            <RoseGarden />
            
            {/* Footer */}
            <Footer />
          </main>
        </div>
      )}
    </>
  );
};

export default Index;
