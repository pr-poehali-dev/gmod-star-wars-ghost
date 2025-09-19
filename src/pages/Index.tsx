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

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => {
      clearTimeout(loadingTimer);
    };
  }, []);

  const handlePasswordSubmit = () => {
    if (password === "ShadowGhost") {
      setIsUnlocked(true);
      setIsPasswordVisible(false);
    } else {
      setAttempts(prev => prev + 1);
      setPassword("");
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
      missions: 89
    },
    {
      id: "CT-07-2114", 
      name: "Позывной: Nuar",
      rank: "Зам. лидера",
      description: "Элитный пилот отряда. Мастер скрытных операций.",
      image: "https://cdn.poehali.dev/files/f5f129a7-2aee-4280-88f2-37724a7b0a77.jpg",
      specialization: "Пилот",
      kills: 203,
      missions: 76
    },
    {
      id: "CT-04-5536",
      name: "Позывной: Rampa",
      rank: "Боец",
      description: "Боевой танк, спасший жизни десятков товарищей в самых опасных ситуациях.",
      image: "https://cdn.poehali.dev/files/f5f129a7-2aee-4280-88f2-37724a7b0a77.jpg",
      specialization: "Отсутствует",
      kills: 58,
      missions: 92
    }
  ];

  return (
    <>
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

      <div className={`min-h-screen bg-black text-orange-200 relative ${isUnlocked ? 'holographic' : ''}`}>
        {isUnlocked && <div className="pulse-background fixed inset-0 z-0"></div>}
        
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Stars Background */}
          <div className="stars-container absolute inset-0">
            {Array.from({length: 100}, (_, i) => (
              <div
                key={i}
                className="star"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random() * 2}s`
                }}
              />
            ))}
          </div>

          {/* Scanning Lines */}
          <div className="absolute inset-0">
            <div className="scanning-line"></div>
            <div className="scanning-line-2"></div>
          </div>

          <div className="text-center z-10 max-w-4xl mx-auto px-4">
            <div className="mb-8">
              <img 
                src="https://cdn.poehali.dev/files/b41cc154-960e-487e-bc47-03469d7602e4.png" 
                alt="Эмблема Галактической Республики" 
                className="w-24 h-24 mx-auto mb-6 brightness-0 invert animate-pulse"
              />
            </div>
            
            <h1 className="text-6xl md:text-8xl font-orbitron font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-cyan-400 to-orange-400 glitch" data-text="ПРИЗРАК">
              ПРИЗРАК
            </h1>
            
            <div className="space-y-4 mb-8">
              <h2 className="text-2xl md:text-3xl font-orbitron font-bold text-orange-300">
                ЭЛИТНЫЙ РАЗВЕДЫВАТЕЛЬНЫЙ КОРПУС
              </h2>
              <p className="text-lg text-orange-400 max-w-2xl mx-auto">
                Специальное подразделение клонов-штурмовиков Галактической Республики
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-gradient-to-r from-orange-400 to-cyan-400 text-black hover:from-cyan-400 hover:to-orange-400 font-orbitron font-bold px-8 py-3 text-lg"
              >
                <Icon name="Users" size={20} className="mr-2" />
                СОСТАВ ОТРЯДА
              </Button>
              <Button 
                variant="outline" 
                className="border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-black font-orbitron font-bold px-8 py-3 text-lg"
              >
                <Icon name="Shield" size={20} className="mr-2" />
                ИСТОРИЯ
              </Button>
            </div>
          </div>
        </section>

        {/* Protected Sections */}
        <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-cyan-400 to-orange-400 mb-6 glitch" data-text="ИНФОРМАЦИЯ О ОТРЯДЕ">
              ИНФОРМАЦИЯ О ОТРЯДЕ
            </h2>
            
            {!isUnlocked ? (
              <div className="max-w-2xl mx-auto">
                <div className="relative">
                  <div className="absolute inset-0 bg-red-900/10 rounded-2xl blur-xl"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-orange-500/5 to-yellow-500/5 rounded-2xl"></div>
                  
                  <div className="relative bg-gradient-to-br from-gray-900/95 via-gray-800/95 to-gray-900/95 border-2 border-red-500 rounded-2xl p-12 backdrop-blur-md">
                    <div className="absolute inset-0 rounded-2xl border border-red-400/30 animate-pulse"></div>
                    
                    <div className="relative z-10 space-y-8">
                      <div className="flex justify-center">
                        <div className="relative">
                          <div className="absolute inset-0 w-24 h-24 border-2 border-red-500/30 rounded-full animate-ping"></div>
                          <div className="relative w-24 h-24 bg-gradient-to-br from-red-500/20 to-red-600/10 rounded-full flex items-center justify-center">
                            <Icon name="ShieldAlert" size={42} className="text-red-400 animate-pulse" />
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <h3 className="text-3xl font-orbitron font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-red-300 to-red-400 tracking-wider glitch" data-text="ДОСТУП ОГРАНИЧЕН">
                          ДОСТУП ОГРАНИЧЕН
                        </h3>
                        <div className="bg-gray-800/80 border border-red-500/30 rounded-lg px-6 py-3">
                          <p className="text-red-400/80 text-sm font-mono tracking-wide">
                            УРОВЕНЬ СЕКРЕТНОСТИ: <span className="text-red-300 font-bold">МАКСИМАЛЬНЫЙ</span>
                          </p>
                        </div>
                      </div>
                      
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
                              className="bg-gradient-to-r from-orange-400 to-cyan-400 text-black hover:from-cyan-400 hover:to-orange-400 font-orbitron font-bold px-8"
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
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-20">
                <div>
                  <h3 className="text-3xl md:text-4xl font-orbitron font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-cyan-400 to-green-400 mb-12 glitch" data-text="О ОТРЯДЕ ПРИЗРАК">
                    О ОТРЯДЕ ПРИЗРАК
                  </h3>
                  <div className="max-w-4xl mx-auto space-y-6 text-lg leading-relaxed">
                    <div className="bg-green-900/20 border border-green-400/30 rounded-lg p-6 mb-8">
                      <p className="text-green-400 text-sm font-mono mb-2">✓ ДОСТУП РАЗРЕШЕН</p>
                      <p className="text-green-300 text-xs">Добро пожаловать, агент. Данные рассекречены.</p>
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
                    <p className="text-red-400 text-sm bg-red-900/20 border border-red-400/30 rounded p-4">
                      ⚠️ ВНИМАНИЕ: Отряд имеет прямую связь с канцлером Палпатином и действует вне стандартной 
                      командной структуры. Уровень автономности - МАКСИМАЛЬНЫЙ.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                    <Card className="bg-gray-900 border-green-400">
                      <CardHeader className="text-center">
                        <Icon name="Target" size={48} className="mx-auto text-green-400 mb-2" />
                        <CardTitle className="text-green-200 font-orbitron glitch" data-text="Элиминация">Элиминация</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-green-300">Точечное устранение целей любой сложности</p>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-gray-900 border-green-400">
                      <CardHeader className="text-center">
                        <Icon name="Eye" size={48} className="mx-auto text-green-400 mb-2" />
                        <CardTitle className="text-green-200 font-orbitron glitch" data-text="Инфильтрация">Инфильтрация</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-green-300">Проникновение в любые структуры противника</p>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-gray-900 border-green-400">
                      <CardHeader className="text-center">
                        <Icon name="Skull" size={48} className="mx-auto text-green-400 mb-2" />
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

        {/* Clone Roster */}
        <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-orange-400 text-center mb-16">
            СПИСОК КЛОНОВ
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clones.map((clone, index) => (
              <Card key={clone.id} className="bg-gray-900 border-orange-400" 
                    style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader>
                  <div className="relative">
                    <img 
                      src={clone.image} 
                      alt={clone.name}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                    <Badge className="absolute top-4 right-2 bg-orange-400 text-black">
                      {clone.rank}
                    </Badge>
                  </div>
                  <CardTitle className="text-orange-200 font-orbitron text-xl">
                    {clone.name}
                  </CardTitle>
                  <CardDescription className="text-orange-400 font-mono">
                    {clone.id}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-orange-300 text-sm">
                    {clone.description}
                  </p>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-orange-400">Специализация:</span>
                      <span className="text-orange-400">{clone.specialization}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-orange-400">Подтвержденные цели:</span>
                      <span className="text-orange-400">{clone.kills}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-orange-400">Миссии:</span>
                      <span className="text-orange-400">{clone.missions}</span>
                    </div>
                  </div>
                  
                  <Link to={`/clone/${clone.id}`}>
                    <Button className="w-full bg-orange-400 text-black hover:bg-orange-400/80 font-orbitron">
                      ДОСЬЕ
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
            
            {Array.from({length: 3}, (_, i) => (
              <Card key={`empty-${i}`} className="bg-gray-900/30 border-orange-400/30 border-dashed">
                <CardContent className="h-full flex items-center justify-center min-h-[400px]">
                  <div className="text-center space-y-4">
                    <Icon name="UserPlus" size={48} className="mx-auto text-orange-400/50" />
                    <p className="text-orange-400/50 font-orbitron">СЛОТ СВОБОДЕН</p>
                    <p className="text-orange-300/50 text-sm">Ожидание нового бойца</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="relative bg-gradient-to-t from-gray-950 via-gray-900 to-black py-16 px-4 md:px-8 text-center overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-400/5 via-transparent to-cyan-400/5"></div>
          </div>
          
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="mb-12">
              <div className="relative inline-block mb-6">
                <div className="absolute inset-0 bg-orange-400/20 rounded-full blur-xl animate-pulse"></div>
                <img 
                  src="https://cdn.poehali.dev/files/b41cc154-960e-487e-bc47-03469d7602e4.png" 
                  alt="Эмблема Галактической Республики" 
                  className="relative w-16 h-16 mx-auto brightness-0 invert drop-shadow-2xl"
                />
              </div>
              
              <h3 className="text-3xl md:text-4xl font-orbitron font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-cyan-400 to-orange-400 mb-6 tracking-wider glitch" data-text="ДЛЯ РЕСПУБЛИКИ. ДЛЯ ДЕМОКРАТИИ.">
                ДЛЯ РЕСПУБЛИКИ. ДЛЯ ДЕМОКРАТИИ.
              </h3>
              
              <div className="inline-flex items-center gap-3 bg-gray-900/50 backdrop-blur-sm border border-orange-400/30 rounded-full px-6 py-3 mb-8">
                <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
                <span className="text-orange-300 font-orbitron font-semibold tracking-wide">Отряд "Призрак" - ЭРК В.А.Р.</span>
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              </div>
            </div>
            
            <div className="flex items-center justify-center mb-8">
              <div className="h-px bg-gradient-to-r from-transparent via-orange-400/50 to-transparent flex-1 max-w-xs"></div>
              <div className="mx-4 w-3 h-3 border-2 border-orange-400/50 rotate-45 animate-pulse"></div>
              <div className="h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent flex-1 max-w-xs"></div>
            </div>
            
            <div className="space-y-3">
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-sm">
                <div className="flex items-center gap-2 text-orange-400/80">
                  <div className="w-1 h-1 bg-orange-400 rounded-full"></div>
                  <span className="font-mono">© 22 ДБЯ - 19 ДБЯ</span>
                </div>
                <div className="hidden md:block w-1 h-1 bg-orange-400/50 rounded-full animate-pulse"></div>
                <div className="flex items-center gap-2 text-cyan-400/80">
                  <div className="w-1 h-1 bg-cyan-400 rounded-full"></div>
                  <span className="font-mono">Войны клонов</span>
                </div>
                <div className="hidden md:block w-1 h-1 bg-cyan-400/50 rounded-full animate-pulse"></div>
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
          
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-32 bg-orange-400/5 rounded-full blur-3xl"></div>
        </footer>
      </div>
    </>
  );
};

export default Index;