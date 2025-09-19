import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const SquadPhoto = () => {
  return (
    <Card className="bg-gray-900 border-orange-400">
      <CardHeader>
        <CardTitle className="text-orange-400 text-2xl flex items-center">
          <Icon name="Users" size={24} className="mr-3" />
          Отряд «Призрак»
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative">
          <img 
            src="https://cdn.poehali.dev/files/82aeab78-7b98-4cef-8645-2d4aff747269.PNG" 
            alt="Отряд Призрак" 
            className="w-full h-auto rounded-lg border border-orange-400/50 shadow-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-lg"></div>
          <div className="absolute bottom-4 left-4 right-4">
            <h4 className="text-orange-300 font-orbitron font-bold text-lg mb-2">
              ЭРК «ПРИЗРАК»
            </h4>
            <div className="flex flex-wrap gap-2 text-xs">
              <span className="bg-orange-400/20 border border-orange-400/50 rounded px-2 py-1 text-orange-300">
                G-01 Jeing
              </span>
              <span className="bg-orange-400/20 border border-orange-400/50 rounded px-2 py-1 text-orange-300">
                G-02 Nuar
              </span>
              <span className="bg-orange-400/20 border border-orange-400/50 rounded px-2 py-1 text-orange-300">
                G-07 Rampa
              </span>
            </div>
            <p className="text-orange-300/70 text-xs mt-2">
              Элитная разведывательная команда В.А.Р.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SquadPhoto;