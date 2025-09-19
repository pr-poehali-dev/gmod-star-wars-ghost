import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface Stats {
  accuracy: number;
  stealth: number;
  endurance: number;
  tactics: number;
  leadership: number;
}

interface Clone {
  kills: number;
  missions: number;
  stats: Stats;
}

interface CloneStatsProps {
  clone: Clone;
}

const CloneStats = ({ clone }: CloneStatsProps) => {
  return (
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
        </div>
      </div>
    </section>
  );
};

export default CloneStats;