import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const STIPPLE_BG = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4'%3E%3Crect width='1' height='1' fill='%23ffffff'/%3E%3Crect x='2' y='2' width='1' height='1' fill='%23ffffff'/%3E%3C/svg%3E")`;

const WORD_POOL = [
  { word: "책", hints: ["너도 매일 보는 거.", "종이 뭉치지 뭐.", "글씨가 많아.", "덮으면 잠이 잘 오던데.", "도서관 가면 널린 그거."] },
  { word: "구름", hints: ["하늘에 떠 있는 거.", "하얗고 몽글몽글해.", "잡을 순 없고.", "비 오기 전엔 까매져.", "솜사탕 같다고들 해."] },
  { word: "연필", hints: ["쓰면 닳아 없어지는 거.", "흑연으로 구워 만들었어.", "지우개랑 짝꿍이네.", "사각사각 소리.", "네 손에 쥐어져 있는 거."] },
  { word: "거울", hints: ["널 비춰주는 거.", "깨지면 기분 나쁘달까.", "아침마다 보잖아.", "빛을 반사하네.", "유리판 뒤에 은을 칠한 거."] },
  { word: "시계", hints: ["멈추지 않고 도는 거.", "숫자가 12개 있어.", "째깍째깍.", "시간을 잴 때 보지.", "손목이나 벽에 있는 거."] },
  { word: "바다", hints: ["짜고 파란 물.", "깊이를 알 수 없어.", "파도가 치네.", "여름에 많이들 가던데.", "아틀란티스? 글쎄 안 가봐서."] },
  { word: "우산", hints: ["비올 때 쓰는 거.", "접었다 폈다 귀찮지.", "무기라고 우기기도 하던데.", "찢어지면 곤란해.", "비는 안 맞게 해줄게. 들어봐."] },
  { word: "편지", hints: ["종이에 마음을 적는 거.", "요즘은 잘 안 쓰나?", "봉투에 넣어서 부치지.", "누군가를 생각하며 쓰네.", "우표가 필요할걸."] },
  { word: "사진", hints: ["시간을 멈추는 마법인가.", "찍으면 평면이 되지.", "남는 건 이거뿐이래.", "찰칵.", "앨범에 꽂아두는 거."] },
  { word: "고양이", hints: ["야옹.", "쥐를 잡는다던가.", "도도해.", "털이 많이 빠지네.", "나만 이거 없지."] },
  { word: "자전거", hints: ["바퀴가 두 개야.", "페달을 밟아.", "스스로 굴러가지.", "헬멧을 쓰지.", "따르릉 비켜나세요."] },
  { word: "안경", hints: ["눈 나빠?", "코에 걸치네.", "알이 두 개야.", "렌즈라고도 하지.", "쓰면 잘 보여."] },
  { word: "피아노", hints: ["건반이 있어.", "흑과 백이지.", "치면 소리가 나.", "악기야.", "베토벤이 쳤다나."] },
  { word: "나무", hints: ["잎이 나지.", "광합성을 해.", "가을엔 떨어지네.", "뿌리가 깊어.", "새들이 쉬어 가."] },
  { word: "별", hints: ["밤하늘에 있어.", "반짝여.", "우주 쓰레기일지도.", "소원을 빌어봐.", "태양도 이거야."] },
  { word: "달", hints: ["밤을 비춰.", "모양이 변해.", "차고 기운다지.", "토끼가 산다는 가설도.", "늑대가 좋아해."] },
  { word: "신발", hints: ["발에 신는 거.", "끈을 묶어.", "짝이 있어.", "닳으면 버려.", "걷기 편하라고 신지."] },
  { word: "가방", hints: ["물건을 넣어.", "메거나 들거나.", "무거우면 고생이야.", "학교 갈 때 필수지.", "여행 갈 때도 써."] },
  { word: "모자", hints: ["머리에 쓰는 거.", "햇빛을 가려.", "캡이나 햇이라고도 불러.", "마술사가 비둘기를 꺼내기도.", "패션 아이템."] },
  { word: "컴퓨터", hints: ["네가 지금 쓰고 있는 걸지도.", "마우스랑 짝꿍.", "모니터가 있지.", "전기로 돌아가.", "게임할 때 많이 쓰네."] }
];

