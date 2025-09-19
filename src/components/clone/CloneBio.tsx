import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface Clone {
  id: string;
  description: string;
  trainedBy: string;
}

interface CloneBioProps {
  clone: Clone;
}

const CloneBio = ({ clone }: CloneBioProps) => {
  return (
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
  );
};

export default CloneBio;