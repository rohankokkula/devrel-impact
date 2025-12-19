import React from 'react';
import { DevRelInitiative } from '../types';

interface Props {
  initiative: DevRelInitiative;
  onSelect: (id: string | null) => void;
  isActive: boolean;
  index: number;
  isDark: boolean;
}

export const InitiativeCard: React.FC<Props> = ({ initiative, onSelect, isActive, index, isDark }) => {
  return (
    <div
      onClick={() => onSelect(initiative.id)}
      style={{ animationDelay: `${index * 15}ms` }}
      className={`flex-shrink-0 w-[150px] sm:w-[180px] p-2.5 sm:p-3 transition-all duration-150 cursor-pointer animate-in ${
        isActive 
          ? isDark ? 'bg-white text-black' : 'bg-black text-white'
          : isDark ? 'bg-neutral-950 hover:bg-neutral-900 active:bg-neutral-800' : 'bg-neutral-100 hover:bg-neutral-200 active:bg-neutral-300'
      }`}
    >
      <div className="flex justify-between items-start mb-1 sm:mb-1.5">
        <h3 className={`text-[11px] sm:text-xs font-medium leading-tight line-clamp-2 ${isActive ? '' : isDark ? 'text-white' : 'text-black'}`}>
          {initiative.name}
        </h3>
        {isActive && (
          <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 bg-emerald-500 ml-1`} />
        )}
      </div>
      
      <span className={`inline-block mono text-[7px] sm:text-[8px] px-1 py-0.5 uppercase tracking-wider mb-1.5 sm:mb-2 ${
        isActive 
          ? isDark ? 'bg-black text-white' : 'bg-white text-black'
          : isDark ? 'bg-neutral-800 text-neutral-500' : 'bg-neutral-300 text-neutral-600'
      }`}>
        {initiative.category}
      </span>
      
      <div className="flex gap-2 sm:gap-3 mono text-[8px] sm:text-[9px]">
        <div className={isActive ? 'opacity-60' : 'text-neutral-500'}>
          <span className="opacity-50">R</span>{initiative.reach}
        </div>
        <div className={isActive ? 'opacity-60' : 'text-neutral-500'}>
          <span className="opacity-50">C</span>{initiative.closeness}
        </div>
        <div className={isActive ? 'opacity-60' : 'text-neutral-500'}>
          <span className="opacity-50">H</span>{initiative.happiness}
        </div>
        <div className={isActive ? 'opacity-60 text-orange-600' : 'text-orange-400'}>
          <span className="opacity-50">E</span>{initiative.effort}
        </div>
      </div>
    </div>
  );
};
