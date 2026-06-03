import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { parseEmojisToPixels } from "./pixelIcons";

// Pixel icon components using emojis from pixelIcons.ts
const PixelMyVectorIcon = () => (
  <div className="relative w-10 h-10 flex items-center justify-center">
    <div className="absolute inset-0 bg-[#c0c0c0] border-2 border-white border-r-[#808080] border-b-[#808080]"></div>
    <span className="relative z-10" dangerouslySetInnerHTML={{ __html: parseEmojisToPixels("💻") }} />
  </div>
);

const PixelArchivesIcon = () => (
  <div className="relative w-10 h-10 flex items-center justify-center">
    <div className="absolute inset-0 bg-[#c0c0c0] border-2 border-white border-r-[#808080] border-b-[#808080]"></div>
    <span className="relative z-10" dangerouslySetInnerHTML={{ __html: parseEmojisToPixels("📂") }} />
  </div>
);

const PixelTrashIcon = () => (
  <div className="relative w-10 h-10 flex items-center justify-center">
    <div className="absolute inset-0 bg-[#c0c0c0] border-2 border-white border-r-[#808080] border-b-[#808080]"></div>
    <span className="relative z-10 opacity-60" dangerouslySetInnerHTML={{ __html: parseEmojisToPixels("🗑️") }} />
  </div>
);

