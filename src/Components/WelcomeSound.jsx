import React, { useEffect, useRef } from 'react';
import welcomeSound from '../assets/car-music.mp3';

const WelcomeSound = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    const playWelcomeSound = () => {
      if (audioRef.current) {        
      audioRef.current.volume = 0.1;
      audioRef.current.loop = true;
        audioRef.current.play()
          .catch(error => {
            console.error('Failed to play audio:', error);
          });
      }
    };

    const handleScroll = () => {
      playWelcomeSound();
      window.removeEventListener('scroll', handleScroll);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <audio ref={audioRef} src={welcomeSound} />
  );
};

export default WelcomeSound;
