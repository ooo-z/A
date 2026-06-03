import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const STIPPLE_BG = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4'%3E%3Crect width='1' height='1' fill='%23ffffff'/%3E%3Crect x='2' y='2' width='1' height='1' fill='%23ffffff'/%3E%3C/svg%3E")`;

const MAZE_POOL = [
  [
    "WWWWWWWWWWWWWWW", 
    "WS00000W000M00W", 
    "W0WWWT0W0W0WW0W", 
    "W0W0000W0W0000W", 
    "W0W0WWWW0WWWW0W", 
    "W0000000000P00W", 
    "WWWWW0WWWWWWWWW", 
    "W0000000000000W", 
    "W0WWWWW0WWWTW0W", 
    "W000P0W000W0W0W", 
    "WWWWW0WWWWW0W0W", 
    "W00D0000M000W0E", 
    "WWWWWWWWWWWWWWW"  
  ],
  [
    "WWWWWWWWWWWWWWW",
    "WS00W00000M000W",
    "W000W0WWWW0WW0W",
    "W0T0W0W00P0W00W",
    "WW0WW0W0WWWW0WW",
    "W00000W0000000W",
    "W0WWWWWWWW0WW0W",
    "W00000D00W00W0W",
    "WWWWW0W0WWWWW0W",
    "W000W0W0000000W",
    "W0P0WWWWWWWWW0W",
    "W0000000T00000E",
    "WWWWWWWWWWWWWWW"
  ],
  [
    "WWWWWWWWWWWWWWW",
    "WS0W0M000000T0W",
    "W00W0WWWWWW0W0W",
    "WW0W000000W0W0W",
    "W00WWWW0W0WWW0W",
    "W0000W00W00000W",
    "WWWW0W0WWWWWWWW",
    "W000000W00P000W",
    "W0WWWWWW0WWWW0W",
    "W0W000000W0000W",
    "W0W0WWWWWW0WW0W",
    "W000P00D0000W0E",
    "WWWWWWWWWWWWWWW"
  ]
];

const getRandomMaze = () => MAZE_POOL[Math.floor(Math.random() * MAZE_POOL.length)];

const OBS_NAMES: Record<string, string> = {
  'T': '가시밭길',
  'P': '바닥 뚫림',
  'M': '괴생명체',
  'D': '암흑지대'
};

interface MazeGameProps {
  onClose: () => void;
  accentColor?: string;
}

