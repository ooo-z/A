import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const STIPPLE_BG = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4'%3E%3Crect width='1' height='1' fill='%23ffffff'/%3E%3Crect x='2' y='2' width='1' height='1' fill='%23ffffff'/%3E%3C/svg%3E")`;

// Define what a room object looks like
interface GlitchZone {
  id: string;
  x: string;
  y: string;
  width: string;
  height: string;
}

interface RoomMap {
  id: string;
  name: string;
  bgUrlNormal: string;
  bgUrlDistorted: string; // The slightly modified version!
  objects: GlitchZone[];
}

import studyBg from '../assets/images/pixel_study_8bit_1778397312776.png';
import kitchenBg from '../assets/images/pixel_kitchen_8bit_1778397334315.png';
import bedroomBg from '../assets/images/pixel_bedroom_8bit_1778397352923.png';
import livingBg from '../assets/images/pixel_living_8bit_1778397370792.png';
import garageBg from '../assets/images/pixel_garage_8bit_1778397387821.png';

const ROOM_MAPS: RoomMap[] = [
  {
    id: "map1", name: "STUDY_ROOM",
    bgUrlNormal: studyBg,
    bgUrlDistorted: studyBg, // TODO: Replace with Distorted Image once Quota resets!
    objects: [
      { id: "obj1", x: "10%", y: "20%", width: "15%", height: "25%" },
      { id: "obj2", x: "35%", y: "45%", width: "20%", height: "20%" },
      { id: "obj3", x: "65%", y: "25%", width: "25%", height: "30%" },
      { id: "obj4", x: "20%", y: "65%", width: "15%", height: "20%" },
      { id: "obj5", x: "60%", y: "65%", width: "30%", height: "25%" },
      { id: "obj6", x: "45%", y: "15%", width: "15%", height: "15%" },
      { id: "obj7", x: "5%", y: "50%", width: "12%", height: "18%" },
    ]
  },
  {
    id: "map2", name: "KITCHEN",
    bgUrlNormal: kitchenBg,
    bgUrlDistorted: kitchenBg,
    objects: [
      { id: "obj1", x: "15%", y: "20%", width: "18%", height: "25%" },
      { id: "obj2", x: "40%", y: "55%", width: "22%", height: "25%" },
      { id: "obj3", x: "70%", y: "25%", width: "25%", height: "45%" },
      { id: "obj4", x: "55%", y: "15%", width: "12%", height: "15%" },
      { id: "obj5", x: "20%", y: "70%", width: "25%", height: "20%" },
      { id: "obj6", x: "80%", y: "75%", width: "15%", height: "20%" },
      { id: "obj7", x: "5%", y: "45%", width: "14%", height: "20%" },
    ]
  },
  {
    id: "map3", name: "BEDROOM",
    bgUrlNormal: bedroomBg,
    bgUrlDistorted: bedroomBg,
    objects: [
      { id: "obj1", x: "35%", y: "45%", width: "35%", height: "30%" },
      { id: "obj2", x: "10%", y: "30%", width: "15%", height: "35%" },
      { id: "obj3", x: "70%", y: "15%", width: "20%", height: "25%" },
      { id: "obj4", x: "75%", y: "55%", width: "20%", height: "35%" },
      { id: "obj5", x: "15%", y: "75%", width: "25%", height: "20%" },
      { id: "obj6", x: "50%", y: "20%", width: "15%", height: "15%" },
      { id: "obj7", x: "5%", y: "10%", width: "15%", height: "15%" },
    ]
  },
  {
    id: "map4", name: "LIVING_ROOM",
    bgUrlNormal: livingBg,
    bgUrlDistorted: livingBg,
    objects: [
      { id: "obj1", x: "25%", y: "45%", width: "45%", height: "30%" },
      { id: "obj2", x: "40%", y: "20%", width: "20%", height: "20%" },
      { id: "obj3", x: "5%", y: "35%", width: "20%", height: "40%" },
      { id: "obj4", x: "75%", y: "55%", width: "20%", height: "35%" },
      { id: "obj5", x: "5%", y: "15%", width: "15%", height: "15%" },
      { id: "obj6", x: "75%", y: "15%", width: "20%", height: "25%" },
      { id: "obj7", x: "45%", y: "80%", width: "30%", height: "15%" },
    ]
  },
  {
    id: "map5", name: "GARAGE",
    bgUrlNormal: garageBg,
    bgUrlDistorted: garageBg,
    objects: [
      { id: "obj1", x: "20%", y: "35%", width: "45%", height: "35%" },
      { id: "obj2", x: "75%", y: "20%", width: "20%", height: "35%" },
      { id: "obj3", x: "10%", y: "70%", width: "25%", height: "20%" },
      { id: "obj4", x: "50%", y: "15%", width: "20%", height: "15%" },
      { id: "obj5", x: "70%", y: "65%", width: "25%", height: "25%" },
      { id: "obj6", x: "5%", y: "20%", width: "15%", height: "25%" },
      { id: "obj7", x: "40%", y: "80%", width: "20%", height: "15%" },
    ]
  }
];

