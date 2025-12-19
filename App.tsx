import React, { useState } from 'react';
import { MatrixChart } from './components/MatrixChart';
import { InitiativeCard } from './components/InitiativeCard';
import { INITIAL_INITIATIVES, METRIC_DEFINITIONS, getQuadrant, getInitiativeAnalysis, getEfficiencyRating } from './constants';
import { DevRelInitiative } from './types';

const App: React.FC = () => {
  const [initiatives] = useState<DevRelInitiative[]>(INITIAL_INITIATIVES);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isDark, setIsDark] = useState(true);
  const [showMobilePanel, setShowMobilePanel] = useState(false);
  const [expandedMetric, setExpandedMetric] = useState<string | null>(null);

  const categories = ['Event', 'Community', 'Support', 'Product', 'Content'];
  
  const filteredInitiatives = selectedCategory 
    ? initiatives.filter(i => i.category === selectedCategory)
    : initiatives;

  const getMetricAverage = (key: keyof Pick<DevRelInitiative, 'reach' | 'closeness' | 'happiness' | 'effort'>) => {
    const items = filteredInitiatives.length > 0 ? filteredInitiatives : initiatives;
    const sum = items.reduce((acc, curr) => acc + (curr[key] as number), 0);
    return Math.round(sum / items.length);
  };

  const activeInitiative = initiatives.find(i => i.id === activeId);
  const activeQuadrant = activeInitiative ? getQuadrant(activeInitiative.reach, activeInitiative.closeness) : null;
  const analysis = activeInitiative ? getInitiativeAnalysis(activeInitiative) : null;
  const efficiency = activeInitiative ? getEfficiencyRating(activeInitiative) : null;

  const handleSelect = (id: string | null) => {
    setActiveId(prev => prev === id ? null : id);
    if (id && window.innerWidth < 1024) {
      setShowMobilePanel(true);
    }
  };

  const theme = {
    bg: isDark ? 'bg-black' : 'bg-white',
    text: isDark ? 'text-white' : 'text-black',
    textMuted: isDark ? 'text-neutral-500' : 'text-neutral-500',
    textDim: isDark ? 'text-neutral-700' : 'text-neutral-400',
    border: isDark ? 'border-neutral-900' : 'border-neutral-200',
    cardBg: isDark ? 'bg-neutral-950' : 'bg-neutral-100',
    cardHover: isDark ? 'hover:bg-neutral-900' : 'hover:bg-neutral-200',
    accent: 'text-emerald-500',
    accentBg: 'bg-emerald-500',
  };

  return (
    <div className={`h-screen ${theme.bg} ${theme.text} flex flex-col overflow-hidden`}>
      {/* Navbar */}
      <header className={`sticky top-0 z-40 ${theme.bg} border-b ${theme.border} flex-shrink-0`}>
        {/* Top Row - Logo & Theme */}
        <div className="flex items-center justify-between px-4 md:px-6 py-3">
          <div className="flex items-center gap-3">
            <div className={`w-2 h-2 rounded-full ${theme.accentBg} animate-pulse`} />
            <span className="text-sm font-medium tracking-wide">DevRel Impact</span>
          </div>
          
          <div className="flex items-center gap-3">
            <a 
              href="https://www.linkedin.com/in/rohankokkula/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mono text-[9px] text-neutral-600 hover:text-emerald-500 transition-colors hidden sm:block"
            >
              by rohan kokkula
            </a>
            <div className="mono text-[10px] text-neutral-500 hidden sm:block">
              {filteredInitiatives.length} initiatives
            </div>
            <button
              onClick={() => setIsDark(!isDark)}
              className={`w-8 h-8 flex items-center justify-center rounded-full transition-colors ${
                isDark ? 'bg-neutral-900 hover:bg-neutral-800' : 'bg-neutral-200 hover:bg-neutral-300'
              }`}
              title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDark ? (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Category Filters - Scrollable */}
        <div className="px-4 md:px-6 pb-3 overflow-x-auto custom-scrollbar">
          <div className="flex items-center gap-1 min-w-max">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-3 py-1.5 text-[10px] uppercase tracking-widest transition-all duration-200 whitespace-nowrap ${
                !selectedCategory 
                  ? `${isDark ? 'bg-white text-black' : 'bg-black text-white'}` 
                  : `${theme.textMuted} hover:${theme.text}`
              }`}
            >
              All
            </button>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(selectedCategory === cat ? null : cat)}
                className={`px-3 py-1.5 text-[10px] uppercase tracking-widest transition-all duration-200 whitespace-nowrap ${
                  selectedCategory === cat 
                    ? `${isDark ? 'bg-white text-black' : 'bg-black text-white'}` 
                    : `${theme.textMuted} hover:${theme.text}`
                }`}
              >
                {cat}
              </button>
            ))}
            <span className="sm:hidden mono text-[10px] text-neutral-500 ml-2">
              {filteredInitiatives.length}
            </span>
          </div>
        </div>
      </header>

      {/* Initiatives Strip */}
      <div className={`border-b ${theme.border} flex-shrink-0`}>
        <div className="flex gap-2 p-3 md:p-4 overflow-x-auto custom-scrollbar">
          {filteredInitiatives.map((initiative, index) => (
            <InitiativeCard 
              key={initiative.id} 
              initiative={initiative} 
              onSelect={handleSelect}
              isActive={activeId === initiative.id}
              index={index}
              isDark={isDark}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col lg:flex-row min-h-0 overflow-hidden">
        {/* Sidebar - Hidden on mobile, shown as bottom panel */}
        <div className={`hidden lg:flex w-[340px] flex-shrink-0 p-6 border-r ${theme.border} flex-col overflow-y-auto`}>
          <SidebarContent 
            activeInitiative={activeInitiative}
            analysis={analysis}
            efficiency={efficiency}
            isDark={isDark}
            theme={theme}
            getMetricAverage={getMetricAverage}
            setActiveId={setActiveId}
          />
        </div>

        {/* Chart */}
        <div className="flex-1 p-2 sm:p-4 md:p-6 pb-20 lg:pb-6 flex flex-col min-h-0">
          <div className="flex-1 min-h-[280px]">
            <MatrixChart 
              data={filteredInitiatives} 
              activeId={activeId} 
              onSelect={handleSelect}
              isDark={isDark}
              activeQuadrant={activeQuadrant}
            />
          </div>
        </div>
      </div>

      {/* Mobile Metrics Bar - Fixed at bottom */}
      <div className={`lg:hidden fixed bottom-0 left-0 right-0 z-50 border-t ${theme.border} ${theme.bg}`}>
        {/* Expanded Metric Definition - Shows above the bar */}
        {expandedMetric && (
          <div className={`px-4 py-3 border-b ${theme.border} animate-in h-24`}>
            <div className="flex items-center justify-between mb-1">
              <span className={`font-medium text-sm ${expandedMetric === 'effort' ? 'text-orange-400' : 'text-emerald-500'}`}>
                {METRIC_DEFINITIONS[expandedMetric as keyof typeof METRIC_DEFINITIONS].name}
              </span>
              <button 
                onClick={() => setExpandedMetric(null)}
                className={`${theme.textMuted} text-xs p-1`}
              >
                ✕
              </button>
            </div>
            <p className={`text-xs ${theme.textMuted} leading-relaxed line-clamp-3`}>
              {METRIC_DEFINITIONS[expandedMetric as keyof typeof METRIC_DEFINITIONS].description}
            </p>
          </div>
        )}
        
        {/* Metric Buttons */}
        <div className="grid grid-cols-4 gap-px">
          {(['reach', 'closeness', 'happiness', 'effort'] as const).map((key) => (
            <button 
              key={key} 
              onClick={() => setExpandedMetric(expandedMetric === key ? null : key)}
              className={`text-center py-3 px-2 transition-all ${
                expandedMetric === key 
                  ? isDark ? 'bg-neutral-800' : 'bg-neutral-200'
                  : isDark ? 'active:bg-neutral-800' : 'active:bg-neutral-200'
              }`}
            >
              <div className={`mono text-[8px] uppercase mb-0.5 ${
                expandedMetric === key ? 'text-emerald-500' : theme.textMuted
              }`}>
                {METRIC_DEFINITIONS[key].name.charAt(0)}
              </div>
              <div className={`text-lg font-light ${
                key === 'effort' 
                  ? 'text-orange-400' 
                  : expandedMetric === key ? 'text-emerald-500' : ''
              }`}>
                {getMetricAverage(key)}
              </div>
            </button>
          ))}
        </div>
        
        {/* Safe area padding for phones with home indicator */}
        <div className="pb-safe" style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }} />
      </div>

      {/* Mobile Bottom Panel */}
      {showMobilePanel && activeInitiative && analysis && efficiency && (
        <div className={`lg:hidden fixed inset-0 z-50 flex flex-col`}>
          {/* Backdrop */}
          <div 
            className="flex-shrink-0 h-[15vh] bg-black/60 backdrop-blur-sm"
            onClick={() => setShowMobilePanel(false)}
          />
          
          {/* Panel */}
          <div className={`${theme.bg} border-t ${theme.border} flex-1 flex flex-col animate-slide-up`}>
            {/* Handle - Fixed */}
            <div className="flex-shrink-0 p-3 flex justify-center">
              <div className={`w-12 h-1 rounded-full ${isDark ? 'bg-neutral-700' : 'bg-neutral-300'}`} />
            </div>
            
            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto overscroll-contain px-4 pb-8" style={{ WebkitOverflowScrolling: 'touch' }}>
              <MobilePanelContent 
                activeInitiative={activeInitiative}
                analysis={analysis}
                efficiency={efficiency}
                isDark={isDark}
                theme={theme}
                onClose={() => {
                  setShowMobilePanel(false);
                  setActiveId(null);
                }}
              />
            </div>
          </div>
        </div>
      )}

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          height: 2px;
          width: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: ${isDark ? '#262626' : '#d4d4d4'};
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slide-up {
          from { transform: translateY(100%); }
          to { transform: translateY(0); }
        }
        .animate-in {
          animation: fade-in 0.2s ease-out;
        }
        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 1; }
        }
        .animate-pulse {
          animation: pulse 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

// Sidebar Content Component
const SidebarContent: React.FC<{
  activeInitiative: DevRelInitiative | undefined;
  analysis: any;
  efficiency: any;
  isDark: boolean;
  theme: any;
  getMetricAverage: (key: 'reach' | 'closeness' | 'happiness' | 'effort') => number;
  setActiveId: (id: string | null) => void;
}> = ({ activeInitiative, analysis, efficiency, isDark, theme, getMetricAverage, setActiveId }) => {
  const [hoveredMetric, setHoveredMetric] = useState<string | null>(null);

  return (
    <>
      {/* Metric Definitions */}
      <div className="mb-6">
        <div className={`mono text-[10px] ${theme.textMuted} uppercase tracking-widest mb-4`}>Metrics</div>
        <div className="space-y-4">
          {(['reach', 'closeness', 'happiness', 'effort'] as const).map((key) => (
            <div 
              key={key}
              className="group cursor-help"
              onMouseEnter={() => setHoveredMetric(key)}
              onMouseLeave={() => setHoveredMetric(null)}
            >
              <div className="flex items-baseline justify-between mb-1">
                <span className={`text-xs uppercase tracking-wider ${theme.textMuted}`}>
                  {METRIC_DEFINITIONS[key].name}
                </span>
                <span className={`text-3xl font-extralight group-hover:text-emerald-500 transition-colors ${
                  key === 'effort' ? 'text-orange-400 group-hover:text-orange-500' : ''
                }`}>
                  {getMetricAverage(key)}
                </span>
              </div>
              {hoveredMetric === key && (
                <p className={`text-[10px] ${theme.textMuted} leading-relaxed animate-in`}>
                  {METRIC_DEFINITIONS[key].description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Selected Initiative & Analysis */}
      {activeInitiative && analysis && efficiency ? (
        <div className="flex-1 flex flex-col gap-4 animate-in">
          {/* Initiative Card */}
          <div className={`p-4 ${isDark ? 'bg-white text-black' : 'bg-black text-white'}`}>
            <div className="flex justify-between items-start mb-2">
              <div className="mono text-[9px] uppercase tracking-widest opacity-50">Selected</div>
              <button 
                onClick={() => setActiveId(null)}
                className="opacity-50 hover:opacity-100 transition-opacity text-xs"
              >
                ✕
              </button>
            </div>
            <div className="font-medium text-sm mb-1">{activeInitiative.name}</div>
            <div className="text-[11px] opacity-70 mb-3 leading-relaxed">{activeInitiative.description}</div>
            <div className="mono text-[10px] flex gap-3 opacity-70">
              <span>R:{activeInitiative.reach}</span>
              <span>C:{activeInitiative.closeness}</span>
              <span>H:{activeInitiative.happiness}</span>
              <span>E:{activeInitiative.effort}</span>
            </div>
          </div>

          {/* Efficiency Rating */}
          <div className={`p-3 ${isDark ? 'bg-neutral-900' : 'bg-neutral-100'} flex items-center justify-between`}>
            <div>
              <div className={`mono text-[9px] uppercase tracking-widest ${theme.textMuted}`}>ROI Efficiency</div>
              <div className={`font-semibold ${efficiency.color}`}>{efficiency.rating}</div>
            </div>
            <div className={`text-2xl font-light ${efficiency.color}`}>
              {Math.round(efficiency.score)}
            </div>
          </div>

          {/* Quadrant Analysis */}
          <div className={`p-4 border-2 border-emerald-500 ${isDark ? 'bg-emerald-500/10' : 'bg-emerald-500/10'}`}>
            {/* Header with Mini Chart */}
            <div className="flex gap-3 mb-4">
              {/* Mini Chart */}
              <div className="flex-shrink-0">
                <svg width="64" height="64" viewBox="0 0 100 100" className="border border-emerald-500/30">
                  <line x1="50" y1="0" x2="50" y2="100" stroke={isDark ? '#374151' : '#d1d5db'} strokeWidth="1" strokeDasharray="4,4" />
                  <line x1="0" y1="50" x2="100" y2="50" stroke={isDark ? '#374151' : '#d1d5db'} strokeWidth="1" strokeDasharray="4,4" />
                  <rect 
                    x={activeInitiative.reach >= 50 ? 50 : 0} 
                    y={activeInitiative.closeness >= 50 ? 0 : 50} 
                    width="50" height="50" 
                    fill="#10b981" fillOpacity="0.15"
                  />
                  <circle cx={activeInitiative.reach} cy={100 - activeInitiative.closeness} r="6" fill="#10b981" />
                  <circle cx={activeInitiative.reach} cy={100 - activeInitiative.closeness} r="10" fill="none" stroke="#10b981" strokeWidth="1" opacity="0.5" />
                </svg>
              </div>
              
              {/* Title */}
              <div className="flex-1">
                <div className="mono text-[9px] uppercase tracking-widest text-emerald-500 mb-1">
                  {activeInitiative.name}
                </div>
                <div className="font-semibold text-base text-emerald-500">{analysis.name}</div>
                <div className="mono text-[9px] text-neutral-500 mt-1">
                  R{activeInitiative.reach} / C{activeInitiative.closeness}
                </div>
              </div>
            </div>
            
            <div className={`text-[11px] ${theme.textMuted} mb-4`}>{analysis.description}</div>
            
            <div className="space-y-4">
              <div>
                <div className={`mono text-[9px] uppercase tracking-widest ${theme.textMuted} mb-1`}>
                  Why It Matters
                </div>
                <p className={`text-[11px] leading-relaxed ${isDark ? 'text-neutral-300' : 'text-neutral-700'}`}>
                  {analysis.reasoning}
                </p>
              </div>
              
              <div>
                <div className={`mono text-[9px] uppercase tracking-widest ${theme.textMuted} mb-1`}>
                  Recommendation
                </div>
                <p className={`text-[11px] leading-relaxed ${isDark ? 'text-neutral-300' : 'text-neutral-700'}`}>
                  {analysis.recommendation}
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className={`mt-auto p-4 border ${theme.border} opacity-50`}>
          <div className="mono text-[10px] uppercase tracking-widest mb-2">No Selection</div>
          <p className="text-[11px] leading-relaxed mb-4">Click any initiative to see personalized analysis, ROI efficiency, and strategic recommendations.</p>
          <a 
            href="https://www.linkedin.com/in/rohankokkula/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="mono text-[9px] text-neutral-500 hover:text-emerald-500 transition-colors sm:hidden"
          >
            by rohan kokkula
          </a>
        </div>
      )}
    </>
  );
};

// Mobile Panel Content Component
const MobilePanelContent: React.FC<{
  activeInitiative: DevRelInitiative;
  analysis: any;
  efficiency: any;
  isDark: boolean;
  theme: any;
  onClose: () => void;
}> = ({ activeInitiative, analysis, efficiency, isDark, theme, onClose }) => {
  return (
    <>
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <div>
          <div className="font-medium text-lg">{activeInitiative.name}</div>
          <div className={`text-xs ${theme.textMuted}`}>{activeInitiative.category}</div>
        </div>
        <button 
          onClick={onClose}
          className={`p-2 rounded-full ${isDark ? 'bg-neutral-800' : 'bg-neutral-200'}`}
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Description */}
      <p className={`text-sm ${theme.textMuted} mb-4`}>{activeInitiative.description}</p>

      {/* Metrics Grid */}
      <div className="grid grid-cols-4 gap-2 mb-4">
        <div className={`p-3 ${isDark ? 'bg-neutral-900' : 'bg-neutral-100'} text-center`}>
          <div className="mono text-[9px] text-neutral-500">Reach</div>
          <div className="text-xl font-light">{activeInitiative.reach}</div>
        </div>
        <div className={`p-3 ${isDark ? 'bg-neutral-900' : 'bg-neutral-100'} text-center`}>
          <div className="mono text-[9px] text-neutral-500">Close</div>
          <div className="text-xl font-light">{activeInitiative.closeness}</div>
        </div>
        <div className={`p-3 ${isDark ? 'bg-neutral-900' : 'bg-neutral-100'} text-center`}>
          <div className="mono text-[9px] text-neutral-500">Happy</div>
          <div className="text-xl font-light">{activeInitiative.happiness}</div>
        </div>
        <div className={`p-3 ${isDark ? 'bg-neutral-900' : 'bg-neutral-100'} text-center`}>
          <div className="mono text-[9px] text-neutral-500">Effort</div>
          <div className="text-xl font-light text-orange-400">{activeInitiative.effort}</div>
        </div>
      </div>

      {/* Efficiency */}
      <div className={`p-4 ${isDark ? 'bg-neutral-900' : 'bg-neutral-100'} flex items-center justify-between mb-4`}>
        <div>
          <div className="mono text-[9px] text-neutral-500 uppercase">ROI Efficiency</div>
          <div className={`font-semibold ${efficiency.color}`}>{efficiency.rating}</div>
        </div>
        <div className={`text-3xl font-light ${efficiency.color}`}>
          {Math.round(efficiency.score)}
        </div>
      </div>

      {/* Quadrant Badge with Mini Chart */}
      <div className="p-4 border-2 border-emerald-500 bg-emerald-500/10 mb-4">
        <div className="flex gap-4">
          {/* Mini Chart */}
          <div className="flex-shrink-0">
            <svg width="80" height="80" viewBox="0 0 100 100" className="border border-emerald-500/30">
              {/* Quadrant lines */}
              <line x1="50" y1="0" x2="50" y2="100" stroke={isDark ? '#374151' : '#d1d5db'} strokeWidth="1" strokeDasharray="4,4" />
              <line x1="0" y1="50" x2="100" y2="50" stroke={isDark ? '#374151' : '#d1d5db'} strokeWidth="1" strokeDasharray="4,4" />
              
              {/* Highlight active quadrant */}
              <rect 
                x={activeInitiative.reach >= 50 ? 50 : 0} 
                y={activeInitiative.closeness >= 50 ? 0 : 50} 
                width="50" 
                height="50" 
                fill="#10b981" 
                fillOpacity="0.15"
              />
              
              {/* Dot position */}
              <circle 
                cx={activeInitiative.reach} 
                cy={100 - activeInitiative.closeness} 
                r="6" 
                fill="#10b981"
              />
              <circle 
                cx={activeInitiative.reach} 
                cy={100 - activeInitiative.closeness} 
                r="10" 
                fill="none"
                stroke="#10b981"
                strokeWidth="1"
                opacity="0.5"
              />
              
              {/* Quadrant labels */}
              <text x="25" y="15" textAnchor="middle" fill={isDark ? '#6b7280' : '#9ca3af'} fontSize="6" fontFamily="monospace">ND</text>
              <text x="75" y="15" textAnchor="middle" fill={isDark ? '#6b7280' : '#9ca3af'} fontSize="6" fontFamily="monospace">S+D</text>
              <text x="25" y="95" textAnchor="middle" fill={isDark ? '#6b7280' : '#9ca3af'} fontSize="6" fontFamily="monospace">LI</text>
              <text x="75" y="95" textAnchor="middle" fill={isDark ? '#6b7280' : '#9ca3af'} fontSize="6" fontFamily="monospace">BS</text>
            </svg>
          </div>
          
          {/* Quadrant Info */}
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className="font-semibold text-emerald-500">{analysis.name}</span>
            </div>
            <div className={`text-xs ${theme.textMuted} mb-2`}>{analysis.description}</div>
            <div className="mono text-[9px] text-neutral-500">
              Position: R{activeInitiative.reach} / C{activeInitiative.closeness}
            </div>
          </div>
        </div>
      </div>

      {/* Analysis */}
      <div className="space-y-4">
        <div>
          <div className="mono text-[9px] text-neutral-500 uppercase mb-2">Why It Matters</div>
          <p className={`text-sm leading-relaxed ${isDark ? 'text-neutral-300' : 'text-neutral-700'}`}>
            {analysis.reasoning}
          </p>
        </div>
        
        <div>
          <div className="mono text-[9px] text-neutral-500 uppercase mb-2">Recommendation</div>
          <p className={`text-sm leading-relaxed ${isDark ? 'text-neutral-300' : 'text-neutral-700'}`}>
            {analysis.recommendation}
          </p>
        </div>
      </div>
    </>
  );
};

export default App;
