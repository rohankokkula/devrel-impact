import React, { useMemo } from 'react';
import { DevRelInitiative } from '../types';
import { QuadrantType } from '../constants';

interface Props {
  data: DevRelInitiative[];
  activeId: string | null;
  onSelect: (id: string | null) => void;
  isDark: boolean;
  activeQuadrant: QuadrantType | null;
}

export const MatrixChart: React.FC<Props> = ({ data, activeId, onSelect, isDark, activeQuadrant }) => {
  const chartConfig = {
    width: 100,
    height: 100,
    padding: 6,
  };

  const points = useMemo(() => {
    return data.map(item => ({
      ...item,
      cx: chartConfig.padding + (item.reach / 100) * (chartConfig.width - 2 * chartConfig.padding),
      cy: chartConfig.height - chartConfig.padding - (item.closeness / 100) * (chartConfig.height - 2 * chartConfig.padding),
      r: 1.2 + (item.happiness / 100) * 2,
    }));
  }, [data]);

  const colors = {
    grid: isDark ? '#1a1a1a' : '#e5e5e5',
    gridLine: isDark ? '#262626' : '#d4d4d4',
    dot: isDark ? '#ffffff' : '#000000',
    dotFocused: '#10b981',
    label: isDark ? '#525252' : '#a3a3a3',
    quadrant: isDark ? '#333333' : '#d4d4d4',
  };

  // Determine which axis labels to highlight
  const highlightHighReach = activeQuadrant === 'scale-depth' || activeQuadrant === 'broad-shallow';
  const highlightLowReach = activeQuadrant === 'niche-deep' || activeQuadrant === 'low-impact';
  const highlightHighCloseness = activeQuadrant === 'scale-depth' || activeQuadrant === 'niche-deep';
  const highlightLowCloseness = activeQuadrant === 'broad-shallow' || activeQuadrant === 'low-impact';

  const axisLabelClass = (isHighlighted: boolean) => {
    if (isHighlighted) {
      return 'text-emerald-500 font-semibold';
    }
    return isDark ? 'text-neutral-700' : 'text-neutral-400';
  };

  const quadrantLabelClass = (quadrant: QuadrantType) => {
    if (activeQuadrant === quadrant) {
      return 'text-emerald-500 font-bold text-[8px] sm:text-[10px]';
    }
    return `${isDark ? 'text-neutral-800' : 'text-neutral-300'} text-[6px] sm:text-[8px]`;
  };

  return (
    <div className="w-full h-full relative min-h-[300px]">
      {/* Axis Labels - Responsive */}
      <div className={`absolute top-1 sm:top-2 left-1/2 -translate-x-1/2 mono text-[7px] sm:text-[9px] uppercase tracking-wider transition-all duration-300 ${axisLabelClass(highlightHighCloseness)}`}>
        High Closeness
      </div>
      <div className={`absolute bottom-1 sm:bottom-2 left-1/2 -translate-x-1/2 mono text-[7px] sm:text-[9px] uppercase tracking-wider transition-all duration-300 ${axisLabelClass(highlightLowCloseness)}`}>
        Low Closeness
      </div>
      <div className={`absolute top-1/2 right-0 sm:right-2 -translate-y-1/2 mono text-[7px] sm:text-[9px] uppercase tracking-wider writing-vertical transition-all duration-300 ${axisLabelClass(highlightHighReach)}`}>
        High Reach
      </div>
      <div className={`absolute top-1/2 left-0 sm:left-2 -translate-y-1/2 mono text-[7px] sm:text-[9px] uppercase tracking-wider writing-vertical transition-all duration-300 ${axisLabelClass(highlightLowReach)}`}>
        Low Reach
      </div>

      {/* Chart Container */}
      <div className="absolute inset-6 sm:inset-10">
        <svg 
          viewBox={`0 0 ${chartConfig.width} ${chartConfig.height}`} 
          className="w-full h-full touch-none"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Quadrant Backgrounds */}
          {activeQuadrant && (
            <>
              <rect 
                x="50" y="0" width="50" height="50" 
                fill={activeQuadrant === 'scale-depth' ? '#10b981' : 'transparent'} 
                fillOpacity={activeQuadrant === 'scale-depth' ? 0.1 : 0}
                className="transition-all duration-300"
              />
              <rect 
                x="0" y="0" width="50" height="50" 
                fill={activeQuadrant === 'niche-deep' ? '#10b981' : 'transparent'} 
                fillOpacity={activeQuadrant === 'niche-deep' ? 0.1 : 0}
                className="transition-all duration-300"
              />
              <rect 
                x="0" y="50" width="50" height="50" 
                fill={activeQuadrant === 'low-impact' ? '#10b981' : 'transparent'} 
                fillOpacity={activeQuadrant === 'low-impact' ? 0.1 : 0}
                className="transition-all duration-300"
              />
              <rect 
                x="50" y="50" width="50" height="50" 
                fill={activeQuadrant === 'broad-shallow' ? '#10b981' : 'transparent'} 
                fillOpacity={activeQuadrant === 'broad-shallow' ? 0.1 : 0}
                className="transition-all duration-300"
              />
            </>
          )}

          {/* Grid */}
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke={colors.grid} strokeWidth="0.15"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          
          {/* Center Lines */}
          <line x1="50" y1="0" x2="50" y2="100" stroke={colors.gridLine} strokeWidth="0.2" strokeDasharray="1,1" />
          <line x1="0" y1="50" x2="100" y2="50" stroke={colors.gridLine} strokeWidth="0.2" strokeDasharray="1,1" />

          {/* Data Points */}
          {points.map((point) => {
            const isActive = activeId === point.id;
            const isOtherActive = activeId && activeId !== point.id;
            
            return (
              <g key={point.id}>
                {/* Outer ring for active */}
                {isActive && (
                  <>
                    <circle
                      cx={point.cx}
                      cy={point.cy}
                      r={point.r + 2.5}
                      fill="none"
                      stroke={colors.dotFocused}
                      strokeWidth="0.15"
                      opacity="0.3"
                    />
                    <circle
                      cx={point.cx}
                      cy={point.cy}
                      r={point.r + 1.5}
                      fill="none"
                      stroke={colors.dotFocused}
                      strokeWidth="0.2"
                      opacity="0.6"
                    />
                  </>
                )}
                {/* Main dot - larger touch target on mobile */}
                <circle
                  cx={point.cx}
                  cy={point.cy}
                  r={point.r}
                  fill={isActive ? colors.dotFocused : colors.dot}
                  fillOpacity={isOtherActive ? 0.15 : isActive ? 1 : 0.5}
                  style={{ 
                    cursor: 'pointer', 
                    transition: 'all 0.15s ease-out',
                  }}
                  onClick={() => onSelect(point.id)}
                />
                {/* Invisible larger touch target for mobile */}
                <circle
                  cx={point.cx}
                  cy={point.cy}
                  r={Math.max(point.r + 2, 4)}
                  fill="transparent"
                  style={{ cursor: 'pointer' }}
                  onClick={() => onSelect(point.id)}
                />
                {/* Label for active point */}
                {isActive && (
                  <text
                    x={point.cx}
                    y={point.cy - point.r - 2}
                    textAnchor="middle"
                    fill={colors.dotFocused}
                    fontSize="2"
                    fontFamily="JetBrains Mono, monospace"
                    fontWeight="500"
                  >
                    {point.name}
                  </text>
                )}
              </g>
            );
          })}
        </svg>
      </div>

      {/* Quadrant Labels - Responsive positioning */}
      <div className={`absolute top-8 sm:top-14 left-8 sm:left-14 mono uppercase tracking-wider transition-all duration-300 ${quadrantLabelClass('niche-deep')}`}>
        Niche Deep
      </div>
      <div className={`absolute top-8 sm:top-14 right-8 sm:right-14 mono uppercase tracking-wider transition-all duration-300 ${quadrantLabelClass('scale-depth')}`}>
        Scale + Depth
      </div>
      <div className={`absolute bottom-8 sm:bottom-14 left-8 sm:left-14 mono uppercase tracking-wider transition-all duration-300 ${quadrantLabelClass('low-impact')}`}>
        Low Impact
      </div>
      <div className={`absolute bottom-8 sm:bottom-14 right-8 sm:right-14 mono uppercase tracking-wider transition-all duration-300 ${quadrantLabelClass('broad-shallow')}`}>
        Broad Shallow
      </div>

      <style>{`
        .writing-vertical {
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }
      `}</style>
    </div>
  );
};
