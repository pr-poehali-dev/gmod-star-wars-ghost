import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useAuth } from '@/contexts/AuthContext';

interface SecureAccessProps {
  children: React.ReactNode;
}

export const SecureAccess: React.FC<SecureAccessProps> = ({ children }) => {
  const { isUnlocked, unlock } = useAuth();
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
      unlock();
      setPassword('');
      setAttempts(0);
      setShowError(false);
      
      // Instantly scroll to top
      window.scrollTo({ top: 0 });
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
      <div className="py-16 px-4 md:px-8 max-w-4xl mx-auto">
        <div className="relative">
          {/* Holographic Grid Background */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-transparent to-red-500/10"></div>
            <div className="absolute inset-0" style={{
              backgroundImage: `
                linear-gradient(rgba(239, 68, 68, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(239, 68, 68, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px'
            }}></div>
          </div>
          
          <Card className="relative bg-black/90 border-red-500 border-2 overflow-hidden backdrop-blur-lg">
            {/* Animated border glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 via-red-400/10 to-red-500/20 animate-pulse"></div>
            
            {/* Scan lines effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-500/5 to-transparent opacity-60 animate-pulse"></div>
            
            <CardContent className="relative p-12 text-center space-y-6">
              {/* Warning Symbol with glow */}
              <div className="relative mb-8">
                <div className="absolute inset-0 blur-2xl bg-red-500/30 rounded-full"></div>
                <div className="relative bg-gradient-to-b from-gray-900 to-black rounded-full p-6 mx-auto w-32 h-32 flex items-center justify-center border-2 border-red-500/40">
                  <img 
                    src="https://cdn.poehali.dev/files/d15904df-e78a-40aa-ae8d-fe43a334cca5.png" 
                    alt="Эмблема Галактической Республики" 
                    className="w-20 h-20 drop-shadow-[0_0_10px_rgba(220,38,38,0.8)]"
                    style={{filter: 'brightness(0) saturate(100%) invert(13%) sepia(82%) saturate(6347%) hue-rotate(356deg) brightness(91%) contrast(114%)'}}
                  />
                </div>
                
                {/* Rotating orbital rings */}
                <div className="absolute inset-0 border-2 border-red-500/30 rounded-full animate-spin" style={{animationDuration: '10s'}}></div>
                <div className="absolute inset-4 border border-red-400/20 rounded-full animate-spin" style={{animationDuration: '8s', animationDirection: 'reverse'}}></div>
                <div className="absolute inset-8 border border-red-500/10 rounded-full animate-spin" style={{animationDuration: '6s'}}></div>
              </div>
              
              {/* Main Title with holographic effect */}
              <div className="space-y-4">
                <div className="relative">
                  <h2 className="text-5xl font-orbitron font-black text-transparent bg-gradient-to-b from-red-200 via-red-400 to-red-600 bg-clip-text tracking-wider drop-shadow-[0_0_20px_rgba(239,68,68,0.8)]">
                    SECURITY LOCKDOWN
                  </h2>
                  <div className="absolute inset-0 text-5xl font-orbitron font-black text-red-500/20 blur-sm">
                    SECURITY LOCKDOWN
                  </div>
                </div>
                
                <h3 className="text-2xl font-orbitron font-bold text-red-400">
                  СИСТЕМА ЗАБЛОКИРОВАНА
                </h3>
              </div>
              
              {/* Alert panels */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                <div className="bg-red-950/50 border border-red-500 rounded-lg p-6 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent animate-pulse"></div>
                  <Icon name="AlertTriangle" size={32} className="text-red-400 mb-3" />
                  <p className="text-red-300 font-orbitron font-bold text-sm">
                    ПРЕВЫШЕН ЛИМИТ ПОПЫТОК
                  </p>
                  <p className="text-red-400 text-xs mt-2 font-mono">
                    MAX_ATTEMPTS_EXCEEDED
                  </p>
                </div>
                
                <div className="bg-red-950/50 border border-red-500 rounded-lg p-6 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent animate-pulse"></div>
                  <Icon name="Shield" size={32} className="text-red-400 mb-3" />
                  <p className="text-red-300 font-orbitron font-bold text-sm">
                    НАРУШЕНИЕ БЕЗОПАСНОСТИ
                  </p>
                  <p className="text-red-400 text-xs mt-2 font-mono">
                    INCIDENT_LOGGED
                  </p>
                </div>
              </div>
              
              {/* Terminal style messages */}
              <div className="bg-black/80 border border-red-500/50 rounded-lg p-6 text-left font-mono text-sm space-y-2">
                <div className="text-red-500">[SYSTEM] &gt; SECURITY BREACH DETECTED</div>
                <div className="text-red-400">[ALERT]  &gt; UNAUTHORIZED ACCESS ATTEMPTS: 3/3</div>
                <div className="text-red-300">[STATUS] &gt; TERMINAL LOCKED</div>
                <div className="text-red-500">[ACTION] &gt; CONTACT COMMAND FOR UNLOCK CODE</div>
              </div>
              
              {/* Contact info with imperial style */}
              <div className="bg-gradient-to-r from-red-950/30 via-red-900/50 to-red-950/30 border-2 border-red-500/30 rounded-lg p-8 mt-8">
                <Icon name="Crown" size={48} className="mx-auto text-red-400 mb-4" />
                <p className="text-red-300 font-orbitron text-lg mb-2">
                  РЕСПУБЛИКАНСКОЕ КОМАНДОВАНИЕ
                </p>
                <p className="text-red-400 text-sm">
                  Для восстановления доступа обратитесь к<br />
                  офицеру службы безопасности
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="py-16 px-4 md:px-8 max-w-4xl mx-auto">
      <div className="relative">
        {/* Holographic Grid Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-transparent to-orange-500/10"></div>
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(251, 146, 60, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(251, 146, 60, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <Card className="relative bg-black/95 border-orange-400 border-2 overflow-hidden backdrop-blur-xl">
          {/* Animated holographic border */}
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 via-orange-400/10 to-orange-500/20 animate-pulse"></div>
          
          {/* Scan lines effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-400/5 to-transparent opacity-40 animate-pulse"></div>
          
          <CardHeader className="relative text-center pb-6 pt-8">
            {/* Imperial Symbol with orbital rings */}
            <div className="relative mb-6">
              <div className="absolute inset-0 blur-2xl bg-orange-400/40 rounded-full"></div>
              <div className="relative bg-gradient-to-b from-gray-800 to-black rounded-full p-6 mx-auto w-32 h-32 flex items-center justify-center border-2 border-orange-400/30">
                <img 
                  src="https://cdn.poehali.dev/files/d15904df-e78a-40aa-ae8d-fe43a334cca5.png" 
                  alt="Эмблема Галактической Республики" 
                  className="w-20 h-20 brightness-0 invert sepia saturate-[10] hue-rotate-[15deg] brightness-[1.2] drop-shadow-[0_0_10px_rgba(251,146,60,0.8)]"
                  style={{filter: 'brightness(0) saturate(100%) invert(70%) sepia(87%) saturate(2476%) hue-rotate(4deg) brightness(102%) contrast(104%)'}}
                />
              </div>
              
              {/* Rotating orbital rings */}
              <div className="absolute inset-0 border-2 border-orange-400/30 rounded-full animate-spin" style={{animationDuration: '10s'}}></div>
              <div className="absolute inset-4 border border-orange-300/20 rounded-full animate-spin" style={{animationDuration: '8s', animationDirection: 'reverse'}}></div>
              <div className="absolute inset-8 border border-orange-500/10 rounded-full animate-spin" style={{animationDuration: '6s'}}></div>
            </div>
            
            {/* Holographic Title */}
            <div className="space-y-4">
              <div className="relative">
                <CardTitle className="text-3xl md:text-4xl font-orbitron font-black text-transparent bg-gradient-to-b from-orange-200 via-orange-400 to-orange-600 bg-clip-text tracking-wider drop-shadow-[0_0_30px_rgba(251,146,60,0.8)]">
                  CLASSIFIED ACCESS
                </CardTitle>
                <div className="absolute inset-0 text-3xl md:text-4xl font-orbitron font-black text-orange-400/20 blur-sm">
                  CLASSIFIED ACCESS
                </div>
              </div>
              
              <h3 className="text-lg font-orbitron font-bold text-orange-300">
                СЕКРЕТНАЯ ИНФОРМАЦИЯ ОТРЯДА
              </h3>
            </div>
            
            {/* Warning Panel */}
            <div className="bg-gradient-to-r from-red-950/40 via-red-900/60 to-red-950/40 border-2 border-red-500/50 rounded-lg p-6 mt-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-400 to-transparent animate-pulse"></div>
              <div className="flex items-center justify-center space-x-3 mb-3">
                <Icon name="AlertTriangle" size={24} className="text-red-400" />
                <p className="text-red-400 font-orbitron font-bold">
                  ДОСТУП ЗАПРЕЩЕН
                </p>
                <Icon name="AlertTriangle" size={24} className="text-red-400" />
              </div>
              <p className="text-red-300 text-sm">
                CLASSIFIED INFORMATION • AUTHORIZED PERSONNEL ONLY
              </p>
            </div>
          </CardHeader>
        
        <CardContent className="relative space-y-6 p-8">
          {/* Access Terminal */}
          <div className="bg-black/80 border-2 border-orange-400/50 rounded-lg p-6 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent animate-pulse"></div>
            
            <div className="flex items-center space-x-3 mb-6">
              <Icon name="Terminal" size={24} className="text-orange-400" />
              <h4 className="text-orange-300 font-orbitron font-bold text-lg">
                ТЕРМИНАЛ ДОСТУПА
              </h4>
            </div>
            
            <form onSubmit={handlePasswordSubmit} className="space-y-6">
              <div className="space-y-4">
                <label className="text-orange-300 font-orbitron font-bold text-lg flex items-center">
                  <Icon name="Key" size={20} className="mr-3 text-orange-400" />
                  ВВЕДИТЕ КОД АВТОРИЗАЦИИ:
                </label>
                
                <div className="relative">
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-black/60 border-2 border-orange-400/70 rounded-lg px-6 py-4 
                             text-orange-200 font-mono text-lg placeholder-orange-400/40
                             focus:outline-none focus:border-orange-300 focus:ring-4 focus:ring-orange-400/20
                             focus:bg-black/80 transition-all duration-300"
                    placeholder="● ● ● ● ● ● ● ● ● ● ●"
                    disabled={isBlocked}
                  />
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                    <Icon name="Lock" size={20} className="text-orange-400/60" />
                  </div>
                </div>
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-orange-400 to-orange-500 text-black hover:from-orange-500 hover:to-orange-600 
                         font-orbitron font-bold py-4 text-lg rounded-lg transition-all duration-300
                         hover:shadow-[0_0_20px_rgba(251,146,60,0.5)] border-2 border-orange-300"
                disabled={isBlocked}
              >
                <Icon name="Unlock" size={24} className="mr-3" />
                РАЗБЛОКИРОВАТЬ ДОСТУП
              </Button>
            </form>
          </div>
          
          {/* Error Display */}
          {showError && (
            <div className="bg-gradient-to-r from-red-950/60 via-red-900/80 to-red-950/60 border-2 border-red-500 rounded-lg p-6 relative overflow-hidden animate-pulse">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-400 to-transparent animate-pulse"></div>
              <div className="flex items-center justify-center space-x-3 mb-3">
                <Icon name="XCircle" size={24} className="text-red-400" />
                <p className="text-red-400 font-orbitron font-bold text-lg">
                  ОШИБКА АВТОРИЗАЦИИ
                </p>
                <Icon name="XCircle" size={24} className="text-red-400" />
              </div>
              <p className="text-red-300 text-center mb-2">
                Неверный код доступа
              </p>
              <p className="text-red-500 text-sm text-center font-mono">
                ПОПЫТКА {attempts} ИЗ {maxAttempts}
              </p>
              {attempts === maxAttempts - 1 && (
                <div className="mt-4 p-3 bg-red-600/20 border border-red-500 rounded text-center">
                  <p className="text-red-400 font-bold animate-pulse">
                    ⚠️ КРИТИЧЕСКОЕ ПРЕДУПРЕЖДЕНИЕ ⚠️
                  </p>
                  <p className="text-red-300 text-sm mt-1">
                    ПОСЛЕДНЯЯ ПОПЫТКА ПЕРЕД БЛОКИРОВКОЙ!
                  </p>
                </div>
              )}
            </div>
          )}
          
          {/* Status Panel */}
          <div className="bg-black/60 border border-orange-400/40 rounded-lg p-6 space-y-6">
            {/* Attempt indicators */}
            <div className="space-y-3">
              <div className="flex items-center justify-center space-x-3">
                <Icon name="Target" size={20} className="text-orange-400" />
                <span className="text-orange-300 font-orbitron font-bold">СТАТУС ПОПЫТОК</span>
                <Icon name="Target" size={20} className="text-orange-400" />
              </div>
              
              <div className="flex justify-center space-x-4">
                {Array.from({ length: maxAttempts }).map((_, index) => (
                  <div key={index} className="relative">
                    <div
                      className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                        index < attempts 
                          ? 'bg-red-500 border-red-400 shadow-[0_0_10px_rgba(239,68,68,0.6)]' 
                          : 'border-orange-400/60 bg-orange-400/10'
                      }`}
                    >
                      {index < attempts ? (
                        <Icon name="X" size={12} className="text-white" />
                      ) : (
                        <div className="w-2 h-2 rounded-full bg-orange-400/40"></div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              
              <p className="text-orange-400/70 text-center font-orbitron text-sm">
                ДОСТУПНЫХ ПОПЫТОК: {maxAttempts - attempts}
              </p>
            </div>
            
            {/* Security info */}
            <div className="border-t border-orange-400/20 pt-4">
              <div className="bg-orange-950/30 border border-orange-400/30 rounded-lg p-4">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <Icon name="Info" size={16} className="text-orange-400" />
                  <span className="text-orange-300 font-orbitron font-bold text-sm">КЛАССИФИКАЦИЯ</span>
                </div>
                <p className="text-orange-300/80 text-xs text-center leading-relaxed">
                  Данная информация содержит секретные сведения отряда "Призрак"<br />
                  и доступна только авторизованному персоналу.<br />
                  Для получения доступа отправьте запрос вышестоящему командованию.<br />
                  <span className="text-orange-400 font-mono">SECURITY_LEVEL: CLASSIFIED</span>
                </p>
              </div>
            </div>
          </div>
        </CardContent>
        </Card>
        
        {/* Small Hack Window - Below Authorization */}
        <div className="flex justify-center mt-6">
          <div className="flex flex-col items-center">
            <div className="relative group cursor-pointer">
              <div className="absolute inset-0 blur-lg bg-red-500/30 rounded-full animate-pulse"></div>
              <div className="relative bg-gradient-to-b from-gray-900 to-black rounded-full w-16 h-16 flex items-center justify-center border-2 border-red-500/60 hover:border-red-400 transition-all">
                <Icon name="ShieldAlert" size={28} className="text-red-500 group-hover:text-red-400 transition-colors" />
              </div>
              
              {/* Pulsing ring */}
              <div className="absolute inset-0 border border-red-500/40 rounded-full animate-ping"></div>
            </div>
            
            {/* Label */}
            <div className="mt-2 text-red-400 font-orbitron font-bold text-xs tracking-wider">
              Взломать
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};