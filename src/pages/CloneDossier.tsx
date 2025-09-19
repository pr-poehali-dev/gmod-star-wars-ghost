import { useParams, Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import CloneHeader from "@/components/clone/CloneHeader";
import CloneStats from "@/components/clone/CloneStats";
import CloneBio from "@/components/clone/CloneBio";
import CloneEquipment from "@/components/clone/CloneEquipment";
import SquadPhoto from "@/components/clone/SquadPhoto";
import CloneAchievements from "@/components/clone/CloneAchievements";
import DossierFooter from "@/components/clone/DossierFooter";

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
      achievements: ["Операция «Тень Кореллии»", "Битва за Анаксис", "Зачистка базы на Рилоте", "Операция: «Устранение»"],
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
      achievements: ["Операция «Vorna-12»", "Операция: «Устранение»", "Операция: \"Сестема поиска\""],
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
      equipment: ["Vibro-топор", "Щит из бескара", "DC-15A", "DC-17"],
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
      <CloneHeader clone={clone} />

      {/* Stats */}
      <CloneStats clone={clone} />

      <div className="max-w-6xl mx-auto px-4 md:px-8 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Bio */}
          <CloneBio clone={clone} />

          {/* Equipment */}
          <CloneEquipment clone={clone} />

          {/* Squad Photo */}
          <SquadPhoto />

          {/* Achievements */}
          <CloneAchievements clone={clone} />
        </div>
      </div>

      {/* Footer */}
      <DossierFooter />
    </div>
  );
};

export default CloneDossier;