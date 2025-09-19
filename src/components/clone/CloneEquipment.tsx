import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface Clone {
  equipment: string[];
}

interface CloneEquipmentProps {
  clone: Clone;
}

const CloneEquipment = ({ clone }: CloneEquipmentProps) => {
  return (
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
  );
};

export default CloneEquipment;