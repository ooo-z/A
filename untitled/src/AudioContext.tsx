import React, { createContext, useContext, useState, useRef, useEffect } from 'react';

export interface ThemeSong {
  title: string;
  artist?: string;
  url: string;
  duration?: string;
}

export interface PlaylistContextData {
  characterId: string;
  themeColor: string;
  songs: ThemeSong[];
  currentIndex: number;
}

interface AudioContextType {
  playlistContext: PlaylistContextData | null;
  isPlaying: boolean;
  isLooping: boolean;
  playPlaylist: (songs: ThemeSong[], startIndex: number, characterId: string, themeColor: string) => void;
  togglePlay: () => void;
  toggleLoop: () => void;
  closePlayer: () => void;
  audioRef: React.RefObject<HTMLAudioElement | null>;
}

const AudioContext = createContext<AudioContextType | null>(null);

export const useAudio = () => {
  const ctx = useContext(AudioContext);
  if (!ctx) throw new Error("useAudio must be used within AudioProvider");
  return ctx;
};

export const AudioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [playlistContext, setPlaylistContext] = useState<PlaylistContextData | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLooping, setIsLooping] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const playPlaylist = (songs: ThemeSong[], startIndex: number, characterId: string, themeColor: string) => {
    // Explicitly start playback right away on user click to bypass some autoplay restrictions
    // This is often more reliable than starting in a useEffect
    if (audioRef.current) {
      const targetUrl = songs[startIndex].url;
      if (audioRef.current.src !== targetUrl && !audioRef.current.src.endsWith(targetUrl)) {
        audioRef.current.src = targetUrl;
      }
      
      audioRef.current.play().catch(e => {
        // AbortError is normal when scrubbing or skipping fast
        if (e.name !== 'AbortError' && e.name !== 'NotAllowedError') {
          console.error("Playback failed", e);
          setIsPlaying(false);
        } else if (e.name === 'NotAllowedError') {
          console.warn("Autoplay blocked. User interaction required.");
          setIsPlaying(false);
        }
      });
    }
    setPlaylistContext({ songs, currentIndex: startIndex, characterId, themeColor });
    setIsPlaying(true);
  };

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(e => console.error("Playback failed", e));
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleLoop = () => setIsLooping(prev => !prev);

  const closePlayer = () => {
    setIsPlaying(false);
    if (audioRef.current) audioRef.current.pause();
    setPlaylistContext(null);
  };

  useEffect(() => {
    if (audioRef.current && playlistContext) {
      const newUrl = playlistContext.songs[playlistContext.currentIndex].url;
      
      // Only update src if it's actually different to avoid "interrupted by a new load request"
      const currentSrc = audioRef.current.src;
      if (currentSrc !== newUrl && !currentSrc.endsWith(newUrl)) {
        audioRef.current.src = newUrl;
      }
      
      if (isPlaying) {
        audioRef.current.play().catch(e => {
          // AbortError is expected when a new play request cancels an old one
          if (e.name !== 'AbortError' && e.name !== 'NotAllowedError') {
            console.error("Delayed playback failed", e);
            setIsPlaying(false);
          }
        });
      }
    }
  }, [playlistContext?.currentIndex, playlistContext?.characterId]);

  const handleAudioError = (e: React.SyntheticEvent<HTMLAudioElement, Event>) => {
    const target = e.currentTarget;
    console.error("Audio Load Error:", target.error);
    if (target.error?.code === 4) { // MEDIA_ERR_SRC_NOT_SUPPORTED
      console.error("Failed to load because no supported source was found or URL is invalid.");
    }
    setIsPlaying(false);
  };

  return (
    <AudioContext.Provider value={{
      playlistContext,
      isPlaying,
      isLooping,
      playPlaylist,
      togglePlay,
      toggleLoop,
      closePlayer,
      audioRef
    }}>
      {children}
      <audio 
        ref={audioRef} 
        loop={isLooping}
        preload="auto"
        onEnded={() => setIsPlaying(false)} 
        onPause={() => setIsPlaying(false)} 
        onPlay={() => setIsPlaying(true)} 
        onError={handleAudioError}
      />
    </AudioContext.Provider>
  );
};
