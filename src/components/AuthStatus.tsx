import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export const AuthStatus: React.FC = () => {
  const { isUnlocked } = useAuth();

  return (
    <div className="fixed top-4 right-4 z-50">
      <Badge 
        className={`${
          isUnlocked 
            ? 'bg-green-500 text-white' 
            : 'bg-red-500 text-white'
        } font-orbitron text-sm px-3 py-1 shadow-lg`}
      >
        <Icon 
          name={isUnlocked ? "Unlock" : "Lock"} 
          size={14} 
          className="mr-2" 
        />
        {isUnlocked ? "РАЗБЛОКИРОВАНО" : "ЗАБЛОКИРОВАНО"}
      </Badge>
    </div>
  );
};