export function MazeGame({ onClose, accentColor = "#f3e5ab" }: MazeGameProps) {
  const [currentMaze, setCurrentMaze] = useState(() => getRandomMaze());
  const [playerPosition, setPlayerPosition] = useState({ x: 1, y: 1 });
  const [lives, setLives] = useState(3);
  const [powerUses, setPowerUses] = useState(3);
  const [isIlluminated, setIsIlluminated] = useState(false);
  const [learnedObstacles, setLearnedObstacles] = useState<string[]>([]);
  const [gameState, setGameState] = useState<'playing' | 'won' | 'lost'>('playing');
  
  const [message, setMessage] = useState("");
  const [showDialog, setShowDialog] = useState(true);
  const [showRules, setShowRules] = useState(true);

  const triggerDialogue = useCallback((type: string, payload?: any) => {
    let msg = "";
    if (type === 'start') {
        msg = `Lucid: "당신이 나아갈 길입니다. 조심하십시오, 온전한 시야가 제공되지 않습니다."`;
    } else if (type === 'power') {
        msg = `Lucid: "나의 시야를 잠시 공유합니다. 3초간 기억하십시오."`;
    } else if (type === 'warn') {
        msg = `Lucid: "잠시만요. 근처에 당신을 위협했던 [${OBS_NAMES[payload]}]이(가) 감지됩니다."`;
    } else if (type === 'death') {
        msg = `Lucid: "위험합니다. ……다시 시작지점으로 당신을 돌려보내겠습니다. (남은 기회: ${payload})"`;
    } else if (type === 'gameover') {
        msg = `Lucid: "당신의 모든 기회가 소진되었습니다. ……이번엔, 구하지 못했군요."`;
    } else if (type === 'win') {
        msg = `Lucid: "무사히 도달했군요. 당신의 결단력이 만들어낸 결과입니다."`;
    }
    setMessage(msg);
    setShowDialog(true);
  }, []);

  useEffect(() => {
    if (gameState === 'playing' && playerPosition.x === 1 && playerPosition.y === 1 && lives === 3) {
      triggerDialogue('start');
    }
  }, [gameState, playerPosition, lives, triggerDialogue]);

  useEffect(() => {
    if (gameState !== 'playing') return;

    // Check for warnings
    for (let y = 0; y < currentMaze.length; y++) {
      for (let x = 0; x < currentMaze[y].length; x++) {
        const cell = currentMaze[y][x];
        if (learnedObstacles.includes(cell)) {
           const dist = Math.abs(x - playerPosition.x) + Math.abs(y - playerPosition.y);
           // Warning threshold
           if (dist > 0 && dist <= 3) {
              triggerDialogue('warn', cell);
              return; // Warn for the first one found and break
           }
        }
      }
    }
  }, [playerPosition, learnedObstacles, gameState, triggerDialogue]);

  const handleMove = useCallback((dx: number, dy: number) => {
    if (gameState !== 'playing') return;
    
    const nx = playerPosition.x + dx;
    const ny = playerPosition.y + dy;

    if (ny < 0 || ny >= currentMaze.length || nx < 0 || nx >= currentMaze[0].length) return;
    
    const cell = currentMaze[ny][nx];
    if (cell === 'W') return;

    if (['T', 'P', 'M', 'D'].includes(cell)) {
      const newLives = lives - 1;
      setLives(newLives);
      if (!learnedObstacles.includes(cell)) {
         setLearnedObstacles(prev => [...prev, cell]);
      }

      if (newLives > 0) {
         triggerDialogue('death', newLives);
         setPlayerPosition({x: 1, y: 1}); // respawn
      } else {
         triggerDialogue('gameover');
         setGameState('lost');
      }
    } else if (cell === 'E') {
      setPlayerPosition({x: nx, y: ny});
      triggerDialogue('win');
      setGameState('won');
    } else {
      setPlayerPosition({x: nx, y: ny});
    }
  }, [playerPosition, gameState, lives, learnedObstacles, triggerDialogue]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Prevent default scrolling for arrows
      if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(e.key)) {
        e.preventDefault();
      }
      switch(e.key) {
        case 'ArrowUp': handleMove(0, -1); break;
        case 'ArrowDown': handleMove(0, 1); break;
        case 'ArrowLeft': handleMove(-1, 0); break;
        case 'ArrowRight': handleMove(1, 0); break;
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleMove]);

  const useLightbulb = () => {
    if (powerUses > 0 && gameState === 'playing' && !isIlluminated) {
      setPowerUses(prev => prev - 1);
      setIsIlluminated(true);
      triggerDialogue('power');
      setTimeout(() => {
        setIsIlluminated(false);
      }, 3000);
    }
  };

  const renderMaze = () => {
    const elements = [];
    for (let y = 0; y < currentMaze.length; y++) {
      for (let x = 0; x < currentMaze[y].length; x++) {
        const cell = currentMaze[y][x];
        const isPlayer = playerPosition.x === x && playerPosition.y === y;
        
        // Visibility logic
        const dist = Math.abs(x - playerPosition.x) + Math.abs(y - playerPosition.y);
        // Only adjacent and strictly close
        // Diagonal distance is 2. So up, down, left, right are 1. Diagonal are 2.
        // Let's use max(dx, dy) <= 1 for a 3x3 visible area
        const isVisible = isIlluminated || (Math.max(Math.abs(x - playerPosition.x), Math.abs(y - playerPosition.y)) <= 1) || gameState !== 'playing';
        
        let cellContent = null;
        let cellClass = "w-full aspect-square border border-black/10 relative transition-all duration-300 ";

        if (!isVisible) {
           cellClass += "bg-black opacity-100 z-20";
        } else {
           if (cell === 'W') {
             cellClass += "bg-[#555] border-t-[#888] border-l-[#888] border-r-[#222] border-b-[#222] border-[2px] z-10";
             // brick pattern simulation
             cellContent = <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-white/30 to-black/50" />;
           } else {
             cellClass += "bg-[#222] z-0";
             
             if (cell === 'S') cellContent = <div className="absolute inset-0 bg-blue-500/30 flex items-center justify-center text-[10px] text-white">S</div>;
             if (cell === 'E') cellContent = <div className="absolute inset-0 bg-green-500/30 flex items-center justify-center text-[10px] text-white animate-pulse">E</div>;
             if (['T', 'P', 'M', 'D'].includes(cell)) {
                // Render trap icon
                let icon = '';
                let t_color = '';
                if (cell === 'T') { icon = '▲'; t_color = 'text-red-500'; }
                if (cell === 'P') { icon = '○'; t_color = 'text-gray-600 font-bold'; }
                if (cell === 'M') { icon = 'm'; t_color = 'text-purple-500 font-bold'; }
                if (cell === 'D') { icon = '☁'; t_color = 'text-[#444] font-bold'; }
                
                cellContent = <div className={`absolute inset-0 flex items-center justify-center text-[10px] lg:text-sm ${t_color}`}>{icon}</div>;
             }
           }
        }

        if (isPlayer) {
           cellContent = (
             <>
               {cellContent}
               <div className="absolute inset-0 flex items-center justify-center z-30">
                 <div className="w-2/3 h-2/3 bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)] border border-black" />
               </div>
             </>
           );
        }

        elements.push(
          <div key={`${x}-${y}`} className={cellClass}>
            {cellContent}
          </div>
        );
      }
    }
    return elements;
  };

  return (
    <div className="flex flex-col gap-4 p-4 h-full overflow-hidden font-mono bg-[#c0c0c0] text-black border-2 border-white border-r-[#808080] border-b-[#808080]">
      {/* Title Bar */}
      <div className="bg-[#000080] text-white px-2 py-1 flex justify-between items-center select-none">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-white" />
          <span className="text-xs font-bold tracking-tight">LC_MAZE_AVOIDANCE.EXE</span>
        </div>
        <button onClick={onClose} className="win95-button w-5 h-5 flex items-center justify-center font-bold !p-0">×</button>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 items-start overflow-y-auto pr-2">
        {/* Maze Container */}
        <div className="border-2 border-[#808080] border-t-black border-l-black p-1 bg-black shrink-0 w-full lg:w-[450px]">
          <div className="grid grid-cols-[repeat(15,minmax(0,1fr))] w-full relative">
             {renderMaze()}

             {/* Game Over / Win Overlay */}
             {gameState !== 'playing' && (
                <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
                   <div className="win95-panel p-6 bg-[#c0c0c0] text-center border-2 border-white border-r-[#808080] border-b-[#808080]">
                      <h3 className="font-bold mb-4 text-xl">
                        {gameState === 'won' ? '시뮬레이션 클리어!' : '시뮬레이션 실패'}
                      </h3>
                      <button 
                        onClick={() => { setCurrentMaze(getRandomMaze()); setGameState('playing'); setLives(3); setPlayerPosition({x:1, y:1}); setPowerUses(3); setLearnedObstacles([]); triggerDialogue('start'); }}
                        className="win95-button px-6 py-2 font-bold"
                      >
                        재시작
                      </button>
                   </div>
                </div>
             )}
          </div>
        </div>

        {/* Right Info Section */}
        <div className="flex-1 flex flex-col gap-4 w-full">
          <div className="flex justify-between items-center shrink-0">
             <div className="flex gap-1">
                {[...Array(3)].map((_, i) => (
                   <div key={i} className={`w-3 h-3 border border-black ${i < lives ? 'bg-red-500' : 'bg-transparent'}`} />
                ))}
                <span className="text-[10px] ml-1 uppercase font-bold text-[#666] pt-0.5">Lives</span>
             </div>
             <button 
               onClick={() => setShowRules(true)}
               className="win95-button text-[10px] px-2 py-1 flex items-center gap-1 pb-1.5"
             >
               <span className="w-3 h-3 bg-[#000080] text-white flex items-center justify-center text-[8px] font-bold">?</span>
               미로가이드
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
                    <div className="absolute -top-3 left-4 bg-[#c0c0c0] px-2 text-[10px] uppercase font-bold border-x border-white">Lucid_Comm</div>
                    
                    <div className="flex gap-4 items-start">
                        <div className="w-14 h-14 bg-black border border-white shrink-0 flex items-center justify-center relative overflow-hidden shadow-[2px_2px_0_rgba(0,0,0,0.2)]" 
                             style={{ backgroundImage: STIPPLE_BG, backgroundSize: '4px 4px' }}>
                          <div className="absolute inset-0 opacity-30 mix-blend-color" style={{ backgroundColor: accentColor }}></div>
                          <span className="text-[9px] text-white opacity-40 font-bold uppercase tracking-widest">Lucid</span>
                        </div>
                        
                        <div className="flex-1 pt-1">
                          <p className="text-sm leading-relaxed whitespace-pre-wrap font-medium">{message}</p>
                        </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="win95-panel p-3 border-2 border-[#808080] border-t-black border-l-black bg-white flex flex-col gap-3 flex-1 items-center justify-center">
             <div className="text-[10px] font-bold text-[#808080] uppercase tracking-widest border-b border-[#dfdfdf] pb-1 w-full text-left">MANUAL_OVERRIDE</div>
             
             {/* D-Pad */}
             <div className="grid grid-cols-3 grid-rows-3 gap-1 w-[120px] h-[120px] mt-2">
                <div />
                <button onPointerDown={() => handleMove(0, -1)} className="win95-button flex items-center justify-center font-bold text-xl pb-1" disabled={gameState !== 'playing'}>↑</button>
                <div />
                <button onPointerDown={() => handleMove(-1, 0)} className="win95-button flex items-center justify-center font-bold text-xl pb-1" disabled={gameState !== 'playing'}>←</button>
                <div className="bg-[#ccc] border-2 border-white border-r-[#808080] border-b-[#808080]" />
                <button onPointerDown={() => handleMove(1, 0)} className="win95-button flex items-center justify-center font-bold text-xl pb-1" disabled={gameState !== 'playing'}>→</button>
                <div />
                <button onPointerDown={() => handleMove(0, 1)} className="win95-button flex items-center justify-center font-bold text-xl pb-1" disabled={gameState !== 'playing'}>↓</button>
                <div />
             </div>

             <div className="w-full mt-auto pt-4 flex gap-2">
                 <button 
                     type="button" 
                     onClick={useLightbulb}
                     disabled={gameState !== 'playing' || powerUses === 0 || isIlluminated}
                     className="win95-button flex-1 py-1.5 text-xs font-bold relative overflow-hidden group pb-2 disabled:opacity-50 flex items-center justify-center gap-2"
                     style={{ backgroundColor: accentColor, color: '#000' }}
                 >
                     <span className="text-base group-hover:drop-shadow-[0_0_5px_rgba(255,255,255,1)] transition-all">💡</span>
                     시야 확보 ({powerUses})
                     <div className="absolute inset-0 bg-white/40 translate-y-full group-hover:translate-y-0 transition-transform"></div>
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
               className="win95-panel w-full max-w-md bg-[#c0c0c0] border-2 border-white border-r-[#808080] border-b-[#808080] shadow-[8px_8px_0_rgba(0,0,0,0.5)]"
            >
               <div className="bg-[#000080] text-white px-2 py-1 flex justify-between items-center">
                  <span className="text-xs font-bold uppercase tracking-widest">MAZE_GUIDE.HLP</span>
                  <button onClick={() => setShowRules(false)} className="win95-button w-5 h-5 text-sm flex items-center justify-center p-0 pb-0.5">×</button>
               </div>
               <div className="p-6">
                  <div className="flex gap-4 mb-4 pb-4 border-b-2 border-dotted border-[#808080]">
                     <div className="w-12 h-12 flex items-center justify-center text-3xl shrink-0" style={{ backgroundColor: accentColor, color: '#000' }}>?</div>
                     <h2 className="text-xl font-bold leading-tight">미로 회피 시뮬레이션<br/><span className="text-sm font-normal text-[#555] uppercase tracking-widest">Obstacle Avoidance</span></h2>
                  </div>
                  
                  <div className="space-y-4 text-sm leading-relaxed mb-6">
                     <div className="flex gap-3">
                        <div className="w-5 h-5 flex items-center justify-center shrink-0 font-bold text-center border border-[#808080] text-[10px]" style={{ backgroundColor: accentColor }}>1</div>
                        <p><strong>진행 방식:</strong> 시야가 제한된 어두운 미로 속에서 'E'가 적힌 출구를 찾으세요. 방향키 또는 버튼을 조작합니다.</p>
                     </div>
                     <div className="flex gap-3">
                        <div className="w-5 h-5 flex items-center justify-center shrink-0 font-bold text-center border border-[#808080] text-[10px]" style={{ backgroundColor: accentColor }}>2</div>
                        <p><strong>장애물 및 학습:</strong> 가시밭길/암흑/함정/괴생명체에 닿으면 시작점으로 돌아갑니다. 한 번 닿은 장애물은 이후 3칸 전 루시드가 미리 경고합니다.</p>
                     </div>
                     <div className="flex gap-3">
                        <div className="w-5 h-5 flex items-center justify-center shrink-0 font-bold text-center border border-[#808080] text-[10px]" style={{ backgroundColor: accentColor }}>3</div>
                        <p><strong>기회 제한:</strong> 총 3번의 목숨이 주어지며 모조리 잃으면 사망(실패)합니다.</p>
                     </div>
                     <div className="flex gap-3 pt-2 border-t border-dashed border-[#a0a0a0]">
                        <div className="w-5 h-5 flex items-center justify-center shrink-0 font-bold text-center border border-[#808080] text-[10px] bg-white">💡</div>
                        <p className="w-full">
                          <strong>루시드의 도움:</strong> '시야 확보' 버튼을 누르면 3초간 미로 전체가 밝아집니다. (게임당 3회)<br/>
                        </p>
                     </div>
                  </div>

                  <div className="flex justify-center bg-[#dfdfdf] p-2 border-2 border-white border-r-[#808080] border-b-[#808080] mt-2">
                     <button 
                        onClick={() => setShowRules(false)}
                        className="win95-button px-10 py-1.5 font-bold uppercase tracking-widest w-full pb-2"
                     >
                       확인
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
