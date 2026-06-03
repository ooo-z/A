import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SpaceBackground } from "./SpaceBackground";

export function StartScreen({ onComplete }: { onComplete: () => void; key?: string }) {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    // Phase 0: Initial black screen
    const t1 = setTimeout(() => setPhase(1), 800);
    // Phase 1: Booting text
    const t2 = setTimeout(() => setPhase(2), 2200);
    // Phase 2: Drawing grid / stars (space illusion)
    const t3 = setTimeout(() => setPhase(3), 4000);
    // Phase 3: Transition out
    const t4 = setTimeout(() => onComplete(), 5500);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [onComplete]);

  return (
    <motion.div 
      key="start-screen"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.1, ease: "linear" }}
      className="fixed inset-0 z-[100] bg-black text-white font-mono overflow-hidden flex flex-col justify-center items-center"
    >
      {/* Background Starfield / Space Grid */}
      {phase >= 2 && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="absolute inset-0">
          <SpaceBackground />
        </motion.div>
      )}

      {/* Booting Text (Dry, terminal style) */}
      <div className="relative z-10 w-full max-w-2xl px-8 flex flex-col gap-2 text-sm tracking-widest uppercase items-start">
        <AnimatePresence>
          {phase >= 1 && (
            <motion.div
              key="boot-sequence"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col gap-1 w-full"
            >
              <div className="whitespace-pre-wrap">INITIALIZING NEURAL LINK...</div>
              <motion.div 
                initial={{ width: "0%" }} 
                animate={{ width: "100%" }} 
                transition={{ duration: 1.2, ease: "linear" }}
                className="h-px bg-white mt-1 mb-2"
              />
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ delay: 0.5, ease: "linear" }}
              >
                [OK] SECURE CONNECTION ESTABLISHED
              </motion.div>
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ delay: 0.8, ease: "linear" }}
              >
                [OK] DECRYPTING ARCHIVE...
              </motion.div>
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ delay: 1.3, ease: "linear" }}
              >
                [OK] ENTERING DOMAIN // VECTOR-CENTRAL
              </motion.div>
            </motion.div>
          )}
          {phase >= 2 && (
             <motion.div
               key="welcome-text"
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ duration: 0.1, ease: "linear" }}
               className="mt-12 text-center w-full font-bold text-2xl tracking-[0.5em] glitch-text"
               data-text="WELCOME"
             >
                WELCOME
             </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
