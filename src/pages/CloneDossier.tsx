import { useParams, Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const CloneDossier = () => {
  const { id } = useParams();

  const clones = [
    {
      id: "CT-01-1044",
      name: "Позывной: Jeing",
      rank: "Лидер",
      description: "Jeing (позывной G-01) – командир «Призрака». Один из первых клонов, прошедших мандалорскую подготовку. Его голос спокоен, лишён эмоций, но за этим спокойствием скрывается точный расчёт.",
      image: "https://cdn.poehali.dev/files/f5f129a7-2aee-4280-88f2-37724a7b0a77.jpg",
      specialization: "Командование",
      kills: 88,
      missions: 89,
      callSign: "G-01",
      birthPlace: "Камино",
      trainedBy: "Инструкторы ЭРК, Мандалорские воины",
      equipment: ["Вестерн", "ДП-24", "DC-17", "Вибромеч", "Термодетонаторы"],
      personality: "Холодный, рассудительный, тактик. Умеет видеть поле боя словно шахматную доску, предугадывая действия врага на шаг вперёд. Не склонен к лишней жестокости, но для выполнения миссии готов жертвовать чем угодно – даже своими братьями, если того требует тактика. Предпочитает ближний бой с вибромечом, комбинируя удары с использованием термодетонаторов.",
      achievements: ["Операция 'Тень Кореллии'", "Битва за Анаксис", "Зачистка базы на Рилоте"],
      stats: { accuracy: 85, stealth: 100, endurance: 87, tactics: 94, leadership: 91 }
    },
    {
      id: "CT-07-2114",
      name: "Позывной: Nuar",
      rank: "Зам. лидера",
      description: "Nuar (позывной G-02) – правая рука Jeing'а. Его прозвище среди братьев – «Хищник». Он действует более прямолинейно, чем командир, и не боится запугать врага жестокостью. При этом его строгость внутри отряда направлена на поддержание дисциплины: он может наказать за ошибку, но никогда не будет издеваться или унижать.",
      image: "https://cdn.poehali.dev/files/f5f129a7-2aee-4280-88f2-37724a7b0a77.jpg",
      specialization: "Пилот",
      kills: 72,
      missions: 76,
      callSign: "G-02",
      birthPlace: "Камино",
      trainedBy: "Пилоты-асы Республики, Мандалорские инструкторы",
      equipment: ["Вестарн M5X", "DC-17 двойные", "Jetpack", "Пилотское снаряжение"],
      personality: "Жестокий, но справедливый, любит пилотирование. Nuar – талантливый пилот; ему доверяют управление кораблями и штурмовыми машинами, и именно он вытаскивал «Призраков» из многих безвыходных ситуаций. Отлично владеет тяжелым вооружением и любит сочетать штурм с пилотированием: сначала пробивает оборону врага, затем садится за штурвал, чтобы увезти отряд.",
      achievements: ["127 подтвержденных убийств снайпера", "Эвакуация с Джеонозиса", "Воздушный бой над Корусантом"],
      stats: { accuracy: 96, stealth: 89, endurance: 78, tactics: 82, leadership: 74 }
    },
    {
      id: "CT-04-5536",
      name: "Позывной: Rampa",
      rank: "Боец",
      description: "Rampa (позывной G-07) – «молот» отряда. Если Jeing думает как тактик, а Nuar давит своей жестокостью, то Rampa – это физическая мощь. Его главное качество – невероятная выносливость. Он способен идти вперёд под плотным огнём, закрывая собой братьев.",
      image: "https://cdn.poehali.dev/files/f5f129a7-2aee-4280-88f2-37724a7b0a77.jpg",
      specialization: "Отсутствует",
      kills: 83,
      missions: 92,
      callSign: "G-07",
      birthPlace: "Камино",
      trainedBy: "Мандалорские бойцы, Штурмовые инструкторы",
      equipment: ["Vibro-топор", "Щит из бескара", "DC-15A", "DC-15S"],
      personality: "Молчаливый, выносливый, прямолинейный, шутник. Не любит лишних разговоров, обычно ограничивается короткими фразами или жестами. Несмотря на внешнюю суровость, в бою он часто берёт на себя самые тяжёлые задачи, показывая братскую преданность.",
      achievements: ["Операция «Последний рубеж»", "Операция «Vorna-12»", "Операция: «Устранение»"],
      stats: { accuracy: 88, stealth: 63, endurance: 75, tactics: 80, leadership: 67 }
    }
  ];

  const clone = clones.find(c => c.id === id);

  if (!clone) {
    return (
      <div className="min-h-screen bg-black text-orange-200 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-orbitron font-bold text-orange-400 mb-4">Клон не найден</h1>
          <Link to="/">
            <Button className="bg-orange-400 hover:bg-orange-500 text-black">
              Вернуться к списку
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-orange-200">
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-900 to-black py-8 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <Link to="/" className="inline-flex items-center text-orange-400 hover:text-orange-300 mb-6">
            <Icon name="ArrowLeft" size={20} className="mr-2" />
            Вернуться к отряду
          </Link>
          <div className="flex flex-col md:flex-row items-start gap-8">
            <img 
              src={clone.image} 
              alt={clone.name}
              className="w-64 h-64 object-cover rounded-lg border-2 border-orange-400"
            />
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-4">
                <h1 className="text-4xl md:text-5xl font-orbitron font-bold text-orange-400">
                  {clone.name}
                </h1>
                <Badge className="bg-orange-400 text-black text-lg px-4 py-2">
                  {clone.rank}
                </Badge>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg">
                <div>
                  <span className="text-orange-400 font-semibold">ID: </span>
                  {clone.id}
                </div>
                <div>
                  <span className="text-orange-400 font-semibold">Позывной: </span>
                  {clone.callSign}
                </div>
                <div>
                  <span className="text-orange-400 font-semibold">Специализация: </span>
                  {clone.specialization}
                </div>
                <div>
                  <span className="text-orange-400 font-semibold">Место рождения: </span>
                  {clone.birthPlace}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <section className="py-12 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="bg-gray-900 border-orange-400">
              <CardHeader className="text-center">
                <CardTitle className="text-orange-400 text-2xl">Убийства</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-4xl font-bold text-orange-200">{clone.kills}</div>
              </CardContent>
            </Card>
            <Card className="bg-gray-900 border-orange-400">
              <CardHeader className="text-center">
                <CardTitle className="text-orange-400 text-2xl">Миссии</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-4xl font-bold text-orange-200">{clone.missions}</div>
              </CardContent>
            </Card>
            <Card className="bg-gray-900 border-orange-400">
              <CardHeader className="text-center">
                <CardTitle className="text-orange-400 text-2xl">Эффективность</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-4xl font-bold text-orange-200">
                  {Math.round((clone.kills / clone.missions) * 100)}%
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Characteristics Chart */}
            <Card className="bg-gray-900 border-orange-400">
              <CardHeader>
                <CardTitle className="text-orange-400 text-2xl flex items-center">
                  <Icon name="BarChart3" size={24} className="mr-3" />
                  Характеристики
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Radar Chart Style */}
                <div className="relative flex items-center justify-center">
                  <div className="relative w-64 h-64">
                    {/* Background Grid */}
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200">
                      {/* Gradient Definitions */}
                      <defs>
                        <radialGradient id="radarGradient" cx="50%" cy="50%" r="50%">
                          <stop offset="0%" stopColor="#fb923c" stopOpacity="0.3"/>
                          <stop offset="50%" stopColor="#f59e0b" stopOpacity="0.2"/>
                          <stop offset="100%" stopColor="#d97706" stopOpacity="0.1"/>
                        </radialGradient>
                        <linearGradient id="polygonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#fb923c" stopOpacity="0.4"/>
                          <stop offset="25%" stopColor="#60a5fa" stopOpacity="0.3"/>
                          <stop offset="50%" stopColor="#4ade80" stopOpacity="0.3"/>
                          <stop offset="75%" stopColor="#a855f7" stopOpacity="0.3"/>
                          <stop offset="100%" stopColor="#facc15" stopOpacity="0.4"/>
                        </linearGradient>
                        <filter id="glow">
                          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                          <feMerge> 
                            <feMergeNode in="coloredBlur"/>
                            <feMergeNode in="SourceGraphic"/>
                          </feMerge>
                        </filter>
                      </defs>
                      
                      {/* Grid circles with gradient */}
                      <circle cx="100" cy="100" r="80" fill="url(#radarGradient)" stroke="#fb923c" strokeWidth="1" opacity="0.4"/>
                      <circle cx="100" cy="100" r="60" fill="none" stroke="#f59e0b" strokeWidth="1" opacity="0.3"/>
                      <circle cx="100" cy="100" r="40" fill="none" stroke="#d97706" strokeWidth="1" opacity="0.3"/>
                      <circle cx="100" cy="100" r="20" fill="none" stroke="#92400e" strokeWidth="1" opacity="0.3"/>
                      
                      {/* Grid lines with glow */}
                      <line x1="100" y1="20" x2="100" y2="180" stroke="#fb923c" strokeWidth="1" opacity="0.4" filter="url(#glow)"/>
                      <line x1="20" y1="100" x2="180" y2="100" stroke="#fb923c" strokeWidth="1" opacity="0.4" filter="url(#glow)"/>
                      <line x1="156.56" y1="43.44" x2="43.44" y2="156.56" stroke="#fb923c" strokeWidth="1" opacity="0.3"/>
                      <line x1="156.56" y1="156.56" x2="43.44" y2="43.44" stroke="#fb923c" strokeWidth="1" opacity="0.3"/>
                      
                      {/* Stats polygon */}
                      <polygon
                        points={`
                          100,${100 - (clone.stats.accuracy / 100) * 80}
                          ${100 + (clone.stats.stealth / 100) * 80 * Math.cos(-Math.PI / 2 + Math.PI * 2 / 5)},${100 + (clone.stats.stealth / 100) * 80 * Math.sin(-Math.PI / 2 + Math.PI * 2 / 5)}
                          ${100 + (clone.stats.endurance / 100) * 80 * Math.cos(-Math.PI / 2 + Math.PI * 4 / 5)},${100 + (clone.stats.endurance / 100) * 80 * Math.sin(-Math.PI / 2 + Math.PI * 4 / 5)}
                          ${100 + (clone.stats.tactics / 100) * 80 * Math.cos(-Math.PI / 2 + Math.PI * 6 / 5)},${100 + (clone.stats.tactics / 100) * 80 * Math.sin(-Math.PI / 2 + Math.PI * 6 / 5)}
                          ${100 + (clone.stats.leadership / 100) * 80 * Math.cos(-Math.PI / 2 + Math.PI * 8 / 5)},${100 + (clone.stats.leadership / 100) * 80 * Math.sin(-Math.PI / 2 + Math.PI * 8 / 5)}
                        `}
                        fill="url(#polygonGradient)"
                        stroke="#fb923c"
                        strokeWidth="3"
                        filter="url(#glow)"
                        className="animate-pulse"
                      />
                      
                      {/* Stat points with enhanced glow */}
                      <circle cx="100" cy={100 - (clone.stats.accuracy / 100) * 80} r="6" fill="#fb923c" filter="url(#glow)" className="drop-shadow-lg"/>
                      <circle cx={100 + (clone.stats.stealth / 100) * 80 * Math.cos(-Math.PI / 2 + Math.PI * 2 / 5)} cy={100 + (clone.stats.stealth / 100) * 80 * Math.sin(-Math.PI / 2 + Math.PI * 2 / 5)} r="6" fill="#60a5fa" filter="url(#glow)" className="drop-shadow-lg"/>
                      <circle cx={100 + (clone.stats.endurance / 100) * 80 * Math.cos(-Math.PI / 2 + Math.PI * 4 / 5)} cy={100 + (clone.stats.endurance / 100) * 80 * Math.sin(-Math.PI / 2 + Math.PI * 4 / 5)} r="6" fill="#4ade80" filter="url(#glow)" className="drop-shadow-lg"/>
                      <circle cx={100 + (clone.stats.tactics / 100) * 80 * Math.cos(-Math.PI / 2 + Math.PI * 6 / 5)} cy={100 + (clone.stats.tactics / 100) * 80 * Math.sin(-Math.PI / 2 + Math.PI * 6 / 5)} r="6" fill="#a855f7" filter="url(#glow)" className="drop-shadow-lg"/>
                      <circle cx={100 + (clone.stats.leadership / 100) * 80 * Math.cos(-Math.PI / 2 + Math.PI * 8 / 5)} cy={100 + (clone.stats.leadership / 100) * 80 * Math.sin(-Math.PI / 2 + Math.PI * 8 / 5)} r="6" fill="#facc15" filter="url(#glow)" className="drop-shadow-lg"/>
                      
                      {/* Inner highlight circles */}
                      <circle cx="100" cy={100 - (clone.stats.accuracy / 100) * 80} r="3" fill="#fbbf24" opacity="0.8"/>
                      <circle cx={100 + (clone.stats.stealth / 100) * 80 * Math.cos(-Math.PI / 2 + Math.PI * 2 / 5)} cy={100 + (clone.stats.stealth / 100) * 80 * Math.sin(-Math.PI / 2 + Math.PI * 2 / 5)} r="3" fill="#93c5fd" opacity="0.8"/>
                      <circle cx={100 + (clone.stats.endurance / 100) * 80 * Math.cos(-Math.PI / 2 + Math.PI * 4 / 5)} cy={100 + (clone.stats.endurance / 100) * 80 * Math.sin(-Math.PI / 2 + Math.PI * 4 / 5)} r="3" fill="#86efac" opacity="0.8"/>
                      <circle cx={100 + (clone.stats.tactics / 100) * 80 * Math.cos(-Math.PI / 2 + Math.PI * 6 / 5)} cy={100 + (clone.stats.tactics / 100) * 80 * Math.sin(-Math.PI / 2 + Math.PI * 6 / 5)} r="3" fill="#c4b5fd" opacity="0.8"/>
                      <circle cx={100 + (clone.stats.leadership / 100) * 80 * Math.cos(-Math.PI / 2 + Math.PI * 8 / 5)} cy={100 + (clone.stats.leadership / 100) * 80 * Math.sin(-Math.PI / 2 + Math.PI * 8 / 5)} r="3" fill="#fde047" opacity="0.8"/>
                    </svg>
                    
                    {/* Stat Labels */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4">
                      <div className="text-center">
                        <div className="text-orange-400 text-xs font-bold">{clone.stats.accuracy}</div>
                        <div className="text-orange-300 text-xs">МЕТКОСТЬ</div>
                      </div>
                    </div>
                    <div className="absolute top-16 right-4">
                      <div className="text-center">
                        <div className="text-blue-400 text-xs font-bold">{clone.stats.stealth}</div>
                        <div className="text-blue-300 text-xs">СКРЫТНОСТЬ</div>
                      </div>
                    </div>
                    <div className="absolute bottom-16 right-4">
                      <div className="text-center">
                        <div className="text-green-400 text-xs font-bold">{clone.stats.endurance}</div>
                        <div className="text-green-300 text-xs">ВЫНОСЛИВОСТЬ</div>
                      </div>
                    </div>
                    <div className="absolute bottom-16 left-4">
                      <div className="text-center">
                        <div className="text-purple-400 text-xs font-bold">{clone.stats.tactics}</div>
                        <div className="text-purple-300 text-xs">ТАКТИКА</div>
                      </div>
                    </div>
                    <div className="absolute top-16 left-4">
                      <div className="text-center">
                        <div className="text-yellow-400 text-xs font-bold">{clone.stats.leadership}</div>
                        <div className="text-yellow-300 text-xs">ЛИДЕРСТВО</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Gaming Style Stats List */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-2 bg-gray-800/50 rounded-lg border border-orange-400/20">
                    <div className="w-3 h-3 bg-orange-400 rounded-full shadow-lg shadow-orange-400/50"></div>
                    <span className="text-orange-300 text-sm font-medium flex-1">Меткость</span>
                    <div className="flex space-x-1">
                      {Array.from({length: 10}, (_, i) => (
                        <div key={i} className={`w-2 h-4 ${i < Math.floor(clone.stats.accuracy / 10) ? 'bg-orange-400' : 'bg-gray-600'} rounded-sm`}></div>
                      ))}
                    </div>
                    <span className="text-orange-400 font-bold text-sm w-8">{clone.stats.accuracy}</span>
                  </div>
                  <div className="flex items-center space-x-3 p-2 bg-gray-800/50 rounded-lg border border-blue-400/20">
                    <div className="w-3 h-3 bg-blue-400 rounded-full shadow-lg shadow-blue-400/50"></div>
                    <span className="text-blue-300 text-sm font-medium flex-1">Скрытность</span>
                    <div className="flex space-x-1">
                      {Array.from({length: 10}, (_, i) => (
                        <div key={i} className={`w-2 h-4 ${i < Math.floor(clone.stats.stealth / 10) ? 'bg-blue-400' : 'bg-gray-600'} rounded-sm`}></div>
                      ))}
                    </div>
                    <span className="text-blue-400 font-bold text-sm w-8">{clone.stats.stealth}</span>
                  </div>
                  <div className="flex items-center space-x-3 p-2 bg-gray-800/50 rounded-lg border border-green-400/20">
                    <div className="w-3 h-3 bg-green-400 rounded-full shadow-lg shadow-green-400/50"></div>
                    <span className="text-green-300 text-sm font-medium flex-1">Выносливость</span>
                    <div className="flex space-x-1">
                      {Array.from({length: 10}, (_, i) => (
                        <div key={i} className={`w-2 h-4 ${i < Math.floor(clone.stats.endurance / 10) ? 'bg-green-400' : 'bg-gray-600'} rounded-sm`}></div>
                      ))}
                    </div>
                    <span className="text-green-400 font-bold text-sm w-8">{clone.stats.endurance}</span>
                  </div>
                  <div className="flex items-center space-x-3 p-2 bg-gray-800/50 rounded-lg border border-purple-400/20">
                    <div className="w-3 h-3 bg-purple-400 rounded-full shadow-lg shadow-purple-400/50"></div>
                    <span className="text-purple-300 text-sm font-medium flex-1">Тактика</span>
                    <div className="flex space-x-1">
                      {Array.from({length: 10}, (_, i) => (
                        <div key={i} className={`w-2 h-4 ${i < Math.floor(clone.stats.tactics / 10) ? 'bg-purple-400' : 'bg-gray-600'} rounded-sm`}></div>
                      ))}
                    </div>
                    <span className="text-purple-400 font-bold text-sm w-8">{clone.stats.tactics}</span>
                  </div>
                  <div className="flex items-center space-x-3 p-2 bg-gray-800/50 rounded-lg border border-yellow-400/20">
                    <div className="w-3 h-3 bg-yellow-400 rounded-full shadow-lg shadow-yellow-400/50"></div>
                    <span className="text-yellow-300 text-sm font-medium flex-1">Лидерство</span>
                    <div className="flex space-x-1">
                      {Array.from({length: 10}, (_, i) => (
                        <div key={i} className={`w-2 h-4 ${i < Math.floor(clone.stats.leadership / 10) ? 'bg-yellow-400' : 'bg-gray-600'} rounded-sm`}></div>
                      ))}
                    </div>
                    <span className="text-yellow-400 font-bold text-sm w-8">{clone.stats.leadership}</span>
                  </div>
                </div>

                {/* Overall Rating */}
                <div className="bg-gray-800/50 rounded-lg p-4 space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-orange-300 font-orbitron font-semibold">ОБЩИЙ РЕЙТИНГ</span>
                    <span className="text-orange-400 font-bold text-2xl">
                      {Math.round((clone.stats.accuracy + clone.stats.stealth + clone.stats.endurance + clone.stats.tactics + clone.stats.leadership) / 5)}
                    </span>
                  </div>
                  <div className="w-full bg-gray-700 h-4 rounded">
                    <div 
                      className="bg-gradient-to-r from-orange-400 to-yellow-400 h-4 rounded transition-all duration-1000" 
                      style={{width: `${Math.round((clone.stats.accuracy + clone.stats.stealth + clone.stats.endurance + clone.stats.tactics + clone.stats.leadership) / 5)}%`}}
                    ></div>
                  </div>
                  <p className="text-orange-300/70 text-xs text-center">
                    Боевой рейтинг основан на всех характеристиках
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Bio */}
            <Card className="bg-gray-900 border-orange-400">
              <CardHeader>
                <CardTitle className="text-orange-400 text-2xl flex items-center">
                  <Icon name="User" size={24} className="mr-3" />
                  Биография
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="text-orange-400 font-semibold mb-2">Роль:</h4>
                  <p className="text-orange-200">
                    {clone.id === "CT-01-1044" ? "Лидер отряда" : 
                     clone.id === "CT-07-2114" ? "Заместитель лидера" : 
                     "Боец штурмового типа"}
                  </p>
                </div>
                <div>
                  <h4 className="text-orange-400 font-semibold mb-2">Характер:</h4>
                  <p className="text-orange-200">
                    {clone.id === "CT-01-1044" ? "Холодный, рассудительный, тактик" : 
                     clone.id === "CT-07-2114" ? "Жестокий, но справедливый, любит пилотирование" : 
                     "Молчаливый, выносливый, прямолинейный, шутник"}
                  </p>
                </div>
                <div>
                  <h4 className="text-orange-400 font-semibold mb-2">Описание:</h4>
                  <p className="text-orange-200 leading-relaxed">{clone.description}</p>
                </div>
                <div>
                  <h4 className="text-orange-400 font-semibold mb-2">Особенность:</h4>
                  <p className="text-orange-200">
                    {clone.id === "CT-01-1044" ? "Предпочитает ближний бой с вибромечом, комбинируя удары с использованием термодетонаторов" : 
                     clone.id === "CT-07-2114" ? "Отлично владеет тяжелым вооружением и любит сочетать штурм с пилотированием: сначала пробивает оборону врага, затем садится за штурвал, чтобы увезти отряд" : 
                     "Владеет vibro-топором и щитом из сплава с бескаром, превращаясь в живую стену для врагов"}
                  </p>
                </div>
                <div>
                  <h4 className="text-orange-400 font-semibold mb-2">Обучение:</h4>
                  <p className="text-orange-200">{clone.trainedBy}</p>
                </div>
              </CardContent>
            </Card>

            {/* Equipment */}
            <Card className="bg-gray-900 border-orange-400">
              <CardHeader>
                <CardTitle className="text-orange-400 text-2xl flex items-center">
                  <Icon name="Sword" size={24} className="mr-3" />
                  Снаряжение
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-3">
                  {clone.equipment.map((item, index) => (
                    <div key={index} className="flex items-center p-3 bg-gray-800 rounded-lg">
                      <Icon name="CircleDot" size={16} className="mr-3 text-orange-400" />
                      <span className="text-orange-200">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card className="bg-gray-900 border-orange-400 lg:col-span-2">
              <CardHeader>
                <CardTitle className="text-orange-400 text-2xl flex items-center">
                  <Icon name="Trophy" size={24} className="mr-3" />
                  Достижения
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {clone.achievements.map((achievement, index) => (
                    <div key={index} className="p-4 bg-gray-800 rounded-lg text-center">
                      <Icon name="Medal" size={32} className="mx-auto mb-2 text-orange-400" />
                      <p className="text-orange-200 font-semibold">{achievement}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CloneDossier;