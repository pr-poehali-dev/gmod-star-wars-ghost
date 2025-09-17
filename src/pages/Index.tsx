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
      missions: 89
    },
    {
      id: "CT-07-2114", 
      name: "Позывной: Nuar",
      rank: "Зам. лидера",
      description: "Элитный снайпер с безупречной точностью. Мастер скрытных операций.",
      image: "https://cdn.poehali.dev/files/f5f129a7-2aee-4280-88f2-37724a7b0a77.jpg",
      specialization: "Пилот",
      kills: 203,
      missions: 76
    },
    {
      id: "CT-04-5536",
      name: "Позывной: Rampa",
      rank: "Боец",
      description: "Боевой медик, спасший жизни десятков товарищей в самых опасных ситуациях.",
      image: "https://cdn.poehali.dev/files/f5f129a7-2aee-4280-88f2-37724a7b0a77.jpg",
      specialization: "Отсутствует",
      kills: 58,
      missions: 92
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
            <div className="grid grid-cols-3 gap-6 text-center justify-items-center">
              <div className="bg-green-900/30 border border-green-400 rounded-lg p-2">
                <span className="text-green-400 font-semibold text-xs">СЕМЬЯ</span>
              </div>
              <div className="bg-pink-900/30 border border-pink-400 rounded-lg p-2">
                <span className="text-pink-400 font-semibold text-xs">ЛЮБОВЬ</span>
              </div>
              <div className="bg-blue-900/30 border border-blue-400 rounded-lg p-2">
                <span className="text-blue-400 font-semibold text-xs">ПРЕДАННОСТЬ</span>
              </div>
              <div className="bg-purple-900/30 border border-purple-400 rounded-lg p-2">
                <span className="text-purple-400 font-semibold text-xs">ВОСХИЩЕНИЕ</span>
              </div>
              <div className="bg-cyan-900/30 border border-cyan-400 rounded-lg p-2">
                <span className="text-cyan-400 font-semibold text-xs">ЛУЧШИЕ ДРУЗЬЯ</span>
              </div>
              <div className="bg-teal-900/30 border border-teal-400 rounded-lg p-2">
                <span className="text-teal-400 font-semibold text-xs">ДРУЖБА</span>
              </div>
              <div className="bg-emerald-900/30 border border-emerald-400 rounded-lg p-2">
                <span className="text-emerald-400 font-semibold text-xs">БЛАГОДАРНОСТЬ</span>
              </div>
              <div className="bg-lime-900/30 border border-lime-400 rounded-lg p-2">
                <span className="text-lime-400 font-semibold text-xs">УВАЖЕНИЕ</span>
              </div>
              <div className="bg-yellow-900/30 border border-yellow-400 rounded-lg p-2">
                <span className="text-yellow-400 font-semibold text-xs">СИМПАТИЯ</span>
              </div>
              <div className="bg-amber-900/30 border border-amber-400 rounded-lg p-2">
                <span className="text-amber-400 font-semibold text-xs">ЕДИНОМЫШЛЕННИК</span>
              </div>
              <div className="bg-orange-900/30 border border-orange-400 rounded-lg p-2">
                <span className="text-orange-400 font-semibold text-xs">ИНТЕРЕС</span>
              </div>
              <div className="bg-gray-700/30 border border-gray-400 rounded-lg p-2">
                <span className="text-gray-400 font-semibold text-xs">НЕОПРЕДЕЛЕННОСТЬ</span>
              </div>
              <div className="bg-slate-700/30 border border-slate-400 rounded-lg p-2">
                <span className="text-slate-400 font-semibold text-xs">РАВНОДУШИЕ</span>
              </div>
              <div className="bg-stone-700/30 border border-stone-400 rounded-lg p-2">
                <span className="text-stone-400 font-semibold text-xs">НЕДОВЕРИЕ</span>
              </div>
              <div className="bg-zinc-700/30 border border-zinc-400 rounded-lg p-2">
                <span className="text-zinc-400 font-semibold text-xs">РАЗОЧАРОВАНИЕ</span>
              </div>
              <div className="bg-neutral-700/30 border border-neutral-400 rounded-lg p-2">
                <span className="text-neutral-400 font-semibold text-xs">БОЯЗНЬ</span>
              </div>
              <div className="bg-red-900/30 border border-red-400 rounded-lg p-2">
                <span className="text-red-400 font-semibold text-xs">ПРЕЗРЕНИЕ</span>
              </div>
              <div className="bg-rose-900/30 border border-rose-400 rounded-lg p-2">
                <span className="text-rose-400 font-semibold text-xs">ЗАВИСТЬ</span>
              </div>
              <div className="bg-red-800/30 border border-red-500 rounded-lg p-2">
                <span className="text-red-500 font-semibold text-xs">ОБИДА</span>
              </div>
              <div className="bg-red-700/30 border border-red-600 rounded-lg p-2">
                <span className="text-red-600 font-semibold text-xs">НЕПРИЯЗНЬ</span>
              </div>
              <div className="bg-red-600/30 border border-red-700 rounded-lg p-2">
                <span className="text-red-700 font-semibold text-xs">НЕНАВИСТЬ</span>
              </div>
              <div className="bg-black border border-red-800 rounded-lg p-2">
                <span className="text-red-800 font-semibold text-xs">ПОГИБ</span>
              </div>
            </div>
            <div className="mt-8 text-center">
              <p className="text-orange-300 text-lg">
                Каждый клон отряда «Призрак» формирует уникальные связи с товарищами по оружию, 
                создавая сложную сеть взаимоотношений от братской преданности до боевого соперничества.
              </p>
            </div>
            
            {/* Empty Cards */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-gray-900/30 border-orange-400/30 border-dashed hover-scale">
                <CardContent className="h-full flex items-center justify-center min-h-[200px]">
                  <div className="text-center space-y-4">
                    <Icon name="Users" size={32} className="mx-auto text-orange-400/50" />
                    <p className="text-orange-400/50 font-orbitron text-sm">СЛОТ ОТНОШЕНИЙ</p>
                    <p className="text-orange-300/50 text-xs">Ожидание связи</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-gray-900/30 border-orange-400/30 border-dashed hover-scale">
                <CardContent className="h-full flex items-center justify-center min-h-[200px]">
                  <div className="text-center space-y-4">
                    <Icon name="Users" size={32} className="mx-auto text-orange-400/50" />
                    <p className="text-orange-400/50 font-orbitron text-sm">СЛОТ ОТНОШЕНИЙ</p>
                    <p className="text-orange-300/50 text-xs">Ожидание связи</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-gray-900/30 border-orange-400/30 border-dashed hover-scale">
                <CardContent className="h-full flex items-center justify-center min-h-[200px]">
                  <div className="text-center space-y-4">
                    <Icon name="Users" size={32} className="mx-auto text-orange-400/50" />
                    <p className="text-orange-400/50 font-orbitron text-sm">СЛОТ ОТНОШЕНИЙ</p>
                    <p className="text-orange-300/50 text-xs">Ожидание связи</p>
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
                  <Badge className="absolute top-2 right-2 bg-orange-400 text-black">
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