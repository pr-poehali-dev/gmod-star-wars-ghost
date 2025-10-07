import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface AuthContextType {
  isUnlocked: boolean;
  unlock: () => void;
  lock: () => void;
  isFirstVisit: boolean;
  markVisited: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isUnlocked, setIsUnlocked] = useState(() => {
    const saved = localStorage.getItem('ghostSquad_unlocked');
    return saved === 'true';
  });
  
  const [isFirstVisit, setIsFirstVisit] = useState(() => {
    const visited = localStorage.getItem('ghostSquad_curatorShown');
    return visited !== 'true';
  });

  useEffect(() => {
    localStorage.setItem('ghostSquad_unlocked', String(isUnlocked));
  }, [isUnlocked]);

  const unlock = () => setIsUnlocked(true);
  const lock = () => setIsUnlocked(false);
  
  const markVisited = () => {
    setIsFirstVisit(false);
    localStorage.setItem('ghostSquad_curatorShown', 'true');
  };

  return (
    <AuthContext.Provider value={{ isUnlocked, unlock, lock, isFirstVisit, markVisited }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};