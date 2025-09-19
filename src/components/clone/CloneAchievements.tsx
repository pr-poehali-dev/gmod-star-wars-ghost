import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface Clone {
  achievements: string[];
}

interface CloneAchievementsProps {
  clone: Clone;
}

const CloneAchievements = ({ clone }: CloneAchievementsProps) => {
  return (
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
  );
};

export default CloneAchievements;