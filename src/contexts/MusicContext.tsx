import { createContext, useContext, useRef, ReactNode } from 'react';

interface MusicContextType {
  pauseBackgroundMusic: () => void;
  resumeBackgroundMusic: () => void;
  backgroundMusicRef: React.RefObject<HTMLAudioElement> | null;
}

const MusicContext = createContext<MusicContextType | undefined>(undefined);

export const MusicProvider = ({ children }: { children: ReactNode }) => {
  const backgroundMusicRef = useRef<HTMLAudioElement>(null);

  const pauseBackgroundMusic = () => {
    if (backgroundMusicRef.current && !backgroundMusicRef.current.paused) {
      backgroundMusicRef.current.pause();
    }
  };

  const resumeBackgroundMusic = () => {
    if (backgroundMusicRef.current && backgroundMusicRef.current.paused) {
      backgroundMusicRef.current.play().catch(err => console.log('Resume failed:', err));
    }
  };

  return (
    <MusicContext.Provider value={{ pauseBackgroundMusic, resumeBackgroundMusic, backgroundMusicRef }}>
      {children}
    </MusicContext.Provider>
  );
};

export const useMusicContext = () => {
  const context = useContext(MusicContext);
  if (!context) {
    throw new Error('useMusicContext must be used within MusicProvider');
  }
  return context;
};
