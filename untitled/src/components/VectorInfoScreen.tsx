import React, { useState } from "react";
import { motion } from "motion/react";
import { parseEmojisToPixels } from "./pixelIcons";

export function VectorInfoScreen({ onBack }: { onBack: () => void; key?: string }) {
  const [activeTab, setActiveTab] = useState("world");

  const tabs = [
    { id: "world", label: "World State", icon: "🌍" },
    { id: "entities", label: "Vector & Error", icon: "🛡️" },
    { id: "depts", label: "Departments", icon: "💾" },
    { id: "facilities", label: "Facilities", icon: "🗺️" },
  ];

  return (
    <motion.div
      key="info"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.15, ease: "linear" }}
      className="absolute inset-0 z-10 flex flex-col font-sans text-black pointer-events-auto p-4 md:p-8"
      style={{ backgroundColor: "#008080" }}
    >
      <div className="w-full max-w-4xl mx-auto flex flex-col h-full overflow-hidden">
        {/* Main Application Window */}
        <div className="win95-window flex flex-col flex-1 shadow-2xl relative overflow-hidden">
          {/* Title Bar */}
          <div className="win95-title-bar mb-1 shrink-0">
            <div className="flex items-center gap-2">
              <span dangerouslySetInnerHTML={{ __html: parseEmojisToPixels("ℹ️") }} />
              <span className="text-xs font-bold">OZ_WORLD_DATABASE_v1.0.chm</span>
            </div>
            <div className="flex gap-1">
              <button className="win95-button w-4 h-4 p-0 flex items-center justify-center text-[10px]">_</button>
              <button className="win95-button w-4 h-4 p-0 flex items-center justify-center text-[10px]">□</button>
              <button onClick={onBack} className="win95-button w-4 h-4 p-0 flex items-center justify-center text-[10px]">×</button>
            </div>
          </div>

          {/* Tab Header */}
          <div className="win95-tab-container text-[10px] sm:text-xs mt-2 pl-2 border-b-0 relative flex w-full -mb-[1px] overflow-hidden shrink-0">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`win95-button !border-b-0 relative cursor-pointer px-2 sm:px-3 py-1 flex items-center gap-1 sm:gap-2 flex-1 min-w-0 overflow-hidden whitespace-nowrap ${
                  activeTab === tab.id 
                    ? "z-20 font-bold -top-[2px] h-7 bg-[#dfdfdf]" 
                    : "z-0 h-[22px] mt-1 bg-[#c0c0c0] opacity-80"
                }`}
              >
                <span className="shrink-0" dangerouslySetInnerHTML={{ __html: parseEmojisToPixels(tab.icon) }} />
                <span className="truncate">{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Tab Body - Fixed Height Scrollable Area */}
          <div className="flex-1 flex flex-col min-h-0 p-3 sm:p-5 bg-[#c0c0c0] relative z-10">
            {/* The Inset scrolling container just like the Profile view */}
            <div className="flex-1 overflow-y-scroll win95-inset bg-[#dfdfdf] custom-scrollbar p-5 sm:p-8 min-h-0 shadow-inner">
              
              {/* World State Tab */}
              {activeTab === "world" && (
                <div className="flex flex-col gap-6 max-w-2xl">
                  <div className="flex items-start gap-4">
                    <div className="win95-inset bg-white p-6 shrink-0 shadow-inner flex items-center justify-center min-w-[70px] h-[70px]">
                      <div 
                        className="scale-[2.0] origin-center translate-y-[2px]"
                        dangerouslySetInnerHTML={{ __html: parseEmojisToPixels("🌍") }} 
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <h2 className="text-xl font-bold font-sans">World State: [SCHEMA]</h2>
                      <p className="text-[13px] text-[#555] leading-relaxed">
                        불순인자로 이루어진 신생 행성이 폭발했습니다. 이건 땅 조각을 임시로 짜 맞춘 연합 대륙, 조화의 땅 [스케마]에서 벌어지는 이능력자들의 이야기입니다.
                      </p>
                    </div>
                  </div>
                  
                  <div className="win95-inset bg-white px-8 py-5 shadow-inner italic text-sm leading-relaxed border-t-2 border-l-2 border-[#808080]">
                    "산산조각난 세계에도 삶이 있습니다. 누군가는 집을 잃었고, 누군가는 가족을 잃었고, 그럼에도 사는 사람은 살아야 합니다."
                  </div>
                </div>
              )}

              {/* Entities Tab */}
              {activeTab === "entities" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-min">
                  <div className="win95-inset bg-white px-6 py-5 flex flex-col gap-4">
                    <div className="flex items-center gap-3 border-b border-[#808080] pb-3 mb-1">
                      <span className="shrink-0 scale-90" dangerouslySetInnerHTML={{ __html: parseEmojisToPixels("⬜") }} />
                      <span className="font-bold">벡터 (VECTOR)</span>
                    </div>
                    <p className="text-[13px] leading-relaxed px-2">
                      망가진 땅을 재건하는 스케마의 이능력자, 소위 히어로라고 불리는 신세기의 영웅입니다. 공식 부서에 소속되어 질서를 유지합니다.
                    </p>
                  </div>
                  <div className="win95-inset bg-white px-6 py-5 flex flex-col gap-4">
                    <div className="flex items-center gap-3 border-b border-[#808080] pb-3 mb-1">
                      <span className="shrink-0 scale-90" dangerouslySetInnerHTML={{ __html: parseEmojisToPixels("🔳") }} />
                      <span className="font-bold">에러 (ERROR)</span>
                    </div>
                    <p className="text-[13px] leading-relaxed px-2">
                      빌런? 벡터가 아닌 이능력자 중 반사회적 시위 행위를 일삼는 집단입니다. 스케마의 체계 자체에 저항하는 세력입니다.
                    </p>
                  </div>
                </div>
              )}

              {/* Departments Tab */}
              {activeTab === "depts" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 auto-rows-min">
                  {[
                    { name: "센트럴", sub: "현장직 | EVERLAST", desc: "균열에서 잃어버린 대지 조각을 찾아오는 현장탐사 팀. 벡터의 가장 본격적인 영웅입니다.", training: "시킹" },
                    { name: "아리아", sub: "경찰직 | CORE", desc: "현장 호위 및 에러 진압 담당. 스케마 안팎의 질서를 전담하는 무력 집단입니다.", training: "괴력" },
                    { name: "라인", sub: "의료/지원 | ACTIVE", desc: "서포터/힐러. 현장 및 사후 보조 지원, 의료, 긴급 구조를 전담합니다.", training: "체내 에너지 반작용 완화" },
                    { name: "터널", sub: "사무직 | SYNCHRONIZE", desc: "현장에 출동하지 않는 실무진. 벡터의 전체 운영과 정보 분석을 담당합니다.", training: "없음" },
                  ].map((dept) => (
                    <div key={dept.name} className="win95-inset bg-white px-6 py-5 flex flex-col gap-3 hover:bg-[#f0f0f0] transition-colors group">
                      <div className="flex justify-between items-center border-b border-[#808080]/30 pb-2 mb-1">
                        <span className="font-bold text-sm text-[#000080]">{dept.name}</span>
                        <span className="text-[10px] text-[#666]">{dept.sub}</span>
                      </div>
                      <p className="text-[13px] leading-tight flex-1 px-1">{dept.desc}</p>
                      <div className="win95-window bg-[#dfdfdf] px-4 py-2 text-[12px] font-bold group-hover:bg-[#c0c0c0] transition-colors flex items-center gap-1 mt-2">
                        <span className="shrink-0 scale-75" dangerouslySetInnerHTML={{ __html: parseEmojisToPixels("📍") }} /> 훈련: {dept.training}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Facilities Tab */}
              {activeTab === "facilities" && (
                <div className="flex flex-col gap-8 pb-8">
                  {/* Branch Overview */}
                  <div className="flex flex-col gap-6">
                    <span className="font-bold text-sm text-[#000080] border-b-2 border-[#808080] pb-2 flex items-center gap-2 mx-1">
                       <span className="shrink-0 scale-90" dangerouslySetInnerHTML={{ __html: parseEmojisToPixels("🗺️") }} /> 벡터 지부별 관할 구역 정보
                    </span>
                    
                    <div className="flex flex-col gap-6">
                      <div className="win95-inset bg-white px-6 py-6 shadow-inner flex flex-col">
                        <div className="flex items-center gap-2 mb-4 pb-2 border-b border-[#ccc] border-dashed">
                          <span className="font-bold text-sm text-[#2d5a4c]">1. A지부</span>
                          <span className="text-[10px] bg-[#2d5a4c] text-white px-2 py-0.5 shadow-[1px_1px_0_rgba(0,0,0,0.5)]">[고위험지대 담당 지부]</span>
                        </div>
                        <div className="text-[13px] leading-relaxed text-[#333] pl-3 border-l-4 border-[#2d5a4c] flex flex-col">
                          <div>
                            스케마 북부 킨디레일에 위치한 위험 환경 대응 구역입니다. 대지 조립 환경이 불안정하고, 언제 어디서 균열이 터질지 모릅니다.
                          </div>
                          <hr className="my-2 border-t border-dashed border-[#ccc]" />
                          <div>
                            사시사철 맑은 날이 없고 날씨가 언제나 궂습니다. 이동 시 지부 전용 차량을 필수로 대동해야 합니다.
                          </div>
                          <hr className="my-2 border-t border-dashed border-[#ccc]" />
                          <div>
                            스케마 각지의 최우수 후보자만 모아 구성된 엘리트 집단입니다.
                          </div>
                        </div>
                        <div className="mt-4 pt-3 border-t border-[#eee] text-[13px] font-bold text-[#2d5a4c]">
                          *타 지부로의 출장 임무가 가장 잦은 지부
                        </div>
                      </div>

                      <div className="win95-inset bg-white px-6 py-6 shadow-inner flex flex-col">
                        <div className="flex items-center gap-2 mb-4 pb-2 border-b border-[#ccc] border-dashed">
                          <span className="font-bold text-sm text-[#4a6fa5]">2. B지부</span>
                          <span className="text-[10px] bg-[#4a6fa5] text-white px-2 py-0.5 shadow-[1px_1px_0_rgba(0,0,0,0.5)]">[하늘구역 담당 지부]</span>
                        </div>
                        <div className="text-[13px] leading-relaxed text-[#333] pl-3 border-l-4 border-[#4a6fa5] flex flex-col">
                          <div>
                            스케마 동부 이프에덴에 위치한 공중 구역입니다. 에덴(땅)과 스페이스(공중)로 관할 구역이 구분되어 있습니다.
                          </div>
                          <hr className="my-2 border-t border-dashed border-[#ccc]" />
                          <div>
                            과학산업과 종교시설이 크게 발달하여 도심이 광활합니다. 안전구역 내부 치안이 훌륭하지만, 외곽의 미복구 구역은 복구율이 단 2퍼센트에 불과합니다.
                          </div>
                          <hr className="my-2 border-t border-dashed border-[#ccc]" />
                          <div>
                            민간인과 벡터를 가리지 않고, 미복구 구역의 낭떠러지에 빠져 사망하는 경우가 잦습니다. 비행 재능을 가졌거나 날개가 있는 벡터가 다수 모여 있습니다.
                          </div>
                        </div>
                      </div>

                      <div className="win95-inset bg-white px-6 py-6 shadow-inner flex flex-col">
                        <div className="flex items-center gap-2 mb-4 pb-2 border-b border-[#ccc] border-dashed">
                          <span className="font-bold text-sm text-[#a68b6d]">3. C지부</span>
                          <span className="text-[10px] bg-[#a68b6d] text-white px-2 py-0.5 shadow-[1px_1px_0_rgba(0,0,0,0.5)]">[바다구역 담당 지부]</span>
                        </div>
                        <div className="text-[13px] leading-relaxed text-[#333] pl-3 border-l-4 border-[#a68b6d] flex flex-col">
                          <div>
                            스케마 서부 센마레에 위치한 해안 보호 구역입니다. 스케마 전역을 통틀어 가장 안정적인 섬 환경입니다.
                          </div>
                          <hr className="my-2 border-t border-dashed border-[#ccc]" />
                          <div>
                            대도시와 교통편이 크게 발달했으며, 벡터 지부의 크기 역시 네 지부 중 가장 큽니다. 매우 많은 수의 벡터가 바다구역에 비치되어 있습니다.
                          </div>
                          <hr className="my-2 border-t border-dashed border-[#ccc]" />
                          <div>
                            안전구역의 복구율 및 범죄율이 매우 낮기 때문에, 보통 임무가 미복구 바다에서 이루어집니다. 물 속에서 숨을 쉬지 못하면 즉사하기 때문에 C지부 현장직 벡터는 이동 관련 이능력을 필수로 함양해야 합니다.
                          </div>
                        </div>
                      </div>

                      <div className="win95-inset bg-white px-6 py-6 shadow-inner flex flex-col">
                        <div className="flex items-center gap-2 mb-4 pb-2 border-b border-[#ccc] border-dashed">
                          <span className="font-bold text-sm text-[#5a5a5a]">4. D지부</span>
                          <span className="text-[10px] bg-[#5a5a5a] text-white px-2 py-0.5 shadow-[1px_1px_0_rgba(0,0,0,0.5)]">[지하구역 담당 지부]</span>
                        </div>
                        <div className="text-[13px] leading-relaxed text-[#333] pl-3 border-l-4 border-[#5a5a5a] flex flex-col">
                          <div>
                            스케마 남부 에이로베이스에 위치한 땅 속 지부입니다. 지상은 황폐하고, 모든 인구가 지하 벙커에 모여 생활하는 독특한 환경에 노출되어 있습니다.
                          </div>
                          <hr className="my-2 border-t border-dashed border-[#ccc]" />
                          <div>
                            개발이 진행 중인 구역입니다. 에이로베이스 지상 대지는 스케마에 소속되어 있으면서도 종종 균열이 발생하곤 합니다. 즉, D지부 현장직 벡터의 출동 경로는 에이로베이스의 지하에서 에이로베이스의 지상입니다.
                          </div>
                          <hr className="my-2 border-t border-dashed border-[#ccc]" />
                          <div>
                            지하라고 균열과 범죄가 발생하지 않는 것은 아닙니다. 때문에 캄캄한 환경에서도 잘 적응할 수 있는 어둠 계열 이능력자가 벡터의 대부분을 이루고 있습니다.
                          </div>
                        </div>
                        <div className="mt-4 pt-3 border-t border-[#eee] text-[13px] font-bold text-[#5a5a5a]">
                          *타 지부의 출장 지원이 가장 잦은 지부
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Architecture */}
                  <div className="flex flex-col gap-4">
                    <span className="font-bold text-sm text-[#000080] flex items-center gap-2">
                       <span className="shrink-0" dangerouslySetInnerHTML={{ __html: parseEmojisToPixels("🛡️") }} /> A지부 층별 안내도
                    </span>
                    
                    <div className="win95-inset bg-white p-5 flex flex-col md:flex-row gap-6 items-center md:items-stretch overflow-x-auto shadow-inner">
                      <div className="flex flex-col w-[120px] shrink-0 border-2 border-[#808080] bg-[#c0c0c0] shadow-md">
                        <div className="text-center font-bold text-[10px] bg-[#000080] text-white py-1.5">A BRANCH</div>
                        <div className="h-6 border-b border-[#a0a0a0] flex items-center justify-center text-[10px] font-bold bg-[#eee]">5F-8F</div>
                        <div className="h-9 border-b-4 border-black flex items-center justify-center text-[10px] font-bold bg-[#d0d0d0]">1F-4F</div>
                        <div className="h-10 flex flex-col items-center justify-center text-[10px] font-bold bg-[#555] text-white">B1-B4</div>
                      </div>

                      <div className="flex flex-col gap-3 flex-1 min-w-[200px]">
                        <div className="bg-[#f5f5f5] win95-inset px-5 py-3 text-[13px]">
                          <div className="font-bold border-b border-[#ccc] mb-2 pb-1 text-[#000080]">여가/거주 시설 (5F-8F)</div>
                          <p className="text-[#666]">팀별 대원 전용 거주 구역</p>
                        </div>
                        <div className="bg-[#f5f5f5] win95-inset px-5 py-3 text-[13px]">
                          <div className="font-bold border-b border-[#ccc] mb-2 pb-1 text-[#000080]">업무/훈련 시설 (1F-4F)</div>
                          <p className="text-[#666]">식당, 훈련실, 의료 센터, 프론트</p>
                        </div>
                        <div className="bg-[#333] win95-inset-deep px-5 py-3 text-[13px] text-white">
                          <div className="font-bold border-b border-[#555] mb-2 pb-1 text-[#dfdfdf]">수송 시설 (B1-B4)</div>
                          <p className="text-[#ccc]">차랑 무기고 및 긴급 대기실</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Footer Controls */}
          <div className="p-3 bg-[#c0c0c0] flex justify-end gap-2 border-t border-white shrink-0">
            <button onClick={onBack} className="win95-button !min-w-[80px] font-bold">OK</button>
            <button onClick={onBack} className="win95-button !min-w-[80px]">Cancel</button>
            <button className="win95-button !min-w-[80px]" disabled>Apply</button>
          </div>
        </div>
      </div>

      {/* Mini Taskbar/Status Bar */}
      <div className="mt-2 flex justify-between items-center text-[10px] text-white opacity-60 font-mono shrink-0">
        <span>C:\SYSTEM\DATABASE\INFO.EXE</span>
        <div className="flex gap-4">
          <span>CONNECTED: TRUE</span>
        </div>
      </div>
    </motion.div>
  );
}