interface DifferenceGameProps {
  onClose: () => void;
  accentColor?: string;
}

interface Point { x: number; y: number; }
interface XMark extends Point { id: number; }

export function DifferenceGame({ onClose, accentColor = "#e5a9a9" }: DifferenceGameProps) {
  const [currentMap, setCurrentMap] = useState<RoomMap>(() => ROOM_MAPS[Math.floor(Math.random() * ROOM_MAPS.length)]);
  
  // Game state
  const [gameState, setGameState] = useState<'intro' | 'memorize' | 'playing' | 'won' | 'lost'>('intro');
  const [distortedObjects, setDistortedObjects] = useState<string[]>([]);
  const [isGlitching, setIsGlitching] = useState(false);
  
  const [timeLeft, setTimeLeft] = useState(60);
  const [powerUses, setPowerUses] = useState(2);
  const [timePowerUsed, setTimePowerUsed] = useState(false);
  const [xMarks, setXMarks] = useState<XMark[]>([]);
  
  const [message, setMessage] = useState("");
  const [showDialog, setShowDialog] = useState(false);
  const [showRules, setShowRules] = useState(true);
  
  const xMarkIdRef = useRef(0);
  const playAreaRef = useRef<HTMLDivElement>(null);

  const initGame = useCallback(() => {
    const map = ROOM_MAPS[Math.floor(Math.random() * ROOM_MAPS.length)];
    setCurrentMap(map);
    setGameState('intro');
    setTimeLeft(60);
    setPowerUses(2);
    setTimePowerUsed(false);
    setDistortedObjects([]);
    setXMarks([]);
    setShowRules(true);
    triggerDialogue('intro');
  }, []);

  const triggerDialogue = (type: string, payload?: any) => {
    let msg = "";
    if (type === 'intro') {
       msg = `Return: "기억해 봐, 이 방이 원래 어땠는지. 내가 방해 좀 할 거거든."`;
    } else if (type === 'memorize_end') {
       msg = `Return: "자, 이제 어딜 바꿔치기 했는지, 맞혀보실까?"`;
    } else if (type === 'power') {
       msg = `Return: "아, 너무 어렵게 냈나? 하나 봐줄게. 어때, 고맙지?"`;
    } else if (type === 'time_rollback') {
       msg = `Return: "시간이 없네? 그럼 조금 되감아볼까. 후훗, 넌 운이 좋아."`;
    } else if (type === 'time_fail') {
       msg = `Return: "아쉽게도 이번엔 시간이 멈춰주지 않네. 서두르는 게 좋을 텐데."`;
    } else if (type === 'win') {
       msg = `Return: "오호. 제법이네? 시시할 정도로 완벽하게 다 맞혔어."`;
    } else if (type === 'lose') {
       msg = `Return: "시간 다 됐어. 이것밖에 안 돼? 실망인데."`;
    }
    
    setMessage(msg);
    if (!showDialog) setShowDialog(true);
  };

  const startGame = () => {
    setShowRules(false);
    setGameState('memorize');
    triggerDialogue('intro');
    
    // Select distorted objects
    const shuffledIds = currentMap.objects.map(o => o.id).sort(() => 0.5 - Math.random());
    const toDistort = shuffledIds.slice(0, 5); // 5 objects will be distorted
    
    let timer = 5;
    const countdown = setInterval(() => {
       timer--;
       if (timer <= 0) {
          clearInterval(countdown);
          // Glitch transition
          setIsGlitching(true);
          setTimeout(() => {
             setIsGlitching(false);
             setDistortedObjects(toDistort);
             setGameState('playing');
             triggerDialogue('memorize_end');
          }, 800); // 800ms glitch duration
       }
    }, 1000);
  };

  // Timer logic
  useEffect(() => {
    if (gameState !== 'playing') return;

    const timerInterval = setInterval(() => {
       setTimeLeft(prev => {
          if (prev <= 1) {
             clearInterval(timerInterval);
             setGameState('lost');
             triggerDialogue('lose');
             return 0;
          }
          
          if (prev === 11 && !timePowerUsed) {
             // Rollback chance
             const chance = Math.random();
             if (chance <= 0.5) { // 50% chance
                 triggerDialogue('time_rollback');
                 setTimePowerUsed(true);
                 // visually rollback
                 return 30;
             } else {
                 triggerDialogue('time_fail');
                 setTimePowerUsed(true);
             }
          }

          return prev - 1;
       });
    }, 1000);

    return () => clearInterval(timerInterval);
  }, [gameState, timePowerUsed]);

  // Check win condition
  useEffect(() => {
    if (gameState === 'playing' && distortedObjects.length === 0) {
       setGameState('won');
       triggerDialogue('win');
    }
  }, [distortedObjects, gameState]);

  const handleObjectClick = (e: React.MouseEvent, id: string) => {
    if (gameState !== 'playing') return;
    e.stopPropagation();

    if (distortedObjects.includes(id)) {
        // Restore
        setDistortedObjects(prev => prev.filter(objId => objId !== id));
    } else {
        // Wrong object
        showX(e.clientX, e.clientY);
    }
  };

  const handleBgClick = (e: React.MouseEvent) => {
    if (gameState !== 'playing') return;
    showX(e.clientX, e.clientY);
  };

  const showX = (clientX: number, clientY: number) => {
    if (!playAreaRef.current) return;
    const rect = playAreaRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    
    const id = xMarkIdRef.current++;
    setXMarks(prev => [...prev, { x, y, id }]);
    
    setTimeout(() => {
        setXMarks(prev => prev.filter(mark => mark.id !== id));
    }, 500);
  };

  const handlePower = () => {
    if (gameState !== 'playing' || powerUses <= 0 || distortedObjects.length === 0) return;
    setPowerUses(prev => prev - 1);
    const toRestore = distortedObjects[Math.floor(Math.random() * distortedObjects.length)];
    setDistortedObjects(prev => prev.filter(id => id !== toRestore));
    triggerDialogue('power');
  };

  return (
    <div className="flex flex-col gap-4 p-4 h-full overflow-hidden font-mono bg-[#c0c0c0] text-black border-2 border-white border-r-[#808080] border-b-[#808080]">
      {/* Title Bar */}
      <div className="bg-[#000080] text-white px-2 py-1 flex justify-between items-center select-none">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-white" />
          <span className="text-xs font-bold tracking-tight">RT_OBSERVER_MEMORY.EXE</span>
        </div>
        <button onClick={onClose} className="win95-button w-5 h-5 flex items-center justify-center font-bold !p-0">×</button>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 items-start overflow-y-auto pr-2 h-full">
        {/* Play Container */}
        <div 
          className="border-4 border-[#808080] border-t-black border-l-black p-1 bg-black shrink-0 w-full lg:w-[600px] h-[400px] relative overflow-hidden"
          ref={playAreaRef}
          onClick={handleBgClick}
        >
          {/* Noise effect during transition or playing with glitches */}
          {gameState === 'playing' && (
             <div className="absolute inset-0 pointer-events-none opacity-10 mix-blend-screen" 
                  style={{ backgroundImage: STIPPLE_BG, backgroundSize: '2px 2px' }}></div>
          )}

          <div className="w-full h-full relative overflow-hidden" style={{ imageRendering: 'pixelated' }}>
             {/* LAYER 1: The Normal Image (Base) */}
             <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${currentMap.bgUrlNormal})` }}></div>
             
             {/* LAYER 2: The Distorted Image (Active Distortions) */}
             <div className="absolute inset-0 z-10 pointer-events-none" style={{ 
                 clipPath: 'url(#distorted-clip)' 
             }}>
                 <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${currentMap.bgUrlDistorted})` }}>
                     {/* TEMPORARY FALLBACK FILTER: Apply distortion purely mechanically because AI quota ran out for generating distorted image files */}
                     {currentMap.bgUrlNormal === currentMap.bgUrlDistorted && (
                        <div className="w-full h-full backdrop-hue-rotate-180 backdrop-invert pointer-events-none"></div>
                     )}
                 </div>
             </div>

             {/* LAYER 3: CLICK ZONES (Invisible, no hints) */}
             {currentMap.objects.map(obj => {
                 const isDistorted = distortedObjects.includes(obj.id);
                 return (
                    <div 
                       key={obj.id} 
                       className={`absolute ${isDistorted ? 'cursor-pointer z-20' : 'pointer-events-none'}`}
                       style={{ left: obj.x, top: obj.y, width: obj.width, height: obj.height }}
                       onClick={(e) => handleObjectClick(e, obj.id)}
                    />
                 );
             })}

             <svg width="0" height="0" className="absolute">
                <defs>
                   <clipPath id="distorted-clip" clipPathUnits="objectBoundingBox">
                      {distortedObjects.map(id => {
                         const obj = currentMap.objects.find(o => o.id === id);
                         if (obj) {
                            return (
                               <rect 
                                  key={obj.id}
                                  x={parseFloat(obj.x) / 100}
                                  y={parseFloat(obj.y) / 100}
                                  width={parseFloat(obj.width) / 100}
                                  height={parseFloat(obj.height) / 100}
                               />
                            )
                         }
                         return null;
                      })}
                   </clipPath>
                </defs>
             </svg>

             {/* Glitch Overlay Sequence */}
             {isGlitching && (
                <div className="absolute inset-0 z-40 bg-black/50 mix-blend-difference pointer-events-none">
                   <div className="w-full h-full animate-[pulse_0.1s_infinite] bg-white mix-blend-overlay"></div>
                   <div className="absolute top-1/4 left-0 w-full h-8 bg-red-500/50 -translate-x-full animate-[slide_0.2s_infinite]"></div>
                   <div className="absolute top-2/3 right-0 w-full h-12 bg-blue-500/50 translate-x-full animate-[slide_0.3s_infinite_reverse]"></div>
                </div>
             )}
          </div>

          {/* Memorize Overlay */}
          {gameState === 'memorize' && (
             <div className="absolute top-4 left-1/2 -translate-x-1/2 z-50 bg-black/80 px-6 py-2 border-2 border-[#fff] text-white animate-pulse">
                <span className="font-bold tracking-widest uppercase">기억하는 중...</span>
             </div>
          )}

          {/* Intro Screen Overlay */}
          {gameState === 'intro' && !showRules && (
             <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
                 <button onClick={startGame} className="win95-button px-8 py-3 text-lg font-bold">
                    기억 시작
                 </button>
             </div>
          )}

          {/* Game Over / Win Overlay */}
          {(gameState === 'won' || gameState === 'lost') && (
             <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-black/80 backdrop-blur-sm text-white">
                <h3 className="font-extrabold mb-4 text-3xl tracking-widest uppercase" style={{ color: gameState === 'won' ? accentColor : '#ff4444', fontFamily: '"MS Sans Serif", Tahoma, sans-serif' }}>
                   {gameState === 'won' ? 'MEMORY_RESTORED' : 'MEMORY_CORRUPT'}
                </h3>
                <button 
                  onClick={initGame}
                  className="win95-button px-6 py-2 font-bold text-black"
                >
                  재시작
                </button>
             </div>
          )}

          {/* X Marks */}
          <AnimatePresence>
             {xMarks.map(mark => (
                 <motion.div 
                    key={mark.id}
                    initial={{ opacity: 1, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1.5 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="absolute text-red-500 font-bold text-4xl pointer-events-none select-none -translate-x-1/2 -translate-y-1/2 drop-shadow-[0_0_2px_rgba(0,0,0,1)]"
                    style={{ left: mark.x, top: mark.y }}
                 >
                    X
                 </motion.div>
             ))}
          </AnimatePresence>
        </div>

        {/* Right Info Section */}
        <div className="flex-1 flex flex-col gap-4 w-full h-full max-h-[400px]">
          <div className="flex justify-between items-center shrink-0">
             <div className="flex flex-col gap-1">
                <span className="text-[10px] uppercase font-bold text-[#666]">Time Remaining</span>
                <div className={`text-3xl font-bold font-mono tracking-wider ${timeLeft <= 10 ? 'text-red-600 animate-pulse' : 'text-black'}`}>
                   00:{timeLeft.toString().padStart(2, '0')}
                </div>
             </div>
             <button 
               onClick={() => setShowRules(true)}
               className="win95-button text-[10px] px-2 py-1 flex items-center gap-1 pb-1.5"
             >
               <span className="w-3 h-3 text-white flex items-center justify-center text-[8px] font-bold" style={{ backgroundColor: accentColor }}>?</span>
               관찰가이드
             </button>
          </div>

          {/* Info Status */}
          <div className="win95-panel p-2 bg-[#dfdfdf] flex justify-between items-center text-xs border border-[#888]">
              <div className="font-bold uppercase tracking-widest text-[#555]">Distorted: {gameState !== 'intro' && gameState !== 'memorize' ? distortedObjects.length : '?'}</div>
              <div className="text-[#888]">Map: {currentMap.name}</div>
          </div>

          {/* Dialog */}
          <div className="shrink-0 min-h-[140px]">
              <AnimatePresence mode="wait">
                {showDialog && (
                  <motion.div 
                    key={message}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="relative p-4 border-2 border-white border-r-[#808080] border-b-[#808080] shadow-sm bg-white"
                  >
                    <div className="absolute inset-0 bg-[#e5a9a9] opacity-10"></div>
                    <div className="absolute -top-3 left-4 bg-[#c0c0c0] px-2 text-[10px] uppercase font-bold border-x border-white z-10">Return_Comm</div>
                    
                    <div className="flex gap-4 items-start relative z-10">
                        <div className="w-14 h-14 bg-black border border-white shrink-0 flex items-center justify-center relative overflow-hidden shadow-[2px_2px_0_rgba(0,0,0,0.2)]" 
                             style={{ backgroundImage: STIPPLE_BG, backgroundSize: '4px 4px' }}>
                          <div className="absolute inset-0 opacity-30 mix-blend-color" style={{ backgroundColor: accentColor }}></div>
                          <span className="text-[9px] text-white opacity-40 font-bold uppercase tracking-widest">Return</span>
                        </div>
                        
                        <div className="flex-1 pt-1">
                          <p className="text-sm leading-relaxed whitespace-pre-wrap font-medium">{message}</p>
                        </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
          </div>

          <div className="w-full mt-auto pt-4 flex gap-2">
              <button 
                  type="button" 
                  onClick={handlePower}
                  disabled={gameState !== 'playing' || powerUses === 0 || distortedObjects.length === 0}
                  className="win95-button flex-1 py-3 text-xs font-bold relative overflow-hidden group pb-4 disabled:opacity-50 flex items-center justify-center gap-2"
                  style={{ backgroundColor: accentColor, color: '#000' }}
              >
                  <span className="text-base group-hover:drop-shadow-[0_0_5px_rgba(255,255,255,1)] transition-all">⏪</span>
                  뒤로! ({powerUses})
                  <div className="absolute inset-0 bg-white/40 translate-y-full group-hover:translate-y-0 transition-transform"></div>
              </button>
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
               className="win95-panel w-full max-w-md bg-[#c0c0c0] border-2 border-white border-r-[#808080] border-b-[#808080] shadow-[8px_8px_0_rgba(0,0,0,0.5)]"
            >
               <div className="bg-[#000080] text-white px-2 py-1 flex justify-between items-center">
                  <span className="text-xs font-bold uppercase tracking-widest">OBSERVER_GUIDE.HLP</span>
                  <button onClick={() => setShowRules(false)} className="win95-button w-5 h-5 text-sm flex items-center justify-center p-0 pb-0.5">×</button>
               </div>
               <div className="p-6">
                  <div className="flex gap-4 mb-4 pb-4 border-b-2 border-dotted border-[#808080]">
                     <div className="w-12 h-12 flex items-center justify-center text-3xl shrink-0" style={{ backgroundColor: accentColor, color: '#000' }}>?</div>
                     <h2 className="text-xl font-bold leading-tight">관찰자의 기억<br/><span className="text-sm font-normal text-[#555] uppercase tracking-widest">Spot The Difference</span></h2>
                  </div>
                  
                  <div className="space-y-4 text-sm leading-relaxed mb-6">
                     <div className="flex gap-3">
                        <div className="w-5 h-5 flex items-center justify-center shrink-0 font-bold text-center border border-[#808080] text-[10px]" style={{ backgroundColor: accentColor }}>1</div>
                        <p><strong>진행 방식:</strong> 게임이 시작되면 5초간 온전한 방의 모습이 나타납니다. 그 후 일부 물건들이 기괴하게 변질됩니다.</p>
                     </div>
                     <div className="flex gap-3">
                        <div className="w-5 h-5 flex items-center justify-center shrink-0 font-bold text-center border border-[#808080] text-[10px]" style={{ backgroundColor: accentColor }}>2</div>
                        <p><strong>목표:</strong> 1분 이내에 변질된 물건들을 클릭하여 원상복구 하십시오. 변하지 않은 물건을 누르면 'X' 경고가 발생합니다.</p>
                     </div>
                     <div className="flex gap-3 pt-2 border-t border-dashed border-[#a0a0a0]">
                        <div className="w-5 h-5 flex items-center justify-center shrink-0 font-bold text-center border border-[#808080] text-[10px] bg-white">⏪</div>
                        <p className="w-full">
                          <strong>리턴의 개입:</strong><br/>
                          - [뒤로!] 버튼을 사용하면 변질된 물건 하나가 즉시 복구됩니다 (상태창 하단, 총 2회).<br/>
                          - 시간이 10초 남았을 때, 확률적으로 리턴이 시간을 30초 전으로 되돌릴 수도 있습니다.
                        </p>
                     </div>
                  </div>

                  <div className="flex justify-center bg-[#dfdfdf] p-2 border-2 border-white border-r-[#808080] border-b-[#808080] mt-2">
                     <button 
                        onClick={() => {
                           if (gameState === 'intro') {
                              startGame();
                           } else {
                              setShowRules(false);
                           }
                        }}
                        className="win95-button px-10 py-1.5 font-bold uppercase tracking-widest w-full pb-2"
                     >
                       {gameState === 'intro' ? '기억하기' : '확인'}
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
