import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface SecureAccessProps {
  children: React.ReactNode;
  isUnlocked: boolean;
  onUnlock: () => void;
}

export const SecureAccess: React.FC<SecureAccessProps> = ({ children, isUnlocked, onUnlock }) => {
  const [password, setPassword] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [isBlocked, setIsBlocked] = useState(false);
  const [showError, setShowError] = useState(false);
  const [showBlocked, setShowBlocked] = useState(false);
  
  const correctPassword = 'ShadowGhost';
  const maxAttempts = 3;

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isBlocked) return;
    
    if (password === correctPassword) {
      onUnlock();
      setPassword('');
      setAttempts(0);
      setShowError(false);
    } else {
      const newAttempts = attempts + 1;
      setAttempts(newAttempts);
      setShowError(true);
      setPassword('');
      
      if (newAttempts >= maxAttempts) {
        setIsBlocked(true);
        setShowBlocked(true);
      }
      
      // Hide error after 3 seconds
      setTimeout(() => setShowError(false), 3000);
    }
  };

  if (isUnlocked) {
    return <>{children}</>;
  }

  if (showBlocked) {
    return (
      <div className="py-20 px-4 md:px-8 max-w-4xl mx-auto">
        <Card className="bg-red-900/20 border-red-500 border-2">
          <CardContent className="p-12 text-center space-y-6">
            <div className="mb-6">
              <Icon name="ShieldX" size={64} className="mx-auto text-red-500 mb-4" />
              <h2 className="text-3xl font-orbitron font-bold text-red-400 mb-4">
                ДОСТУП ЗАБЛОКИРОВАН
              </h2>
            </div>
            
            <div className="space-y-4">
              <p className="text-red-300 text-lg">
                ПРЕВЫШЕНО МАКСИМАЛЬНОЕ КОЛИЧЕСТВО ПОПЫТОК ВХОДА
              </p>
              <p className="text-red-400 font-mono">
                SECURITY BREACH DETECTED
              </p>
              <p className="text-red-300">
                Обратитесь к командованию для восстановления доступа
              </p>
            </div>
            
            <div className="bg-red-950/50 border border-red-500 rounded-lg p-4 mt-6">
              <p className="text-red-400 font-orbitron text-sm">
                INCIDENT LOGGED • SECURITY ALERT SENT
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="py-20 px-4 md:px-8 max-w-4xl mx-auto">
      <Card className="bg-gray-900/80 border-orange-400 border-2">
        <CardHeader className="text-center pb-8">
          <div className="mb-6">
            <Icon name="Shield" size={64} className="mx-auto text-orange-400 mb-4" />
            <CardTitle className="text-3xl font-orbitron font-bold text-orange-400">
              СЕКРЕТНАЯ ИНФОРМАЦИЯ
            </CardTitle>
          </div>
          
          <div className="bg-red-900/30 border border-red-400 rounded-lg p-4">
            <p className="text-red-400 font-orbitron font-bold">
              ДОСТУП ЗАПРЕЩЕН
            </p>
            <p className="text-red-300 text-sm mt-2">
              CLASSIFIED INFORMATION • AUTHORIZED PERSONNEL ONLY
            </p>
          </div>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <form onSubmit={handlePasswordSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-orange-300 font-orbitron font-bold">
                ВВЕДИТЕ ПАРОЛЬ:
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-gray-800 border border-orange-400 rounded-lg px-4 py-3 
                         text-orange-200 font-mono placeholder-orange-400/50
                         focus:outline-none focus:border-orange-300 focus:ring-2 focus:ring-orange-400/20"
                placeholder="Введите код доступа..."
                disabled={isBlocked}
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-orange-400 text-black hover:bg-orange-500 font-orbitron font-bold py-3"
              disabled={isBlocked}
            >
              <Icon name="Unlock" size={20} className="mr-2" />
              РАЗБЛОКИРОВАТЬ ДОСТУП
            </Button>
          </form>
          
          {showError && (
            <div className="bg-red-900/30 border border-red-400 rounded-lg p-4 animate-pulse">
              <p className="text-red-400 font-orbitron font-bold text-center">
                НЕВЕРНЫЙ ПАРОЛЬ
              </p>
              <p className="text-red-300 text-sm text-center mt-1">
                Попытка {attempts} из {maxAttempts}
              </p>
              {attempts === maxAttempts - 1 && (
                <p className="text-red-500 text-sm text-center mt-2 font-bold">
                  ⚠️ ПОСЛЕДНЯЯ ПОПЫТКА!
                </p>
              )}
            </div>
          )}
          
          <div className="text-center space-y-4">
            <div className="flex justify-center space-x-2">
              {Array.from({ length: maxAttempts }).map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full border-2 ${
                    index < attempts 
                      ? 'bg-red-500 border-red-500' 
                      : 'border-orange-400/50'
                  }`}
                />
              ))}
            </div>
            
            <p className="text-orange-400/70 text-sm font-orbitron">
              ПОПЫТКИ: {attempts}/{maxAttempts}
            </p>
            
            <div className="bg-orange-900/20 border border-orange-400/30 rounded-lg p-3">
              <p className="text-orange-300/70 text-xs">
                Данная информация содержит секретные сведения отряда "Призрак"
                <br />
                и доступна только авторизованному персоналу
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};