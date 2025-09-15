import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  const clones = [
    {
      id: "CT-1914",
      name: "Командир Гост",
      rank: "Командир",
      description: "Лидер отряда Призрак, ветеран войн клонов с множеством успешных операций.",
      image: "/img/893b0313-196b-48d4-a4ac-7b56f9fdfa3e.jpg",
      specialization: "Командование",
      kills: 147,
      missions: 89
    },
    {
      id: "CT-7291", 
      name: "Снайпер Спектр",
      rank: "Сержант",
      description: "Элитный снайпер с безупречной точностью. Мастер скрытных операций.",
      image: "/img/92503c0a-8241-4a36-9211-fca1703eaf89.jpg",
      specialization: "Снайперское дело",
      kills: 203,
      missions: 76
    },
    {
      id: "CT-5544",
      name: "Медик Фантом",
      rank: "Капрал",
      description: "Боевой медик, спасший жизни десятков товарищей в самых опасных ситуациях.",
      image: "/img/3cbe738d-56a0-498a-9594-55888d8c7d50.jpg",
      specialization: "Медицина",
      kills: 58,
      missions: 92
    }
  ];

  return (
    <div className="min-h-screen bg-ghost-dark text-ghost-light">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-ghost-primary to-ghost-dark">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23374151%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        <div className="text-center z-10 animate-fade-in">
          <div className="mb-6">
            <Icon name="Ghost" size={80} className="mx-auto text-ghost-accent mb-4" />
          </div>
          <h1 className="text-6xl md:text-8xl font-orbitron font-black text-ghost-light mb-4 tracking-wider">
            ПРИЗРАК
          </h1>
          <p className="text-xl md:text-2xl text-ghost-accent font-medium mb-8">
            Элитный клон-отряд Республики
          </p>
          <div className="flex justify-center gap-4 text-sm font-orbitron">
            <Badge variant="outline" className="border-ghost-accent text-ghost-accent">
              501-й Легион
            </Badge>
            <Badge variant="outline" className="border-ghost-accent text-ghost-accent">
              Специальные операции
            </Badge>
          </div>
        </div>
      </section>

      {/* About Squad Section */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-ghost-accent mb-6">
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
            <Card className="bg-ghost-secondary border-ghost-accent hover-scale">
              <CardHeader className="text-center">
                <Icon name="Target" size={48} className="mx-auto text-ghost-accent mb-2" />
                <CardTitle className="text-ghost-light font-orbitron">Точность</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-ghost-light/80">Безупречная меткость в любых условиях</p>
              </CardContent>
            </Card>
            
            <Card className="bg-ghost-secondary border-ghost-accent hover-scale">
              <CardHeader className="text-center">
                <Icon name="Eye" size={48} className="mx-auto text-ghost-accent mb-2" />
                <CardTitle className="text-ghost-light font-orbitron">Скрытность</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-ghost-light/80">Невидимы для врага, смертельны в атаке</p>
              </CardContent>
            </Card>
            
            <Card className="bg-ghost-secondary border-ghost-accent hover-scale">
              <CardHeader className="text-center">
                <Icon name="Users" size={48} className="mx-auto text-ghost-accent mb-2" />
                <CardTitle className="text-ghost-light font-orbitron">Единство</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-ghost-light/80">Братство, закаленное в боях</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Squad History */}
      <section className="py-20 px-4 md:px-8 bg-ghost-secondary">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-ghost-accent text-center mb-16">
            ИСТОРИЯ ОТРЯДА
          </h2>
          
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row items-center gap-8 animate-fade-in">
              <div className="md:w-1/3">
                <Badge className="bg-ghost-accent text-ghost-dark mb-4">22 ДБЯ</Badge>
                <h3 className="text-2xl font-orbitron font-bold text-ghost-light mb-2">
                  Формирование отряда
                </h3>
              </div>
              <div className="md:w-2/3">
                <p className="text-ghost-light/90 text-lg">
                  Отряд "Призрак" был сформирован на Камино под руководством джедая-генерала Кита Фисто. 
                  Первоначально состоял из 12 элитных клонов, прошедших специальную подготовку.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse items-center gap-8 animate-fade-in">
              <div className="md:w-1/3">
                <Badge className="bg-ghost-accent text-ghost-dark mb-4">21 ДБЯ</Badge>
                <h3 className="text-2xl font-orbitron font-bold text-ghost-light mb-2">
                  Операция "Темная звезда"
                </h3>
              </div>
              <div className="md:w-2/3">
                <p className="text-ghost-light/90 text-lg">
                  Первая крупная операция отряда по уничтожению секретной базы сепаратистов 
                  на Риши. Операция прошла без потерь и принесла отряду первое признание.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-8 animate-fade-in">
              <div className="md:w-1/3">
                <Badge className="bg-ghost-accent text-ghost-dark mb-4">19 ДБЯ</Badge>
                <h3 className="text-2xl font-orbitron font-bold text-ghost-light mb-2">
                  Битва за Кристофсис
                </h3>
              </div>
              <div className="md:w-2/3">
                <p className="text-ghost-light/90 text-lg">
                  Отряд принял участие в освобождении Кристофсиса, действуя в качестве 
                  разведывательного подразделения. Их разведданные сыграли ключевую роль в победе.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clone Roster */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-ghost-accent text-center mb-16">
          СПИСОК КЛОНОВ
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clones.map((clone, index) => (
            <Card key={clone.id} className={`bg-ghost-secondary border-ghost-accent hover-scale animate-scale-in`} 
                  style={{animationDelay: `${index * 0.1}s`}}>
              <CardHeader>
                <div className="relative">
                  <img 
                    src={clone.image} 
                    alt={clone.name}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <Badge className="absolute top-2 right-2 bg-ghost-accent text-ghost-dark">
                    {clone.rank}
                  </Badge>
                </div>
                <CardTitle className="text-ghost-light font-orbitron text-xl">
                  {clone.name}
                </CardTitle>
                <CardDescription className="text-ghost-accent font-mono">
                  {clone.id}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-ghost-light/80 text-sm">
                  {clone.description}
                </p>
                
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-ghost-light/60">Специализация:</span>
                    <span className="text-ghost-accent">{clone.specialization}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-ghost-light/60">Подтвержденные цели:</span>
                    <span className="text-ghost-accent">{clone.kills}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-ghost-light/60">Миссии:</span>
                    <span className="text-ghost-accent">{clone.missions}</span>
                  </div>
                </div>
                
                <Button className="w-full bg-ghost-accent text-ghost-dark hover:bg-ghost-accent/80 font-orbitron">
                  ДОСЬЕ
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-ghost-primary py-12 px-4 md:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <Icon name="Ghost" size={48} className="mx-auto text-ghost-accent mb-4" />
          <h3 className="text-2xl font-orbitron font-bold text-ghost-light mb-4">
            ДЛЯ РЕСПУБЛИКИ. ДЛЯ ДЕМОКРАТИИ.
          </h3>
          <p className="text-ghost-light/80">
            Отряд "Призрак" - 501-й Легион, Великая Армия Республики
          </p>
          <div className="mt-8 pt-8 border-t border-ghost-accent/30">
            <p className="text-ghost-light/60 text-sm">
              © 22 ДБЯ - 19 ДБЯ | Войны клонов | Gmod RP Server Void
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;