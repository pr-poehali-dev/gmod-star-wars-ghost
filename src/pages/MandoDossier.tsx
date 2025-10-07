import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useEffect, useRef, useState } from 'react';

const MandoDossier = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [clickCount, setClickCount] = useState(0);
  const [showDeniedMessage, setShowDeniedMessage] = useState(false);

  useEffect(() => {
    // Создаем звуковой эффект предупреждения
    const createWarningSound = () => {
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      const oscillator1 = audioContext.createOscillator();
      const oscillator2 = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator1.type = 'square';
      oscillator1.frequency.setValueAtTime(800, audioContext.currentTime);
      oscillator1.frequency.exponentialRampToValueAtTime(400, audioContext.currentTime + 0.3);
      
      oscillator2.type = 'sawtooth';
      oscillator2.frequency.setValueAtTime(200, audioContext.currentTime);
      oscillator2.frequency.exponentialRampToValueAtTime(100, audioContext.currentTime + 0.3);
      
      gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
      
      oscillator1.connect(gainNode);
      oscillator2.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      oscillator1.start(audioContext.currentTime);
      oscillator2.start(audioContext.currentTime);
      oscillator1.stop(audioContext.currentTime + 0.3);
      oscillator2.stop(audioContext.currentTime + 0.3);
    };

    // Воспроизводим звук при загрузке компонента
    const timer = setTimeout(() => {
      try {
        createWarningSound();
      } catch (error) {
        console.log('Audio context not available');
      }
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleClanClick = () => {
    const newCount = clickCount + 1;
    setClickCount(newCount);
    
    playAccessDeniedSound();
    
    if (newCount === 3) {
      setShowDeniedMessage(true);
      setTimeout(() => {
        setShowDeniedMessage(false);
        setClickCount(0);
      }, 4000);
    }
  };

  const playAccessDeniedSound = () => {
    try {
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      
      // Звук "Доступ запрещен"
      const createBeepSequence = () => {
        const times = [0, 0.15, 0.3];
        times.forEach((time, index) => {
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
      };
      
      createBeepSequence();
    } catch (error) {
      console.log('Audio context not available');
    }
  };

  return (
    <div className="min-h-screen bg-black text-green-200">
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-900 to-black py-8 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <Link to="/" className="inline-flex items-center text-green-400 hover:text-green-300 mb-6">
            <Icon name="ArrowLeft" size={20} className="mr-2" />
            Вернуться к отряду
          </Link>
          <div className="flex flex-col md:flex-row items-start gap-8">
            <img 
              src="https://cdn.poehali.dev/files/b54488bd-b7d7-4ac6-a413-2a816e9dc8ef.PNG" 
              alt="Schnee Mhokar"
              className="w-64 h-80 object-cover object-top rounded-lg border-2 border-green-400"
            />
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-4">
                <h1 className="text-4xl md:text-5xl font-orbitron font-bold text-green-400">
                  Шнэ Мхокар
                </h1>
                <Badge className="bg-green-400 text-black text-lg px-4 py-2">
                  Мандалорский наёмник
                </Badge>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg">
                <div>
                  <span className="text-green-400 font-semibold">Позывной: </span>
                  «Красная Тень»
                </div>
                <div>
                  <span className="text-green-400 font-semibold">Раса: </span>
                  Чисс
                </div>
                <div>
                  <span className="text-green-400 font-semibold">Пол: </span>
                  Женский
                </div>
                <div>
                  <span className="text-green-400 font-semibold">Возраст: </span>
                  21 год
                </div>
                <div>
                  <span className="text-green-400 font-semibold">Родной мир: </span>
                  Мандалор
                </div>
                <div>
                  <span className="text-green-400 font-semibold">Роль: </span>
                  Наставник отряда «Призрак»
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bio Section */}
      <section className="py-12 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Biography */}
            <Card className="bg-gray-900 border-green-400">
              <CardHeader>
                <CardTitle className="text-green-400 text-2xl flex items-center">
                  <Icon name="User" size={24} className="mr-3" />
                  Биография
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="text-green-400 font-semibold mb-2">История:</h4>
                  <p className="text-green-200 leading-relaxed text-justify">
                    После очередной миссии, где клоны потеряли половину состава из-за ошибок стандартной подготовки, командование решило рискнуть и привлечь инструктора со стороны. Шнэ Мхокар предложили «особый» отряд — пятерых молодых клонов, признанных слишком упрямыми для обычных частей. В зале брифинга офицеры смотрели на неё с недоверием: чужачка, наёмница, без знака Республики. Но Шнэ лишь холодно усмехнулась и сказала: «Вы называете их браком? А я сделаю из них оружие». Через неделю она вывела «Призраков» на полигон и показала, что будет тренироваться вместе с ними, падать вместе с ними и вставать вместе с ними. Для клонов это стало неожиданным — впервые наставник не наблюдал сверху, а сражался рядом. Так началась их общая история: отряд, которому дали чужую, а получили главу семьи.
                  </p>
                </div>
                <div>
                  <h4 className="text-green-400 font-semibold mb-2">Роль наставника:</h4>
                  <p className="text-green-200">
                    Назначена наставником элитного отряда «Призрак». Обучает клонов тактикам скрытности, 
                    выживания и нестандартным боевым приёмам. Её опыт наёмника помогает отряду в самых 
                    сложных миссиях.
                  </p>
                </div>

              </CardContent>
            </Card>

            {/* Mandalorian Equipment */}
            <Card className="bg-gray-900 border-green-400">
              <CardHeader>
                <CardTitle className="text-green-400 text-2xl flex items-center">
                  <Icon name="Shield" size={24} className="mr-3" />
                  Мандалорское снаряжение
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-3">
                  <div className="flex items-center p-3 bg-gray-800 rounded-lg">
                    <Icon name="CircleDot" size={16} className="mr-3 text-green-400" />
                    <span className="text-green-200">Броня из бескара</span>
                  </div>
                  <div className="flex items-center p-3 bg-gray-800 rounded-lg">
                    <Icon name="CircleDot" size={16} className="mr-3 text-green-400" />
                    <span className="text-green-200">Джетпак</span>
                  </div>
                  <div className="flex items-center p-3 bg-gray-800 rounded-lg">
                    <Icon name="CircleDot" size={16} className="mr-3 text-green-400" />
                    <span className="text-green-200">Вибролезвие Mhokar</span>
                  </div>
                  <div className="flex items-center p-3 bg-gray-800 rounded-lg">
                    <Icon name="CircleDot" size={16} className="mr-3 text-green-400" />
                    <span className="text-green-200">Огнемёт</span>
                  </div>
                  <div className="flex items-center p-3 bg-gray-800 rounded-lg">
                    <Icon name="CircleDot" size={16} className="mr-3 text-green-400" />
                    <span className="text-green-200">Мандалорский шлем</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Clan History */}
            <Card className="bg-gray-900 border-green-400">
              <CardHeader>
                <CardTitle className="text-green-400 text-2xl flex items-center">
                  <Icon name="Crown" size={24} className="mr-3" />
                  Клан Mhokar
                </CardTitle>
              </CardHeader>
              <CardContent 
                className="flex items-center justify-center min-h-[280px] relative overflow-hidden cursor-pointer"
                onClick={handleClanClick}
              >
                {/* Animated Background Particles */}
                <div className="absolute inset-0">
                  <div className="absolute top-4 left-8 w-1 h-1 bg-red-400/60 rounded-full animate-ping" style={{animationDelay: '0s'}}></div>
                  <div className="absolute top-12 right-12 w-1 h-1 bg-yellow-400/40 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
                  <div className="absolute bottom-16 left-16 w-1 h-1 bg-red-400/50 rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
                  <div className="absolute bottom-8 right-6 w-1 h-1 bg-orange-400/60 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
                  <div className="absolute top-20 left-1/3 w-1 h-1 bg-red-400/30 rounded-full animate-ping" style={{animationDelay: '1.5s'}}></div>
                </div>
                
                {/* Scanning Line Effect */}
                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-red-400/80 to-transparent animate-pulse" 
                       style={{top: '30%', animationDuration: '3s'}}></div>
                  <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-yellow-400/40 to-transparent animate-pulse" 
                       style={{top: '70%', animationDuration: '4s', animationDelay: '1s'}}></div>
                </div>
                
                <div className="relative w-full max-w-md">
                  {/* Outer Glow Ring */}
                  <div className="absolute inset-0 bg-red-500/10 rounded-2xl blur-xl animate-pulse"></div>
                  <div className="absolute inset-2 bg-red-600/5 rounded-xl blur-lg animate-pulse" style={{animationDelay: '0.5s'}}></div>
                  
                  {/* Main Container with Enhanced Border */}
                  <div className="relative bg-gradient-to-br from-gray-900/95 via-gray-800/95 to-gray-900/95 border-2 border-red-500 rounded-xl p-8 backdrop-blur-md shadow-2xl">
                    {/* Animated Border Glow */}
                    <div className="absolute inset-0 rounded-xl border-2 border-red-400/30 animate-pulse"></div>
                    <div className="absolute inset-1 rounded-lg border border-red-500/20 animate-pulse" style={{animationDelay: '1s'}}></div>
                    
                    {/* Dynamic Warning Stripes */}
                    <div className="absolute inset-0 rounded-xl overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/15 to-transparent transform -skew-x-12 animate-pulse"></div>
                      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-yellow-500/8 to-transparent transform skew-x-12 animate-pulse" style={{animationDelay: '1.5s'}}></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-600/10 to-transparent transform -skew-x-6 animate-pulse" style={{animationDelay: '2s'}}></div>
                    </div>
                    
                    {/* Content */}
                    <div className="relative z-20 text-center space-y-6">
                      {/* Enhanced Warning Icon */}
                      <div className="flex justify-center">
                        <div className="relative">
                          {/* Multiple Pulsing Rings */}
                          <div className="absolute inset-0 w-20 h-20 border-2 border-red-500/30 rounded-full animate-ping"></div>
                          <div className="absolute inset-0 w-20 h-20 border border-red-400/20 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
                          <div className="absolute inset-0 w-20 h-20 border border-yellow-400/15 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
                          
                          {/* Main Icon Container */}
                          <div className="relative w-20 h-20 bg-gradient-to-br from-red-500/30 to-red-600/20 rounded-full flex items-center justify-center shadow-lg">
                            <div className="absolute inset-0 bg-red-500/10 rounded-full animate-pulse"></div>
                            <Icon name="ShieldAlert" size={36} className="text-red-400 relative z-10 drop-shadow-lg animate-pulse" />
                          </div>
                        </div>
                      </div>
                      
                      {/* Enhanced Main Text */}
                      <div className="space-y-3">
                        <h3 className="text-3xl font-orbitron font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-red-300 to-red-400 tracking-wider drop-shadow-lg animate-pulse">
                          ЗАСЕКРЕЧЕНО
                        </h3>
                        <div className="flex items-center justify-center gap-3">
                          <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse shadow-lg shadow-red-400/50"></div>
                          <div className="w-1 h-1 bg-red-300/60 rounded-full animate-ping"></div>
                          <p className="text-red-300/90 text-sm font-mono tracking-widest animate-pulse">
                            ДОСТУП ОГРАНИЧЕН
                          </p>
                          <div className="w-1 h-1 bg-red-300/60 rounded-full animate-ping"></div>
                          <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse shadow-lg shadow-red-400/50"></div>
                        </div>
                      </div>
                      
                      {/* Enhanced Security Badge */}
                      <div className="relative">
                        <div className="absolute inset-0 bg-red-500/20 rounded-lg blur-sm animate-pulse"></div>
                        <div className="relative bg-gradient-to-r from-gray-800/90 to-gray-900/90 border-2 border-red-500/40 rounded-lg px-6 py-3 backdrop-blur-sm">
                          <div className="flex items-center justify-center gap-2">
                            <Icon name="Lock" size={14} className="text-red-400/80" />
                            <p className="text-red-400/80 text-xs font-mono tracking-wide">
                              УРОВЕНЬ СЕКРЕТНОСТИ: <span className="text-red-300 font-bold tracking-wider">ВЫСШИЙ</span>
                            </p>
                            <Icon name="Lock" size={14} className="text-red-400/80" />
                          </div>
                        </div>
                      </div>
                      
                      {/* Enhanced Glitch Lines */}
                      <div className="space-y-2">
                        <div className="h-px bg-gradient-to-r from-transparent via-red-400/60 to-transparent animate-pulse"></div>
                        <div className="h-px bg-gradient-to-r from-transparent via-red-300/40 to-transparent animate-pulse" style={{animationDelay: '0.5s'}}></div>
                        <div className="h-px bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent animate-pulse" style={{animationDelay: '1s'}}></div>
                        <div className="h-px bg-gradient-to-r from-transparent via-red-400/60 to-transparent animate-pulse" style={{animationDelay: '1.5s'}}></div>
                      </div>
                      
                      {/* Warning Code */}
                      <div className="text-xs font-mono text-red-500/60 tracking-widest animate-pulse">
                        ERROR_CODE: MND_CLAN_403
                      </div>
                    </div>
                    
                    {/* Access Denied Message - appears after 3 clicks */}
                    {showDeniedMessage && (
                      <div className="absolute inset-0 flex items-center justify-center z-30 bg-black/80 backdrop-blur-lg animate-fade-in rounded-xl">
                        <div className="relative max-w-lg mx-4">
                          {/* Outer glowing rings */}
                          <div className="absolute inset-0 border-2 border-red-500/30 rounded-2xl animate-ping" style={{animationDuration: '2s'}}></div>
                          <div className="absolute inset-0 border border-orange-500/20 rounded-2xl animate-ping" style={{animationDuration: '3s', animationDelay: '0.5s'}}></div>
                          
                          {/* Main card */}
                          <div className="relative bg-gradient-to-br from-gray-950 via-red-950/40 to-gray-950 border-2 border-red-500/60 rounded-2xl p-8 shadow-[0_0_50px_rgba(239,68,68,0.3)]">
                            {/* Animated scan lines */}
                            <div className="absolute inset-0 overflow-hidden rounded-2xl">
                              <div className="absolute w-full h-1 bg-gradient-to-r from-transparent via-red-500/40 to-transparent animate-pulse" 
                                   style={{top: '25%', animationDuration: '2s'}}></div>
                              <div className="absolute w-full h-1 bg-gradient-to-r from-transparent via-orange-500/30 to-transparent animate-pulse" 
                                   style={{top: '75%', animationDuration: '2.5s', animationDelay: '0.5s'}}></div>
                            </div>
                            
                            {/* Diagonal stripes background */}
                            <div className="absolute inset-0 opacity-10 rounded-2xl overflow-hidden">
                              <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 via-transparent to-orange-500/20"></div>
                              <div className="absolute inset-0" style={{
                                backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(239, 68, 68, 0.1) 10px, rgba(239, 68, 68, 0.1) 20px)'
                              }}></div>
                            </div>
                            
                            <div className="relative z-10 space-y-6">
                              {/* Icon with hexagon */}
                              <div className="flex justify-center">
                                <div className="relative">
                                  {/* Hexagon background */}
                                  <div className="absolute inset-0 w-28 h-28 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
                                    <svg viewBox="0 0 100 100" className="w-full h-full text-red-500/20 animate-pulse">
                                      <polygon points="50 1 95 25 95 75 50 99 5 75 5 25" fill="currentColor" stroke="#ef4444" strokeWidth="1.5"/>
                                    </svg>
                                  </div>
                                  
                                  {/* Icon */}
                                  <div className="relative w-28 h-28 flex items-center justify-center">
                                    <Icon name="ShieldAlert" size={64} className="text-red-500 drop-shadow-[0_0_15px_rgba(239,68,68,0.8)] animate-pulse" />
                                  </div>
                                </div>
                              </div>
                              
                              {/* Main text */}
                              <div className="text-center space-y-4">
                                <div className="space-y-2">
                                  <h3 className="text-4xl font-orbitron font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-400 to-red-400 tracking-widest animate-pulse">
                                    ДОСТУП ЗАПРЕЩЁН
                                  </h3>
                                  <div className="flex items-center justify-center gap-2">
                                    <div className="h-px w-12 bg-gradient-to-r from-transparent to-red-500"></div>
                                    <Icon name="Lock" size={16} className="text-red-500" />
                                    <div className="h-px w-12 bg-gradient-to-l from-transparent to-red-500"></div>
                                  </div>
                                </div>
                                
                                <div className="bg-red-950/30 border border-red-500/30 rounded-lg p-4 backdrop-blur-sm">
                                  <p className="text-red-200/90 font-medium leading-relaxed">
                                    Информация о клане Mhokar находится под защитой протокола безопасности высшего уровня
                                  </p>
                                </div>
                                
                                <div className="flex items-center justify-center gap-3 text-red-400/70 text-sm font-mono">
                                  <Icon name="AlertTriangle" size={16} />
                                  <span>Требуется разрешение Совета Мандалора</span>
                                  <Icon name="AlertTriangle" size={16} />
                                </div>
                              </div>
                              
                              {/* Bottom code */}
                              <div className="space-y-2">
                                <div className="h-px bg-gradient-to-r from-transparent via-red-500/40 to-transparent"></div>
                                <div className="flex items-center justify-between text-xs font-mono text-red-500/50 px-2">
                                  <span>ERROR_403</span>
                                  <span>MANDALORE_PROTOCOL</span>
                                  <span>LEVEL_10</span>
                                </div>
                              </div>
                            </div>
                            
                            {/* Corner accents */}
                            <div className="absolute top-3 left-3">
                              <div className="w-6 h-6 border-l-2 border-t-2 border-red-500"></div>
                              <div className="absolute top-0 left-0 w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                            </div>
                            <div className="absolute top-3 right-3">
                              <div className="w-6 h-6 border-r-2 border-t-2 border-red-500"></div>
                              <div className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                            </div>
                            <div className="absolute bottom-3 left-3">
                              <div className="w-6 h-6 border-l-2 border-b-2 border-red-500"></div>
                              <div className="absolute bottom-0 left-0 w-2 h-2 bg-red-500 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                            </div>
                            <div className="absolute bottom-3 right-3">
                              <div className="w-6 h-6 border-r-2 border-b-2 border-red-500"></div>
                              <div className="absolute bottom-0 right-0 w-2 h-2 bg-red-500 rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {/* Enhanced Corner Decorations */}
                    <div className="absolute top-3 left-3 w-6 h-6 border-l-2 border-t-2 border-red-500/60 animate-pulse"></div>
                    <div className="absolute top-3 right-3 w-6 h-6 border-r-2 border-t-2 border-red-500/60 animate-pulse" style={{animationDelay: '0.5s'}}></div>
                    <div className="absolute bottom-3 left-3 w-6 h-6 border-l-2 border-b-2 border-red-500/60 animate-pulse" style={{animationDelay: '1s'}}></div>
                    <div className="absolute bottom-3 right-3 w-6 h-6 border-r-2 border-b-2 border-red-500/60 animate-pulse" style={{animationDelay: '1.5s'}}></div>
                    
                    {/* Additional Corner Details */}
                    <div className="absolute top-1 left-1 w-2 h-2 bg-red-400/40 rounded-full animate-ping"></div>
                    <div className="absolute top-1 right-1 w-2 h-2 bg-red-400/40 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
                    <div className="absolute bottom-1 left-1 w-2 h-2 bg-red-400/40 rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
                    <div className="absolute bottom-1 right-1 w-2 h-2 bg-red-400/40 rounded-full animate-ping" style={{animationDelay: '3s'}}></div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Connection to Ghost Squad */}
            <Card className="bg-gray-900 border-green-400">
              <CardHeader>
                <CardTitle className="text-green-400 text-2xl flex items-center">
                  <Icon name="Users" size={24} className="mr-3" />
                  Связь с «Призраками»
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="text-green-400 font-semibold mb-2">Семейные узы:</h4>
                  <p className="text-green-200">
                    Schnee Mhokar стала единственным инструктором, который видел в отряде «Призрак» не расходный материал, а личностей. Для них она была не просто наставницей, а настоящим командиром и главой, чьё слово ценилось выше приказов штаба.
                  </p>
                </div>
                <div>
                  <h4 className="text-green-400 font-semibold mb-2">Поддержка:</h4>
                  <p className="text-green-200">
                    Обеспечивает тактические советы, основанные на мандалорском боевом опыте, 
                    и доступ к специализированному снаряжению.
                  </p>
                </div>
                <div>
                  <h4 className="text-green-400 font-semibold mb-2">Влияние:</h4>
                  <p className="text-green-200">
                    Его присутствие в жизни отряда привносит элементы мандалорской культуры 
                    и боевых традиций в их тактику.
                  </p>
                </div>
              </CardContent>
            </Card>

          </div>

          {/* Skills Chart */}
          <div className="mt-8">
            <Card className="bg-gray-900 border-green-400">
              <CardHeader>
                <CardTitle className="text-green-400 text-2xl flex items-center">
                  <Icon name="Target" size={24} className="mr-3" />
                  Боевые навыки
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="relative w-24 h-24 mx-auto mb-4">
                      <svg className="w-24 h-24 transform -rotate-90">
                        <circle cx="48" cy="48" r="40" stroke="#065f46" strokeWidth="8" fill="none" />
                        <circle cx="48" cy="48" r="40" stroke="#22c55e" strokeWidth="8" fill="none" strokeDasharray="251.2" strokeDashoffset="50.24" className="transition-all duration-1000" />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-green-400 font-bold text-lg">80</span>
                      </div>
                    </div>
                    <p className="text-green-300 font-semibold">Ближний бой</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="relative w-24 h-24 mx-auto mb-4">
                      <svg className="w-24 h-24 transform -rotate-90">
                        <circle cx="48" cy="48" r="40" stroke="#065f46" strokeWidth="8" fill="none" />
                        <circle cx="48" cy="48" r="40" stroke="#22c55e" strokeWidth="8" fill="none" strokeDasharray="251.2" strokeDashoffset="62.8" className="transition-all duration-1000" />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-green-400 font-bold text-lg">75</span>
                      </div>
                    </div>
                    <p className="text-green-300 font-semibold">Тактика</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="relative w-24 h-24 mx-auto mb-4">
                      <svg className="w-24 h-24 transform -rotate-90">
                        <circle cx="48" cy="48" r="40" stroke="#065f46" strokeWidth="8" fill="none" />
                        <circle cx="48" cy="48" r="40" stroke="#22c55e" strokeWidth="8" fill="none" strokeDasharray="251.2" strokeDashoffset="25.12" className="transition-all duration-1000" />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-green-400 font-bold text-lg">90</span>
                      </div>
                    </div>
                    <p className="text-green-300 font-semibold">Выносливость</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="relative w-24 h-24 mx-auto mb-4">
                      <svg className="w-24 h-24 transform -rotate-90">
                        <circle cx="48" cy="48" r="40" stroke="#065f46" strokeWidth="8" fill="none" />
                        <circle cx="48" cy="48" r="40" stroke="#22c55e" strokeWidth="8" fill="none" strokeDasharray="251.2" strokeDashoffset="37.68" className="transition-all duration-1000" />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-green-400 font-bold text-lg">85</span>
                      </div>
                    </div>
                    <p className="text-green-300 font-semibold">Честь</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-gradient-to-t from-gray-950 via-gray-900 to-black py-16 px-4 md:px-8 text-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23fb923c%22%20fill-opacity%3D%220.4%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221.5%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
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

export default MandoDossier;