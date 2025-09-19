import { Link } from 'react-router-dom';
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface Clone {
  id: string;
  name: string;
  rank: string;
  image: string;
  callSign: string;
  specialization: string;
  birthPlace: string;
}

interface CloneHeaderProps {
  clone: Clone;
}

const CloneHeader = ({ clone }: CloneHeaderProps) => {
  return (
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
  );
};

export default CloneHeader;