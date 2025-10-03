import Icon from "@/components/ui/icon";
import { useState } from "react";

export const Curator = () => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [showQuestions, setShowQuestions] = useState(false);
  const [currentMessage, setCurrentMessage] = useState("Приветствую, солдат! Я CT-7891. Кликни на меня для продолжения.");
  const [isMinimized, setIsMinimized] = useState(false);

  const greetings = [
    "Приветствую, солдат! Я CT-7891. Кликни на меня для продолжения.",
    "Я куратор базы данных отряда «Призрак».",
    "Помогу разобраться тебе тут.",
    "Выбери вопрос ниже, чтобы узнать больше."
  ];

  const questions = [
    { id: 'self', text: 'Сам разберусь', icon: 'X' },
    { id: 'guide', text: 'Расскажи что тут и где', icon: 'Info' }
  ];

  const responses: Record<string, string[]> = {
    self: [
      'Понял, солдат. Удачи в изучении базы данных.',
      'Если нужна помощь — кликни на меня снова.'
    ],
    guide: [
      'Прокрути вниз — увидишь информацию об отряде.',
      'Дальше — карточки с тремя бойцами «Призрака».',
      'Jeing (лидер), Nuar (пилот), Rampa (штурмовик).',
      'Ещё ниже — кнопка к досье наставника Шнэ Мхокар.',
      'Используй «Получить доступ» вверху для входа.'
    ]
  };

  const handleCharacterClick = () => {
    if (isMinimized) {
      setIsMinimized(false);
      setCurrentMessageIndex(0);
      setCurrentMessage(greetings[0]);
      setShowQuestions(false);
      return;
    }

    if (currentMessageIndex < greetings.length - 1) {
      const nextIndex = currentMessageIndex + 1;
      setCurrentMessageIndex(nextIndex);
      setCurrentMessage(greetings[nextIndex]);
    } else if (currentMessageIndex === greetings.length - 1 && !showQuestions) {
      setShowQuestions(true);
    }
  };

  const handleQuestionClick = (questionId: string) => {
    const messages = responses[questionId];
    let messageIndex = 0;
    
    setShowQuestions(false);
    setCurrentMessage(messages[0]);

    const intervalId = setInterval(() => {
      messageIndex++;
      if (messageIndex < messages.length) {
        setCurrentMessage(messages[messageIndex]);
        
        if (questionId === 'self' && messageIndex === messages.length - 1) {
          setTimeout(() => {
            setIsMinimized(true);
          }, 2000);
        }
      } else {
        clearInterval(intervalId);
        if (questionId !== 'self') {
          setTimeout(() => setShowQuestions(true), 1000);
        }
      }
    }, 2500);
  };

  if (isMinimized) {
    return (
      <button
        onClick={handleCharacterClick}
        className="fixed top-[280px] z-50"
        style={{ right: '2rem' }}
      >
        <div className="relative">
          <div className="absolute inset-0 bg-cyan-500/20 rounded-full blur-xl"></div>
          <div className="relative w-20 h-20 bg-gradient-to-b from-gray-900 to-black border-2 border-cyan-500/40 rounded-full flex items-center justify-center shadow-2xl">
            <img
              src="https://cdn.poehali.dev/files/48425f21-2751-4146-82ab-a880aee60fc9.png"
              alt="Куратор CT-7891"
              className="w-16 h-16 object-cover rounded-full opacity-40"
              style={{
                filter: 'brightness(0.8) contrast(0.9) saturate(0.5)',
                mixBlendMode: 'screen'
              }}
            />
          </div>
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-orange-500 rounded-full border-2 border-gray-900 animate-pulse shadow-[0_0_10px_rgba(249,115,22,0.8)]"></div>
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-gray-900 border border-cyan-500/40 rounded-full px-2 py-0.5">
            <span className="text-cyan-500/60 font-orbitron font-bold text-[10px]">SLEEP</span>
          </div>
        </div>
      </button>
    );
  }

  return (
    <div className="fixed right-12 bottom-0 z-50 flex items-start gap-6 pb-8">
      {/* Messages and Questions Container */}
      <div className="flex flex-col gap-4 max-w-md mt-16">
        {/* Speech Bubble */}
        <div className="relative bg-cyan-900/90 backdrop-blur-sm border-2 border-cyan-400 rounded-2xl px-5 py-4 shadow-2xl animate-fade-in">
          <p className="text-cyan-100 text-base font-medium leading-relaxed">
            {currentMessage}
          </p>
          {/* Triangle pointer to the right */}
          <div className="absolute bottom-4 -right-3 w-0 h-0 border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent border-l-[12px] border-l-cyan-900"></div>
          <div className="absolute bottom-4 -right-3.5 w-0 h-0 border-t-[13px] border-t-transparent border-b-[13px] border-b-transparent border-l-[13px] border-l-cyan-400"></div>
        </div>

        {/* Quick Questions */}
        {showQuestions && (
          <div className="flex flex-col gap-3 animate-fade-in">
            <div className="bg-cyan-900/70 backdrop-blur-sm border-2 border-cyan-400/60 rounded-xl px-4 py-2 shadow-xl">
              <p className="text-cyan-100 text-sm font-semibold flex items-center gap-2">
                <Icon name="MessageSquare" size={14} />
                Выбери вопрос:
              </p>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {questions.map((q) => (
                <button
                  key={q.id}
                  onClick={() => handleQuestionClick(q.id)}
                  className="flex items-center gap-2 bg-gray-800/90 backdrop-blur-sm border-2 border-cyan-700/50 rounded-lg px-3 py-2.5 text-sm text-cyan-300 hover:bg-cyan-900/40 hover:border-cyan-500 transition-all shadow-lg"
                >
                  <Icon name={q.icon as any} size={16} />
                  <span>{q.text}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Clone Character with Hologram Scanlines Effect */}
      <button
        onClick={handleCharacterClick}
        className="relative group flex-shrink-0"
      >
        {/* Halo-style Frame */}
        <div className="relative p-6 bg-gradient-to-b from-gray-900/80 to-black/90 backdrop-blur-md border-2 border-cyan-500/60 rounded-lg shadow-2xl">
          {/* Corner decorations */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-cyan-400"></div>
          <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-cyan-400"></div>
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-cyan-400"></div>
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-cyan-400"></div>
          
          {/* Side accent lines */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-20 bg-gradient-to-b from-transparent via-cyan-400 to-transparent"></div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-20 bg-gradient-to-b from-transparent via-cyan-400 to-transparent"></div>
          
          {/* Top status bar */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gray-900 border-2 border-cyan-400 rounded-full px-4 py-1">
            <span className="text-cyan-400 font-orbitron font-bold text-xs whitespace-nowrap flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              ACTIVE
            </span>
          </div>
          
          {/* Hologram container */}
          <div className="hologram-effect relative bg-black/40 rounded-md">
            <img
              src="https://cdn.poehali.dev/files/48425f21-2751-4146-82ab-a880aee60fc9.png"
              alt="Куратор CT-7891"
              className="w-72 h-auto object-contain relative z-10"
              style={{
                filter: 'brightness(1.3) contrast(1.1) saturate(1.5) hue-rotate(-10deg) drop-shadow(0 0 40px rgba(0, 255, 255, 0.8)) drop-shadow(0 0 80px rgba(0, 182, 212, 0.5))',
                opacity: 0.75,
                mixBlendMode: 'screen'
              }}
            />
          </div>
          
          {/* Bottom info bar */}
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-gray-900 border-2 border-cyan-400 rounded-full px-4 py-1">
            <span className="text-cyan-400 font-orbitron font-bold text-xs whitespace-nowrap">CT-7891</span>
          </div>
        </div>
      </button>
    </div>
  );
};