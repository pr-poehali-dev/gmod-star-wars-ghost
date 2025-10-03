import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";
import { SecureAccess } from "@/components/SecureAccess";
import { Curator } from "@/components/Curator";

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
      {/* Curator */}
      <Curator />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Simplified Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
          {/* Minimal Stars */}
          <div className="absolute inset-0">
            {Array.from({length: 20}, (_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-orange-400 rounded-full opacity-60"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animation: `twinkle ${2 + Math.random()}s ease-in-out infinite alternate`
                }}
              />
            ))}
          </div>
          
          {/* Single Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-orange-400/5 via-transparent to-transparent"></div>
        </div>

        {/* Main Content */}
        <div className="text-center z-10 max-w-6xl mx-auto px-4 py-20">
          {/* Logo with Pulse Animation */}
          <div className="mb-12">
            <div className="relative inline-block">
              {/* Pulse rings */}
              <div className="absolute inset-0 w-48 h-48 md:w-64 md:h-64 border-2 border-orange-400/30 rounded-full animate-ping"></div>
              <div className="absolute inset-0 w-48 h-48 md:w-64 md:h-64 border border-orange-400/20 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
              
              {/* Main logo container */}
              <div className="relative w-48 h-48 md:w-64 md:h-64 bg-gray-900/50 rounded-full flex items-center justify-center backdrop-blur-sm border border-orange-400/30 animate-pulse">
                <img 
                  src="https://cdn.poehali.dev/files/b41cc154-960e-487e-bc47-03469d7602e4.png" 
                  alt="Эмблема Галактической Республики" 
                  className="w-32 h-32 md:w-40 md:h-40 brightness-0 invert"
                />
              </div>
            </div>
          </div>
          
          {/* Simplified Title */}
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-orbitron font-black text-orange-400 mb-6 tracking-wider">
              ПРИЗРАК
            </h1>
          </div>
          
          {/* Simplified Subtitle */}
          <div className="mb-12">
            <div className="relative inline-block">
              <div className="bg-gray-900/70 backdrop-blur-sm border border-orange-400/30 rounded-xl px-8 py-6">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-orbitron font-bold text-orange-300 mb-3 tracking-wide">
                  ЭЛИТНЫЙ КЛОН-ОТРЯД РЕСПУБЛИКИ
                </h2>

              </div>
              
              {/* Small badges under the main plate */}
              <div className="flex gap-4 justify-center mt-6">
                <div className="bg-orange-400/20 border border-orange-400/40 rounded-full px-4 py-2">
                  <span className="text-orange-300 font-orbitron font-bold text-sm tracking-wider">ЭРК</span>
                </div>
                <div className="bg-orange-400/20 border border-orange-400/40 rounded-full px-4 py-2">
                  <span className="text-orange-300 font-orbitron font-bold text-sm tracking-wider">БСО</span>
                </div>
              </div>
            </div>
          </div>
          
        </div>
        
        {/* Gradient transition to black */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-gray-950/50 to-transparent z-20"></div>
      </section>

      {/* About Squad Section */}
      <SecureAccess>
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
                    <div className="space-y-3">
                      <h4 className="text-orange-200 font-orbitron font-bold">Schnee Mhokar</h4>
                      <p className="text-green-400 text-sm">Мандалорец</p>
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
      </SecureAccess>

      {/* Footer */}
      <footer className="relative bg-gradient-to-t from-gray-950 via-gray-900 to-black py-16 px-4 md:px-8 text-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-400/5 via-transparent to-orange-600/5"></div>
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