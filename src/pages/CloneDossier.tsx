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
      name: "Лидер Jeing",
      rank: "Лидер",
      description: "Jeing (позывной G-01) – командир «Призрака». Один из первых клонов, прошедших мандалорскую подготовку. Его голос спокоен, лишён эмоций, но за этим спокойствием скрывается точный расчёт.",
      image: "https://cdn.poehali.dev/files/f5f129a7-2aee-4280-88f2-37724a7b0a77.jpg",
      specialization: "Командование",
      kills: 147,
      missions: 89,
      callSign: "G-01",
      birthPlace: "Камино",
      trainedBy: "Инструкторы ЭРК, Мандалорские воины",
      equipment: ["DC-15A", "DC-17", "Вибромеч", "Термодетонаторы"],
      personality: "Холодный, рассудительный, тактик. Умеет видеть поле боя словно шахматную доску, предугадывая действия врага на шаг вперёд. Не склонен к лишней жестокости, но для выполнения миссии готов жертвовать чем угодно – даже своими братьями, если того требует тактика. Предпочитает ближний бой с вибромечом, комбинируя удары с использованием термодетонаторов.",
      achievements: ["Операция 'Тень Кореллии'", "Битва за Анаксис", "Зачистка базы на Рилоте"],
      stats: { accuracy: 85, stealth: 72, endurance: 88, tactics: 94, leadership: 91 }
    },
    {
      id: "CT-07-2114",
      name: "Зам. лидера Nuar",
      rank: "Зам. лидера",
      description: "Nuar (позывной G-02) – правая рука Jeing'а. Его прозвище среди братьев – «Хищник». Он действует более прямолинейно, чем командир, и не боится запугать врага жестокостью. При этом его строгость внутри отряда направлена на поддержание дисциплины: он может наказать за ошибку, но никогда не будет издеваться или унижать.",
      image: "https://cdn.poehali.dev/files/f5f129a7-2aee-4280-88f2-37724a7b0a77.jpg",
      specialization: "Пилот",
      kills: 203,
      missions: 76,
      callSign: "G-02",
      birthPlace: "Камино",
      trainedBy: "Пилоты-асы Республики, Мандалорские инструкторы",
      equipment: ["Тяжелое вооружение", "Jetpack", "Штурмовые машины", "Пилотское снаряжение"],
      personality: "Жестокий, но справедливый, любит пилотирование. Nuar – талантливый пилот; ему доверяют управление кораблями и штурмовыми машинами, и именно он вытаскивал «Призраков» из многих безвыходных ситуаций. Отлично владеет тяжелым вооружением и любит сочетать штурм с пилотированием: сначала пробивает оборону врага, затем садится за штурвал, чтобы увезти отряд.",
      achievements: ["127 подтвержденных убийств снайпера", "Эвакуация с Джеонозиса", "Воздушный бой над Корусантом"],
      stats: { accuracy: 96, stealth: 89, endurance: 78, tactics: 82, leadership: 74 }
    },
    {
      id: "CT-04-5536",
      name: "Боец Rampa",
      rank: "Боец",
      description: "Rampa (позывной G-07) – «молот» отряда. Если Jeing думает как тактик, а Nuar давит своей жестокостью, то Rampa – это физическая мощь. Его главное качество – невероятная выносливость. Он способен идти вперёд под плотным огнём, закрывая собой братьев.",
      image: "https://cdn.poehali.dev/files/f5f129a7-2aee-4280-88f2-37724a7b0a77.jpg",
      specialization: "Отсутствует",
      kills: 58,
      missions: 92,
      callSign: "G-07",
      birthPlace: "Камино",
      trainedBy: "Мандалорские бойцы, Штурмовые инструкторы",
      equipment: ["Vibro-топор", "Щит из бескара", "Штурмовая броня", "DC-15S"],
      personality: "Молчаливый, выносливый, прямолинейный, шутник. Не любит лишних разговоров, обычно ограничивается короткими фразами или жестами. Несмотря на внешнюю суровость, в бою он часто берёт на себя самые тяжёлые задачи, показывая братскую преданность.",
      achievements: ["Спас 47 клонов", "Медаль за храбрость", "Операция 'Последний рубеж'"],
      stats: { accuracy: 75, stealth: 68, endurance: 92, tactics: 76, leadership: 83 }
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
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-orange-300 text-sm font-medium">Меткость</span>
                    <div className="flex-1 mx-3 bg-gray-700 h-3 rounded">
                      <div className="bg-orange-400 h-3 rounded transition-all duration-500" style={{width: `${clone.stats.accuracy}%`}}></div>
                    </div>
                    <span className="text-orange-400 font-bold text-sm w-10">{clone.stats.accuracy}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-orange-300 text-sm font-medium">Скрытность</span>
                    <div className="flex-1 mx-3 bg-gray-700 h-3 rounded">
                      <div className="bg-blue-400 h-3 rounded transition-all duration-500" style={{width: `${clone.stats.stealth}%`}}></div>
                    </div>
                    <span className="text-blue-400 font-bold text-sm w-10">{clone.stats.stealth}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-orange-300 text-sm font-medium">Выносливость</span>
                    <div className="flex-1 mx-3 bg-gray-700 h-3 rounded">
                      <div className="bg-green-400 h-3 rounded transition-all duration-500" style={{width: `${clone.stats.endurance}%`}}></div>
                    </div>
                    <span className="text-green-400 font-bold text-sm w-10">{clone.stats.endurance}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-orange-300 text-sm font-medium">Тактика</span>
                    <div className="flex-1 mx-3 bg-gray-700 h-3 rounded">
                      <div className="bg-purple-400 h-3 rounded transition-all duration-500" style={{width: `${clone.stats.tactics}%`}}></div>
                    </div>
                    <span className="text-purple-400 font-bold text-sm w-10">{clone.stats.tactics}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-orange-300 text-sm font-medium">Лидерство</span>
                    <div className="flex-1 mx-3 bg-gray-700 h-3 rounded">
                      <div className="bg-yellow-400 h-3 rounded transition-all duration-500" style={{width: `${clone.stats.leadership}%`}}></div>
                    </div>
                    <span className="text-yellow-400 font-bold text-sm w-10">{clone.stats.leadership}</span>
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