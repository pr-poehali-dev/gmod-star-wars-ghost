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
      image: "/img/893b0313-196b-48d4-a4ac-7b56f9fdfa3e.jpg",
      specialization: "Командование",
      kills: 147,
      missions: 89,
      callSign: "G-01",
      birthPlace: "Камино",
      trainedBy: "Инструкторы ЭРК, Мандалорские воины",
      equipment: ["DC-15A", "DC-17", "Вибромеч", "Термодетонаторы"],
      personality: "Холодный, рассудительный, тактик. Умеет видеть поле боя словно шахматную доску, предугадывая действия врага на шаг вперёд. Не склонен к лишней жестокости, но для выполнения миссии готов жертвовать чем угодно – даже своими братьями, если того требует тактика. Предпочитает ближний бой с вибромечом, комбинируя удары с использованием термодетонаторов.",
      achievements: ["Операция 'Тень Кореллии'", "Битва за Анаксис", "Зачистка базы на Рилоте"]
    },
    {
      id: "CT-07-2114",
      name: "Зам. лидера Nuar",
      rank: "Зам. лидера",
      description: "Элитный снайпер с безупречной точностью. Мастер скрытных операций.",
      image: "/img/92503c0a-8241-4a36-9211-fca1703eaf89.jpg",
      specialization: "Пилот",
      kills: 203,
      missions: 76,
      callSign: "G-07",
      birthPlace: "Камино",
      trainedBy: "Мандалорские снайперы, Пилоты-асы Республики",
      equipment: ["DC-15X", "Jetpack", "Vibro-нож", "Дымовые гранаты"],
      personality: "Молчаливый профессионал. Предпочитает действовать из тени, точно и быстро.",
      achievements: ["127 подтвержденных убийств снайпера", "Эвакуация с Джеонозиса", "Воздушный бой над Корусантом"]
    },
    {
      id: "CT-04-5536",
      name: "Боец Rampa",
      rank: "Боец",
      description: "Боевой медик, спасший жизни десятков товарищей в самых опасных ситуациях.",
      image: "/img/3cbe738d-56a0-498a-9594-55888d8c7d50.jpg",
      specialization: "Отсутствует",
      kills: 58,
      missions: 92,
      callSign: "G-04",
      birthPlace: "Камино",
      trainedBy: "Боевые медики, Мандалорские инструкторы",
      equipment: ["DC-15S", "Медицинский набор", "Штурмовая винтовка", "Стимуляторы"],
      personality: "Преданный товарищ с сильным чувством долга. Никогда не оставляет раненых.",
      achievements: ["Спас 47 клонов", "Медаль за храбрость", "Операция 'Последний рубеж'"]
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
                  <p className="text-orange-200">Лидер отряда</p>
                </div>
                <div>
                  <h4 className="text-orange-400 font-semibold mb-2">Характер:</h4>
                  <p className="text-orange-200">Холодный, рассудительный, тактик</p>
                </div>
                <div>
                  <h4 className="text-orange-400 font-semibold mb-2">Описание:</h4>
                  <p className="text-orange-200 leading-relaxed">{clone.description}</p>
                </div>
                <div>
                  <h4 className="text-orange-400 font-semibold mb-2">Особенность:</h4>
                  <p className="text-orange-200">Предпочитает ближний бой с вибромечом, комбинируя удары с использованием термодетонаторов</p>
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