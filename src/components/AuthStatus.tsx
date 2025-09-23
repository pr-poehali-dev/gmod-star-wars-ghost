import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import Icon from '@/components/ui/icon';

export const AuthStatus: React.FC = () => {
  const { isUnlocked } = useAuth();

  return (
    <div className="fixed top-6 right-6 z-50">
      <div className={`
        ${isUnlocked 
          ? 'bg-green-900/80 border-green-400/60' 
          : 'bg-red-900/80 border-red-400/60'
        } 
        backdrop-blur-sm border rounded-lg px-3 py-2 
        font-orbitron text-xs shadow-lg transition-all duration-300
        hover:scale-105 cursor-default
      `}>
        <div className="flex items-center space-x-2">
          <div className={`
            w-2 h-2 rounded-full animate-pulse
            ${isUnlocked ? 'bg-green-400' : 'bg-red-400'}
          `}></div>
          <Icon 
            name={isUnlocked ? "ShieldCheck" : "Shield"} 
            size={12} 
            className={isUnlocked ? 'text-green-400' : 'text-red-400'} 
          />
          <span className={`
            ${isUnlocked ? 'text-green-300' : 'text-red-300'}
            font-bold tracking-wider
          `}>
            {isUnlocked ? "SEC-OK" : "SEC-LK"}
          </span>
        </div>
      </div>
    </div>
  );
};