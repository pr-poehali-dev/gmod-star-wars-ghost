import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [showMatrix, setShowMatrix] = useState(false);

  useEffect(() => {
    // Убираем загрузку через 3 секунды
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    // Добавляем цифровой дождь через 4 секунды
    const matrixTimer = setTimeout(() => {
      setShowMatrix(true);
    }, 4000);

    return () => {
      clearTimeout(loadingTimer);
      clearTimeout(matrixTimer);
    };
  }, []);

  const handlePasswordSubmit = () => {
    if (password === "ShadowGhost") {
      setIsUnlocked(true);
      setIsPasswordVisible(false);
      playSuccessSound();
    } else {
      setAttempts(prev => prev + 1);
      setPassword("");
      playDeniedSound();
    }
  };

  const playSuccessSound = () => {
    try {
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.type = 'sine';
      oscillator.frequency.setValueAtTime(400, audioContext.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(800, audioContext.currentTime + 0.3);
      
      gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.3);
    } catch (error) {
      console.log('Audio not available');
    }
  };

  const playDeniedSound = () => {
    try {
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      
      [0, 0.15, 0.3].forEach((time, index) => {
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.type = 'square';
        oscillator.frequency.setValueAtTime(1200 - (index * 200), audioContext.currentTime + time);
        
        gainNode.gain.setValueAtTime(0, audioContext.currentTime + time);
        gainNode.gain.linearRampToValueAtTime(0.15, audioContext.currentTime + time + 0.02);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + time + 0.1);
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.start(audioContext.currentTime + time);
        oscillator.stop(audioContext.currentTime + time + 0.1);
      });
    } catch (error) {
      console.log('Audio not available');
    }
  };

  // Компонент цифрового дождя
  const DigitalRain = () => {
    const [drops, setDrops] = useState<Array<{id: number, left: number, delay: number, duration: number}>>([]);

    useEffect(() => {
      const characters = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
      const newDrops = [];
      
      for (let i = 0; i < 50; i++) {
        newDrops.push({
          id: i,
          left: Math.random() * 100,
          delay: Math.random() * 5,
          duration: 3 + Math.random() * 4
        });
      }
      setDrops(newDrops);
    }, []);

    return (
      <div className="digital-rain">
        {drops.map((drop) => (
          <div
            key={drop.id}
            className="rain-drop"
            style={{
              left: `${drop.left}%`,
              animationDelay: `${drop.delay}s`,
              animationDuration: `${drop.duration}s`
            }}
          >
            {Array.from({length: 20}, (_, i) => (
              <div key={i} style={{marginBottom: '10px'}}>
                {String.fromCharCode(Math.random() * (126 - 33) + 33)}
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  };

  const clones = [
    {
      id: "CT-01-1044",
      name: "Позывной: Jeing",
      rank: "Лидер",
      description: "Лидер отряда Призрак, ветеран войн клонов с множеством успешных операций.",
      image: "https://cdn.poehali.dev/files/f5f129a7-2aee-4280-88f2-37724a7b0a77.jpg",
      specialization: "Командование",
      kills: 147,
      missions: 89,
      stats: { accuracy: 85, stealth: 72, endurance: 88, tactics: 94, leadership: 91 }
    },
    {
      id: "CT-07-2114", 
      name: "Позывной: Nuar",
      rank: "Зам. лидера",
      description: "Элитный пилот отряда. Мастер скрытных операций.",
      image: "https://cdn.poehali.dev/files/f5f129a7-2aee-4280-88f2-37724a7b0a77.jpg",
      specialization: "Пилот",
      kills: 203,
      missions: 76,
      stats: { accuracy: 96, stealth: 89, endurance: 78, tactics: 82, leadership: 74 }
    },
    {
      id: "CT-04-5536",
      name: "Позывной: Rampa",
      rank: "Боец",
      description: "Боевой танк, спасший жизни десятков товарищей в самых опасных ситуациях.",
      image: "https://cdn.poehali.dev/files/f5f129a7-2aee-4280-88f2-37724a7b0a77.jpg",
      specialization: "Отсутствует",
      kills: 58,
      missions: 92,
      stats: { accuracy: 75, stealth: 68, endurance: 92, tactics: 76, leadership: 83 }
    }
  ];

  return (
    <>
      {/* Анимированная заставка */}
      {isLoading && (
        <div className="loader-overlay">
          <div className="hologram-loader">
            <div className="hologram-ring"></div>
            <div className="hologram-ring"></div>
            <div className="hologram-ring"></div>
            <div className="loader-text">ИНИЦИАЛИЗАЦИЯ СИСТЕМЫ</div>
          </div>
        </div>
      )}

      {/* Цифровой дождь */}
      {showMatrix && !isUnlocked && <DigitalRain />}

      <div className={`min-h-screen bg-black text-orange-200 relative ${isUnlocked ? 'holographic' : ''}`}>
        {/* Пульсирующий фон для разблокированного режима */}
        {isUnlocked && <div className="pulse-background fixed inset-0 z-0"></div>}
        
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
          {/* Анимированный звездный фон */}
          <div className="absolute inset-0">
            {Array.from({length: 100}, (_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-cyan-400 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animation: `twinkle ${2 + Math.random() * 3}s ease-in-out infinite`,
                  animationDelay: `${Math.random() * 3}s`
                }}
              ></div>
            ))}
          </div>
          
          {/* Сканирующие линии */}
          <div className="absolute inset-0 scan-line"></div>
          
          <div className="text-center z-10 fade-in-up relative">
            <div className="mb-6 fade-in-scale" style={{animationDelay: '0.5s'}}>
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-cyan-400/20 rounded-full blur-2xl animate-pulse"></div>
                <img 
                  src="https://cdn.poehali.dev/files/b41cc154-960e-487e-bc47-03469d7602e4.png" 
                  alt="Эмблема Галактической Республики" 
                  className="relative w-40 h-40 mx-auto mb-4 brightness-0 invert holographic"
                />
              </div>
            </div>
            
            <h1 
              className="text-6xl md:text-8xl font-orbitron font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-orange-400 to-cyan-400 mb-4 tracking-wider glitch neon-glow" 
              data-text="ПРИЗРАК"
              style={{animationDelay: '1s'}}
            >
              ПРИЗРАК
            </h1>
            
            <p className="text-xl md:text-2xl text-orange-400 font-medium mb-8 flicker-text" style={{animationDelay: '1.5s'}}>
              <span className="inline-block">Элитный</span>{' '}
              <span className="inline-block text-cyan-400">клон-отряд</span>{' '}
              <span className="inline-block">Республики</span>
            </p>
            
            <div className="flex justify-center gap-4 text-sm font-orbitron fade-in-scale" style={{animationDelay: '2s'}}>
              <Badge variant="outline" className="border-cyan-400 text-cyan-400 holographic future-hover">
                ЭРК
              </Badge>
              <Badge variant="outline" className="border-orange-400 text-orange-400 holographic future-hover">
                БСО
              </Badge>
            </div>
            
            {/* Дополнительные визуальные эффекты */}
            <div className="mt-12 flex justify-center space-x-8 fade-in-up" style={{animationDelay: '2.5s'}}>
              {Array.from({length: 3}, (_, i) => (
                <div key={i} className="w-2 h-16 bg-gradient-to-t from-transparent via-cyan-400 to-transparent opacity-60">
                  <div 
                    className="w-full h-full bg-gradient-to-t from-cyan-400 to-transparent"
                    style={{
                      animation: `pulse-glow ${1.5 + i * 0.3}s ease-in-out infinite alternate`,
                      animationDelay: `${i * 0.2}s`
                    }}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </section>

      {/* Protected Sections */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-cyan-400 to-orange-400 mb-6 glitch neon-glow" data-text="ИНФОРМАЦИЯ О ОТРЯДЕ">
            ИНФОРМАЦИЯ О ОТРЯДЕ
          </h2>
          
          {!isUnlocked ? (
            <div className="max-w-2xl mx-auto fade-in-scale">
              <div className="relative">
                {/* Background Effects */}
                <div className="absolute inset-0 bg-red-900/10 rounded-2xl blur-xl"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-orange-500/5 to-yellow-500/5 rounded-2xl"></div>
                
                {/* Animated Scanning Lines */}
                <div className="absolute inset-0 overflow-hidden rounded-2xl">
                  <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-red-400/60 to-transparent animate-pulse" 
                       style={{top: '25%', animationDuration: '3s'}}></div>
                  <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-orange-400/40 to-transparent animate-pulse" 
                       style={{top: '75%', animationDuration: '4s', animationDelay: '1s'}}></div>
                </div>
                
                {/* Main Security Panel */}
                <div className="relative bg-gradient-to-br from-gray-900/95 via-gray-800/95 to-gray-900/95 border-2 border-red-500 rounded-2xl p-12 backdrop-blur-md holographic">
                  {/* Animated Border Glow */}
                  <div className="absolute inset-0 rounded-2xl border border-red-400/30 animate-pulse"></div>
                  
                  {/* Warning Stripes */}
                  <div className="absolute inset-0 rounded-2xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/10 to-transparent transform -skew-x-12 animate-pulse"></div>
                    <div className="absolute inset-0 bg-gradient-to-l from-transparent via-yellow-500/5 to-transparent transform skew-x-12 animate-pulse" style={{animationDelay: '1s'}}></div>
                  </div>
                  
                  <div className="relative z-10 space-y-8">
                    {/* Security Icon */}
                    <div className="flex justify-center">
                      <div className="relative">
                        <div className="absolute inset-0 w-24 h-24 border-2 border-red-500/30 rounded-full animate-ping"></div>
                        <div className="absolute inset-0 w-24 h-24 border border-red-400/20 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
                        <div className="relative w-24 h-24 bg-gradient-to-br from-red-500/20 to-red-600/10 rounded-full flex items-center justify-center holographic">
                          <Icon name="ShieldAlert" size={42} className="text-red-400 animate-pulse neon-glow" />
                        </div>
                      </div>
                    </div>
                    
                    {/* Access Denied Header */}
                    <div className="space-y-4">
                      <h3 className="text-3xl font-orbitron font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-red-300 to-red-400 tracking-wider glitch" data-text="ДОСТУП ОГРАНИЧЕН">
                        ДОСТУП ОГРАНИЧЕН
                      </h3>
                      <div className="bg-gray-800/80 border border-red-500/30 rounded-lg px-6 py-3 holographic">
                        <p className="text-red-400/80 text-sm font-mono tracking-wide flicker-text">
                          УРОВЕНЬ СЕКРЕТНОСТИ: <span className="text-red-300 font-bold neon-glow">МАКСИМАЛЬНЫЙ</span>
                        </p>
                      </div>
                    </div>
                    
                    {/* Password Input */}
                    <div className="space-y-6">
                      <div className="text-orange-200">
                        <p className="text-lg font-orbitron mb-2 neon-glow">ВВЕДИТЕ КОД ДОСТУПА:</p>
                        <div className="flex gap-3">
                          <div className="relative flex-1">
                            <Input
                              type={isPasswordVisible ? "text" : "password"}
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              onKeyPress={(e) => e.key === 'Enter' && handlePasswordSubmit()}
                              placeholder="████████████"
                              className="bg-gray-800/50 border-orange-400/50 text-orange-200 font-mono text-center text-lg tracking-widest placeholder:text-orange-600/30 holographic"
                            />
                            <Button
                              type="button"
                              onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                              className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 h-8 w-8 bg-transparent hover:bg-orange-400/20 future-hover"
                            >
                              <Icon name={isPasswordVisible ? "EyeOff" : "Eye"} size={16} className="text-orange-400 neon-glow" />
                            </Button>
                          </div>
                          <Button
                            onClick={handlePasswordSubmit}
                            className="bg-gradient-to-r from-orange-400 to-cyan-400 text-black hover:from-cyan-400 hover:to-orange-400 font-orbitron font-bold px-8 future-hover holographic"
                          >
                            ВОЙТИ
                          </Button>
                        </div>
                      </div>
                      
                      {attempts > 0 && (
                        <div className="bg-red-900/30 border border-red-500/30 rounded-lg p-4 holographic">
                          <p className="text-red-400 text-sm font-mono glitch" data-text={`⚠️ НЕВЕРНЫЙ КОД ДОСТУПА (${attempts}/3)`}>
                            ⚠️ НЕВЕРНЫЙ КОД ДОСТУПА ({attempts}/3)
                          </p>
                          {attempts >= 3 && (
                            <p className="text-red-300 text-xs mt-2 flicker-text">
                              СИСТЕМА БЕЗОПАСНОСТИ АКТИВИРОВАНА
                            </p>
                          )}
                        </div>
                      )}
                    </div>
                    
                    {/* Info hint */}
                    <div className="space-y-3">
                      <div className="h-px bg-gradient-to-r from-transparent via-red-400/50 to-transparent"></div>
                      <p className="text-orange-500/60 text-xs font-mono tracking-widest flicker-text">
                        ERROR_CODE: GHOST_401_UNAUTHORIZED
                      </p>
                    </div>
                  </div>
                  
                  {/* Corner decorations */}
                  <div className="absolute top-3 left-3 w-8 h-8 border-l-2 border-t-2 border-red-500/60 animate-pulse"></div>
                  <div className="absolute top-3 right-3 w-8 h-8 border-r-2 border-t-2 border-red-500/60 animate-pulse" style={{animationDelay: '0.5s'}}></div>
                  <div className="absolute bottom-3 left-3 w-8 h-8 border-l-2 border-b-2 border-red-500/60 animate-pulse" style={{animationDelay: '1s'}}></div>
                  <div className="absolute bottom-3 right-3 w-8 h-8 border-r-2 border-b-2 border-red-500/60 animate-pulse" style={{animationDelay: '1.5s'}}></div>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-20 fade-in-up">
              {/* About Squad Section */}
              <div className="holographic">
                <h3 className="text-3xl md:text-4xl font-orbitron font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-cyan-400 to-green-400 mb-12 glitch neon-glow" data-text="О ОТРЯДЕ ПРИЗРАК">
                  О ОТРЯДЕ ПРИЗРАК
                </h3>
                <div className="max-w-4xl mx-auto space-y-6 text-lg leading-relaxed">
                  <div className="bg-green-900/20 border border-green-400/30 rounded-lg p-6 mb-8 holographic">
                    <p className="text-green-400 text-sm font-mono mb-2 neon-glow">✓ ДОСТУП РАЗРЕШЕН</p>
                    <p className="text-green-300 text-xs flicker-text">Добро пожаловать, агент. Данные рассекречены.</p>
                  </div>
                  <p className="text-green-200">
                    Отряд "Призрак" - сверхсекретное подразделение клонов-штурмовиков, созданное для выполнения 
                    особо деликатных операций за линией фронта. Каждый боец прошел экспериментальную программу 
                    психологического и физического усиления, получив способности, превышающие стандарты обычных клонов.
                  </p>
                  <p className="text-green-200">
                    Их истинная миссия - не только военные операции, но и устранение "проблемных" офицеров Республики, 
                    ликвидация свидетелей секретных проектов и проведение операций под ложным флагом для 
                    дискредитации Конфедерации независимых систем.
                  </p>
                  <p className="text-red-400 text-sm bg-red-900/20 border border-red-400/30 rounded p-4 holographic">
                    ⚠️ ВНИМАНИЕ: Отряд имеет прямую связь с канцлером Палпатином и действует вне стандартной 
                    командной структуры. Уровень автономности - МАКСИМАЛЬНЫЙ.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                  <Card className="bg-gray-900 border-green-400 future-hover holographic">
                    <CardHeader className="text-center">
                      <Icon name="Target" size={48} className="mx-auto text-green-400 mb-2 neon-glow" />
                      <CardTitle className="text-green-200 font-orbitron glitch" data-text="Элиминация">Элиминация</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-green-300">Точечное устранение целей любой сложности</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-gray-900 border-green-400 future-hover holographic">
                    <CardHeader className="text-center">
                      <Icon name="Eye" size={48} className="mx-auto text-green-400 mb-2 neon-glow" />
                      <CardTitle className="text-green-200 font-orbitron glitch" data-text="Инфильтрация">Инфильтрация</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-green-300">Проникновение в любые структуры противника</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-gray-900 border-green-400 future-hover holographic">
                    <CardHeader className="text-center">
                      <Icon name="Skull" size={48} className="mx-auto text-green-400 mb-2 neon-glow" />
                      <CardTitle className="text-green-200 font-orbitron glitch" data-text="Ликвидация">Ликвидация</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-green-300">Бесследное устранение свидетелей</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-gradient-to-t from-gray-950 via-gray-900 to-black py-16 px-4 md:px-8 text-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-400/5 via-transparent to-cyan-400/5"></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10 holographic">
          {/* Main Content */}
          <div className="mb-12 fade-in-up">
            <div className="relative inline-block mb-6">
              <div className="absolute inset-0 bg-orange-400/20 rounded-full blur-xl animate-pulse"></div>
              <img 
                src="https://cdn.poehali.dev/files/b41cc154-960e-487e-bc47-03469d7602e4.png" 
                alt="Эмблема Галактической Республики" 
                className="relative w-16 h-16 mx-auto brightness-0 invert drop-shadow-2xl future-hover"
              />
            </div>
            
            <h3 className="text-3xl md:text-4xl font-orbitron font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-cyan-400 to-orange-400 mb-6 tracking-wider glitch neon-glow" data-text="ДЛЯ РЕСПУБЛИКИ. ДЛЯ ДЕМОКРАТИИ.">
              ДЛЯ РЕСПУБЛИКИ. ДЛЯ ДЕМОКРАТИИ.
            </h3>
            
            <div className="inline-flex items-center gap-3 bg-gray-900/50 backdrop-blur-sm border border-orange-400/30 rounded-full px-6 py-3 mb-8 holographic future-hover">
              <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse neon-glow"></div>
              <span className="text-orange-300 font-orbitron font-semibold tracking-wide flicker-text">Отряд "Призрак" - ЭРК В.А.Р.</span>
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse neon-glow"></div>
            </div>
          </div>
          
          {/* Decorative Divider */}
          <div className="flex items-center justify-center mb-8 fade-in-scale">
            <div className="h-px bg-gradient-to-r from-transparent via-orange-400/50 to-transparent flex-1 max-w-xs"></div>
            <div className="mx-4 w-3 h-3 border-2 border-orange-400/50 rotate-45 animate-pulse"></div>
            <div className="h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent flex-1 max-w-xs"></div>
          </div>
          
          {/* Copyright Info */}
          <div className="space-y-3 fade-in-up" style={{animationDelay: '0.5s'}}>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-sm">
              <div className="flex items-center gap-2 text-orange-400/80 future-hover">
                <div className="w-1 h-1 bg-orange-400 rounded-full neon-glow"></div>
                <span className="font-mono">© 22 ДБЯ - 19 ДБЯ</span>
              </div>
              <div className="hidden md:block w-1 h-1 bg-orange-400/50 rounded-full animate-pulse"></div>
              <div className="flex items-center gap-2 text-cyan-400/80 future-hover">
                <div className="w-1 h-1 bg-cyan-400 rounded-full neon-glow"></div>
                <span className="font-mono">Войны клонов</span>
              </div>
              <div className="hidden md:block w-1 h-1 bg-cyan-400/50 rounded-full animate-pulse"></div>
              <div className="flex items-center gap-2 text-orange-400/80 future-hover">
                <div className="w-1 h-1 bg-orange-400 rounded-full neon-glow"></div>
                <span className="font-mono">Gmod RP Server Void</span>
              </div>
            </div>
            <div className="text-orange-500/60 text-xs font-orbitron tracking-widest flicker-text">
              АВТОР: <span className="text-orange-400 font-bold neon-glow">RAMPA</span>
            </div>
          </div>
        </div>
        
        {/* Enhanced Glow Effects */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-32 bg-gradient-to-t from-orange-400/10 via-cyan-400/5 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-cyan-400/5 to-transparent rounded-full blur-2xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-orange-400/5 to-transparent rounded-full blur-2xl"></div>
      </footer>
    </div>
    </>
  );

      {/* Footer */}
      <footer className="relative bg-gradient-to-t from-gray-950 via-gray-900 to-black py-16 px-4 md:px-8 text-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-400/5 via-transparent to-cyan-400/5"></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          {/* Main Content */}
          <div className="mb-12">
            <div className="relative inline-block mb-6">
              <div className="absolute inset-0 bg-orange-400/20 rounded-full blur-xl"></div>
              <img 
                src="https://cdn.poehali.dev/files/b41cc154-960e-487e-bc47-03469d7602e4.png" 
                alt="Эмблема Галактической Республики" 
                className="relative w-16 h-16 mx-auto brightness-0 invert drop-shadow-2xl"
              />
            </div>
            
            <h3 className="text-3xl md:text-4xl font-orbitron font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-400 mb-6 tracking-wider">
              ДЛЯ РЕСПУБЛИКИ. ДЛЯ ДЕМОКРАТИИ.
            </h3>
            
            <div className="inline-flex items-center gap-3 bg-gray-900/50 backdrop-blur-sm border border-orange-400/30 rounded-full px-6 py-3 mb-8">
              <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
              <span className="text-orange-300 font-orbitron font-semibold tracking-wide">Отряд "Призрак" - ЭРК В.А.Р.</span>
              <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
            </div>
          </div>
          
          {/* Decorative Divider */}
          <div className="flex items-center justify-center mb-8">
            <div className="h-px bg-gradient-to-r from-transparent via-orange-400/50 to-transparent flex-1 max-w-xs"></div>
            <div className="mx-4 w-3 h-3 border-2 border-orange-400/50 rotate-45"></div>
            <div className="h-px bg-gradient-to-r from-transparent via-orange-400/50 to-transparent flex-1 max-w-xs"></div>
          </div>
          
          {/* Copyright Info */}
          <div className="space-y-3">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-sm">
              <div className="flex items-center gap-2 text-orange-400/80">
                <div className="w-1 h-1 bg-orange-400 rounded-full"></div>
                <span className="font-mono">© 22 ДБЯ - 19 ДБЯ</span>
              </div>
              <div className="hidden md:block w-1 h-1 bg-orange-400/50 rounded-full"></div>
              <div className="flex items-center gap-2 text-orange-400/80">
                <div className="w-1 h-1 bg-orange-400 rounded-full"></div>
                <span className="font-mono">Войны клонов</span>
              </div>
              <div className="hidden md:block w-1 h-1 bg-orange-400/50 rounded-full"></div>
              <div className="flex items-center gap-2 text-orange-400/80">
                <div className="w-1 h-1 bg-orange-400 rounded-full"></div>
                <span className="font-mono">Gmod RP Server Void</span>
              </div>
            </div>
            <div className="text-orange-500/60 text-xs font-orbitron tracking-widest">
              АВТОР: <span className="text-orange-400 font-bold">RAMPA</span>
            </div>
          </div>
        </div>
        
        {/* Subtle Glow Effects */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-32 bg-orange-400/5 rounded-full blur-3xl"></div>
      </footer>
    </div>
  );
};

export default Index;