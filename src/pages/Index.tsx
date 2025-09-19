import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Index = () => {
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

      {/* About Squad Section */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-orange-400 mb-6">
            О ОТРЯДЕ ПРИЗРАК
          </h2>
          <div className="max-w-4xl mx-auto space-y-6 text-lg leading-relaxed">
            <p>
              Отряд "Призрак" - элитное подразделение клонов-штурмовиков, специализирующееся на 
              секретных операциях и разведке в тылу врага. Сформированный в начале Войн клонов, 
              отряд быстро заслужил репутацию одного из самых эффективных спецподразделений Республики.
            </p>
            <p>
              Бойцы отряда проходят особую подготовку по скрытным операциям, снайперскому делу и 
              тактической медицине. Их основная задача - проведение операций глубоко в тылу противника, 
              где обычные войска не могут действовать эффективно.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <Card className="bg-gray-900 border-orange-400 hover-scale">
              <CardHeader className="text-center">
                <Icon name="Target" size={48} className="mx-auto text-orange-400 mb-2" />
                <CardTitle className="text-orange-200 font-orbitron">Точность</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-orange-300">Безупречная меткость в любых условиях</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-900 border-orange-400 hover-scale">
              <CardHeader className="text-center">
                <Icon name="Eye" size={48} className="mx-auto text-orange-400 mb-2" />
                <CardTitle className="text-orange-200 font-orbitron">Скрытность</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-orange-300">Невидимы для врага, смертельны в атаке</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-900 border-orange-400 hover-scale">
              <CardHeader className="text-center">
                <Icon name="Users" size={48} className="mx-auto text-orange-400 mb-2" />
                <CardTitle className="text-orange-200 font-orbitron">Единство</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-orange-300">Братство, закаленное в боях</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Squad History */}
      <section className="py-20 px-4 md:px-8 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-orange-400 text-center mb-16">
            ИСТОРИЯ ФОРМИРОВАНИЯ
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="animate-fade-in">
              <p className="text-orange-200 text-lg leading-relaxed mb-6 text-justify">
                После битвы за Анаксис и тяжелых потерь в рядах БСО, совет командования решил создать новое подразделение, способное выполнять задачи, где обычные клоны были бы бессильны. Так появился отряд «Призрак» – группа бойцов, прошедших не только переобучение, но и радикальную психологическую и тактическую подготовку.
              </p>
              <p className="text-orange-200 text-lg leading-relaxed text-justify">
                Для их тренировки привлекли мандалорских инструкторов, которые привили им кодекс чести воинов Манд'алор, навыки ведения ближнего боя и умение действовать малыми группами. Дополнительно клоны проходили подготовку у инструкторов ЭРК (элитного республиканского корпуса), получив опыт ведения диверсионных и зачистных операций.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Squad Features */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-orange-400 text-center mb-16">
          ОСОБЕННОСТИ ОТРЯДА
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-900 border border-orange-400 rounded-lg p-6 hover-scale">
            <h3 className="text-2xl font-orbitron font-bold text-orange-200 mb-4 flex items-center">
              <Icon name="Sword" size={24} className="mr-3 text-orange-400" />
              Оружие
            </h3>
            <p className="text-orange-300 text-lg leading-relaxed">
              Кроме стандартного вооружения клонов, они владеют мандалорскими вибромечами, ножами и короткими копьями.
            </p>
          </div>

          <div className="bg-gray-900 border border-orange-400 rounded-lg p-6 hover-scale">
            <h3 className="text-2xl font-orbitron font-bold text-orange-200 mb-4 flex items-center">
              <Icon name="Shield" size={24} className="mr-3 text-orange-400" />
              Снаряжение
            </h3>
            <p className="text-orange-300 text-lg leading-relaxed">
              Доспехи модифицированы, с усиленными сегментами из бескара (частично), матовыми покрытиями для скрытности. Каждый шлем оснащён усиленным фильтром и режимом подавления шума.
            </p>
          </div>

          <div className="bg-gray-900 border border-orange-400 rounded-lg p-6 hover-scale">
            <h3 className="text-2xl font-orbitron font-bold text-orange-200 mb-4 flex items-center">
              <Icon name="Target" size={24} className="mr-3 text-orange-400" />
              Тактика
            </h3>
            <p className="text-orange-300 text-lg leading-relaxed">
              Быстрые удары, диверсии, засадные операции. Их главная задача – не фронтовые сражения, а скрытые миссии: ликвидации, диверсии, подрывные действия.
            </p>
          </div>

          <div className="bg-gray-900 border border-orange-400 rounded-lg p-6 hover-scale">
            <h3 className="text-2xl font-orbitron font-bold text-orange-200 mb-4 flex items-center">
              <Icon name="Brain" size={24} className="mr-3 text-orange-400" />
              Психология
            </h3>
            <p className="text-orange-300 text-lg leading-relaxed">
              Они обучены сохранять абсолютное хладнокровие, даже в условиях безысходности. В отличие от других клонов, «Призраки» обладают определенной независимостью мышления, что делает их непредсказуемыми и более живыми.
            </p>
          </div>

          <div className="bg-gray-900 border border-orange-400 rounded-lg p-6 hover-scale">
            <h3 className="text-2xl font-orbitron font-bold text-orange-200 mb-4 flex items-center">
              <Icon name="Flag" size={24} className="mr-3 text-orange-400" />
              Символика
            </h3>
            <p className="text-orange-300 text-lg leading-relaxed">
              Эмблема отряда – череп с тенью мандалорского шлема, перечеркнутый двумя vibro-ножами. Позывной каждого бойца начинается с буквы «G» (от слова Ghost), например: G-01, G-09 и т.д.
            </p>
          </div>

          <div className="bg-gray-900 border border-orange-400 rounded-lg p-6 hover-scale">
            <h3 className="text-2xl font-orbitron font-bold text-orange-200 mb-4 flex items-center">
              <Icon name="Trophy" size={24} className="mr-3 text-orange-400" />
              Репутация
            </h3>
            <p className="text-orange-300 text-lg leading-relaxed">
              Отряд «Призрак» стал известен благодаря своей первой миссии на Кореллии, где они за ночь уничтожили целый склад сепаратистов, вырезав гарнизон без единого выстрела. С тех пор о них говорят шёпотом даже среди клонов – как о «живых тенях».
            </p>
          </div>
        </div>
      </section>

      {/* Relationships Section */}
      <section className="py-20 px-4 md:px-8 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-orange-400 text-center mb-16">
            ВЗАИМООТНОШЕНИЯ
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap justify-center gap-2">
              <div className="bg-green-900/30 border border-green-400 rounded-lg p-4 ">
                <span className="text-green-400 font-semibold text-sm">СЕМЬЯ</span>
              </div>
              <div className="bg-pink-900/30 border border-pink-400 rounded-lg p-4 ">
                <span className="text-pink-400 font-semibold text-sm">ЛЮБОВЬ</span>
              </div>
              <div className="bg-blue-900/30 border border-blue-400 rounded-lg p-4 ">
                <span className="text-blue-400 font-semibold text-sm">ПРЕДАННОСТЬ</span>
              </div>
              <div className="bg-purple-900/30 border border-purple-400 rounded-lg p-4 ">
                <span className="text-purple-400 font-semibold text-sm">ВОСХИЩЕНИЕ</span>
              </div>
              <div className="bg-cyan-900/30 border border-cyan-400 rounded-lg p-4 ">
                <span className="text-cyan-400 font-semibold text-sm">ЛУЧШИЕ ДРУЗЬЯ</span>
              </div>
              <div className="bg-teal-900/30 border border-teal-400 rounded-lg p-4 ">
                <span className="text-teal-400 font-semibold text-sm">ДРУЖБА</span>
              </div>
              <div className="bg-emerald-900/30 border border-emerald-400 rounded-lg p-4 ">
                <span className="text-emerald-400 font-semibold text-sm">БЛАГОДАРНОСТЬ</span>
              </div>
              <div className="bg-lime-900/30 border border-lime-400 rounded-lg p-4 ">
                <span className="text-lime-400 font-semibold text-sm">УВАЖЕНИЕ</span>
              </div>
              <div className="bg-yellow-900/30 border border-yellow-400 rounded-lg p-4 ">
                <span className="text-yellow-400 font-semibold text-sm">СИМПАТИЯ</span>
              </div>
              <div className="bg-amber-900/30 border border-amber-400 rounded-lg p-4 ">
                <span className="text-amber-400 font-semibold text-sm">ЕДИНОМЫШЛЕННИК</span>
              </div>
              <div className="bg-orange-900/30 border border-orange-400 rounded-lg p-4 ">
                <span className="text-orange-400 font-semibold text-sm">ИНТЕРЕС</span>
              </div>
              <div className="bg-gray-700/30 border border-gray-400 rounded-lg p-4 ">
                <span className="text-gray-400 font-semibold text-sm">НЕОПРЕДЕЛЕННОСТЬ</span>
              </div>
              <div className="bg-slate-700/30 border border-slate-400 rounded-lg p-4 ">
                <span className="text-slate-400 font-semibold text-sm">РАВНОДУШИЕ</span>
              </div>
              <div className="bg-stone-700/30 border border-stone-400 rounded-lg p-4 ">
                <span className="text-stone-400 font-semibold text-sm">НЕДОВЕРИЕ</span>
              </div>
              <div className="bg-zinc-700/30 border border-zinc-400 rounded-lg p-4 ">
                <span className="text-zinc-400 font-semibold text-sm">РАЗОЧАРОВАНИЕ</span>
              </div>
              <div className="bg-neutral-700/30 border border-neutral-400 rounded-lg p-4 ">
                <span className="text-neutral-400 font-semibold text-sm">БОЯЗНЬ</span>
              </div>
              <div className="bg-red-900/30 border border-red-400 rounded-lg p-4 ">
                <span className="text-red-400 font-semibold text-sm">ПРЕЗРЕНИЕ</span>
              </div>
              <div className="bg-rose-900/30 border border-rose-400 rounded-lg p-4 ">
                <span className="text-rose-400 font-semibold text-sm">ЗАВИСТЬ</span>
              </div>
              <div className="bg-red-800/30 border border-red-500 rounded-lg p-4 ">
                <span className="text-red-500 font-semibold text-sm">ОБИДА</span>
              </div>
              <div className="bg-red-700/30 border border-red-600 rounded-lg p-4 ">
                <span className="text-red-600 font-semibold text-sm">НЕПРИЯЗНЬ</span>
              </div>
              <div className="bg-red-600/30 border border-red-700 rounded-lg p-4 ">
                <span className="text-red-700 font-semibold text-sm">НЕНАВИСТЬ</span>
              </div>
              <div className="bg-black border border-red-800 rounded-lg p-4 ">
                <span className="text-red-800 font-semibold text-sm">ПОГИБ</span>
              </div>
            </div>
            <div className="mt-8 text-center">
              <p className="text-orange-300 text-lg">
                Каждый клон отряда «Призрак» формирует уникальные связи с товарищами по оружию, 
                создавая сложную сеть взаимоотношений от братской преданности до боевого соперничества.
              </p>
            </div>
            
            {/* Character Cards */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Mandalorian Card */}
              <Card className="bg-gray-900 border-green-400 hover-scale">
                <CardContent className="p-4">
                  <div className="text-center space-y-4">
                    <img 
                      src="https://cdn.poehali.dev/files/b54488bd-b7d7-4ac6-a413-2a816e9dc8ef.PNG" 
                      alt="Мандалорец" 
                      className="w-32 h-48 mx-auto object-cover rounded-lg border-2 border-green-400"
                    />
                    <div className="bg-green-900/30 border border-green-400 rounded-lg p-3">
                      <span className="text-green-400 font-semibold text-sm">СЕМЬЯ</span>
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-orange-200 font-orbitron font-bold">???</h4>
                      <p className="text-green-400 text-sm">Мандалорец</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-gray-900/30 border-orange-400/30 border-dashed hover-scale">
                <CardContent className="h-full flex items-center justify-center min-h-[200px]">
                  <div className="text-center space-y-4">
                    <Icon name="Users" size={32} className="mx-auto text-orange-400/50" />
                    <p className="text-orange-400/50 font-orbitron text-sm">СЛОТ ОТНОШЕНИЙ</p>
                    <p className="text-orange-300/50 text-sm">Ожидание связи</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-gray-900/30 border-orange-400/30 border-dashed hover-scale">
                <CardContent className="h-full flex items-center justify-center min-h-[200px]">
                  <div className="text-center space-y-4">
                    <Icon name="Users" size={32} className="mx-auto text-orange-400/50" />
                    <p className="text-orange-400/50 font-orbitron text-sm">СЛОТ ОТНОШЕНИЙ</p>
                    <p className="text-orange-300/50 text-sm">Ожидание связи</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-gray-900/30 border-orange-400/30 border-dashed hover-scale">
                <CardContent className="h-full flex items-center justify-center min-h-[200px]">
                  <div className="text-center space-y-4">
                    <Icon name="Users" size={32} className="mx-auto text-orange-400/50" />
                    <p className="text-orange-400/50 font-orbitron text-sm">СЛОТ ОТНОШЕНИЙ</p>
                    <p className="text-orange-300/50 text-sm">Ожидание связи</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Clone Roster */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-orange-400 text-center mb-16">
          СПИСОК КЛОНОВ
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clones.map((clone, index) => (
            <Card key={clone.id} className={`bg-gray-900 border-orange-400 hover-scale animate-scale-in`} 
                  style={{animationDelay: `${index * 0.1}s`}}>
              <CardHeader>
                <div className="relative">
                  <img 
                    src={clone.image} 
                    alt={clone.name}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <Badge className="absolute top-4  right-2 bg-orange-400 text-black">
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
          
          {/* Empty Cards */}
          <Card className="bg-gray-900/30 border-orange-400/30 border-dashed hover-scale">
            <CardContent className="h-full flex items-center justify-center min-h-[400px]">
              <div className="text-center space-y-4">
                <Icon name="UserPlus" size={48} className="mx-auto text-orange-400/50" />
                <p className="text-orange-400/50 font-orbitron">СЛОТ СВОБОДЕН</p>
                <p className="text-orange-300/50 text-sm">Ожидание нового бойца</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gray-900/30 border-orange-400/30 border-dashed hover-scale">
            <CardContent className="h-full flex items-center justify-center min-h-[400px]">
              <div className="text-center space-y-4">
                <Icon name="UserPlus" size={48} className="mx-auto text-orange-400/50" />
                <p className="text-orange-400/50 font-orbitron">СЛОТ СВОБОДЕН</p>
                <p className="text-orange-300/50 text-sm">Ожидание нового бойца</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gray-900/30 border-orange-400/30 border-dashed hover-scale">
            <CardContent className="h-full flex items-center justify-center min-h-[400px]">
              <div className="text-center space-y-4">
                <Icon name="UserPlus" size={48} className="mx-auto text-orange-400/50" />
                <p className="text-orange-400/50 font-orbitron">СЛОТ СВОБОДЕН</p>
                <p className="text-orange-300/50 text-sm">Ожидание нового бойца</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Galaxy Map */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-orange-400 text-center mb-16">
            КАРТА ГАЛАКТИКИ
          </h2>
          
          <div className="relative bg-gray-900 rounded-2xl border border-orange-400/30 p-8 overflow-hidden">
            {/* Background Stars */}
            <div className="absolute inset-0 opacity-30">
              <div className="absolute top-10 left-20 w-1 h-1 bg-white rounded-full animate-pulse"></div>
              <div className="absolute top-32 left-40 w-1 h-1 bg-blue-300 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
              <div className="absolute top-16 right-32 w-1 h-1 bg-yellow-300 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
              <div className="absolute bottom-20 left-16 w-1 h-1 bg-red-300 rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
              <div className="absolute bottom-40 right-20 w-1 h-1 bg-purple-300 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
              <div className="absolute top-40 left-60 w-1 h-1 bg-green-300 rounded-full animate-pulse" style={{animationDelay: '2.5s'}}></div>
            </div>
            
            {/* Galaxy Map - Planet System */}
            <div className="relative min-h-[600px] overflow-hidden">
              
              {/* Central Core Region */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                {/* Core Worlds Orbit */}
                <div className="w-48 h-48 border border-orange-400/20 rounded-full animate-spin" style={{animationDuration: '60s'}}></div>
                
                {/* Coruscant - Center */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer">
                  <div className="relative">
                    <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-yellow-300 rounded-full shadow-lg shadow-orange-400/50 animate-pulse"></div>
                    <div className="absolute inset-0 w-8 h-8 border-2 border-orange-400/30 rounded-full animate-ping"></div>
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="bg-black/90 border border-orange-400 rounded px-2 py-1 text-xs text-orange-300 whitespace-nowrap">
                        Корусант - Столица
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Alderaan */}
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 group cursor-pointer">
                  <div className="relative">
                    <div className="w-5 h-5 bg-gradient-to-br from-blue-400 to-blue-200 rounded-full shadow-lg shadow-blue-400/50"></div>
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="bg-black/90 border border-blue-400 rounded px-2 py-1 text-xs text-blue-300 whitespace-nowrap">
                        Альдераан - Мирный мир
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Corellia */}
                <div className="absolute top-1/2 -right-6 transform -translate-y-1/2 group cursor-pointer">
                  <div className="relative">
                    <div className="w-5 h-5 bg-gradient-to-br from-green-400 to-emerald-300 rounded-full shadow-lg shadow-green-400/50"></div>
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="bg-black/90 border border-green-400 rounded px-2 py-1 text-xs text-green-300 whitespace-nowrap">
                        Кореллия - Операция "Тень"
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Outer Rim Planets */}
              
              {/* Tatooine */}
              <div className="absolute top-20 left-20 group cursor-pointer">
                <div className="relative">
                  <div className="w-12 h-12 border border-yellow-400/30 rounded-full animate-spin" style={{animationDuration: '40s'}}></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-6 h-6 bg-gradient-to-br from-yellow-400 to-orange-300 rounded-full shadow-lg shadow-yellow-400/50"></div>
                    <div className="absolute inset-0 w-6 h-6 border border-yellow-400/40 rounded-full animate-pulse"></div>
                  </div>
                  <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-black/90 border border-yellow-400 rounded px-2 py-1 text-xs text-yellow-300 whitespace-nowrap">
                      Татуин - Пустынный мир
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Kamino */}
              <div className="absolute top-16 right-16 group cursor-pointer">
                <div className="relative">
                  <div className="w-16 h-16 border border-cyan-400/30 rounded-full animate-spin" style={{animationDuration: '35s'}}></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-7 h-7 bg-gradient-to-br from-cyan-400 to-blue-300 rounded-full shadow-lg shadow-cyan-400/50 animate-pulse"></div>
                    <div className="absolute inset-0 w-7 h-7 border border-cyan-400/40 rounded-full animate-ping"></div>
                  </div>
                  <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-black/90 border border-cyan-400 rounded px-2 py-1 text-xs text-cyan-300 whitespace-nowrap">
                      Камино - Мир клонов
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Geonosis */}
              <div className="absolute bottom-16 left-12 group cursor-pointer">
                <div className="relative">
                  <div className="w-14 h-14 border border-red-400/30 rounded-full animate-spin" style={{animationDuration: '45s'}}></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-6 h-6 bg-gradient-to-br from-red-400 to-orange-400 rounded-full shadow-lg shadow-red-400/50"></div>
                    <div className="absolute inset-0 w-6 h-6 border border-red-400/40 rounded-full animate-pulse"></div>
                  </div>
                  <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-black/90 border border-red-400 rounded px-2 py-1 text-xs text-red-300 whitespace-nowrap">
                      Джеонозис - Первая битва
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Ryloth */}
              <div className="absolute top-32 left-32 group cursor-pointer">
                <div className="relative">
                  <div className="w-10 h-10 border border-purple-400/30 rounded-full animate-spin" style={{animationDuration: '50s'}}></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-5 h-5 bg-gradient-to-br from-purple-400 to-pink-300 rounded-full shadow-lg shadow-purple-400/50"></div>
                  </div>
                  <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-black/90 border border-purple-400 rounded px-2 py-1 text-xs text-purple-300 whitespace-nowrap">
                      Рилот - Зачистка базы
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Naboo */}
              <div className="absolute bottom-20 right-20 group cursor-pointer">
                <div className="relative">
                  <div className="w-12 h-12 border border-emerald-400/30 rounded-full animate-spin" style={{animationDuration: '42s'}}></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-6 h-6 bg-gradient-to-br from-emerald-400 to-green-300 rounded-full shadow-lg shadow-emerald-400/50"></div>
                  </div>
                  <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-black/90 border border-emerald-400 rounded px-2 py-1 text-xs text-emerald-300 whitespace-nowrap">
                      Набу - Королевский мир
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Anaxes */}
              <div className="absolute top-40 right-32 group cursor-pointer">
                <div className="relative">
                  <div className="w-11 h-11 border border-indigo-400/30 rounded-full animate-spin" style={{animationDuration: '38s'}}></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-5 h-5 bg-gradient-to-br from-indigo-400 to-blue-400 rounded-full shadow-lg shadow-indigo-400/50"></div>
                  </div>
                  <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-black/90 border border-indigo-400 rounded px-2 py-1 text-xs text-indigo-300 whitespace-nowrap">
                      Анаксис - Битва за мир
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Additional smaller planets/systems */}
              <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2">
                <div className="w-3 h-3 bg-gray-400 rounded-full opacity-60 animate-pulse"></div>
              </div>
              
              <div className="absolute top-1/2 left-16 transform -translate-y-1/2">
                <div className="w-2 h-2 bg-white rounded-full opacity-50 animate-pulse" style={{animationDelay: '1s'}}></div>
              </div>
              
              <div className="absolute top-1/3 right-1/4">
                <div className="w-2 h-2 bg-blue-300 rounded-full opacity-40 animate-pulse" style={{animationDelay: '2s'}}></div>
              </div>
              
            </div>
            
            {/* Legend */}
            <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                <span className="text-orange-300">Миры Ядра</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
                <span className="text-cyan-300">Родной мир</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <span className="text-red-300">Боевые миры</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                <span className="text-purple-300">Операции</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12 px-4 md:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <img 
            src="https://cdn.poehali.dev/files/b41cc154-960e-487e-bc47-03469d7602e4.png" 
            alt="Эмблема Галактической Республики" 
            className="w-12 h-12 mx-auto mb-4 brightness-0 invert"
          />
          <h3 className="text-2xl font-orbitron font-bold text-orange-200 mb-4">
            ДЛЯ РЕСПУБЛИКИ. ДЛЯ ДЕМОКРАТИИ.
          </h3>
          <p className="text-orange-300">
            Отряд "Призрак" - ЭРК В.А.Р.
          </p>
          <div className="mt-8 pt-8 border-t border-orange-400/30">
            <p className="text-orange-400 text-sm">
              © 22 ДБЯ - 19 ДБЯ | Войны клонов | Gmod RP Server Void<br />
              Автор: Rampa
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;