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
  const [hoveredMetric, setHoveredMetric] = useState<string | null>(null);

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
    <div className={`h-screen ${theme.bg} ${theme.text} overflow-hidden flex flex-col`}>
      {/* Navbar */}
      <header className={`flex items-center justify-between px-6 py-4 border-b ${theme.border}`}>
        <div className="flex items-center gap-6">
          {/* Logo & Theme Toggle */}
          <div className="flex items-center gap-3">
            <div className={`w-2 h-2 rounded-full ${theme.accentBg} animate-pulse`} />
            <span className="text-sm font-medium tracking-wide">DevRel Impact</span>
            <button
              onClick={() => setIsDark(!isDark)}
              className={`ml-2 w-8 h-8 flex items-center justify-center rounded-full transition-colors ${
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

          {/* Category Filters */}
          <div className="flex items-center gap-1">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-3 py-1.5 text-[10px] uppercase tracking-widest transition-all duration-200 ${
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
                className={`px-3 py-1.5 text-[10px] uppercase tracking-widest transition-all duration-200 ${
                  selectedCategory === cat 
                    ? `${isDark ? 'bg-white text-black' : 'bg-black text-white'}` 
                    : `${theme.textMuted} hover:${theme.text}`
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="mono text-[10px] text-neutral-500">
          {filteredInitiatives.length} initiatives
        </div>
      </header>

      {/* Initiatives Strip */}
      <div className={`border-b ${theme.border}`}>
        <div className="flex gap-2 p-3 overflow-x-auto custom-scrollbar">
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
      <div className="flex-1 flex min-h-0">
        {/* Left Sidebar */}
        <div className={`w-[340px] flex-shrink-0 p-6 border-r ${theme.border} flex flex-col overflow-y-auto`}>
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

              {/* Quadrant Analysis - Customized */}
              <div className={`p-4 border-2 border-emerald-500 ${isDark ? 'bg-emerald-500/10' : 'bg-emerald-500/10'}`}>
                <div className="mono text-[9px] uppercase tracking-widest text-emerald-500 mb-2">
                  {activeInitiative.name} Analysis
                </div>
                <div className="font-semibold text-lg mb-1 text-emerald-500">{analysis.name}</div>
                <div className={`text-[11px] ${theme.textMuted} mb-4`}>{analysis.description}</div>
                
                <div className="space-y-4">
                  <div>
                    <div className={`mono text-[9px] uppercase tracking-widest ${theme.textMuted} mb-1`}>
                      Why {activeInitiative.name} Matters
                    </div>
                    <p className={`text-[11px] leading-relaxed ${isDark ? 'text-neutral-300' : 'text-neutral-700'}`}>
                      {analysis.reasoning}
                    </p>
                  </div>
                  
                  <div>
                    <div className={`mono text-[9px] uppercase tracking-widest ${theme.textMuted} mb-1`}>
                      Recommendation for {activeInitiative.name}
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
              <p className="text-[11px] leading-relaxed">Click any initiative to see personalized analysis, ROI efficiency, and strategic recommendations.</p>
            </div>
          )}
        </div>

        {/* Chart */}
        <div className="flex-1 p-6">
          <MatrixChart 
            data={filteredInitiatives} 
            activeId={activeId} 
            onSelect={handleSelect}
            isDark={isDark}
            activeQuadrant={activeQuadrant}
          />
        </div>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          height: 2px;
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
        .animate-in {
          animation: fade-in 0.2s ease-out;
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

export default App;
