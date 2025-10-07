import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface AuthContextType {
  isUnlocked: boolean;
  isHacked: boolean;
  unlock: () => void;
  lock: () => void;
  setHacked: () => void;
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
  
  const [isHacked, setIsHackedState] = useState(() => {
    const saved = localStorage.getItem('ghostSquad_hacked');
    return saved === 'true';
  });

  useEffect(() => {
    localStorage.setItem('ghostSquad_unlocked', String(isUnlocked));
  }, [isUnlocked]);

  useEffect(() => {
    localStorage.setItem('ghostSquad_hacked', String(isHacked));
  }, [isHacked]);

  const unlock = () => setIsUnlocked(true);
  const lock = () => setIsUnlocked(false);
  const setHacked = () => setIsHackedState(true);

  return (
    <AuthContext.Provider value={{ isUnlocked, isHacked, unlock, lock, setHacked }}>
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