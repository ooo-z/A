import { useState, useEffect, type CSSProperties } from "react";
import { AnimatePresence, motion } from "motion/react";
import { type Character, TEAMS, getIdentity } from "./data";
import { ProfileView } from "./components/ProfileView";
import { parseEmojisToPixels } from "./components/pixelIcons";
import { useAudio } from "./AudioContext";
import { StartScreen } from "./components/StartScreen";
import { SpaceBackground } from "./components/SpaceBackground";
import { NexusScreen } from "./components/NexusScreen";
import { VectorInfoScreen } from "./components/VectorInfoScreen";

export default function App() {
  const [showStartScreen, setShowStartScreen] = useState(true);
  const [viewState, setViewState] = useState<"nexus" | "grid" | "quote" | "profile" | "info">("nexus");
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);
  const [currentFolder, setCurrentFolder] = useState<string | null>(null);
  const { playlistContext, isPlaying, togglePlay, isLooping, toggleLoop, closePlayer } = useAudio();

  const handleSelectCharacter = (character: Character) => {
    setSelectedCharacter(character);
    setViewState("quote");

    // Automatically transition to profile after quote
    setTimeout(() => {
      setViewState("profile");
    }, 3000);
  };

  const handleBack = () => {
    setViewState("grid");
    setSelectedCharacter(null);
  };

  const handleNavigate = (id: string) => {
    const char = TEAMS.flatMap(t => t.characters).find(c => c.id === id);
    if (char) {
      setSelectedCharacter(char);
      setViewState("profile");
    }
  };

  // Expose to window for inline HTML onclick handlers
  useEffect(() => {
    (window as any).appNavigate = handleNavigate;
    return () => {
      delete (window as any).appNavigate;
    };
  }, []);

  const showAudioBar = playlistContext && viewState !== "profile";

  return (
    <div className="min-h-screen bg-black selection:bg-white selection:text-black font-sans relative overflow-hidden">
      {!showStartScreen && <SpaceBackground />}
      
      <AnimatePresence>
        {showStartScreen && (
          <StartScreen key="start-screen" onComplete={() => setShowStartScreen(false)} />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showAudioBar && !showStartScreen && (
          <motion.div
            key="audio-bar"
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ type: "tween", duration: 0.15, ease: "linear" }}
            className="fixed top-0 left-0 w-full z-50 text-white shadow-xl flex items-center justify-between px-4 py-2 border-b-2"
            style={{ backgroundColor: playlistContext.themeColor, borderColor: '#fff' }}
          >
            <div className="flex items-center gap-3">
               <div className={`w-8 h-8 rounded-full border-2 border-white flex items-center justify-center bg-black/20 ${isPlaying ? 'animate-[spin_4s_linear_infinite]' : ''}`}>
                 <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
               </div>
               <div className="flex flex-col text-sm truncate max-w-[150px] md:max-w-xs">
                 <span 
                   className={`font-bold truncate text-black drop-shadow-sm ${playlistContext.songs[playlistContext.currentIndex].title.includes('Chroma') ? 'glitch-text relative' : ''}`}
                   data-text={playlistContext.songs[playlistContext.currentIndex].title}
                 >
                   {playlistContext.songs[playlistContext.currentIndex].title}
                 </span>
                 <span className="text-[10px] text-white/90 truncate">{playlistContext.songs[playlistContext.currentIndex].artist || "Vector-OZ Media Player"}</span>
               </div>
            </div>
            <div className="flex items-center gap-2">
               <button onClick={toggleLoop} className={`win95-button !p-1 w-8 h-8 flex items-center justify-center shrink-0 ${isLooping ? '!bg-black text-[#00ff00]' : '!bg-[#c0c0c0] text-black'} font-mono text-[10px] uppercase font-bold tracking-tighter shadow-inner`}>LP</button>
               <button onClick={togglePlay} className="win95-button !p-1 w-8 h-8 flex items-center justify-center text-sm font-bold !bg-[#c0c0c0] text-black shrink-0">{isPlaying ? '⏸' : '▶'}</button>
               <div className="w-px h-6 bg-white/50 mx-1"></div>
               <button onClick={closePlayer} className="win95-button !p-1 w-8 h-8 flex items-center justify-center text-xs font-bold !bg-[#c0c0c0] text-black shrink-0">X</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className={`${showAudioBar && !showStartScreen ? 'pt-[60px]' : 'pt-0'} transition-all min-h-screen flex flex-col relative z-20`}>
      <AnimatePresence mode="wait">
        {viewState === "nexus" && !showStartScreen && (
          <NexusScreen 
            key="nexus-screen" 
            onEnter={() => setViewState("info")} 
            onProfileClick={() => {
              setCurrentFolder(null);
              setViewState("grid");
            }}
          />
        )}

        {viewState === "info" && !showStartScreen && (
          <VectorInfoScreen key="info-screen" onBack={() => setViewState("nexus")} />
        )}

        {viewState === "grid" && !showStartScreen && (
          <motion.div
            key="grid"
            initial={{ clipPath: "inset(0 50% 0 50%)" }}
            animate={{ clipPath: "inset(0 0% 0 0%)" }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "linear" }}
            className="p-4 md:p-8 max-w-7xl mx-auto w-full"
          >
            <div className="win95-window p-1 flex flex-col h-[75vh] min-h-[500px]">
              {/* Title Bar */}
              <div className="win95-title-bar !bg-black mb-1">
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 bg-white border border-black flex items-center justify-center relative"><div className="absolute inset-0 bg-[#c0c0c0] w-1 h-1 right-0 top-0"></div></div>
                  <span>VECTOR_DATABASE_EXPLORER.EXE</span>
                </div>
                <div className="flex gap-1">
                  <div className="win95-button w-4 h-4 p-0 flex items-center justify-center text-[10px] bg-[#c0c0c0] text-black cursor-pointer" onClick={() => setViewState('nexus')}>_</div>
                  <div className="win95-button w-4 h-4 p-0 flex items-center justify-center text-[10px] bg-[#c0c0c0] text-black">□</div>
                  <div className="win95-button w-4 h-4 p-0 flex items-center justify-center text-[10px] bg-[#c0c0c0] text-black cursor-pointer" onClick={() => setViewState('nexus')}>X</div>
                </div>
              </div>

              {/* Menu */}
              <div className="flex gap-4 px-2 py-1 text-xs border-b border-[#808080] bg-[#dfdfdf] text-black">
                <span className="hover:bg-black hover:text-white px-2 cursor-pointer">File</span>
                <span className="hover:bg-black hover:text-white px-2 cursor-pointer">Edit</span>
                <span className="hover:bg-black hover:text-white px-2 cursor-pointer">View</span>
                <span className="hover:bg-black hover:text-white px-2 cursor-pointer">Help</span>
              </div>

              {/* Toolbar */}
              <div className="flex items-center gap-2 px-2 py-1 border-b border-[#808080] bg-[#dfdfdf] text-black">
                <button 
                  onClick={() => currentFolder ? setCurrentFolder(null) : setViewState('nexus')} 
                  className="win95-button px-3 py-1 text-xs gap-1 flex items-center"
                >
                  <span className="font-bold text-sm leading-none mt-[-2px]">↰</span> Up
                </button>
                <div className="w-[1px] h-6 bg-[#808080] border-r border-[#fff] mx-1"></div>
                <div className="flex flex-1 items-center gap-2 pr-2">
                  <span className="text-xs">Address:</span>
                  <div className="win95-inset bg-white flex-1 px-2 py-1 text-xs mono-font flex items-center gap-2 text-black">
                    <span className="w-3 h-3 bg-[#c0c0c0] border border-black inline-block relative shrink-0"><div className="absolute -top-1 left-0 w-1.5 h-1 bg-[#c0c0c0] border-t border-l border-black"></div></span>
                    C:\DATABASE{currentFolder ? `\\${currentFolder.toUpperCase()}` : ''}
                  </div>
                </div>
              </div>

              {/* Main Content Area */}
              <div className="flex-1 flex flex-col win95-inset bg-white m-1 overflow-x-auto overflow-y-auto block relative">
                <div className="min-w-[400px] flex flex-col w-full text-[13px] text-left">
                  {/* Header */}
                  <div className="bg-[#dfdfdf] sticky top-0 z-10 shadow-[0_1px_0_#000] text-black flex items-stretch">
                    <div className="win95-button !border-b-[#000] !border-r-[#000] !border-t-[#fff] !border-l-[#fff] font-normal px-2 py-1 w-[40%] flex-shrink-0 flex items-center justify-start truncate rounded-none">Name</div>
                    <div className="win95-button !border-b-[#000] !border-r-[#000] !border-t-[#fff] !border-l-[#fff] font-normal px-2 py-1 w-[25%] flex-shrink-0 flex items-center justify-start truncate rounded-none">Type</div>
                    {currentFolder === null ? (
                      <div className="win95-button !border-b-[#000] !border-r-[#000] !border-t-[#fff] !border-l-[#fff] font-normal px-2 py-1 flex-1 flex items-center justify-start truncate rounded-none">Contents</div>
                    ) : (
                      <>
                        <div className="win95-button !border-b-[#000] !border-r-[#000] !border-t-[#fff] !border-l-[#fff] font-normal px-2 py-1 w-[20%] flex-shrink-0 flex items-center justify-start truncate rounded-none">Vector Type</div>
                        <div className="win95-button !border-b-[#000] !border-r-[#000] !border-t-[#fff] !border-l-[#fff] font-normal px-2 py-1 flex-1 flex items-center justify-start truncate rounded-none">Identity</div>
                      </>
                    )}
                  </div>
                  
                  {/* Body */}
                  <div className="bg-white text-black flex-1 flex flex-col pt-[1px]">
                    {currentFolder === null ? (
                      TEAMS.map((team) => (
                        <div
                          key={team.id}
                          onClick={() => setCurrentFolder(team.id)}
                          className="flex group cursor-pointer hover:bg-black hover:text-white border-b border-transparent hover:border-dotted hover:border-black items-center"
                        >
                          <div className="w-[40%] px-2 py-1.5 flex-shrink-0 flex items-center gap-3 min-w-0">
                            <div className="w-4 h-3 bg-yellow-400 border border-black relative shrink-0 ml-1 mt-1">
                              <div className="absolute -top-1 left-0 w-2 h-1 bg-yellow-400 border-x border-t border-black"></div>
                            </div>
                            <span className="truncate block">{team.name}</span>
                          </div>
                          <div className="w-[25%] px-2 py-1.5 flex-shrink-0 truncate">File Folder</div>
                          <div className="flex-1 px-2 py-1.5 truncate">{team.characters.length} Assets</div>
                        </div>
                      ))
                    ) : (
                      TEAMS.find(t => t.id === currentFolder)?.characters.map((char) => (
                        <div
                          key={char.id}
                          onClick={() => handleSelectCharacter(char)}
                          className="flex group cursor-pointer hover:bg-black hover:text-white border-b border-transparent hover:border-dotted hover:border-black items-center"
                        >
                          <div className="w-[40%] px-2 py-1.5 flex-shrink-0 flex items-center gap-3 min-w-0">
                             <div className="w-3 h-4 bg-white border border-black flex items-center justify-center relative shrink-0 ml-1 mt-0.5">
                               <div className="absolute inset-0 bg-transparent w-full h-1 right-0 top-0 border-b border-black mix-blend-multiply"></div>
                               <div className="absolute inset-0 bg-transparent w-1 h-full right-0 top-0 border-l border-black mix-blend-multiply"></div>
                               <div 
                                  className="absolute bottom-0 right-0 w-1.5 h-1.5 border border-black opacity-90 shadow-[1px_1px_0_0_#000]"
                                  style={{ backgroundColor: char.themeColor || '#a18cd1' }}
                                />
                            </div>
                            <span className="truncate block">{char.codename}.exe</span>
                          </div>
                          <div className="w-[25%] px-2 py-1.5 flex-shrink-0 truncate">Application</div>
                          <div className="w-[20%] px-2 py-1.5 flex-shrink-0 truncate">{char.vectorType || `${char.affiliation}-A`}</div>
                          <div className="flex-1 px-2 py-1.5 truncate uppercase">{getIdentity(char.id)}</div>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              </div>

              {/* Status Bar */}
              <div className="bg-[#dfdfdf] flex items-center px-1 py-1 text-[11px] gap-2 text-black">
                <div className="win95-inset px-2 py-0.5 flex-1 bg-[#dfdfdf] shadow-none border-t-[#808080] border-l-[#808080] border-b-[#fff] border-r-[#fff] border">
                  {currentFolder === null ? `${TEAMS.length} object(s)` : `${TEAMS.find(t => t.id === currentFolder)?.characters.length || 0} object(s)`}
                </div>
                <div className="win95-inset px-4 py-0.5 bg-[#dfdfdf] shadow-none border-t-[#808080] border-l-[#808080] border-b-[#fff] border-r-[#fff] border">
                  7.98 MB
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {viewState === "quote" && selectedCharacter && (
          <motion.div
            key="quote"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "linear" }}
            className="fixed inset-0 flex items-center justify-center bg-black/80 z-50 px-8"
          >
            <div className="win95-window p-1 max-w-2xl w-full">
               <div className="win95-title-bar">
                 <span>CHARACTER_BOOT.LOG</span>
               </div>
               <div className="bg-[#dfdfdf] p-8 text-black font-sans text-lg md:text-xl leading-relaxed border border-t-[#808080] border-l-[#808080] border-b-[#fff] border-r-[#fff] shadow-[inset_1px_1px_0_#000,inset_-1px_-1px_0_#c0c0c0]">
                 <p className="animate-pulse font-bold">LOADING PROFILE: {selectedCharacter.codename.toUpperCase()}...</p>
                 <div className="mt-4 break-words inline-flex flex-wrap items-center">
                    "
                    <span dangerouslySetInnerHTML={{ __html: parseEmojisToPixels(selectedCharacter.quote) }} />
                    "
                 </div>
                 <div className="mt-8 flex gap-[2px] h-8 w-full bg-white p-[2px] border border-[#808080] shadow-[inset_1px_1px_2px_rgba(0,0,0,0.2)]">
                    {Array.from({ length: 35 }).map((_, i) => (
                      <motion.div 
                        key={i}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: i * 0.08, duration: 0 }}
                        className="h-full flex-1 bg-black min-w-[4px]"
                      />
                    ))}
                 </div>
               </div>
            </div>
          </motion.div>
        )}

        {viewState === "profile" && selectedCharacter && (
          <motion.div
            key="profile"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15, ease: "linear" }}
            className="p-2 md:p-4 w-full h-screen overflow-y-auto"
          >
             <div className="max-w-[75rem] mx-auto h-full">
               <ProfileView 
                 character={selectedCharacter} 
                 onBack={handleBack} 
                 onNavigate={handleNavigate}
               />
             </div>
          </motion.div>
        )}
      </AnimatePresence>
      </div>
    </div>
  );
}
