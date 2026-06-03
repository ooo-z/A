import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CHARACTER_QUOTES, QuoteSituation } from '../quotesData';
import type { Character } from '../data';

function GlitchText({ text, speed = 150 }: { text: string; speed?: number }) {
  const [displayText, setDisplayText] = useState(text);
  const chars = "░▒▓█▀▄▌▐█▓▒░0123456789ABCDEF!@#$%^&*";

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayText(prev => {
        return prev.split('').map((char, i) => {
          if (char === ' ' || char === '\n') return char;
          // Much lower randomization probability
          if (Math.random() > 0.985) return chars[Math.floor(Math.random() * chars.length)];
          return text[i];
        }).join('');
      });
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  return <span className="glitch-text inline-block" data-text={text}>{displayText}</span>;
}

import { parseEmojisToPixels } from './pixelIcons';
import { getIdentity } from '../data';
import { useAudio } from '../AudioContext';
import { ChessGame } from './ChessGame';
import { WordGame } from './WordGame';
import { MazeGame } from './MazeGame';
import { DifferenceGame } from './DifferenceGame';
import { GreenLightGame } from './GreenLightGame';

export function ProfileView({ 
  character, 
  onBack,
  onNavigate 
}: { 
  character: Character; 
  onBack: () => void;
  onNavigate?: (id: string) => void;
}) {
  const tc = character.themeColor || "#0000aa";
  const { playPlaylist, playlistContext, isPlaying, togglePlay, isLooping, toggleLoop } = useAudio();
  const [activeTab, setActiveTab] = useState('general');
  const [expandedQuotes, setExpandedQuotes] = useState<Record<QuoteSituation, boolean>>({} as any);

  const situations: QuoteSituation[] = ['인사', '잡담 1', '잡담 2', '대하여 1', '대하여 2', '접촉', '선물', '업무', '임무 중', '방치'];

  const toggleQuote = (situation: QuoteSituation) => {
    setExpandedQuotes(prev => ({
      ...prev,
      [situation]: !prev[situation]
    }));
  };

  const [showFrostPopup, setShowFrostPopup] = useState(false);
  const [showIgnisPopup, setShowIgnisPopup] = useState(false);
  const [showChessGame, setShowChessGame] = useState(false);
  const [showWordGame, setShowWordGame] = useState(false);
  const [showMazeGame, setShowMazeGame] = useState(false);
  const [showDifferenceGame, setShowDifferenceGame] = useState(false);
  const [showGreenLightGame, setShowGreenLightGame] = useState(false);

  useEffect(() => {
    const handleNavigate = (e: any) => {
      if (onNavigate) {
        onNavigate(e.detail);
      }
    };
    window.addEventListener('navigate-to', handleNavigate);
    
    // Add a global helper for easier access from raw HTML strings
    (window as any).appNavigate = (id: string) => {
      if (onNavigate) onNavigate(id);
    };

    return () => {
      window.removeEventListener('navigate-to', handleNavigate);
      delete (window as any).appNavigate;
    };
  }, [onNavigate]);

  const isDark = character.isDarkContent;
  const isGlitch = character.isGlitch;

  const handleNavigateToOrbit = () => {
    if (onNavigate) {
      setShowIgnisPopup(false);
      onNavigate('orbit');
    }
  };

  return (
    <div className={`win95-window h-full flex flex-col font-sans overflow-hidden relative shadow-[4px_4px_0_rgba(0,0,0,0.5)] ${isDark ? 'dark-content-window' : 'text-black'}`}>
      {/* Title Bar - Uses Character's theme color for a unique retro touch */}
      <div className="win95-title-bar" style={{ background: isGlitch ? 'linear-gradient(90deg, #000, #ff0000, #FFD700)' : tc }}>
        <div className="flex items-center gap-2">
          {/* Mock mini icon matching the pixel file */}
          <div className="w-3 h-4 bg-white border border-black flex items-center justify-center relative">
             <div className="absolute inset-0 bg-[#c0c0c0] w-1 h-1 right-0 top-0"></div>
          </div>
          <span className={`font-bold tracking-tight drop-shadow-md ${tc.toLowerCase() === '#ffffff' || tc.toLowerCase() === '#fff' ? 'text-black drop-shadow-none' : 'text-white'} ${isGlitch ? 'glitch-text' : ''}`}>
             {isGlitch ? <GlitchText text={`Properties for ${character.codename.toUpperCase()}`} /> : `Properties for ${character.codename.toUpperCase()}`}
          </span>
        </div>
        <div className="flex gap-1">
          <button className="win95-button w-[18px] h-[16px] !p-0 font-bold text-black" title="Minimize" onClick={onBack}>_</button>
          <button className="win95-button w-[18px] h-[16px] !p-0 font-bold text-black" title="Maximize">□</button>
          <button 
            onClick={onBack}
            className="win95-button w-[18px] h-[16px] !p-0 font-bold text-black" 
            title="Close"
          >
            ×
          </button>
        </div>
      </div>

      {/* Menu Bar */}
      <div className={`flex gap-4 px-2 py-1 text-xs border-b border-[#808080] w-full ${isDark ? 'bg-[#111] text-white' : 'bg-[#c0c0c0]'}`}>
        <span 
          className={`px-2 cursor-pointer hover:bg-[#000080] hover:text-white ${showIgnisPopup ? 'bg-[#000080] text-white' : ''}`}
          onClick={() => character.ignisProject && setShowIgnisPopup(true)}
        >
          File
        </span>
        <span 
          className={`px-2 cursor-pointer hover:bg-[#000080] hover:text-white ${showFrostPopup ? 'bg-[#000080] text-white' : ''}`}
          onClick={() => character.frostProject && setShowFrostPopup(true)}
        >
          Options
        </span>
        <a href="https://posty.pe/vzkqaz" target="_blank" rel="noreferrer" className="hover:bg-[#000080] hover:text-white px-2 decoration-none leading-none pt-0.5" style={{ color: 'inherit' }}>Guidelines</a>
      </div>

      <div className={`flex-1 flex flex-col p-2 min-h-0 ${isDark ? 'bg-black' : 'bg-[#c0c0c0]'}`}>
        
        {/* Win95 Tab Header */}
        <div className={`win95-tab-container text-[10px] sm:text-xs mt-2 pl-2 border-b z-10 relative flex w-full -mb-[1px] overflow-hidden ${isDark ? 'border-[#444]' : 'border-white'}`}>
           <button 
             key="general"
             className={`win95-button !border-b-0 relative cursor-pointer px-2 sm:px-3 md:px-5 py-1 flex-1 min-w-0 overflow-hidden whitespace-nowrap ${isDark ? 'bg-[#333] text-[#aaa]' : 'bg-[#c0c0c0]'} ${activeTab === 'general' ? 'z-20 font-bold -top-[2px] h-8 shadow-[0_-2px_0_rgba(255,255,255,0.7)]' : 'z-0 h-6 mt-2 opacity-80'}`}
             onClick={() => setActiveTab('general')}
           >
             <span className="truncate">{character.id === 'eterner' ? 'File Log' : 'General'}</span>
           </button>
           <button 
             key="power"
             className={`win95-button !border-b-0 relative cursor-pointer px-2 sm:px-3 md:px-5 py-1 flex-1 min-w-0 overflow-hidden whitespace-nowrap ${isDark ? 'bg-[#333] text-[#aaa]' : 'bg-[#c0c0c0]'} ${activeTab === 'power' ? 'z-20 font-bold -top-[2px] h-8 shadow-[0_-2px_0_rgba(255,255,255,0.7)]' : 'z-0 h-6 mt-2 opacity-80'}`}
             onClick={() => setActiveTab('power')}
           >
             <span className="truncate">Psychic power</span>
           </button>
           <button 
             key="review"
             className={`win95-button !border-b-0 relative cursor-pointer px-2 sm:px-3 md:px-5 py-1 flex-1 min-w-0 overflow-hidden whitespace-nowrap ${isDark ? 'bg-[#333] text-[#aaa]' : 'bg-[#c0c0c0]'} ${activeTab === 'review' ? 'z-20 font-bold -top-[2px] h-8 shadow-[0_-2px_0_rgba(255,255,255,0.7)]' : 'z-0 h-6 mt-2 opacity-80'}`}
             onClick={() => setActiveTab('review')}
           >
             <span className="truncate">Personnel report</span>
           </button>
           <button 
             key="theme"
             className={`win95-button !border-b-0 relative cursor-pointer px-2 sm:px-3 md:px-5 py-1 flex-1 min-w-0 overflow-hidden whitespace-nowrap ${isDark ? 'bg-[#333] text-[#aaa]' : 'bg-[#c0c0c0]'} ${activeTab === 'theme' ? 'z-20 font-bold -top-[2px] h-8 shadow-[0_-2px_0_rgba(255,255,255,0.7)]' : 'z-0 h-6 mt-2 opacity-80'}`}
             onClick={() => setActiveTab('theme')}
           >
             <span className="truncate">Theme Song</span>
           </button>
           <button 
             key="quotes"
             className={`win95-button !border-b-0 relative cursor-pointer px-2 sm:px-3 md:px-5 py-1 flex-1 min-w-0 overflow-hidden whitespace-nowrap ${isDark ? 'bg-[#333] text-[#aaa]' : 'bg-[#c0c0c0]'} ${activeTab === 'quotes' ? 'z-20 font-bold -top-[2px] h-8 shadow-[0_-2px_0_rgba(255,255,255,0.7)]' : 'z-0 h-6 mt-2 opacity-80'}`}
             onClick={() => setActiveTab('quotes')}
           >
             <span className="truncate">대사</span>
           </button>
        </div>

        {/* Tab Content Body */}
        <div className={`win95-window p-4 flex-1 flex flex-col overflow-y-auto relative z-10 ${isDark ? 'bg-black !border-t-[#444]' : 'bg-[#c0c0c0] !border-t-white'}`}>
          
          {/* ------ TAB: GENERAL ------ */}
          {activeTab === 'general' && (
            <div className="flex gap-6 h-full flex-col lg:flex-row">
              {/* Left Column -> Icon representation and core data */}
              <div className="lg:w-1/3 flex flex-col gap-4">
                 
                 <div className={`flex justify-center p-6 win95-inset relative ${isDark ? 'bg-black opacity-80' : 'bg-[#ffffff]'}`} style={{ backgroundImage: 'radial-gradient(#888 1px, transparent 0)', backgroundSize: '4px 4px' }}>
                   {/* Large unique pixel portrait or file box based on char */}
                   <div 
                     className="w-32 h-40 border-[3px] border-black bg-[#c0c0c0] relative flex flex-col shadow-[4px_4px_0_0_#808080]"
                     style={{ borderTopColor: tc, borderLeftColor: tc }}
                   >
                      <div className="flex-1 overflow-hidden p-2 grid grid-cols-4 grid-rows-5 gap-1 opacity-50 mix-blend-multiply">
                        {/* Fake data pixel pattern */}
                        {[...Array(20)].map((_, i) => (
                           <div key={i} className={`bg-black ${i % 3 === 0 ? 'bg-current' : ''} ${i % 7 === 0 ? 'bg-white' : ''}`} style={{ color: tc }}></div>
                        ))}
                      </div>
                      <div className="h-8 bg-black flex items-center justify-center p-1 border-t-2" style={{ borderTopColor: tc }}>
                         <div className="text-white text-[10px] mono-font truncate tracking-widest">{character.vectorType}</div>
                      </div>
                   </div>

                   {character.badge && (
                      <div 
                        className="absolute bottom-2 right-2 px-2 py-1 border border-black font-bold tracking-widest text-[9px] shadow-[1px_1px_0_0_#000] whitespace-nowrap" 
                        style={{ 
                          backgroundColor: character.badge.color || '#fde047',
                          color: character.badge.textColor || 'black',
                          boxShadow: `1px 1px 0 0 ${character.badge.shadow || '#000'}`
                        }}
                      >
                        {character.badge.text.toUpperCase()}
                      </div>
                    )}
                 </div>

                 <div className={`win95-inset p-3 text-[13px] leading-6 ${isDark ? 'bg-black text-white' : 'bg-white text-black'}`}>
                    <p><strong>Database ID:</strong> <br/><span className={`mono-font px-1 ${isDark ? 'bg-[#111]' : 'bg-[#dfdfdf]'}`}>{getIdentity(character.id)}</span></p>
                    <p><strong>Affiliation:</strong> <br/><span className={`mono-font px-1 ${isDark ? 'bg-[#111]' : 'bg-[#dfdfdf]'}`}>
                      {character.affiliation === 'CENTRAL' ? 'EVERLAST' : 
                       character.affiliation === 'AREA' ? 'CORE' : 
                       character.affiliation === 'TUNNEL' ? 'SYNCHRONIZE' : 
                       character.affiliation === 'LINE' ? 'ACTIVE' : 
                       character.affiliation}
                   </span></p>
                    <p><strong>Vector Type:</strong> <br/><span className={`mono-font px-1 ${isDark ? 'bg-[#111]' : 'bg-[#dfdfdf]'}`}>{character.vectorType || "UNKNOWN"}</span></p>
                 </div>
              </div>

              {/* Right Column -> Text Data */}
              <div className="lg:w-2/3 flex flex-col gap-4">
                 
                 <div className="flex flex-col">
                   <h2 
                     className={`text-4xl md:text-5xl font-extrabold uppercase tracking-tighter mb-2 break-all pixel-font ${isGlitch ? 'glitch-text' : ''}`} 
                     style={{ color: isGlitch ? '#fff' : tc, textShadow: isDark ? '2px 2px 0 #000' : '2px 2px 0 #000' }}
                     data-text={character.codename}
                   >
                     {isGlitch ? <GlitchText text={character.codename} /> : character.codename}
                   </h2>
                   
                   <div className={`h-px w-full border-b mb-4 ${isDark ? 'bg-[#444] border-black' : 'bg-[#808080] border-white'}`}></div>

                   {/* Gender / Age / Quote section */}
                   <div className={`mb-4 p-3 border-l-4 ${isDark ? 'bg-[#111] text-[#ddd] border-[#444]' : 'bg-[#fff] text-black'} win95-inset`} style={{ borderLeftColor: tc }}>
                     <div className="flex flex-col gap-1.5 text-[13px] leading-relaxed">
                       <div className="flex"><span className="w-16 font-bold opacity-70">성별</span><span>{character.gender || "미상"}</span></div>
                       <div className="flex"><span className="w-16 font-bold opacity-70">나이</span><span>{character.age || "미상"}</span></div>
                       <div className="flex items-start"><span className="w-16 font-bold opacity-70 shrink-0">한마디</span><span className="font-bold flex-1 break-words flex items-center flex-wrap" style={{ color: tc }}>"<span dangerouslySetInnerHTML={{ __html: character.oneLiner || character.quote || '' }} />"</span></div>
                     </div>
                   </div>

                   <p className="font-bold text-sm mb-2 underline underline-offset-2">Description:</p>
                   {character.intro ? (
                     <div className={`win95-inset p-3 text-[13px] leading-relaxed whitespace-pre-wrap mb-4 ${isDark ? 'bg-black text-white border-[#444]' : 'bg-white text-black'}`}>
                       <div dangerouslySetInnerHTML={{ __html: parseEmojisToPixels(character.intro) }} />
                     </div>
                   ) : (
                     <p className="italic text-[#808080] mb-4">No description provided.</p>
                   )}

                   {character.chatLogs && (
                      <div className="mb-4">
                        <p className="font-bold text-sm mb-2 underline underline-offset-2">Archived Conversations:</p>
                        <div className={`p-1 border-2 shadow-[2px_2px_0_#fff] ${isDark ? 'bg-black border-[#222]' : 'bg-[#333] border-[#808080]'}`}>
                          <div className={`p-4 flex flex-col gap-3 font-sans border-inner shadow-inner max-h-[300px] overflow-y-auto ${isDark ? 'bg-[#0a0a0a]' : 'bg-[#f0f0f0]'}`}>
                            {/* Mobile-like header */}
                            <div className="flex justify-between items-center px-1 mb-2 border-b border-[#ccc] pb-1 text-[9px] text-[#999] uppercase tracking-tighter">
                              <div className="flex items-center gap-1">
                                <div className="w-1 h-1 bg-[#999]"></div>
                                <div className="w-1 h-1 bg-[#999]"></div>
                                <div className="w-1 h-1 bg-[#999]"></div>
                                <span>LTE</span>
                              </div>
                              <span className="font-bold whitespace-nowrap overflow-hidden text-ellipsis px-2">{character.codename}_Backup.log</span>
                              <div className="flex items-center gap-1">
                                <span>10:25 AM</span>
                                <div className="w-4 h-2 border border-[#999] p-[1px]"><div className="bg-[#999] h-full w-[80%]"></div></div>
                              </div>
                            </div>

                            {character.chatLogs.map((log, idx) => (
                              <div key={idx} className={`flex flex-col ${log.isMe ? 'items-end' : 'items-start'}`}>
                                {!log.isMe && (
                                  <div className="flex items-center gap-1 mb-1 ml-1">
                                    <div className="w-5 h-5 bg-[#607D8B] text-white border border-[#455A64] flex items-center justify-center text-[8px] font-bold">C</div>
                                    <span className="text-[10px] text-[#666] font-bold">{log.sender}</span>
                                  </div>
                                )}
                                <div 
                                  className={`max-w-[85%] px-3 py-2 rounded-2xl text-[12px] leading-tight shadow-sm relative ${
                                    log.isMe 
                                      ? 'bg-[#607D8B] text-white rounded-tr-none' 
                                      : `${isDark ? 'bg-[#222] text-white border-[#333]' : 'bg-white text-black border-[#ddd]'} rounded-tl-none border`
                                  }`}
                                >
                                  {log.message}
                                  <span className={`absolute bottom-0 text-[8px] whitespace-nowrap opacity-70 ${log.isMe ? '-left-12 text-[#666]' : '-right-12 text-[#666]'}`}>
                                    {log.timestamp}
                                  </span>
                                </div>
                              </div>
                            ))}
                          </div>
                          <div className={`border-t p-1 flex gap-1 ${isDark ? 'bg-[#0a0a0a] border-[#222]' : 'bg-[#dfdfdf] border-[#808080]'}`}>
                            <div className={`flex-1 border inset-p-1 text-[10px] p-1 ${isDark ? 'bg-black text-[#444] border-[#222]' : 'bg-white text-[#888]'}`}>Type a message...</div>
                            <div className="bg-[#c0c0c0] border border-black px-2 text-[10px] flex items-center text-black">SEND</div>
                          </div>
                        </div>
                      </div>
                    )}

                   <p className="font-bold text-sm mb-2 underline underline-offset-2">Background Story:</p>
                   {character.story ? (
                     <div className={`win95-inset p-4 text-[13px] leading-relaxed whitespace-pre-wrap flex flex-col gap-4 ${isDark ? 'bg-[#1c1c1c] text-white border-[#444]' : 'bg-[#dfdfdf] text-black border-white'}`}>
                       {character.story.split(/(?:\n+|^)(?=\[.*?\]\n)/g).filter(part => part.trim()).map((part, i) => {
                         const match = part.trim().match(/^\[(.*?)\]\n([\s\S]*)$/);
                         if (match) {
                           return (
                             <div key={i} className={`flex flex-col ${i > 0 ? (isDark ? 'border-t border-[#2a2a2a] pt-4 mt-2' : 'border-t border-[#d4d4d4] pt-4 mt-2') : ''}`}>
                               <div 
                                 className={`self-start px-2 py-0.5 text-[11px] font-bold font-mono tracking-widest text-[#fff] shadow-[1px_1px_0_#000] border border-[#000] mb-3 ${match[1].includes('스토리') ? '' : 'italic opacity-90'}`}
                                 style={{ backgroundColor: tc }}
                               >
                                 {match[1].includes('스토리') ? `[${match[1]}]` : match[1]}
                               </div>
                               <div className="pl-1" dangerouslySetInnerHTML={{ __html: parseEmojisToPixels(match[2].trim()) }} />
                             </div>
                           );
                         }
                         return <div key={i} className={i > 0 ? (isDark ? 'border-t border-[#2a2a2a] pt-4 mt-2' : 'border-t border-[#d4d4d4] pt-4 mt-2') : ''} dangerouslySetInnerHTML={{ __html: parseEmojisToPixels(part.trim()) }} />;
                       })}
                     </div>
                   ) : (
                     <p className="italic text-[#808080]">Classified / Missing Data.</p>
                   )}
                 </div>

                 <p className="font-bold text-sm mt-2 mb-1 underline underline-offset-2">Appearance Profile:</p>
                 <div className={`win95-inset p-3 h-full ${isDark ? 'bg-black text-white border-[#444]' : 'bg-white text-black'}`}>
                   {character.appearance ? (
                     <table className="w-full text-xs md:text-sm">
                       <tbody>
                         <tr className={`border-b ${isDark ? 'border-[#333]' : 'border-[#dfdfdf]'}`}>
                           <td className="py-2 text-[#808080] font-bold uppercase w-1/4 align-top">Height</td>
                           <td className="py-2 mono-font font-bold">{character.appearance.height || "-"}</td>
                         </tr>
                         <tr className={`border-b ${isDark ? 'border-[#333]' : 'border-[#dfdfdf]'}`}>
                           <td className="py-2 text-[#808080] font-bold uppercase w-1/4 align-top">Features</td>
                           <td 
                             className="py-2 whitespace-pre-wrap leading-relaxed"
                             dangerouslySetInnerHTML={{ __html: character.appearance.features || "-" }}
                           />
                         </tr>
                         <tr>
                           <td className="py-2 text-[#808080] font-bold uppercase w-1/4 align-top">Clothing &<br/>Acc</td>
                           <td 
                             className="py-2 whitespace-pre-wrap leading-relaxed"
                             dangerouslySetInnerHTML={{ __html: character.appearance.clothing || "No distinct features recorded." }}
                           />
                         </tr>
                       </tbody>
                     </table>
                   ) : (
                     <p className="italic text-[#808080]">Data missing.</p>
                   )}
                 </div>
              </div>
            </div>
          )}

          {/* ------ TAB: POWER ------ */}
          {activeTab === 'power' && (
             <div className="h-full flex flex-col">
               {character.psychicPower ? (
                <div className={`win95-inset-deep p-6 h-full overflow-y-auto ${isDark ? 'bg-black text-[#ccc] border-[#333]' : 'bg-[#000] text-[#ccc]'}`} style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(200,200,200,0.05) 2px, rgba(200,200,200,0.05) 4px)' }}>
                  <div className={`border border-dashed p-4 mb-6 relative ${isDark ? 'border-[#333]' : 'border-[#ccc]'}`}>
                     <div className="flex items-center gap-3">
                       <div className={`w-6 h-6 border-2 flex items-center justify-center relative ${isDark ? 'border-[#444]' : 'border-[#ccc]'}`}>
                          <div className={`w-2 h-2 ${isDark ? 'bg-[#444]' : 'bg-[#ccc]'}`}></div>
                          <div className={`absolute top-1/2 left-0 w-full h-[1px] ${isDark ? 'bg-[#444]' : 'bg-[#ccc]'}`}></div>
                       </div>
                       <h3 
                         className={`text-2xl font-bold uppercase pixel-font ${character.id === 'theater' ? 'block text-center w-full' : 'inline-block'} ${isGlitch ? 'glitch-text' : ''}`}
                         style={{ color: isGlitch ? '#fff' : (character.id === 'theater' || character.id === 'nevermore' || character.id === 'newmoon' ? '#fff' : tc), letterSpacing: character.id === 'theater' ? '5px' : 'normal', textShadow: character.id === 'theater' ? `2px 2px 0 ${tc}` : 'none' }}
                         data-text={character.psychicPower.name}
                       >
                         {isGlitch ? <GlitchText text={character.psychicPower.name} /> : character.psychicPower.name}
                       </h3>
                     </div>
                     <div className={`absolute top-0 right-0 px-2 py-0.5 text-[10px] font-bold tracking-widest uppercase items-center flex gap-1 ${isDark ? 'bg-[#333] text-white' : 'bg-[#ccc] text-black'}`}>
                        <div className={`w-1 h-1 rounded-none ${isDark ? 'bg-white' : 'bg-black'}`}></div>
                        OBSERVATION_LOG
                     </div>
                  </div>

                  <div className={`leading-[1.9] text-[13px] md:text-sm flex flex-col w-full mono-font ${isGlitch ? 'glitch-text opacity-90' : ''}`} data-text={character.psychicPower.description.replace(/<[^>]*>/g, '')}>
                    {(() => {
                      const description = character.psychicPower.description;
                      const delimiterIndex = description.indexOf('<div');
                      
                      if (delimiterIndex === 0) {
                        return <div dangerouslySetInnerHTML={{ __html: parseEmojisToPixels(description) }} />;
                      }

                      let textPart = description;
                      let htmlPart = '';

                      if (delimiterIndex > 0) {
                        textPart = description.substring(0, delimiterIndex).trim();
                        htmlPart = description.substring(delimiterIndex);
                      }

                      const lines = textPart.split('\n');
                      const blocks: string[] = [];
                      let currentBlock = '';
                      lines.forEach((line, i) => {
                        const isIndent = line.startsWith(' ') || line.startsWith('\t') || line.startsWith('<');
                        if (i === 0 || (!isIndent && line.trim().length > 0)) {
                          if (currentBlock) blocks.push(currentBlock);
                          currentBlock = line;
                        } else {
                          currentBlock += '\n' + line;
                        }
                      });
                      if (currentBlock) blocks.push(currentBlock);

                      return (
                        <>
                          {blocks.map((block, i) => (
                            <div 
                              key={`block-${i}`} 
                              className={`py-3.5 ${i !== 0 ? 'border-t' : ''}`}
                              style={i !== 0 ? { borderTopColor: isDark ? 'rgba(51, 51, 51, 0.7)' : 'rgba(204, 204, 204, 0.7)' } : {}}
                            >
                              <div 
                                className="flex items-start gap-2.5 whitespace-pre-wrap w-full"
                                dangerouslySetInnerHTML={{ __html: parseEmojisToPixels(block) }} 
                              />
                            </div>
                          ))}
                          {htmlPart && (
                            <div dangerouslySetInnerHTML={{ __html: parseEmojisToPixels(htmlPart) }} />
                          )}
                        </>
                      );
                    })()}
                  </div>

                  <div className="mt-8 animate-pulse text-xs">&gt; EOF_</div>

                  {character.id === 'ensure' && (
                    <div className="mt-8 pt-6 border-t border-dashed border-[#555]">
                       <div className="flex items-center gap-2 mb-4">
                          <div className="w-4 h-4 bg-[#a3d9d1]"></div>
                          <span className="text-[10px] font-bold uppercase tracking-widest text-[#a3d9d1]">TACTICAL_SIMULATION_LINK</span>
                       </div>
                       
                       <div 
                         onClick={() => setShowChessGame(true)}
                         className="win95-button w-full max-w-full md:max-w-md p-4 bg-[#dfdfdf] flex items-center justify-between gap-4 group cursor-pointer border-2 border-white border-r-[#808080] border-b-[#808080]"
                       >
                          <div className="flex items-center gap-4 overflow-hidden">
                            <div className="w-12 h-12 bg-white border-2 border-[#808080] border-t-black border-l-black flex items-center justify-center shrink-0">
                               {/* Mini Chess Board Icon */}
                               <div className="w-8 h-8 grid grid-cols-2 grid-rows-2 border border-black">
                                  <div className="bg-black"></div>
                                  <div className="bg-white"></div>
                                  <div className="bg-white"></div>
                                  <div className="bg-black"></div>
                               </div>
                            </div>
                            <div className="text-left min-w-0">
                               <div className="text-xs font-bold text-black group-hover:text-[#000080] truncate tracking-tight">SIM_TACTICS.EXE</div>
                               <div className="text-[9px] text-[#666] truncate">Spatial Logic Training v1.0.4</div>
                            </div>
                          </div>
                          <div className="text-[#808080] text-xl group-hover:translate-x-1 transition-transform shrink-0">▸</div>
                       </div>

                       <p className="mt-4 text-[10px] text-[#888] leading-tight">
                         * 이 시뮬레이션은 엔슈어의 전술적 식견을 바탕으로 설계된 훈련용 프로그램입니다. Windows 95 UI 체제와 엔슈어의 메인 컬러를 활용하며, 시뮬레이션 중 엔슈어가 직접 관여할 수 있습니다.
                       </p>
                    </div>
                  )}

                  {character.id === 'voice' && (
                    <div className="mt-8 pt-6 border-t border-dashed border-[#555]">
                       <div className="flex items-center gap-2 mb-4">
                          <div className="w-4 h-4 bg-[#b0c4de]"></div>
                          <span className="text-[10px] font-bold uppercase tracking-widest text-[#b0c4de]">LOGIC_TRAINING_LINK</span>
                       </div>
                       
                       <div 
                         onClick={() => setShowWordGame(true)}
                         className="win95-button w-full max-w-full md:max-w-md p-4 bg-[#dfdfdf] flex items-center justify-between gap-4 group cursor-pointer border-2 border-white border-r-[#808080] border-b-[#808080]"
                       >
                          <div className="flex items-center gap-4 overflow-hidden">
                            <div className="w-12 h-12 bg-white border-2 border-[#808080] border-t-black border-l-black flex items-center justify-center shrink-0">
                               {/* Mini Chalkboard Icon */}
                               <div className="w-8 h-6 bg-[#2F4F4F] border-2 border-[#8B4513] relative overflow-hidden">
                                   <div className="absolute top-1 left-1 w-2 h-0.5 bg-white opacity-50"></div>
                                   <div className="absolute top-2 left-1 w-4 h-0.5 bg-white opacity-50"></div>
                                   <div className="absolute bottom-1 right-1 w-1.5 h-1 bg-white"></div>
                               </div>
                            </div>
                            <div className="text-left min-w-0">
                               <div className="text-[11px] font-bold text-black group-hover:text-[#000080] truncate tracking-tight">VO_TWENTY_QUESTIONS.EXE</div>
                               <div className="text-[9px] text-[#666] truncate">Word Deduction Training v1.0</div>
                            </div>
                          </div>
                          <div className="text-[#808080] text-xl group-hover:translate-x-1 transition-transform shrink-0">▸</div>
                       </div>

                       <p className="mt-4 text-[10px] text-[#888] leading-tight">
                         * 이 훈련 프로그램은 보이스의 언령 능력을 차용한 논리 훈련용 시뮬레이션입니다. 상황에 따라 보이스의 이능력을 훈련에 개입시킬 수 있습니다.
                       </p>
                    </div>
                  )}

                  {character.id === 'lucid' && (
                    <div className="mt-8 pt-6 border-t border-dashed border-[#555]">
                       <div className="flex items-center gap-2 mb-4">
                          <div className="w-4 h-4" style={{ backgroundColor: tc }}></div>
                          <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: tc }}>EVASION_TRAINING_LINK</span>
                       </div>
                       
                       <div 
                         onClick={() => setShowMazeGame(true)}
                         className="win95-button w-full max-w-full md:max-w-md p-4 bg-[#dfdfdf] flex items-center justify-between gap-4 group cursor-pointer border-2 border-white border-r-[#808080] border-b-[#808080]"
                       >
                          <div className="flex items-center gap-4 overflow-hidden">
                            <div className="w-12 h-12 bg-white border-2 border-[#808080] border-t-black border-l-black flex items-center justify-center shrink-0">
                               <div className="w-6 h-6 border-[3px] border-[#333] relative">
                                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-black" />
                                  <div className="absolute top-0 right-0 w-2 h-2 bg-[#ccc]" />
                               </div>
                            </div>
                            <div className="text-left min-w-0">
                               <div className="text-[11px] font-bold text-black group-hover:text-[#000080] truncate tracking-tight">LC_MAZE_AVOIDANCE.EXE</div>
                               <div className="text-[9px] text-[#666] truncate">Obstacle Avoidance v1.2</div>
                            </div>
                          </div>
                          <div className="text-[#808080] text-xl group-hover:translate-x-1 transition-transform shrink-0">▸</div>
                       </div>

                       <p className="mt-4 text-[10px] text-[#888] leading-tight">
                         * 이 훈련 프로그램은 루시드의 안내를 받아 장애물을 회피하는 미로 찾기형 스킬 트레이닝입니다. 게임 1회당 최대 3번 루시드의 도움을 받을 수 있습니다.
                       </p>
                    </div>
                  )}

                  {character.id === 'return' && (
                    <div className="mt-8 pt-6 border-t border-dashed border-[#555]">
                       <div className="flex items-center gap-2 mb-4">
                          <div className="w-4 h-4" style={{ backgroundColor: tc }}></div>
                          <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: tc }}>OBSERVATION_TRAINING_LINK</span>
                       </div>
                       
                       <div 
                         onClick={() => setShowDifferenceGame(true)}
                         className="win95-button w-full max-w-full md:max-w-md p-4 bg-[#dfdfdf] flex items-center justify-between gap-4 group cursor-pointer border-2 border-white border-r-[#808080] border-b-[#808080]"
                       >
                          <div className="flex items-center gap-4 overflow-hidden">
                            <div className="w-12 h-12 bg-white border-2 border-[#808080] border-t-black border-l-black flex items-center justify-center shrink-0">
                               <div className="w-8 h-8 flex flex-wrap relative">
                                  <div className="absolute inset-0 border-[3px] border-[#333]"></div>
                                  <div className="absolute top-1 left-1 w-2 h-2 bg-[#ff0000]"></div>
                                  <div className="absolute bottom-1 right-1 w-2 h-2 bg-[#0000ff]"></div>
                               </div>
                            </div>
                            <div className="text-left min-w-0">
                               <div className="text-[11px] font-bold text-black group-hover:text-[#000080] truncate tracking-tight">RT_OBSERVER_MEMORY.EXE</div>
                               <div className="text-[9px] text-[#666] truncate">Spot The Difference v1.0</div>
                            </div>
                          </div>
                          <div className="text-[#808080] text-xl group-hover:translate-x-1 transition-transform shrink-0">▸</div>
                       </div>

                       <p className="mt-4 text-[10px] text-[#888] leading-tight">
                         * 이 훈련 프로그램은 리턴의 이능력을 이용한 관찰력 및 단기 기억력 테스트입니다.
                       </p>
                    </div>
                  )}

                  {character.id === 'here' && (
                    <div className="mt-8 pt-6 border-t border-dashed border-[#555]">
                       <div className="flex items-center gap-2 mb-4">
                          <div className="w-4 h-4" style={{ backgroundColor: tc }}></div>
                          <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: tc }}>PATIENCE_TRAINING_LINK</span>
                       </div>
                       
                       <div 
                         onClick={() => setShowGreenLightGame(true)}
                         className="win95-button w-full max-w-full md:max-w-md p-4 bg-[#dfdfdf] flex items-center justify-between gap-4 group cursor-pointer border-2 border-white border-r-[#808080] border-b-[#808080]"
                       >
                          <div className="flex items-center gap-4 overflow-hidden">
                            <div className="w-12 h-12 bg-white border-2 border-[#808080] border-t-black border-l-black flex items-center justify-center shrink-0">
                               <div className="w-8 h-8 flex flex-col items-center justify-center relative">
                                  <div className="absolute inset-0 border-[3px] border-[#333]"></div>
                                  <div className="w-4 h-4 border-2 border-[#333] rounded-sm flex mx-auto relative overflow-hidden bg-[#2d5a4c]">
                                  </div>
                               </div>
                            </div>
                            <div className="text-left min-w-0">
                               <div className="text-[11px] font-bold text-black group-hover:text-[#000080] truncate tracking-tight">HR_RED_LIGHT_GREEN_LIGHT.EXE</div>
                               <div className="text-[9px] text-[#666] truncate">Patience & Control Training v1.0</div>
                            </div>
                          </div>
                          <div className="text-[#808080] text-xl group-hover:translate-x-1 transition-transform shrink-0">▸</div>
                       </div>

                       <p className="mt-4 text-[10px] text-[#888] leading-tight">
                         * 이 훈련 프로그램은 히어의 통제하에 진행되는 인내심 및 자제력 테스트입니다. 훈련 도중 히어의 변덕에 따라 '이능력 트리거'가 발생할 수 있습니다.
                       </p>
                    </div>
                  )}
                </div>
              ) : (
                <div className={`win95-inset h-full flex items-center justify-center italic ${isDark ? 'bg-black text-[#555]' : 'bg-white text-[#808080]'}`}>
                  No psychic power documented for this subject.
                </div>
              )}
             </div>
          )}

          {/* ------ TAB: REVIEW ------ */}
          {activeTab === 'review' && (
             <div className="h-full overflow-y-auto flex flex-col gap-6 p-2">
               
               <div className="flex flex-col">
                 <div className={`flex items-center px-2 py-1 font-bold text-xs gap-2 ${tc.toLowerCase() === '#ffffff' || tc.toLowerCase() === '#fff' ? 'text-black' : 'text-white'}`} style={{ backgroundColor: isGlitch ? '#000' : tc, border: isGlitch ? '1px solid #444' : 'none' }}>
                   <div className={`pixel-icon-file w-3 h-4 mb-0 self-center shadow-[1px_1px_0_0_#000] ${tc.toLowerCase() === '#ffffff' || tc.toLowerCase() === '#fff' ? 'border-black' : 'border-white'}`}></div>
                   <span className={`font-sans tracking-wide ${isGlitch ? 'glitch-text' : ''}`} data-text="PERSONALITY.TXT">PERSONALITY.TXT</span>
                 </div>
                 <div className={`win95-inset p-4 flex-1 shadow-[2px_2px_0_rgba(0,0,0,0.2)] ${isDark ? 'bg-black text-white border-[#444]' : 'bg-white text-black'}`}>
                   {character.personality ? (
                    <div 
                      className="text-[13px] leading-[1.8] whitespace-pre-wrap font-sans"
                      dangerouslySetInnerHTML={{ __html: parseEmojisToPixels(character.personality) }}
                    />
                  ) : (
                     <div className="text-[#888] italic text-sm font-sans">Processing...</div>
                  )}
                 </div>
               </div>

               <div className="flex flex-col">
                 <div className={`flex items-center px-2 py-1 font-bold text-xs gap-2 ${tc.toLowerCase() === '#ffffff' || tc.toLowerCase() === '#fff' ? 'text-black' : 'text-white'}`} style={{ backgroundColor: isGlitch ? '#000' : tc, border: isGlitch ? '1px solid #444' : 'none' }}>
                   <div className={`w-4 h-3 bg-yellow-400 relative shadow-[1px_1px_0_0_#000] ${tc.toLowerCase() === '#ffffff' || tc.toLowerCase() === '#fff' ? 'border border-black' : 'border border-white'}`}><div className="absolute -top-1 left-0 w-2 h-1 bg-yellow-400"></div></div>
                   <span className={`font-sans tracking-wide ${isGlitch ? 'glitch-text' : ''}`} data-text="LEADER_COMMENTS">LEADER_COMMENTS</span>
                 </div>
                 <div className={`win95-window flex-1 overflow-y-auto p-4 ${isDark ? 'bg-[#080808] !border-t-[#222]' : 'bg-[#c0c0c0]'}`}>
                    {character.leaderComments ? (
                      <div className="space-y-4">
                        {character.leaderComments.qna && (
                          <div className={`win95-inset p-4 flex flex-col gap-3.5 font-sans font-normal ${isDark ? 'bg-black border-[#333]' : 'bg-[#dfdfdf] border-white'}`}>
                             {character.leaderComments.qna.split('\n').map((line, i) => {
                               const text = line.trim();
                               if (!text) return null;
                               
                               const match = text.match(/^(?:<[^>]+>\s*)?(Q|A)[:.]\s*(.*)$/i);
                               if (match) {
                                 const kind = match[1].toUpperCase();
                                 const content = match[2].replace(/<\/[^>]+>$/, '').trim();
                                 if (kind === 'Q') {
                                   return (
                                     <div key={i} className="flex self-start max-w-[85%]">
                                        <div className={`px-3 py-2 rounded-2xl rounded-tl-sm text-[13px] drop-shadow-sm ${isDark ? 'bg-[#222] text-[#fff] border border-[#333]' : 'bg-white text-black border border-[#ccc]'}`}>
                                          <span className="font-bold mr-1 opacity-50 text-[11px] font-mono">Q.</span>
                                          <span dangerouslySetInnerHTML={{ __html: parseEmojisToPixels(content) }} />
                                        </div>
                                     </div>
                                   );
                                 } else {
                                   return (
                                     <div key={i} className="flex self-end max-w-[85%]">
                                        <div className="px-3 py-2 rounded-2xl rounded-tr-sm text-[13px] drop-shadow-sm text-black border border-[rgba(0,0,0,0.1)]" style={{ backgroundColor: character.leaderComments?.qnaColor || tc }}>
                                          <span className="font-bold mr-1 opacity-50 text-[11px] font-mono">A.</span>
                                          <span dangerouslySetInnerHTML={{ __html: parseEmojisToPixels(content) }} />
                                        </div>
                                     </div>
                                   );
                                 }
                               }
                               return (
                                 <div key={i} className={`text-[12px] text-center opacity-50 my-1 font-mono ${isDark ? 'text-white' : 'text-black'}`}>
                                   <span dangerouslySetInnerHTML={{ __html: parseEmojisToPixels(text) }} />
                                 </div>
                               );
                             })}
                          </div>
                        )}

                        {character.leaderComments.comment && (
                          <div className={`win95-inset p-4 relative font-sans font-normal ${isDark ? 'bg-black text-[#ccc] border-[#333]' : 'bg-[#fff] text-black'}`}>
                            <div className="leading-relaxed whitespace-pre-wrap mb-4 text-[13px]">
                              <span dangerouslySetInnerHTML={{ __html: parseEmojisToPixels(character.leaderComments.comment) }} />
                              {character.leaderComments.commentHighlight && (
                                <div className="mt-4 p-2 border border-[#000] shadow-[1px_1px_0_#000]" style={{ backgroundColor: character.leaderComments.qnaColor || tc, color: '#fff', textShadow: '1px 1px 0px rgba(0,0,0,0.8)' }}>
                                  <span 
                                    style={{ color: 'inherit' }}
                                    dangerouslySetInnerHTML={{ __html: parseEmojisToPixels(character.leaderComments.commentHighlight) }}
                                    className="tracking-wide block"
                                  />
                                </div>
                              )}
                            </div>
                            
                            <div className={`flex justify-between items-center border-t border-dashed pt-2 text-[11px] ${isDark ? 'border-[#333] text-[#555]' : 'border-[#808080] text-[#555]'}`}>
                              <span>SENDER: {character.leaderComments.author || "UNKNOWN"}</span>
                              <span 
                                style={{ color: character.leaderComments.ratingColor || tc }}
                                dangerouslySetInnerHTML={{ __html: character.leaderComments.rating || "N/A" }}
                              />
                            </div>
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className={`win95-inset h-full flex justify-center items-center ${isDark ? 'bg-black border-[#333]' : 'bg-white'}`}>
                        <em className="text-[#808080] font-sans">No commentary recorded.</em>
                      </div>
                    )}
                 </div>
               </div>
             </div>
          )}

          {/* ------ TAB: THEME SONG ------ */}
          {activeTab === 'theme' && (
             <div className={`h-full overflow-y-auto p-4 flex flex-col items-center justify-center ${isDark ? 'bg-black' : 'bg-[#e0e0e0]'}`}>
                {/* bento-player */}
                <div 
                   className="w-full max-w-[350px] bg-white border-[4px] p-4 text-black" 
                   style={{ 
                       borderColor: '#333333', 
                       boxShadow: '8px 8px 0px #cccccc',
                       imageRendering: 'pixelated'
                   }}
                >
                    {/* 상단 헤더 */}
                    <div className="text-[10px] mb-3 border-b-2 border-[#eee] pb-1 uppercase font-mono">
                        CHARACTER BGM :: VOL.{character.id}
                    </div>

                    {/* CD 인터랙션 섹션 */}
                    <div className="flex gap-[15px] items-center bg-[#f9f9f9] border-2 border-[#333] p-2.5 mb-2.5">
                        <div className="w-[80px] h-[80px] bg-[#222] rounded flex items-center justify-center relative overflow-hidden shrink-0">
                            <div className={`w-[70px] h-[70px] rounded-full border border-black ${isPlaying && playlistContext?.characterId === character.id ? 'animate-[spin_4s_linear_infinite]' : ''}`} style={{ background: 'radial-gradient(circle, #555 0%, #111 40%, #333 45%, #111 50%, #111 100%)' }}></div>
                            <div className="absolute w-[20px] h-[20px] border-2 border-black rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ backgroundColor: tc }}></div>
                        </div>
                        <div className="flex-1 overflow-hidden font-mono">
                            <span className="text-[14px] block mb-1 truncate text-black font-bold">
                                {playlistContext?.characterId === character.id ? playlistContext.songs[playlistContext.currentIndex].title : "Wait..."}
                            </span>
                            <div className="flex items-center justify-between gap-1 overflow-hidden">
                                <span className="text-[11px] text-[#666] truncate block">
                                    {playlistContext?.characterId === character.id ? (playlistContext.songs[playlistContext.currentIndex].artist || character.codename) : "Select Track"}
                                </span>
                                <button 
                                  onClick={(e) => { e.stopPropagation(); toggleLoop(); }}
                                  className={`win95-button !p-0.5 w-[22px] h-[18px] flex items-center justify-center shrink-0 ${isLooping ? '!bg-black text-[#00ff00]' : '!bg-[#c0c0c0] text-black'} font-mono text-[9px] uppercase font-bold tracking-tighter shadow-inner`}
                                  title="Loop"
                                >
                                  LP
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* 플레이리스트 */}
                    <div className="grid gap-[5px]">
                       {(character.themeSongs || [
                         { title: "INITIALIZATION_SEQUENCE.mp3", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" },
                         { title: `${character.codename.toUpperCase()}_THEME.mp3`, url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" }
                       ]).map((song, idx) => {
                         const isCurrent = playlistContext?.characterId === character.id && playlistContext?.currentIndex === idx;
                         return (
                           <div
                             key={idx}
                             onClick={() => {
                               if (isCurrent) {
                                 togglePlay();
                               } else {
                                 playPlaylist(character.themeSongs || [
                                   { title: "INITIALIZATION_SEQUENCE.mp3", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" },
                                   { title: `${character.codename.toUpperCase()}_THEME.mp3`, url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" }
                                 ], idx, character.id, tc);
                               }
                             }}
                             className="border-2 border-[#333] p-2 cursor-pointer text-[12px] flex justify-between transition-colors duration-200 group items-center font-mono hover:bg-[#eee]"
                             style={{ 
                                 backgroundColor: isCurrent ? tc : '',
                                 fontWeight: isCurrent ? 'bold' : 'normal',
                             }}
                           >
                              <span 
                                className={`truncate pr-2 ${song.title.includes('Chroma') ? 'glitch-text relative' : ''}`}
                                data-text={`${idx + 1}. ${song.title}`}
                                style={{ color: isCurrent ? '#000' : 'inherit' }}
                              >
                                {idx + 1}. {song.title}
                              </span>
                              <span className="shrink-0" style={{ color: isCurrent ? '#000' : 'inherit' }}>{isCurrent && isPlaying ? '⏸' : '▶'}</span>
                           </div>
                         );
                       })}
                    </div>
                </div>
             </div>
          )}

          {/* ------ TAB: QUOTES ------ */}
          {activeTab === 'quotes' && (
             <div className="h-full overflow-y-auto p-1 flex flex-col gap-3 min-h-0">
                <div className={`p-2 border-b pb-2 mb-2 flex items-center justify-between text-xs font-mono uppercase ${isDark ? 'text-[#888] border-[#333]' : 'text-[#666] border-white'}`}>
                   <span>CHARACTER VOICELINES & QUOTES</span>
                   <span className="text-[10px] bg-black text-white px-1">STABLE.sys</span>
                </div>
                
                <div className="flex flex-col gap-2.5">
                   {situations.map((situation) => {
                      const isExpanded = !!expandedQuotes[situation];
                      const quoteText = CHARACTER_QUOTES[character.id]?.[situation] || "대사가 정보 데이터베이스에 구축되지 않았습니다.";
                      
                      // Check if themeColor is light
                      const isLightColor = ['#ffffff', '#fff', '#f3e6c9', '#f6cd8e', '#fde047'].includes(tc.toLowerCase());
                      const barTextColor = isLightColor ? '#000000' : '#ffffff';
                      
                      return (
                         <div key={situation} className="flex flex-col border border-black shadow-[2px_2px_0_rgba(0,0,0,0.25)] overflow-hidden">
                            {/* Bar header button */}
                            <button
                              onClick={() => toggleQuote(situation)}
                              className="w-full text-left py-2.5 px-4 font-bold flex justify-between items-center cursor-pointer transition-opacity duration-150 hover:opacity-90 active:translate-y-[1px]"
                              style={{ 
                                 backgroundColor: tc, 
                                 color: barTextColor,
                              }}
                            >
                               <span className="text-[12px] uppercase tracking-wide flex items-center gap-2">
                                  <span className="text-[10px] opacity-70">◆</span>
                                  {situation}
                               </span>
                               <span className="font-mono text-[10px] sm:text-xs">
                                  {isExpanded ? '▲ 접기' : '▼ 펼치기'}
                                </span>
                            </button>
                            
                            {/* Expandable panel */}
                            <AnimatePresence initial={false}>
                               {isExpanded && (
                                  <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.18, ease: 'easeInOut' }}
                                    className="overflow-hidden bg-white"
                                  >
                                     <div className="p-4 text-black text-sm border-t border-black bg-white select-text leading-relaxed font-sans flex items-start gap-3">
                                        <div className="text-xl select-none text-[#808080] mt-0.5 font-serif">“</div>
                                        <div className="flex-1 text-[#111] break-words text-[13px] font-medium py-1">
                                           {quoteText}
                                        </div>
                                        <div className="text-xl select-none text-[#808080] mt-auto font-serif">”</div>
                                     </div>
                                  </motion.div>
                               )}
                            </AnimatePresence>
                         </div>
                      );
                   })}
                </div>
             </div>
          )}

        </div>

      </div>

      <div className={`p-2 border-t border-white flex justify-end gap-2 ${isDark ? 'bg-[#080808] border-t-[#222]' : 'bg-[#c0c0c0]'}`}>
         <button onClick={onBack} className="win95-button w-20 text-black">OK</button>
         <button onClick={onBack} className="win95-button w-20 text-black">Cancel</button>
         <button className="win95-button w-20 text-black" disabled>Apply</button>
      </div>

      {showFrostPopup && (
        <div className="absolute inset-0 z-[100] flex items-center justify-center bg-black/40 p-4">
          <div className="win95-window w-full max-w-md shadow-[8px_8px_0_rgba(0,0,0,0.5)]">
            <div className="win95-title-bar !bg-[#000080]">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-white border border-black flex items-center justify-center p-0.5">
                   <div className="w-full h-full border border-black flex items-center justify-center text-[10px]">!</div>
                </div>
                <span className="font-bold text-white text-xs">FROST_PROJECT.sys</span>
              </div>
              <button 
                onClick={() => setShowFrostPopup(false)}
                className="win95-button w-[18px] h-[16px] !p-0 font-bold"
              >×</button>
            </div>
            <div className="p-4 bg-[#c0c0c0] flex flex-col gap-4">
              <div className="win95-inset bg-black p-4 text-xs font-mono text-[#0f0] min-h-[150px] border-2 border-[#00ff0033] shadow-[0_0_15px_rgba(0,255,0,0.2)]">
                <div className="mb-4 border-b border-[#0f0] border-dashed pb-2 flex justify-between opacity-50">
                   <span>DATA_BACKUP_SYSTEM</span>
                   <span>ACCESS: GRANTED</span>
                </div>
                <div className="whitespace-pre-wrap leading-relaxed">
                   {character.frostProject || "> INITIALIZING DATA...\n> NO ENTRY FOUND.\n> STANDBY FOR USER INPUT."}
                </div>
                <div className="mt-4 flex items-center gap-2">
                   <span className="animate-pulse">_</span>
                </div>
              </div>
              <div className="flex justify-end">
                <button 
                  onClick={() => setShowFrostPopup(false)}
                  className="win95-button w-20 py-1"
                >Dismiss</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showIgnisPopup && (
        <div className="absolute inset-0 z-[110] flex items-center justify-center bg-black/60 p-4">
          <div className="win95-window w-full max-w-md shadow-[10px_10px_0_rgba(0,0,0,0.6)]">
            <div className="win95-title-bar !bg-[#800000]">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-white border border-black flex items-center justify-center p-0.5">
                   <div className="w-full h-full border border-black flex items-center justify-center text-[10px] text-red-600 font-bold">!</div>
                </div>
                <span className="font-bold text-white text-xs">IGNIS_PROJECT_CLASSIFIED.EXE</span>
              </div>
              <button 
                onClick={() => setShowIgnisPopup(false)}
                className="win95-button w-[18px] h-[16px] !p-0 font-bold"
              >×</button>
            </div>
            <div className="p-4 bg-[#c0c0c0] flex flex-col gap-4">
              <div className="win95-inset bg-[#000] p-5 text-[11px] font-mono leading-relaxed border-2 border-[#ff3b3b33]">
                <div className="mb-4 border-b border-[#ff3b3b] border-double pb-2 flex justify-between text-[#ff3b3b] font-bold">
                   <span>DATA_RECOVERY: [Ignis]</span>
                   <span>CONFIDENTIAL</span>
                </div>
                <div className="text-[#e6b8b8] whitespace-pre-wrap">
                   {character.ignisProject || "> ACCESS DENIED.\n> CREDENTIALS REQUIRED."}
                </div>
                
                <div className="mt-6 border-t border-[#333] pt-4">
                   <p className="text-[#888] mb-3 text-[10px] uppercase tracking-widest">Linked Asset Found:</p>
                   <button 
                     onClick={handleNavigateToOrbit}
                     className="win95-button w-full justify-between items-center px-3 py-2 bg-[#dfdfdf] group"
                   >
                     <div className="flex items-center gap-3">
                       <div className="w-6 h-6 border-2 border-[#808080] border-r-white border-b-white bg-white flex items-center justify-center">
                         <div className="w-3 h-3 bg-blue-500 rounded-full shadow-inner animate-pulse"></div>
                       </div>
                       <div className="text-left">
                         <span className="block font-bold text-[10px] text-black">ORBIT.EXE</span>
                         <span className="block text-[8px] text-[#666]">Vector-A | Area Affiliation</span>
                       </div>
                     </div>
                     <span className="text-black group-hover:translate-x-1 transition-transform">▸</span>
                   </button>
                </div>
              </div>
              <div className="flex justify-end gap-2">
                <button 
                  onClick={() => setShowIgnisPopup(false)}
                  className="win95-button px-6 py-1"
                >Close</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showChessGame && (
        <div className="fixed inset-0 z-[200] bg-black/80 flex items-center justify-center p-4">
          <div className="w-full max-w-4xl h-[90vh] shadow-[12px_12px_0_rgba(0,0,0,0.8)]">
             <ChessGame onClose={() => setShowChessGame(false)} accentColor={tc} />
          </div>
        </div>
      )}

      {showWordGame && (
        <div className="fixed inset-0 z-[200] bg-black/80 flex items-center justify-center p-4">
          <div className="w-full max-w-4xl h-[90vh] shadow-[12px_12px_0_rgba(0,0,0,0.8)]">
             <WordGame onClose={() => setShowWordGame(false)} accentColor={tc} />
          </div>
        </div>
      )}

      {showMazeGame && (
        <div className="fixed inset-0 z-[200] bg-black/80 flex items-center justify-center p-4">
          <div className="w-full max-w-4xl h-[90vh] shadow-[12px_12px_0_rgba(0,0,0,0.8)]">
             <MazeGame onClose={() => setShowMazeGame(false)} accentColor={tc} />
          </div>
        </div>
      )}

      {showDifferenceGame && (
        <div className="fixed inset-0 z-[200] bg-black/80 flex items-center justify-center p-4">
          <div className="w-full max-w-4xl h-[90vh] shadow-[12px_12px_0_rgba(0,0,0,0.8)]">
             <DifferenceGame onClose={() => setShowDifferenceGame(false)} accentColor={tc} />
          </div>
        </div>
      )}

      {showGreenLightGame && (
        <div className="fixed inset-0 z-[200] bg-black/80 flex items-center justify-center p-4">
          <div className="w-full max-w-4xl h-[90vh] shadow-[12px_12px_0_rgba(0,0,0,0.8)]">
             <GreenLightGame onClose={() => setShowGreenLightGame(false)} accentColor={tc} />
          </div>
        </div>
      )}

    </div>
  );
}
