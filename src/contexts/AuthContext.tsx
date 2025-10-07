import React, { createContext, useContext, useState, ReactNode } from 'react';

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
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isHacked, setIsHacked] = useState(false);

  const unlock = () => setIsUnlocked(true);
  const lock = () => setIsUnlocked(false);
  const setHacked = () => setIsHacked(true);

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