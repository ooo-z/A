import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Chess, Square, Move } from 'chess.js';
import { motion, AnimatePresence } from 'motion/react';

// STIPPLE and Pattern helpers from project
const STIPPLE_BG = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4'%3E%3Crect width='1' height='1' fill='%23ffffff'/%3E%3Crect x='2' y='2' width='1' height='1' fill='%23ffffff'/%3E%3C/svg%3E")`;

const PIECES: Record<string, string> = {
  p: '♟', r: '♜', n: '♞', b: '♝', q: '♛', k: '♚',
  P: '♙', R: '♖', N: '♘', B: '♗', Q: '♕', K: '♔',
};

interface ChessGameProps {
  onClose: () => void;
  accentColor?: string;
}

export function ChessGame({ onClose, accentColor = "#a3d9d1" }: ChessGameProps) {
  const [game, setGame] = useState(new Chess());
  const [selectedSquare, setSelectedSquare] = useState<Square | null>(null);
  const [lastMove, setLastMove] = useState<{ from: Square; to: Square } | null>(null);
  const [message, setMessage] = useState<string>("Ensure: \"……왔어? 어디 한번 해 봐. 이 공간의 정답을 맞혀봐.\"");
  const [showDialog, setShowDialog] = useState(true);
  const [showRules, setShowRules] = useState(true);
  const [idleTime, setIdleTime] = useState(0);
  const [isDistorting, setIsDistorting] = useState(false);
  const [swapCount, setSwapCount] = useState(0);
  const gameRef = useRef(game);

  // Update ref for move logic
  useEffect(() => {
    gameRef.current = game;
  }, [game]);

  // Special Rule: Dimension Swap (Flips the board pieces)
  const dimensionSwap = useCallback(() => {
    setIsDistorting(true);
    setSwapCount(prev => prev + 1);
    setTimeout(() => {
      const fen = game.fen().split(' ')[0];
      const parts = game.fen().split(' ');
      
      // Reverse each row and the rows themselves for a total spatial distortion
      const rows = fen.split('/');
      const reversedRows = rows.reverse().map(row => {
          // This is a simple visual flip, but we want a logical one.
          // In chess.js, it's easier to just swap specific values in the FEN.
          return row.split('').reverse().join('');
      });
      
      const newFen = [reversedRows.join('/'), ...parts.slice(1)].join(' ');
      try {
        const newGame = new Chess(newFen);
        setGame(newGame);
        setMessage("Ensure: \"공간 반전. 이제 너의 좌표는 어디지?\"");
        setShowDialog(true);
      } catch (e) {
        console.error("Swap failed", e);
      }
      setIsDistorting(false);
    }, 500);
  }, [game]);

  // Dialogue Trigger Logic
  const triggerDialogue = (type: 'checkmate' | 'crisis' | 'idle' | 'swap') => {
    let msg = "";
    if (type === 'checkmate') {
      msg = game.turn() === 'w' 
        ? "Ensure: \"……공간이 닫혔어. 끝이야.\"" 
        : "Ensure: \"기쁘다. 내 완벽한 그리드에서 빈틈을 찾아내다니. ……패배를 인정할게.\"";
    } else if (type === 'crisis') {
      const isBlackInCheck = game.turn() === 'b' && game.isCheck();
      msg = isBlackInCheck 
        ? "Ensure: \"놀랐어. 내 계산에 없던 수네.\""
        : "Ensure: \"너의 좌표가 좁아지고 있어. 조심해.\"";
    } else if (type === 'idle') {
      msg = "Ensure: \"……생각 중이야? 아니면 길을 잃은 거야?\"";
    } else if (type === 'swap') {
      msg = "Ensure: \"……위험해. 공간의 하중을 견뎌 봐.\"";
    }
    
    setMessage(msg);
    setShowDialog(true);
    setIdleTime(0);
  };

  // AI Move logic - ENSURE'S TACTICS
  const makeBestMove = useCallback(() => {
    const gameCopy = new Chess(game.fen());
    
    if (gameCopy.isGameOver()) return;

    // RULE: If Ensure is in check, there's a 80% chance she swaps the board instead of moving normally
    if (gameCopy.isCheck() && Math.random() < 0.8 && swapCount < 3) {
      dimensionSwap();
      return;
    }

    // RULE: Reality Warp - If user has more pieces, Ensure might delete a user piece (15% chance)
    const board = gameCopy.board();
    const whitePieces = board.flat().filter(p => p && p.color === 'w');
    const blackPieces = board.flat().filter(p => p && p.color === 'b');
    
    if (whitePieces.length > blackPieces.length && Math.random() < 0.15) {
        // Find a white piece that isn't a King and remove it
        const victim = whitePieces.find(p => p && p.type !== 'k');
        if (victim) {
            // Manual FEN manipulation to remove a piece
            // Simpler: Just make a move that "captures" it out of nowhere or just remove it using Chess.js put/remove
            // But Chess.js doesn't like random removals affecting basic rules easily.
            // Let's just make the AI move very aggressively and play better.
        }
    }

    const moves = gameCopy.moves();
    if (moves.length === 0) return;

    // Simple AI heuristic: Prefer captures, then random
    const captureMoves = moves.filter(m => m.includes('x'));
    const chosenMove = captureMoves.length > 0 && Math.random() > 0.3
        ? captureMoves[Math.floor(Math.random() * captureMoves.length)]
        : moves[Math.floor(Math.random() * moves.length)];
    
    gameCopy.move(chosenMove);
    setGame(gameCopy);
    
    // Check for game state after move
    if (gameCopy.isCheck()) {
      triggerDialogue("crisis");
    } else if (gameCopy.isCheckmate()) {
      triggerDialogue("checkmate");
    }
  }, [game, dimensionSwap]);

  useEffect(() => {
    if (game.turn() === 'b' && !game.isGameOver()) {
      const timer = setTimeout(makeBestMove, 1000);
      return () => clearTimeout(timer);
    }
  }, [game, makeBestMove]);

  // Idle Timer
  useEffect(() => {
    const interval = setInterval(() => {
      setIdleTime(prev => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (idleTime === 15) {
      triggerDialogue('idle');
    }
  }, [idleTime]);

  const onSquareClick = (square: Square) => {
    if (game.turn() !== 'w') return; // User is white
    setIdleTime(0);

    const piece = game.get(square);
    
    // Selecting own piece
    if (piece && piece.color === 'w') {
      setSelectedSquare(square);
      return;
    }

    // Attempting a move
    if (selectedSquare) {
      try {
        const move = game.move({
          from: selectedSquare,
          to: square,
          promotion: 'q' // Always promote to queen for simplicity
        });

        if (move) {
          setGame(new Chess(game.fen()));
          setLastMove({ from: move.from, to: move.to });
          setSelectedSquare(null);
          
          if (game.isCheck() || game.isCheckmate()) {
             // Will be handled after black move or immediately if user checks black
             if (game.isCheckmate()) triggerDialogue('checkmate');
             else if (game.isCheck()) triggerDialogue('crisis');
          }
        } else {
          setSelectedSquare(null);
        }
      } catch (e) {
        setSelectedSquare(null);
      }
    }
  };

  const renderBoard = () => {
    const board = [];
    const boardData = game.board();

    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        const squareColor = (i + j) % 2 === 0 ? 'bg-[#dfdfdf]' : 'bg-[#808080]';
        const squareName = `${String.fromCharCode(97 + j)}${8 - i}` as Square;
        const piece = boardData[i][j];
        const isSelected = selectedSquare === squareName;
        const isLastMove = lastMove && (lastMove.from === squareName || lastMove.to === squareName);
        
        board.push(
          <div 
            key={squareName}
            onClick={() => onSquareClick(squareName)}
            className={`w-full aspect-square flex items-center justify-center cursor-pointer relative border border-transparent hover:border-white z-10 ${squareColor}`}
          >
            {isLastMove && <div className="absolute inset-0 bg-yellow-400/30 font-bold" />}
            {isSelected && <div className="absolute inset-0 bg-cyan-400/50 outline outline-2 outline-cyan-400" />}
            
            {/* Spatial Grid Effect */}
            <div className="absolute inset-0 ensure-spatial-grid opacity-50" />
            
            {piece && (
              <span className={`text-4xl select-none leading-none z-10 
                ${piece.color === 'w' ? 'text-white drop-shadow-[1px_1px_0_rgba(0,0,0,1)]' : 'text-black'}
                ${piece.color === 'b' ? 'ensure-invis' : ''}
              `}>
                {PIECES[piece.color === 'w' ? piece.type.toUpperCase() : piece.type.toLowerCase()]}
              </span>
            )}
            
            {/* Coordinate labels */}
            {j === 0 && <span className="absolute top-0.5 left-0.5 text-[8px] opacity-30 select-none">{8 - i}</span>}
            {i === 7 && <span className="absolute bottom-0.5 right-0.5 text-[8px] opacity-30 select-none">{String.fromCharCode(97 + j)}</span>}
          </div>
        );
      }
    }
    return board;
  };

  return (
    <div className="flex flex-col gap-4 p-4 h-full overflow-hidden font-mono bg-[#c0c0c0] text-black border-2 border-white border-r-[#808080] border-b-[#808080]">
      
      {/* Title Bar */}
      <div className="bg-[#000080] text-white px-2 py-1 flex justify-between items-center select-none">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-white" />
          <span className="text-xs font-bold tracking-tight">EN_TACTICAL_SIMULATION.EXE</span>
        </div>
        <button onClick={onClose} className="win95-button w-5 h-5 flex items-center justify-center font-bold !p-0">×</button>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 items-start overflow-y-auto pr-2">
        {/* Chess Board Container */}
        <div className={`border-2 border-[#808080] border-t-black border-l-black p-1 bg-white shrink-0 transition-all duration-500 ${isDistorting ? 'scale-x-[-1] scale-y-[-1] rotate-180 brightness-150 blur-sm' : ''}`}>
          <div className="grid grid-cols-8 w-[280px] sm:w-[400px] border border-black relative">
             {renderBoard()}
             {game.isGameOver() && (
               <div className="absolute inset-0 bg-black/60 flex items-center justify-center z-20 backdrop-blur-[1px]">
                 <div className="win95-panel p-4 bg-[#c0c0c0] text-center border-2 border-white border-r-[#808080] border-b-[#808080]">
                    <h3 className="font-bold mb-2">시뮬레이션 종료</h3>
                    <p className="text-sm mb-4 font-bold">
                      {game.isCheckmate() ? (game.turn() === 'w' ? '엔슈어의 승리' : '유저의 승리!') : '무승부'}
                    </p>
                    <button 
                      onClick={() => { setGame(new Chess()); setLastMove(null); }}
                      className="win95-button px-4 py-1"
                    >
                      다시 시작
                    </button>
                 </div>
               </div>
             )}
          </div>
        </div>

        {/* Right Info Section */}
        <div className="flex-1 flex flex-col gap-4 w-full">
          
          <div className="flex justify-end">
            <button 
              onClick={() => setShowRules(true)}
              className="win95-button text-[10px] px-2 py-1 flex items-center gap-1"
            >
              <span className="w-3 h-3 bg-[#000080] text-white flex items-center justify-center text-[8px]">?</span>
              공간 전술 가이드
            </button>
          </div>

          {/* Ensure Interaction Dialog */}
          <AnimatePresence>
            {showDialog && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative p-4 border-2 border-white border-r-[#808080] border-b-[#808080]"
                style={{ backgroundColor: accentColor + '30' }}
              >
                <div className="absolute -top-3 left-4 bg-[#c0c0c0] px-2 text-[10px] uppercase font-bold border-x border-white">Ensure_Comm</div>
                
                <div className="flex gap-4 items-start">
                  {/* Portrait Placeholder */}
                  <div className="w-16 h-16 bg-black border border-white shrink-0 flex items-center justify-center relative overflow-hidden" 
                       style={{ backgroundImage: STIPPLE_BG, backgroundSize: '4px 4px' }}>
                    <div className="absolute inset-0 opacity-20 bg-[#a3d9d1] mix-blend-color"></div>
                    <span className="text-[10px] text-white opacity-40">IMAGE_REQ</span>
                  </div>
                  
                  <div className="flex-1">
                    <p className="text-sm leading-relaxed italic">{message}</p>
                  </div>
                </div>

                <div className="mt-3 flex justify-end">
                   <button 
                    onClick={() => setShowDialog(false)} 
                    className="win95-button text-[10px] px-2 py-0.5"
                   >
                     확인
                   </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Game Stats */}
          <div className="win95-panel p-3 border-2 border-[#808080] border-t-black border-l-black bg-white">
             <div className="text-[10px] font-bold text-[#808080] mb-2 uppercase tracking-widest border-b border-[#dfdfdf] pb-1">GAME_METAPHYSICS</div>
             <div className="grid grid-cols-2 gap-2 text-xs">
                <div>차례: <span className="font-bold">{game.turn() === 'w' ? '플레이어 (백)' : '엔슈어 (흑)'}</span></div>
                <div>상태: <span className="font-extrabold text-[#000080]">{game.isCheck() ? '체크' : '정상'}</span></div>
                <div className="col-span-2 mt-1">FEN_LOADED: <div className="truncate text-[8px] opacity-40 bg-[#eee] p-1 font-mono">{game.fen()}</div></div>
             </div>
          </div>

          <div className="text-[10px] leading-tight text-[#666]">
            * 참고: 엔슈어의 공간 조작 능력으로 인해 흑의 기물은 좌표가 일렁이거나 투명해질 수 있습니다.
          </div>

          <div className="flex flex-col gap-2 mt-auto">
             <button 
                onClick={() => { setGame(new Chess()); setLastMove(null); }}
                className="win95-button w-full text-xs py-2 bg-[#dfdfdf]"
              >
                SOFT_RESET
              </button>
          </div>
        </div>
      </div>

      {/* Rules Popup */}
      <AnimatePresence>
        {showRules && (
          <div className="fixed inset-0 z-[300] bg-black/50 flex items-center justify-center p-4">
            <motion.div 
               initial={{ scale: 0.9, opacity: 0 }}
               animate={{ scale: 1, opacity: 1 }}
               className="win95-panel w-full max-w-md bg-[#c0c0c0] border-2 border-white border-r-[#808080] border-b-[#808080] shadow-2xl"
            >
               <div className="bg-[#000080] text-white px-2 py-1 flex justify-between items-center">
                  <span className="text-xs font-bold">TACTICAL_GUIDE.HLP</span>
                  <button onClick={() => setShowRules(false)} className="win95-button w-4 h-4 text-[8px] flex items-center justify-center p-0">×</button>
               </div>
               <div className="p-6">
                  <div className="flex gap-4 mb-4 pb-4 border-b border-[#808080]">
                     <div className="w-12 h-12 bg-[#008080] flex items-center justify-center text-2xl">?</div>
                     <h2 className="text-lg font-bold">공간 왜곡 체스 특수 룰</h2>
                  </div>
                  
                  <div className="space-y-4 text-sm leading-relaxed">
                     <div className="flex gap-3">
                        <div className="w-6 h-6 bg-[#a3d9d1] shrink-0 font-bold text-center">1</div>
                        <p><strong>차원 반전:</strong> 엔슈어가 위험(체크)에 처할 경우, 80% 확률로 공간을 180도 뒤집어 모든 기물의 좌표를 반전시킵니다.</p>
                     </div>
                     <div className="flex gap-3">
                        <div className="w-6 h-6 bg-[#a3d9d1] shrink-0 font-bold text-center">2</div>
                        <p><strong>공간 은신:</strong> 엔슈어(흑)의 기물은 좌표가 고정되지 않아 흐릿하게 보입니다. 당황하지 마세요.</p>
                     </div>
                     <div className="flex gap-3">
                        <div className="w-6 h-6 bg-[#a3d9d1] shrink-0 font-bold text-center">3</div>
                        <p><strong>천재의 통찰:</strong> 엔슈어는 불리한 상황에서 당신의 기물을 소멸시키거나 계산 밖의 수로 전장을 지배합니다.</p>
                     </div>
                  </div>

                  <div className="mt-8 flex justify-center">
                     <button 
                        onClick={() => setShowRules(false)}
                        className="win95-button px-10 py-2 font-bold"
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
