import { useAuth } from "@/contexts/AuthContext";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useState } from "react";

export const Curator = () => {
  const { user } = useAuth();
  const [isMinimized, setIsMinimized] = useState(false);

  const username = user?.username || "Гость";

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50">
      {isMinimized ? (
        <button
          onClick={() => setIsMinimized(false)}
          className="bg-gradient-to-br from-cyan-600 to-cyan-800 border-2 border-cyan-400 rounded-full p-4 shadow-2xl hover:scale-110 transition-transform duration-300 group"
        >
          <img
            src="https://cdn.poehali.dev/files/48425f21-2751-4146-82ab-a880aee60fc9.png"
            alt="Куратор"
            className="w-12 h-12 object-cover rounded-full"
          />
          <div className="absolute -top-2 -right-2 w-4 h-4 bg-cyan-400 rounded-full animate-pulse"></div>
        </button>
      ) : (
        <Card className="w-80 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border-2 border-cyan-400 shadow-2xl">
          <CardContent className="p-0">
            {/* Header */}
            <div className="relative bg-gradient-to-r from-cyan-600 to-cyan-800 p-4 rounded-t-lg">
              <button
                onClick={() => setIsMinimized(true)}
                className="absolute top-2 right-2 text-cyan-200 hover:text-white transition-colors"
              >
                <Icon name="Minimize2" size={20} />
              </button>
              <div className="flex items-center gap-3">
                <div className="relative">
                  <img
                    src="https://cdn.poehali.dev/files/48425f21-2751-4146-82ab-a880aee60fc9.png"
                    alt="Куратор"
                    className="w-16 h-16 object-cover rounded-full border-2 border-cyan-300"
                  />
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-gray-900"></div>
                </div>
                <div>
                  <h3 className="text-cyan-100 font-orbitron font-bold text-lg">Куратор</h3>
                  <p className="text-cyan-300 text-xs font-mono">CT-Навигатор</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-4 space-y-4">
              {/* Greeting */}
              <div className="bg-cyan-900/30 border border-cyan-700/50 rounded-lg p-3">
                <p className="text-cyan-200 text-sm leading-relaxed">
                  <span className="font-semibold text-cyan-400">Приветствую, {username}!</span>
                  <br />
                  Я помогу вам ориентироваться в системе.
                </p>
              </div>

              {/* Navigation Guide */}
              <div className="space-y-2">
                <h4 className="text-cyan-400 font-semibold text-sm flex items-center gap-2">
                  <Icon name="Map" size={16} />
                  Навигация по базе
                </h4>
                
                <div className="space-y-2 text-xs text-cyan-200">
                  <div className="flex items-start gap-2 bg-gray-800/50 rounded p-2">
                    <Icon name="Users" size={14} className="text-orange-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-orange-400">Отряд "Призрак"</span>
                      <p className="text-cyan-300/80">Досье клонов-штурмовиков элитного подразделения</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2 bg-gray-800/50 rounded p-2">
                    <Icon name="Shield" size={14} className="text-green-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-green-400">Наставник</span>
                      <p className="text-cyan-300/80">Информация о мандалорском инструкторе</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2 bg-gray-800/50 rounded p-2">
                    <Icon name="Lock" size={14} className="text-red-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-red-400">Секретные файлы</span>
                      <p className="text-cyan-300/80">Требуется специальный допуск</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Tip */}
              <div className="bg-cyan-950/40 border border-cyan-700/30 rounded-lg p-3">
                <div className="flex items-start gap-2">
                  <Icon name="Info" size={16} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                  <p className="text-cyan-300 text-xs leading-relaxed">
                    Кликните на карточку клона для просмотра полного досье
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};