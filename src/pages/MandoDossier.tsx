import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const MandoDossier = () => {
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
              className="w-64 h-80 object-cover rounded-lg border-2 border-green-400"
            />
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-4">
                <h1 className="text-4xl md:text-5xl font-orbitron font-bold text-green-400">
                  Schnee Mhokar
                </h1>
                <Badge className="bg-green-400 text-black text-lg px-4 py-2">
                  Мандалорец
                </Badge>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg">
                <div>
                  <span className="text-green-400 font-semibold">Клан: </span>
                  Mhokar
                </div>
                <div>
                  <span className="text-green-400 font-semibold">Статус: </span>
                  Активен
                </div>
                <div>
                  <span className="text-green-400 font-semibold">Планета: </span>
                  Мандалор
                </div>
                <div>
                  <span className="text-green-400 font-semibold">Связь: </span>
                  Семейная
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
                  <p className="text-green-200 leading-relaxed">
                    Schnee Mhokar — мандалорский воин из древнего клана Mhokar, известного своими традициями 
                    и мастерством в бою. Связан семейными узами с членами отряда «Призрак», что создаёт 
                    уникальную связь между мандалорской культурой и армией клонов Республики.
                  </p>
                </div>
                <div>
                  <h4 className="text-green-400 font-semibold mb-2">Роль:</h4>
                  <p className="text-green-200">
                    Выступает в качестве связующего звена между мандалорскими традициями и современными 
                    военными операциями. Обеспечивает поддержку и советы отряду «Призрак».
                  </p>
                </div>
                <div>
                  <h4 className="text-green-400 font-semibold mb-2">Кодекс:</h4>
                  <p className="text-green-200">
                    Следует древнему мандалорскому кодексу: честь, семья, сила. Верен традициям своего 
                    народа, но адаптируется к требованиям современной войны.
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
              <CardContent className="space-y-4">
                <div>
                  <h4 className="text-green-400 font-semibold mb-2">Традиции:</h4>
                  <p className="text-green-200">
                    Клан Mhokar известен своими древними традициями кузнечного дела и создания 
                    уникального оружия из бескара. Передают знания из поколения в поколение.
                  </p>
                </div>
                <div>
                  <h4 className="text-green-400 font-semibold mb-2">Девиз:</h4>
                  <p className="text-green-200 italic font-orbitron">
                    "Beskar'gam, beskar'ad" - Броня бескара, дети бескара
                  </p>
                </div>
                <div>
                  <h4 className="text-green-400 font-semibold mb-2">Статус:</h4>
                  <p className="text-green-200">
                    Один из старейших кланов Мандалора, сохранивший независимость 
                    во времена Войн Клонов.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Connection to Ghost Squad */}
            <Card className="bg-gray-900 border-green-400">
              <CardHeader>
                <CardTitle className="text-green-400 text-2xl flex items-center">
                  <Icon name="Users" size={24} className="mr-3" />
                  Связь с «Призраком»
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="text-green-400 font-semibold mb-2">Семейные узы:</h4>
                  <p className="text-green-200">
                    Schnee Mhokar связан кровными узами с одним из членов ЭРК «Призрак», 
                    что объясняет особую связь между мандалорцем и отрядом клонов.
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
      <footer className="bg-black py-12 px-4 md:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="w-12 h-12 mx-auto mb-4 bg-green-400 rounded-full flex items-center justify-center">
            <Icon name="Shield" size={24} className="text-black" />
          </div>
          <h3 className="text-2xl font-orbitron font-bold text-green-200 mb-4">
            ИБА БАЛ МАНДАЛОР
          </h3>
          <p className="text-green-300">
            Клан Mhokar - Мандалорские традиции
          </p>
          <div className="mt-8 pt-8 border-t border-green-400/30">
            <p className="text-green-400 text-sm">
              © Древние традиции Мандалора | Gmod RP Server Void<br />
              Клан: Mhokar
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MandoDossier;