const getRandomWords = () => {
  const shuffled = [...WORD_POOL].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 10);
};

interface WordGameProps {
  onClose: () => void;
  accentColor?: string;
}

export function WordGame({ onClose, accentColor = "#b0c4de" }: WordGameProps) {
  const [gameWords, setGameWords] = useState(() => getRandomWords());
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hintsShown, setHintsShown] = useState(1);
  const [mistakes, setMistakes] = useState(0);
  const [totalCorrect, setTotalCorrect] = useState(0);
  const [powerUses, setPowerUses] = useState(2);
  const [isCompleted, setIsCompleted] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  const [inputValue, setInputValue] = useState("");
  const [message, setMessage] = useState("");
  const [showDialog, setShowDialog] = useState(true);
  const [showRules, setShowRules] = useState(true);

  // Initial message
  useEffect(() => {
    if (currentIndex === 0 && !isCompleted && hintsShown === 1 && mistakes === 0) {
       triggerDialogue('hint', gameWords[0].hints[0]);
    }
  }, [currentIndex, isCompleted, gameWords]);

  // Ending message
  useEffect(() => {
    if (isCompleted) {
        const rate = (totalCorrect / gameWords.length) * 100;
        triggerDialogue('ending', rate.toString());
    }
  }, [isCompleted, totalCorrect, gameWords]);

  const triggerDialogue = (type: string, payload?: string) => {
    let msg = "";
    if (type === 'hint') {
        msg = `Voice: "${payload}"`;
    } else if (type === 'wrong') {
        const msgs = ["아니야. 다시 생각해 봐.", "글쎄, 그건 아닌데.", "……틀렸네. 다른 거.", "그거 말고."];
        msg = `Voice: "${msgs[Math.floor(Math.random() * msgs.length)]}"`;
    } else if (type === 'skip_wrong') {
       msg = `Voice: "……틀렸네. 그냥 넘어갈게."`;
    } else if (type === 'correct') {
       const msgs = ["맞아. 그거네.", "응, 정답.", "정확해.", "맞혔네. 다음 거 할까."];
       msg = `Voice: "${msgs[Math.floor(Math.random() * msgs.length)]}"`;
    } else if (type === 'no_more_hints') {
       msg = `Voice: "더 줄 힌트는 없는데. 알아서 맞춰 봐."`;
    } else if (type === 'power') {
       msg = `Voice: "Attention. ……이걸 이렇게 쓰네. 편하긴 하다만."`;
    } else if (type === 'ending') {
       const rate = parseFloat(payload || '0');
       if (rate === 100) {
          msg = `Voice: "……다 맞혔네. 의외로 똑똑한가 봐, 너. 수고했어."`;
       } else if (rate >= 50) {
          msg = `Voice: "나쁘지 않네. 절반은 넘겼으니까. 뭐, 고생했어."`;
       } else {
          msg = `Voice: "……음. 뭐, 괜찮아. 다음에 더 잘하면 되지. 별 거 아냐."`;
       }
    }
    
    // Slight animation trigger by unmounting and remounting (key change handles this in render)
    setMessage(msg);
    setShowDialog(true);
  };

  const advanceLevel = () => {
    setIsTransitioning(true);
    setTimeout(() => {
        setIsTransitioning(false);
        if (currentIndex < gameWords.length - 1) {
            const nextIdx = currentIndex + 1;
            setCurrentIndex(nextIdx);
            setMistakes(0);
            setHintsShown(1);
            setInputValue("");
            triggerDialogue('hint', gameWords[nextIdx].hints[0]);
        } else {
            setIsCompleted(true);
        }
    }, 2000);
  };

  const handleRestart = () => {
    setGameWords(getRandomWords());
    setCurrentIndex(0);
    setHintsShown(1);
    setMistakes(0);
    setTotalCorrect(0);
    setPowerUses(2);
    setIsCompleted(false);
    setIsTransitioning(false);
    setInputValue("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isCompleted || isTransitioning) return;

    const currentWord = gameWords[currentIndex].word;
    if (inputValue.trim() === currentWord) {
        setTotalCorrect(prev => prev + 1);
        triggerDialogue('correct');
        advanceLevel();
    } else {
        const newMistakes = mistakes + 1;
        setMistakes(newMistakes);
        if (newMistakes >= 5) {
            triggerDialogue('skip_wrong');
            advanceLevel();
        } else {
            triggerDialogue('wrong');
        }
    }
    setInputValue("");
  };

  const handleMoreHint = () => {
    if (hintsShown < 5) {
        const nextHintCount = hintsShown + 1;
        setHintsShown(nextHintCount);
        triggerDialogue('hint', gameWords[currentIndex].hints[nextHintCount - 1]);
    } else {
        triggerDialogue('no_more_hints');
    }
  };

  const handlePower = () => {
    if (powerUses > 0 && !isTransitioning && !isCompleted) {
        setPowerUses(prev => prev - 1);
        setTotalCorrect(prev => prev + 1);
        triggerDialogue('power');
        advanceLevel();
    }
  };

  return (
    <div className="flex flex-col gap-4 p-4 h-full overflow-hidden font-mono bg-[#c0c0c0] text-black border-2 border-white border-r-[#808080] border-b-[#808080]">
      {/* Title Bar */}
      <div className="bg-[#000080] text-white px-2 py-1 flex justify-between items-center select-none">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-white" />
          <span className="text-xs font-bold tracking-tight">VO_TWENTY_QUESTIONS.EXE</span>
        </div>
        <button onClick={onClose} className="win95-button w-5 h-5 flex items-center justify-center font-bold !p-0">×</button>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 items-start overflow-y-auto pr-2">
        {/* Classroom Board Container */}
        <div className="border-2 border-[#808080] border-t-black border-l-black p-1 bg-[#dfdfdf] shrink-0 w-full lg:w-[400px] h-[280px]">
          <div className="relative w-full h-full bg-[#2F4F4F] border-8 border-[#8B4513] shadow-[inset_0_0_20px_rgba(0,0,0,0.8)] p-4 flex flex-col items-center justify-center overflow-hidden">
                {/* Chalkboard Dust Effects */}
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: STIPPLE_BG, backgroundSize: '4px 4px' }} />
                
                {isCompleted ? (
                   <div className="text-white text-center font-mono relative z-10 animate-[pulse_2s_ease-in-out_infinite]">
                      <h2 className="text-2xl mb-4 font-bold border-b-2 border-white/40 pb-2 border-dashed">최종 결과</h2>
                      <div className="text-xl mb-6">정답률: {Math.round((totalCorrect / gameWords.length) * 100)}% ({totalCorrect}/{gameWords.length})</div>
                      <button 
                         onClick={handleRestart}
                         className="win95-button !bg-white/10 !text-white px-6 py-2 text-sm font-bold border-2 border-white border-r-[#888] border-b-[#888] hover:bg-white/20 transition-colors"
                      >
                         다시 하기
                      </button>
                   </div>
                ) : (
                   <div className="text-white w-full h-full flex flex-col pt-4 relative z-10">
                       <div className="absolute top-0 left-0 text-white/50 text-[10px] uppercase font-mono tracking-widest">Subject: Logic Training</div>
                       <div className="flex-1 flex flex-col items-center justify-center -mt-4">
                           <div className="text-[10px] uppercase tracking-widest text-white/70 mb-4 opacity-70">
                               Word {currentIndex + 1} / 10
                           </div>
                           <div className="text-3xl font-mono tracking-[0.5em] font-bold text-center text-white drop-shadow-[2px_2px_0_rgba(0,0,0,0.5)]">
                              {gameWords[currentIndex].word.split('').map(() => '_').join(' ')}
                           </div>
                           <div className="text-[10px] text-white/50 mt-6 tracking-[0.2em] uppercase">
                              ( {gameWords[currentIndex].word.length} Characters )
                           </div>
                       </div>
                       {/* Power uses remaining */}
                       <div className="absolute bottom-0 right-0 text-white/80 text-[10px] font-mono flex items-center gap-1">
                           <span className="opacity-60 uppercase mr-1">Voice Command:</span>
                           {Array.from({length: 2}).map((_,i) => <span key={i} className={`text-sm ${i < powerUses ? "text-yellow-400 drop-shadow-[0_0_2px_rgba(255,255,0,0.8)]" : "opacity-20 text-white"}`}>★</span>)}
                       </div>
                   </div>
                )}
          </div>
        </div>

        {/* Right Info Section */}
        <div className="flex-1 flex flex-col gap-4 w-full">
          <div className="flex justify-end shrink-0">
            <button 
              onClick={() => setShowRules(true)}
              className="win95-button text-[10px] px-2 py-1 flex items-center gap-1 pb-1.5"
            >
              <span className="w-3 h-3 bg-[#000080] text-white flex items-center justify-center text-[8px] font-bold">?</span>
              스무고개 가이드
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
                    <div className="absolute -top-3 left-4 bg-[#c0c0c0] px-2 text-[10px] uppercase font-bold border-x border-white">Voice_Comm</div>
                    
                    <div className="flex gap-4 items-start">
                        {/* Portrait Placeholder */}
                        <div className="w-14 h-14 bg-black border border-white shrink-0 flex items-center justify-center relative overflow-hidden shadow-[2px_2px_0_rgba(0,0,0,0.2)]" 
                            style={{ backgroundImage: STIPPLE_BG, backgroundSize: '4px 4px' }}>
                        <div className="absolute inset-0 opacity-30 mix-blend-color" style={{ backgroundColor: accentColor }}></div>
                        <span className="text-[9px] text-white opacity-40 font-bold uppercase tracking-widest">Voice</span>
                        </div>
                        
                        <div className="flex-1 pt-1">
                        <p className="text-sm leading-relaxed whitespace-pre-wrap font-medium">{message}</p>
                        </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
          </div>

          {/* Inputs & Status */}
          <div className="win95-panel p-3 border-2 border-[#808080] border-t-black border-l-black bg-white flex flex-col gap-3 flex-1">
             <div className="text-[10px] font-bold text-[#808080] uppercase tracking-widest border-b border-[#dfdfdf] pb-1">GAME_METADATA</div>
             <div className="flex justify-between text-xs px-1">
                 <div>남은 입력 기회: <span className="font-bold text-[#000080]">{5 - mistakes}회</span></div>
                 <div>힌트 열람: <span className="font-bold">{hintsShown}/5</span></div>
             </div>

             <form onSubmit={handleSubmit} className="flex gap-2 mt-2">
                 <input 
                     type="text" 
                     value={inputValue}
                     onChange={e => setInputValue(e.target.value)}
                     disabled={isTransitioning || isCompleted}
                     className="flex-1 win95-inset px-2 py-1.5 text-sm outline-none focus:bg-[#e6f0fa] disabled:bg-[#eee] disabled:text-[#888]"
                     placeholder={isCompleted ? "게임 종료" : "정답 입력..."}
                 />
                 <button type="submit" disabled={isTransitioning || isCompleted} className="win95-button px-5 py-1 text-xs font-bold shrink-0 pb-1.5">제출</button>
             </form>

             <div className="flex gap-2 mt-auto pt-2">
                 <button 
                     type="button" 
                     onClick={handleMoreHint} 
                     disabled={isTransitioning || isCompleted || hintsShown >= 5}
                     className="win95-button flex-1 py-1.5 text-xs bg-[#dfdfdf] font-bold pb-2"
                 >
                     네? (힌트)
                 </button>
                 <button 
                     type="button" 
                     onClick={handlePower}
                     disabled={isTransitioning || isCompleted || powerUses === 0}
                     className="win95-button flex-1 py-1.5 text-xs font-bold relative overflow-hidden group pb-2 disabled:opacity-70"
                     style={{ backgroundColor: accentColor, color: '#000' }}
                 >
                     <span className="relative z-10 flex items-center justify-center gap-1">도움! <span className="text-[10px]">({powerUses})</span></span>
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
               transition={{ type: 'spring', damping: 25, stiffness: 300 }}
               className="win95-panel w-full max-w-md bg-[#c0c0c0] border-2 border-white border-r-[#808080] border-b-[#808080] shadow-[8px_8px_0_rgba(0,0,0,0.5)]"
            >
               <div className="bg-[#000080] text-white px-2 py-1 flex justify-between items-center">
                  <span className="text-xs font-bold uppercase tracking-widest">GAME_GUIDE.HLP</span>
                  <button onClick={() => setShowRules(false)} className="win95-button w-5 h-5 text-sm flex items-center justify-center p-0 pb-0.5">×</button>
               </div>
               <div className="p-6">
                  <div className="flex gap-4 mb-4 pb-4 border-b-2 border-dotted border-[#808080]">
                     <div className="w-12 h-12 flex items-center justify-center text-3xl shrink-0" style={{ backgroundColor: accentColor, color: '#000' }}>?</div>
                     <h2 className="text-xl font-bold leading-tight">단어 스무고개<br/><span className="text-sm font-normal text-[#555] uppercase tracking-widest">Logic Training</span></h2>
                  </div>
                  
                  <div className="space-y-4 text-sm leading-relaxed mb-6">
                     <div className="flex gap-3">
                        <div className="w-5 h-5 flex items-center justify-center shrink-0 font-bold text-center border border-[#808080] text-[10px]" style={{ backgroundColor: accentColor }}>1</div>
                        <p><strong>진행 방식:</strong> 보이스가 던지는 힌트를 보고 정답 단어를 유추하여 입력하세요. (총 10문제)</p>
                     </div>
                     <div className="flex gap-3">
                        <div className="w-5 h-5 flex items-center justify-center shrink-0 font-bold text-center border border-[#808080] text-[10px]" style={{ backgroundColor: accentColor }}>2</div>
                        <p><strong>네?:</strong> 힌트가 부족하다면 '네?' 버튼을 눌러 추가 힌트를 들을 수 있습니다. (문제당 최대 5회)</p>
                     </div>
                     <div className="flex gap-3">
                        <div className="w-5 h-5 flex items-center justify-center shrink-0 font-bold text-center border border-[#808080] text-[10px]" style={{ backgroundColor: accentColor }}>3</div>
                        <p><strong>오답 제한:</strong> 한 문제당 정답을 5번 틀리면 그대로 오답 처리되고 다음으로 넘어갑니다.</p>
                     </div>
                     <div className="flex gap-3 pt-2 border-t border-dashed border-[#a0a0a0]">
                        <div className="w-5 h-5 flex items-center justify-center shrink-0 font-bold text-center border border-[#808080] text-[10px] bg-[#000080] text-yellow-300">★</div>
                        <p className="w-full">
                          <strong>[언령] 도움!:</strong> 위급 시 보이스에게 도움을 요청하면 강제로 문제를 정답 처리합니다.<br/>
                          <span className="text-xs text-[#666] inline-block mt-1">* 1 게임당 단 2회 한정.</span>
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
