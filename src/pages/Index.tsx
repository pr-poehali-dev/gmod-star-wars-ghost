import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Input } from "@/components/ui/input";

const Index = () => {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [attempts, setAttempts] = useState(0);
  
  const handlePasswordSubmit = () => {
    if (password === "ShadowGhost") {
      setIsUnlocked(true);
      setIsPasswordVisible(false);
      // Звук успешного доступа
      playSuccessSound();
    } else {
      setAttempts(prev => prev + 1);
      setPassword("");
      // Звук отказа доступа
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
    <div className="min-h-screen bg-black text-orange-200">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-black to-gray-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23374151%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        <div className="text-center z-10 animate-fade-in">
          <div className="mb-6">
            <img 
              src="https://cdn.poehali.dev/files/b41cc154-960e-487e-bc47-03469d7602e4.png" 
              alt="Эмблема Галактической Республики" 
              className="w-40 h-40 mx-auto mb-4 brightness-0 invert"
            />
          </div>
          <h1 className="text-6xl md:text-8xl font-orbitron font-black text-orange-200 mb-4 tracking-wider">
            ПРИЗРАК
          </h1>
          <p className="text-xl md:text-2xl text-orange-400 font-medium mb-8">
            Элитный клон-отряд Республики
          </p>
          <div className="flex justify-center gap-4 text-sm font-orbitron">
            <Badge variant="outline" className="border-orange-400 text-orange-400">
              ЭРК
            </Badge>
            <Badge variant="outline" className="border-orange-400 text-orange-400">
              БСО
            </Badge>
          </div>
        </div>
      </section>

      {/* Protected Sections */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-orange-400 mb-6">
            ИНФОРМАЦИЯ О ОТРЯДЕ
          </h2>
          
          {!isUnlocked ? (
            <div className="max-w-2xl mx-auto">
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
                <div className="relative bg-gradient-to-br from-gray-900/95 via-gray-800/95 to-gray-900/95 border-2 border-red-500 rounded-2xl p-12 backdrop-blur-md">
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
                        <div className="relative w-24 h-24 bg-gradient-to-br from-red-500/20 to-red-600/10 rounded-full flex items-center justify-center">
                          <Icon name="ShieldAlert" size={42} className="text-red-400 animate-pulse" />
                        </div>
                      </div>
                    </div>
                    
                    {/* Access Denied Header */}
                    <div className="space-y-4">
                      <h3 className="text-3xl font-orbitron font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-red-300 to-red-400 tracking-wider">
                        ДОСТУП ОГРАНИЧЕН
                      </h3>
                      <div className="bg-gray-800/80 border border-red-500/30 rounded-lg px-6 py-3">
                        <p className="text-red-400/80 text-sm font-mono tracking-wide">
                          УРОВЕНЬ СЕКРЕТНОСТИ: <span className="text-red-300 font-bold">МАКСИМАЛЬНЫЙ</span>
                        </p>
                      </div>
                    </div>
                    
                    {/* Password Input */}
                    <div className="space-y-6">
                      <div className="text-orange-200">
                        <p className="text-lg font-orbitron mb-2">ВВЕДИТЕ КОД ДОСТУПА:</p>
                        <div className="flex gap-3">
                          <div className="relative flex-1">
                            <Input
                              type={isPasswordVisible ? "text" : "password"}
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              onKeyPress={(e) => e.key === 'Enter' && handlePasswordSubmit()}
                              placeholder="████████████"
                              className="bg-gray-800/50 border-orange-400/50 text-orange-200 font-mono text-center text-lg tracking-widest placeholder:text-orange-600/30"
                            />
                            <Button
                              type="button"
                              onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                              className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 h-8 w-8 bg-transparent hover:bg-orange-400/20"
                            >
                              <Icon name={isPasswordVisible ? "EyeOff" : "Eye"} size={16} className="text-orange-400" />
                            </Button>
                          </div>
                          <Button
                            onClick={handlePasswordSubmit}
                            className="bg-orange-400 text-black hover:bg-orange-500 font-orbitron font-bold px-8"
                          >
                            ВОЙТИ
                          </Button>
                        </div>
                      </div>
                      
                      {attempts > 0 && (
                        <div className="bg-red-900/30 border border-red-500/30 rounded-lg p-4">
                          <p className="text-red-400 text-sm font-mono">
                            ⚠️ НЕВЕРНЫЙ КОД ДОСТУПА ({attempts}/3)
                          </p>
                          {attempts >= 3 && (
                            <p className="text-red-300 text-xs mt-2">
                              СИСТЕМА БЕЗОПАСНОСТИ АКТИВИРОВАНА
                            </p>
                          )}
                        </div>
                      )}
                    </div>
                    
                    {/* Info hint */}
                    <div className="space-y-3">
                      <div className="h-px bg-gradient-to-r from-transparent via-red-400/50 to-transparent"></div>
                      <p className="text-orange-500/60 text-xs font-mono tracking-widest">
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
            <div className="space-y-20">
              {/* About Squad Section */}
              <div>
                <h3 className="text-3xl md:text-4xl font-orbitron font-bold text-green-400 mb-12">
                  О ОТРЯДЕ ПРИЗРАК
                </h3>
                <div className="max-w-4xl mx-auto space-y-6 text-lg leading-relaxed">
                  <div className="bg-green-900/20 border border-green-400/30 rounded-lg p-6 mb-8">
                    <p className="text-green-400 text-sm font-mono mb-2">✓ ДОСТУП РАЗРЕШЕН</p>
                    <p className="text-green-300 text-xs">Добро пожаловать, агент. Данные рассекречены.</p>
                  </div>
                  <p>
                    Отряд "Призрак" - сверхсекретное подразделение клонов-штурмовиков, созданное для выполнения 
                    особо деликатных операций за линией фронта. Каждый боец прошел экспериментальную программу 
                    психологического и физического усиления, получив способности, превышающие стандарты обычных клонов.
                  </p>
                  <p>
                    Их истинная миссия - не только военные операции, но и устранение "проблемных" офицеров Республики, 
                    ликвидация свидетелей секретных проектов и проведение операций под ложным флагом для 
                    дискредитации Конфедерации независимых систем.
                  </p>
                  <p className="text-red-400 text-sm bg-red-900/20 border border-red-400/30 rounded p-4">
                    ⚠️ ВНИМАНИЕ: Отряд имеет прямую связь с канцлером Палпатином и действует вне стандартной 
                    командной структуры. Уровень автономности - МАКСИМАЛЬНЫЙ.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                  <Card className="bg-gray-900 border-green-400 hover-scale">
                    <CardHeader className="text-center">
                      <Icon name="Target" size={48} className="mx-auto text-green-400 mb-2" />
                      <CardTitle className="text-green-200 font-orbitron">Элиминация</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-green-300">Точечное устранение целей любой сложности</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-gray-900 border-green-400 hover-scale">
                    <CardHeader className="text-center">
                      <Icon name="Eye" size={48} className="mx-auto text-green-400 mb-2" />
                      <CardTitle className="text-green-200 font-orbitron">Инфильтрация</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-green-300">Проникновение в любые структуры противника</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-gray-900 border-green-400 hover-scale">
                    <CardHeader className="text-center">
                      <Icon name="Skull" size={48} className="mx-auto text-green-400 mb-2" />
                      <CardTitle className="text-green-200 font-orbitron">Ликвидация</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-green-300">Бесследное устранение свидетелей</p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Squad History */}
              <div className="bg-green-900/10 py-16 px-8 rounded-2xl">
                <h3 className="text-3xl md:text-4xl font-orbitron font-bold text-green-400 text-center mb-12">
                  ИСТОРИЯ ФОРМИРОВАНИЯ
                </h3>
                <div className="max-w-4xl mx-auto">
                  <p className="text-green-200 text-lg leading-relaxed mb-6 text-justify">
                    После битвы за Анаксис и тяжелых потерь в рядах БСО, тайный совет под руководством канцлера Палпатина решил создать новое подразделение, способное выполнять "деликатные" задачи. Так появился отряд «Призрак» – группа бойцов, прошедших не только переобучение, но и экспериментальную программу психологического воздействия.
                  </p>
                  <p className="text-green-200 text-lg leading-relaxed text-justify">
                    Для их тренировки привлекли не только мандалорских инструкторов, но и бывших ситхских агентов, которые обучили их методам бесшумного устранения, психологическому воздействию и работе в тылу врага. Каждый "Призрак" получил имплантаты, подавляющие эмпатию и усиливающие агрессивность.
                  </p>
                </div>
              </div>

              {/* Squad Features */}
              <div>
                <h3 className="text-3xl md:text-4xl font-orbitron font-bold text-green-400 text-center mb-12">
                  ОСОБЕННОСТИ ОТРЯДА
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-gray-900 border border-green-400 rounded-lg p-6 hover-scale">
                    <h4 className="text-2xl font-orbitron font-bold text-green-200 mb-4 flex items-center">
                      <Icon name="Skull" size={24} className="mr-3 text-green-400" />
                      Тайное оружие
                    </h4>
                    <p className="text-green-300 text-lg leading-relaxed">
                      Помимо стандартного вооружения, располагают нейротоксинами, электрошокерами и экспериментальными вибролезвиями с молекулярной заточкой.
                    </p>
                  </div>

                  <div className="bg-gray-900 border border-green-400 rounded-lg p-6 hover-scale">
                    <h4 className="text-2xl font-orbitron font-bold text-green-200 mb-4 flex items-center">
                      <Icon name="Eye" size={24} className="mr-3 text-green-400" />
                      Модифицированное снаряжение
                    </h4>
                    <p className="text-green-300 text-lg leading-relaxed">
                      Доспехи оснащены активной камуфляжной системой, глушителями шагов и встроенными инъекторами боевых стимуляторов. Шлемы содержат ИИ-помощника для анализа целей.
                    </p>
                  </div>

                  <div className="bg-gray-900 border border-green-400 rounded-lg p-6 hover-scale">
                    <h4 className="text-2xl font-orbitron font-bold text-green-200 mb-4 flex items-center">
                      <Icon name="Zap" size={24} className="mr-3 text-green-400" />
                      Черные операции
                    </h4>
                    <p className="text-green-300 text-lg leading-relaxed">
                      Специализируются на операциях под ложным флагом, устранении свидетелей государственных преступлений и "корректировке" неугодных офицеров Республики.
                    </p>
                  </div>

                  <div className="bg-gray-900 border border-green-400 rounded-lg p-6 hover-scale">
                    <h4 className="text-2xl font-orbitron font-bold text-green-200 mb-4 flex items-center">
                      <Icon name="Brain" size={24} className="mr-3 text-green-400" />
                      Психологические модификации
                    </h4>
                    <p className="text-green-300 text-lg leading-relaxed">
                      Прошли программу подавления морального кодекса. Способны выполнять приказы любой жестокости без колебаний. Эмоциональные связи заменены на беспрекословную преданность Палпатину.
                    </p>
                  </div>

                  <div className="bg-gray-900 border border-green-400 rounded-lg p-6 hover-scale">
                    <h4 className="text-2xl font-orbitron font-bold text-green-200 mb-4 flex items-center">
                      <Icon name="Crosshair" size={24} className="mr-3 text-green-400" />
                      Символика
                    </h4>
                    <p className="text-green-300 text-lg leading-relaxed">
                      Эмблема отряда – красный череп на черном фоне с символом Ситхов. Позывные начинаются с "Shadow" (Тень), например: Shadow-01, Shadow-07. Настоящие имена засекречены.
                    </p>
                  </div>

                  <div className="bg-gray-900 border border-green-400 rounded-lg p-6 hover-scale">
                    <h4 className="text-2xl font-orbitron font-bold text-green-200 mb-4 flex items-center">
                      <Icon name="Target" size={24} className="mr-3 text-green-400" />
                      Темная репутация
                    </h4>
                    <p className="text-green-300 text-lg leading-relaxed">
                      Первая "официальная" миссия – ликвидация сенатора Кореллии, выступавшего против военных расходов. Операция была представлена как теракт сепаратистов. С тех пор их боятся даже в Сенате.
                    </p>
                  </div>
                </div>
              </div>

              {/* Relationships Section */}
              <div className="bg-green-900/10 py-16 px-8 rounded-2xl">
                <h3 className="text-3xl md:text-4xl font-orbitron font-bold text-green-400 text-center mb-12">
                  СЕТЬ КОНТАКТОВ
                </h3>
                
                <div className="max-w-4xl mx-auto">
                  <div className="flex flex-wrap justify-center gap-2 mb-8">
                    <div className="bg-red-900/50 border border-red-400 rounded-lg p-4">
                      <span className="text-red-400 font-semibold text-sm">ПАЛПАТИН</span>
                    </div>
                    <div className="bg-purple-900/50 border border-purple-400 rounded-lg p-4">
                      <span className="text-purple-400 font-semibold text-sm">ТАЙНЫЕ АГЕНТЫ</span>
                    </div>
                    <div className="bg-gray-900/50 border border-gray-400 rounded-lg p-4">
                      <span className="text-gray-400 font-semibold text-sm">УСТРАНЕНЫ</span>
                    </div>
                    <div className="bg-yellow-900/50 border border-yellow-400 rounded-lg p-4">
                      <span className="text-yellow-400 font-semibold text-sm">ПОД НАБЛЮДЕНИЕМ</span>
                    </div>
                    <div className="bg-orange-900/50 border border-orange-400 rounded-lg p-4">
                      <span className="text-orange-400 font-semibold text-sm">КОМПРОМЕТИРОВАНЫ</span>
                    </div>
                    <div className="bg-green-900/50 border border-green-400 rounded-lg p-4">
                      <span className="text-green-400 font-semibold text-sm">СОЮЗНИКИ</span>
                    </div>
                  </div>
                  
                  <div className="text-center mb-8">
                    <p className="text-green-300 text-lg">
                      Отряд «Призрак» поддерживает сеть тайных связей по всей галактике, 
                      включая коррумпированных сенаторов, агентов в армии и контакты в преступном мире.
                    </p>
                  </div>
                  
                  {/* Character Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Mandalorian Card */}
                    <Card className="bg-gray-900 border-green-400 hover-scale">
                      <CardContent className="p-4">
                        <div className="text-center space-y-4">
                          <img 
                            src="https://cdn.poehali.dev/files/b54488bd-b7d7-4ac6-a413-2a816e9dc8ef.PNG" 
                            alt="Мандалорец" 
                            className="w-32 h-48 mx-auto object-cover rounded-lg border-2 border-green-400"
                          />
                          <div className="bg-green-900/50 border border-green-400 rounded-lg p-3">
                            <span className="text-green-400 font-semibold text-sm">СОЮЗНИК</span>
                          </div>
                          <div className="space-y-3">
                            <h4 className="text-green-200 font-orbitron font-bold">Schnee Mhokar</h4>
                            <p className="text-green-400 text-sm">Связной в клане</p>
                            <Link to="/mando">
                              <Button 
                                className="w-full bg-green-400 text-black hover:bg-green-500 font-orbitron text-sm"
                              >
                                ДОСЬЕ
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-gray-900/30 border-green-400/30 border-dashed hover-scale">
                      <CardContent className="h-full flex items-center justify-center min-h-[200px]">
                        <div className="text-center space-y-4">
                          <Icon name="UserX" size={32} className="mx-auto text-green-400/50" />
                          <p className="text-green-400/50 font-orbitron text-sm">ЗАСЕКРЕЧЕН</p>
                          <p className="text-green-300/50 text-xs">Личность скрыта</p>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-gray-900/30 border-green-400/30 border-dashed hover-scale">
                      <CardContent className="h-full flex items-center justify-center min-h-[200px]">
                        <div className="text-center space-y-4">
                          <Icon name="UserX" size={32} className="mx-auto text-green-400/50" />
                          <p className="text-green-400/50 font-orbitron text-sm">ЗАСЕКРЕЧЕН</p>
                          <p className="text-green-300/50 text-xs">Личность скрыта</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>

              {/* Clone Roster */}
              <div>
                <h3 className="text-3xl md:text-4xl font-orbitron font-bold text-green-400 text-center mb-12">
                  ОПЕРАТИВНИКИ
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {clones.map((clone, index) => (
                    <Card key={clone.id} className={`bg-gray-900 border-green-400 hover-scale animate-scale-in`} 
                          style={{animationDelay: `${index * 0.1}s`}}>
                      <CardHeader>
                        <div className="relative">
                          <img 
                            src={clone.image} 
                            alt={clone.name}
                            className="w-full h-48 object-cover rounded-lg mb-4 brightness-75"
                          />
                          <Badge className="absolute top-4 right-2 bg-green-400 text-black">
                            {clone.rank}
                          </Badge>
                          <div className="absolute bottom-4 left-2 bg-red-900/80 border border-red-500 rounded px-2 py-1">
                            <span className="text-red-300 text-xs font-mono">МОДИФИЦИРОВАН</span>
                          </div>
                        </div>
                        <CardTitle className="text-green-200 font-orbitron text-xl">
                          {clone.name}
                        </CardTitle>
                        <CardDescription className="text-green-400 font-mono">
                          {clone.id} // SHADOW PROTOCOL
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-green-300 text-sm">
                          {clone.description.replace('ветеран войн клонов', 'агент черных операций').replace('успешных операций', 'ликвидаций')}
                        </p>
                        
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-green-400">Специализация:</span>
                            <span className="text-green-400">{clone.specialization === 'Отсутствует' ? 'Элиминация' : clone.specialization}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-green-400">Ликвидации:</span>
                            <span className="text-green-400">{clone.kills + 50}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-green-400">Черные операции:</span>
                            <span className="text-green-400">{clone.missions + 20}</span>
                          </div>
                        </div>
                        
                        <Link to={`/clone/${clone.id}`}>
                          <Button className="w-full bg-green-400 text-black hover:bg-green-500 font-orbitron">
                            ДОСЬЕ
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  ))}
                  
                  {/* Secret Operative Cards */}
                  <Card className="bg-gray-900/50 border-green-400/50 border-dashed hover-scale">
                    <CardContent className="h-full flex items-center justify-center min-h-[400px]">
                      <div className="text-center space-y-4">
                        <Icon name="UserX" size={48} className="mx-auto text-green-400/50" />
                        <p className="text-green-400/50 font-orbitron">ЗАСЕКРЕЧЕН</p>
                        <p className="text-green-300/50 text-sm">Личность скрыта</p>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-gray-900/50 border-green-400/50 border-dashed hover-scale">
                    <CardContent className="h-full flex items-center justify-center min-h-[400px]">
                      <div className="text-center space-y-4">
                        <Icon name="UserX" size={48} className="mx-auto text-green-400/50" />
                        <p className="text-green-400/50 font-orbitron">ЗАСЕКРЕЧЕН</p>
                        <p className="text-green-300/50 text-sm">Личность скрыта</p>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-gray-900/50 border-green-400/50 border-dashed hover-scale">
                    <CardContent className="h-full flex items-center justify-center min-h-[400px]">
                      <div className="text-center space-y-4">
                        <Icon name="UserX" size={48} className="mx-auto text-green-400/50" />
                        <p className="text-green-400/50 font-orbitron">ЗАСЕКРЕЧЕН</p>
                        <p className="text-green-300/50 text-sm">Личность скрыта</p>
                      </div>
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

export default Index;