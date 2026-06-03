import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const STIPPLE_BG = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4'%3E%3Crect width='1' height='1' fill='%23ffffff'/%3E%3Crect x='2' y='2' width='1' height='1' fill='%23ffffff'/%3E%3C/svg%3E")`;

interface GreenLightGameProps {
  onClose: () => void;
  accentColor?: string;
}

export function GreenLightGame({ onClose, accentColor = "#2d5a4c" }: GreenLightGameProps) {
  const [phase, setPhase] = useState<'playing' | 'win' | 'lose'>('playing');
  const [light, setLight] = useState<'green' | 'red'>('red');
  const [timeLeft, setTimeLeft] = useState(60);
  const [progress, setProgress] = useState(0);
  const [lives, setLives] = useState(3);
  const [message, setMessage] = useState("");
  const [showDialog, setShowDialog] = useState(true);
  const [showRules, setShowRules] = useState(true);
  
  const [closeEventTriggered, setCloseEventTriggered] = useState(false);
  const [timeEventTriggered, setTimeEventTriggered] = useState(false);
  const [isBlocked, setIsBlocked] = useState(false);

  const maxProgress = 100;

  const triggerDialogue = useCallback((text: string) => {
    setMessage(`Here: "${text}"`);
    setShowDialog(true);
  }, []);

  // Initial message
  useEffect(() => {
    if (!showRules && phase === 'playing' && progress === 0 && message === "") {
      triggerDialogue("음. 준비가 끝났다면 시작하지 그래.");
    }
  }, [showRules, phase, progress, message, triggerDialogue]);

  // Timer logic
  useEffect(() => {
    if (phase !== 'playing' || showRules) return;
    const interval = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          setPhase('lose');
          triggerDialogue("시간이 다 됐네. 아쉽지만 여기까지야.");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [phase, triggerDialogue, showRules]);

  // Light Switching Logic
  useEffect(() => {
    if (phase !== 'playing' || isBlocked || showRules) return;

    let timeoutId: NodeJS.Timeout;

    const switchLight = () => {
      setLight(current => current === 'green' ? 'red' : 'green');
    };

    // Determine how long to stay in the current light state
    const delay = light === 'green' 
      ? Math.random() * 2000 + 3000 // Stay green for 3 to 5 seconds
      : Math.random() * 2000 + 2000; // Stay red for 2 to 4 seconds

    timeoutId = setTimeout(switchLight, delay);

    return () => clearTimeout(timeoutId);
  }, [phase, light, isBlocked, showRules]);

  const handleMove = useCallback(() => {
    if (phase !== 'playing' || isBlocked || showRules) return;

    if (light === 'red') {
      const newLives = lives - 1;
      setLives(newLives);
      setProgress(p => Math.max(0, p - 5)); // Slight penalty
      
      if (newLives <= 0) {
        setPhase('lose');
        triggerDialogue("기회를 다 썼구나. 아쉽게 됐네.");
      } else {
        const msgs = ["음. 성미가 급하구나.", "조금 더 인내심을 가져보렴.", "서두른다고 해결될 일이 아니지. 다시 해볼까?"];
        triggerDialogue(msgs[Math.floor(Math.random() * msgs.length)]);
      }
      return;
    }

    // Normal move
    setProgress(prev => {
      const nextProgress = prev + 3; 
      
      // Special events check
      if (!isBlocked && !closeEventTriggered && nextProgress >= 80) {
        if (Math.random() < 0.8) {
          setCloseEventTriggered(true);
          setIsBlocked(true);
          triggerDialogue("이리 와.");
          setTimeout(() => {
            setProgress(p => Math.max(0, p - 20)); 
            setIsBlocked(false);
          }, 3000);
          return nextProgress;
        } else {
          setCloseEventTriggered(true);
        }
      }

      if (!isBlocked && !timeEventTriggered && timeLeft < 15 && nextProgress < 30) {
        if (Math.random() < 0.8) {
          setTimeEventTriggered(true);
          setIsBlocked(true);
          triggerDialogue("이리 와.");
          setTimeout(() => {
            setProgress(p => Math.min(maxProgress, p + 40)); 
            setIsBlocked(false);
          }, 3000);
          return nextProgress;
        } else {
          setTimeEventTriggered(true);
        }
      }

      if (nextProgress >= maxProgress) {
        setPhase('win');
        triggerDialogue("다 왔구나. 제법이네.");
        return maxProgress;
      }
      return nextProgress;
    });
  }, [phase, light, isBlocked, lives, closeEventTriggered, timeEventTriggered, timeLeft, triggerDialogue, showRules]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === ' ' || e.key === 'ArrowUp' || e.key === 'ArrowRight') {
        e.preventDefault();
        handleMove();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleMove]);

  const handleRestart = () => {
    setPhase('playing');
    setLight('green');
    setTimeLeft(60);
    setProgress(0);
    setLives(3);
    setCloseEventTriggered(false);
    setTimeEventTriggered(false);
    setIsBlocked(false);
    setMessage("");
    setShowRules(false);
  };

  return (
    <div className="flex flex-col gap-4 p-4 h-full overflow-hidden font-mono bg-[#c0c0c0] text-black border-2 border-white border-r-[#808080] border-b-[#808080]">
      {/* Title Bar */}
      <div className="bg-[#000080] text-white px-2 py-1 flex justify-between items-center select-none">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-white" />
          <span className="text-xs font-bold tracking-tight">HR_RED_LIGHT_GREEN_LIGHT.EXE</span>
        </div>
        <button onClick={onClose} className="win95-button w-5 h-5 flex items-center justify-center font-bold !p-0">×</button>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 items-start overflow-y-auto pr-2">
        {/* Game Container */}
        <div className="border-2 border-[#808080] border-t-black border-l-black p-1 bg-[#dfdfdf] shrink-0 w-full lg:w-[450px] h-[340px] relative">
          <div className="w-full h-full bg-[#f0f0f0] overflow-hidden relative">
            {/* Visual Grid for Training Ground feel */}
            <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
            
            {/* Success/Fail Overlay */}
            {(phase === 'win' || phase === 'lose') && (
              <div className="absolute inset-0 bg-[#000]/70 z-20 flex flex-col items-center justify-center p-6 text-white text-center">
                <h3 className={`text-4xl font-bold mb-2 ${phase === 'win' ? 'text-green-400' : 'text-red-500'}`}>
                  {phase === 'win' ? 'SUCCESS' : 'FAILED'}
                </h3>
                <p className="mb-6 opacity-80 text-sm">
                  {phase === 'win' ? '결승선에 도달했습니다.' : '시뮬레이션이 종료되었습니다.'}
                </p>
                <button 
                  onClick={handleRestart}
                  className="win95-button !bg-[#eee] !text-black px-8 py-2 font-bold"
                >
                  RETRY
                </button>
              </div>
            )}

            {/* Game Interface */}
            <div className="absolute inset-0 flex flex-col p-4 relative z-10">
              {/* Status Light Indicator */}
              <div className="flex justify-center mb-10 mt-4">
                <div className="flex bg-[#808080] p-2 border-2 border-white border-r-[#444] border-b-[#444] gap-6 shadow-[inset_2px_2px_4px_rgba(0,0,0,0.5)]">
                  <div className={`w-14 h-14 rounded-full border-2 border-black transition-all duration-300 ${light === 'red' ? 'bg-red-600 shadow-[0_0_20px_#ff0000]' : 'bg-red-950 opacity-20'}`} />
                  <div className={`w-14 h-14 rounded-full border-2 border-black transition-all duration-300 ${light === 'green' ? 'bg-green-500 shadow-[0_0_20px_#00ff00]' : 'bg-green-950 opacity-20'}`} />
                </div>
              </div>

              {/* Progress Track */}
              <div className="flex-1 relative flex items-center mb-8 px-4">
                <div className="absolute inset-x-8 h-6 bg-[#d4d4d4] border-2 border-[#808080] border-t-black border-l-black rounded-full overflow-hidden shadow-inner">
                  <div className="h-full bg-white opacity-40 animate-[pulse_3s_infinite]" style={{ width: '100%' }} />
                </div>
                
                {/* Finish Line Flag */}
                <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col items-center">
                  <div className="w-1.5 h-14 bg-[#555] shadow-[1px_1px_0_white]" />
                  <div className="absolute -top-5 w-8 h-6 bg-red-600 border-2 border-black shadow-md flex items-center justify-center">
                    <div className="w-1 h-1 bg-white opacity-30 rounded-full" />
                  </div>
                  <div className="text-[9px] font-bold mt-1 bg-white px-1 border border-black italic">TARGET</div>
                </div>

                {/* Player Token */}
                <motion.div
                  className="absolute z-20"
                  animate={{ left: `${progress}%` }}
                  transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                >
                  <div className="flex flex-col items-center -ml-6">
                    <div className="w-10 h-10 bg-white border-2 border-[#808080] border-t-white border-l-white shadow-[4px_4px_0_rgba(0,0,0,0.2)] flex items-center justify-center rotate-45 group">
                      <div className="w-5 h-5 bg-[#2d5a4c] -rotate-45" />
                    </div>
                    <div className="bg-black text-[#00ff00] text-[9px] px-1.5 mt-2 font-bold border border-[#00ff0033] shadow-[0_0_5px_#00ff0033]">USR_UNIT</div>
                  </div>
                </motion.div>
              </div>
              
              <div className="flex justify-center mb-2">
                <button 
                  onMouseDown={handleMove}
                  disabled={phase !== 'playing' || isBlocked || showRules}
                  className="win95-button w-full max-w-[200px] h-16 font-black text-2xl disabled:opacity-50 !bg-[#dfdfdf] active:!shadow-inner tracking-[0.2em] relative overflow-hidden"
                >
                  <span className="relative z-10">{isBlocked ? "STANDBY" : "MOVE"}</span>
                  {!isBlocked && phase === 'playing' && light === 'green' && (
                    <motion.div 
                      className="absolute inset-0 bg-green-400/10"
                      animate={{ opacity: [0, 0.5, 0] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section: Dialogue & Info */}
        <div className="flex-1 flex flex-col gap-4 w-full">
          <div className="flex justify-between items-center shrink-0">
             <div className="text-[10px] font-bold text-[#444] px-2 py-0.5 bg-[#dfdfdf] border border-white border-r-[#808080] border-b-[#808080]">
               SYNC_STATUS: <span className="text-green-700">ONLINE</span>
             </div>
             <button 
              onClick={() => setShowRules(true)}
              className="win95-button text-[10px] px-2 py-1 flex items-center gap-1 pb-1.5"
            >
              <span className="w-3 h-3 bg-[#000080] text-white flex items-center justify-center text-[8px] font-bold">?</span>
              시뮬레이션 가이드
            </button>
          </div>

          {/* Dialog */}
          <div className="shrink-0 min-h-[110px]">
              <AnimatePresence mode="wait">
                {showDialog && (
                  <motion.div 
                    key={message}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="relative p-4 border-2 border-white border-r-[#808080] border-b-[#808080] shadow-sm"
                    style={{ backgroundColor: accentColor + '30' }}
                  >
                    <div className="absolute -top-3 left-4 bg-[#c0c0c0] px-2 text-[10px] uppercase font-bold border-x border-white">Here_Comm</div>
                    
                    <div className="flex gap-4 items-start">
                        {/* Portrait */}
                        <div className="w-14 h-14 bg-black border border-white shrink-0 flex items-center justify-center relative overflow-hidden shadow-[2px_2px_0_rgba(0,0,0,0.2)]" 
                            style={{ backgroundImage: STIPPLE_BG, backgroundSize: '4px 4px' }}>
                          <div className="absolute inset-0 opacity-30 mix-blend-color" style={{ backgroundColor: accentColor }}></div>
                          <span className="text-[9px] text-white opacity-40 font-bold uppercase tracking-widest">Here</span>
                        </div>
                        
                        <div className="flex-1 pt-1">
                          <p className="text-sm leading-relaxed whitespace-pre-wrap font-medium text-black">{message}</p>
                        </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
          </div>

          {/* Game Stats */}
          <div className="win95-panel p-3 border-2 border-[#808080] border-t-black border-l-black bg-white flex flex-col gap-3 flex-1">
             <div className="text-[10px] font-bold text-[#808080] uppercase tracking-widest border-b border-[#dfdfdf] pb-1">GAME_METADATA</div>
             
             <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="win95-inset p-2 bg-[#f4f4f4] flex flex-col justify-center">
                   <div className="text-[9px] text-[#888] font-bold uppercase mb-1">Time Remaining</div>
                   <div className={`text-sm font-bold mono-font ${timeLeft <= 10 ? 'text-red-600 animate-pulse' : 'text-[#000080]'}`}>
                     {timeLeft}s
                   </div>
                </div>
                <div className="win95-inset p-2 bg-[#f4f4f4] flex flex-col justify-center">
                   <div className="text-[9px] text-[#888] font-bold uppercase mb-1">Residuals</div>
                   <div className="flex gap-1.5">
                    {Array.from({ length: 3 }).map((_, i) => (
                      <div key={i} className={`w-3.5 h-3.5 border border-black/20 ${i < lives ? 'bg-red-500 shadow-[inset_1px_1px_2px_rgba(0,0,0,0.5)]' : 'bg-[#ddd]'}`} />
                    ))}
                  </div>
                </div>
             </div>

             <div className="mt-2 space-y-3">
                <div className="flex flex-col gap-1">
                  <div className="flex justify-between text-[9px] font-bold text-[#666]">
                    <span>SPATIAL_COORDINATES</span>
                    <span>{progress}%</span>
                  </div>
                  <div className="w-full h-4 win95-inset bg-[#eee] p-0.5 overflow-hidden">
                     <div className="h-full bg-[#2d5a4c] shadow-[inset_-2px_0_4px_rgba(0,0,0,0.3)] transition-all duration-300" style={{ width: `${progress}%` }} />
                  </div>
                </div>
                
                <div className="flex border-t border-dashed border-[#ccc] pt-3 gap-3">
                   <div className="flex-1">
                      <div className="text-[9px] text-[#888] font-bold uppercase">Signal</div>
                      <div className={`text-[11px] font-bold ${light === 'green' ? 'text-green-600' : 'text-red-600'}`}>
                        {light === 'green' ? '● STABLE_GREEN' : '● WARNING_RED'}
                      </div>
                   </div>
                   <div className="flex-1">
                      <div className="text-[9px] text-[#888] font-bold uppercase">Condition</div>
                      <div className="text-[11px] font-bold text-[#444]">{isBlocked ? '!] INTERFERENCE' : '...) MONITORING'}</div>
                   </div>
                </div>
             </div>

             <div className="mt-auto pt-2">
                <button 
                  onClick={handleRestart}
                  className="win95-button w-full py-1 text-[10px] font-bold tracking-widest grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100"
                >
                  SYSTEM_INITIALIZE
                </button>
             </div>
          </div>
        </div>

      </div>

      {/* Rules Popup */}
      <AnimatePresence>
        {showRules && (
          <div className="fixed inset-0 z-[300] bg-black/50 flex items-center justify-center p-4 backdrop-blur-[1px]">
            <motion.div 
               initial={{ scale: 0.9, opacity: 0 }}
               animate={{ scale: 1, opacity: 1 }}
               exit={{ scale: 0.9, opacity: 0 }}
               transition={{ type: 'spring', damping: 25, stiffness: 300 }}
               className="win95-panel w-full max-w-md bg-[#c0c0c0] border-2 border-white border-r-[#808080] border-b-[#808080] shadow-[8px_8px_0_rgba(0,0,0,0.5)]"
            >
               <div className="bg-[#000080] text-white px-2 py-1 flex justify-between items-center">
                  <span className="text-xs font-bold uppercase tracking-widest">TRAINING_GUIDE.HLP</span>
                  <button onClick={() => setShowRules(false)} className="win95-button w-5 h-5 text-sm flex items-center justify-center p-0 pb-0.5">×</button>
               </div>
               <div className="p-6 text-black">
                  <div className="flex gap-4 mb-4 pb-4 border-b-2 border-dotted border-[#808080]">
                     <div className="w-12 h-12 flex items-center justify-center text-3xl shrink-0" style={{ backgroundColor: accentColor, color: '#fff' }}>🚦</div>
                     <h2 className="text-xl font-bold leading-tight">RED LIGHT GREEN LIGHT<br/><span className="text-sm font-normal text-[#555] uppercase tracking-widest">Patience Training</span></h2>
                  </div>
                  
                  <div className="space-y-4 text-sm leading-relaxed mb-6">
                     <div className="flex gap-3">
                        <div className="w-5 h-5 flex items-center justify-center shrink-0 font-bold text-center border border-[#808080] text-[10px]" style={{ backgroundColor: accentColor, color: '#fff' }}>1</div>
                        <p><strong>진행 방식:</strong> 초록불일 때만 'MOVE'를 눌러 이동하세요. 빨간불일 때 움직이면 기회가 차감됩니다.</p>
                     </div>
                     <div className="flex gap-3">
                        <div className="w-5 h-5 flex items-center justify-center shrink-0 font-bold text-center border border-[#808080] text-[10px]" style={{ backgroundColor: accentColor, color: '#fff' }}>2</div>
                        <p><strong>이능력 트리거:</strong> 히어의 변덕에 따라 '이리 와' 명령이 발생하면 잠시 동안 강제로 멈추게 됩니다.</p>
                     </div>
                     <div className="flex gap-3">
                        <div className="w-5 h-5 flex items-center justify-center shrink-0 font-bold text-center border border-[#808080] text-[10px]" style={{ backgroundColor: accentColor, color: '#fff' }}>3</div>
                        <p><strong>실패 조건:</strong> 제한시간 60초가 경과하거나, 기회(Residuals) 3회를 모두 소진하면 실패합니다.</p>
                     </div>
                  </div>

                  <div className="flex justify-center bg-[#dfdfdf] p-2 border-2 border-white border-r-[#808080] border-b-[#808080] mt-2">
                     <button 
                        onClick={() => setShowRules(false)}
                        className="win95-button px-10 py-1.5 font-bold uppercase tracking-widest w-full pb-2 hover:bg-[#eee]"
                     >
                       시뮬레이션 시작
                     </button>
                  </div>
               </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

