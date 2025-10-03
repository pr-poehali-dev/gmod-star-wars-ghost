import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface Clone {
  equipment: string[];
}

interface CloneEquipmentProps {
  clone: Clone;
}

const getWeaponIcon = (item: string): string => {
  const lowerItem = item.toLowerCase();
  
  if (lowerItem.includes('топор') || lowerItem.includes('vibro')) return 'Axe';
  if (lowerItem.includes('щит')) return 'Shield';
  if (lowerItem.includes('dc-15') || lowerItem.includes('z-6')) return 'Rifle';
  if (lowerItem.includes('dc-17') || lowerItem.includes('westar')) return 'Gun';
  if (lowerItem.includes('вестерн') || lowerItem.includes('вестарн')) return 'Crosshair';
  if (lowerItem.includes('вибромеч') || lowerItem.includes('меч')) return 'Sword';
  if (lowerItem.includes('jetpack')) return 'Rocket';
  if (lowerItem.includes('термо') || lowerItem.includes('детонатор')) return 'Bomb';
  if (lowerItem.includes('пилот')) return 'Plane';
  if (lowerItem.includes('дп-24')) return 'Zap';
  
  return 'Crosshair';
};

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
              <Icon name={getWeaponIcon(item)} size={16} className="mr-3 text-orange-400" />
              <span className="text-orange-200">{item}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default CloneEquipment;