export function NexusScreen({ onEnter, onProfileClick }: { onEnter: () => void; onProfileClick?: () => void; key?: string }) {
  const [activeWindow, setActiveWindow] = useState<"mount" | null>(null);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      key="nexus"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="absolute inset-0 z-10 flex flex-col font-sans text-black pointer-events-auto overflow-hidden"
      style={{ backgroundColor: "#008080" }} // Classic Win95 Teal
    >
      {/* Desktop Icons */}
      <div className="absolute top-4 left-4 flex flex-col gap-8 z-30">
        <div 
          className="flex flex-col items-center group cursor-pointer"
          onClick={onProfileClick}
        >
          <div className="mb-1 p-1 group-active:bg-blue-900 group-active:bg-opacity-20 group-hover:bg-blue-900 group-hover:bg-opacity-10 rounded-sm">
            <PixelMyVectorIcon />
          </div>
          <span className="text-[11px] text-white bg-black/40 px-1 py-0.5 mt-1 leading-none shadow-[2px_2px_0_rgba(0,0,0,0.3)] select-none group-hover:bg-blue-800">My Vector</span>
        </div>

        <div 
          className="flex flex-col items-center group cursor-pointer"
          onClick={() => setActiveWindow("mount")}
        >
          <div className="mb-1 p-1 group-active:bg-blue-900 group-active:bg-opacity-20 group-hover:bg-blue-900 group-hover:bg-opacity-10 rounded-sm">
            <PixelArchivesIcon />
          </div>
          <span className="text-[11px] text-white bg-black/40 px-1 py-0.5 mt-1 leading-none shadow-[2px_2px_0_rgba(0,0,0,0.3)] select-none group-hover:bg-blue-800">Archives</span>
        </div>

        <div className="flex flex-col items-center group cursor-default opacity-70">
          <div className="mb-1 p-1">
            <PixelTrashIcon />
          </div>
          <span className="text-[11px] text-white bg-black/40 px-1 py-0.5 mt-1 leading-none select-none">Trash</span>
        </div>
      </div>

      {/* Mounting Window Layer */}
      <div className="flex-1 flex items-center justify-center p-4 relative z-40 pointer-events-none">
        <AnimatePresence>
          {activeWindow === "mount" && (
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 15, stiffness: 200 }}
              className="win95-window w-full max-w-[420px] shadow-2xl relative pointer-events-auto"
            >
              {/* Title Bar */}
              <div className="win95-title-bar mb-1">
                <div className="flex items-center gap-2">
                   <span dangerouslySetInnerHTML={{ __html: parseEmojisToPixels("🛡️") }} />
                  <span className="text-xs font-bold text-white">VECTOR_SECURE_LOGIN</span>
                </div>
                <div className="flex gap-1">
                  <button className="win95-button w-4 h-4 p-0 flex items-center justify-center text-[10px] bg-[#c0c0c0] text-black">_</button>
                  <button className="win95-button w-4 h-4 p-0 flex items-center justify-center text-[10px] bg-[#c0c0c0] text-black">□</button>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveWindow(null);
                    }}
                    className="win95-button w-4 h-4 p-0 flex items-center justify-center text-[10px] bg-[#c0c0c0] text-black"
                  >X</button>
                </div>
              </div>

              {/* Menu Bar */}
              <div className="flex gap-4 px-2 py-0.5 text-[11px] border-b border-[#808080] bg-[#c0c0c0] text-black mb-1">
                <span className="opacity-60 cursor-default">System</span>
                <span className="opacity-60 cursor-default">Tools</span>
                <span className="opacity-60 cursor-default">Help</span>
              </div>

              {/* Content */}
              <div className="p-6 bg-[#dfdfdf] flex flex-col items-center gap-6">
                 <div className="flex items-center gap-6 w-full">
                    <div className="win95-inset bg-white p-4 shrink-0 shadow-inner">
                       <div className="relative">
                          <div 
                            className="scale-[2.0] origin-center"
                            dangerouslySetInnerHTML={{ __html: parseEmojisToPixels("💾") }} 
                          />
                          <motion.div 
                            animate={{ opacity: [1, 0, 1] }} 
                            transition={{ repeat: Infinity, duration: 1 }}
                            className="absolute bottom-[-4px] right-[-4px] w-2 h-2 bg-green-500 rounded-full border border-black z-10"
                          />
                       </div>
                    </div>
                    <div className="flex flex-col gap-2">
                       <h2 className="text-lg font-bold leading-tight">Vector Database Mount</h2>
                       <p className="text-xs text-[#555] leading-relaxed">
                          Encrypted Neural Link detected.<br/>
                          Ready for authentication sequence.
                       </p>
                    </div>
                 </div>

                 <div className="w-full space-y-4">
                    <div className="win95-inset p-3 bg-white text-[11px] font-mono flex flex-col gap-1">
                       <div className="flex justify-between">
                          <span className="text-[#000080]">Identity:</span>
                          <span className="font-bold uppercase">GUEST_O5_ACCESS</span>
                       </div>
                       <div className="flex justify-between">
                          <span className="text-[#000080]">Domain:</span>
                          <span className="font-bold">A-DISTRICT.CENTRAL</span>
                       </div>
                       <div className="w-full h-[1px] bg-[#dfdfdf] my-1" />
                       <div className="text-[10px] text-green-700 animate-pulse">:: WAITING FOR MANUAL OVERRIDE ::</div>
                    </div>

                    <div className="flex justify-end gap-2 text-xs">
                       <button 
                         onClick={onEnter}
                         className="win95-button !min-w-[120px] font-bold group bg-[#c0c0c0]"
                       >
                         <span className="mr-2 group-hover:translate-x-1 transition-transform inline-block">➡</span>
                         MOUNT DB
                       </button>
                       <button 
                         onClick={(e) => {
                           e.stopPropagation();
                           setActiveWindow(null);
                         }}
                         className="win95-button !min-w-[100px]"
                       >
                         Cancel
                       </button>
                    </div>
                 </div>
              </div>

              {/* Progress Bar */}
              <div className="px-1 pb-1 flex items-center gap-2 bg-[#c0c0c0]">
                 <div className="text-[10px] text-[#666] shrink-0">Status: Connection established</div>
                 <div className="flex-1 h-3 win95-inset bg-white p-[1px] flex gap-[1px]">
                    <div className="w-1/3 bg-[#000080]"></div>
                 </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Taskbar */}
      <div className="h-10 bg-[#c0c0c0] border-t border-white shadow-[0_-1px_0_#808080] flex items-center px-1 z-50">
        <button className="win95-button !px-2 h-7 flex items-center gap-1 font-bold">
          <div className="w-4 h-4 bg-gradient-to-br from-red-500 via-blue-500 to-yellow-500" />
          Start
        </button>
        <div className="w-[1px] h-6 bg-[#808080] border-l border-white mx-2" />
        
        {activeWindow === "mount" && (
          <div className="win95-button !h-7 !bg-[#dfdfdf] font-bold !px-3 shadow-inner active:shadow-inner border-t-[#000] border-l-[#000] border-r-[#fff] border-b-[#fff] flex items-center gap-2">
            <span dangerouslySetInnerHTML={{ __html: parseEmojisToPixels("⌨️") }} />
            <span className="text-xs truncate max-w-[120px]">Mount Prompt</span>
          </div>
        )}

        <div className="flex-1" />

        <div className="win95-inset bg-[#c0c0c0] h-7 px-3 flex items-center gap-2 shadow-none border-t-[#808080] border-l-[#808080] border-r-[#fff] border-b-[#fff] border">
           <span dangerouslySetInnerHTML={{ __html: parseEmojisToPixels("👤") }} />
           <span className="text-[11px] font-bold">
             {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })}
           </span>
        </div>
      </div>
    </motion.div>
  );
}

