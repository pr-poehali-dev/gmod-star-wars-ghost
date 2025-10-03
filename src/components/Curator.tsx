import Icon from "@/components/ui/icon";
import { useState, useEffect } from "react";

export const Curator = () => {
  const [isMinimized, setIsMinimized] = useState(false);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [showQuestions, setShowQuestions] = useState(false);
  const [displayedMessages, setDisplayedMessages] = useState<string[]>([]);

  const greetings = [
    "Приветствую, солдат! Я CT-7891.",
    "Помогу разобраться в базе данных отряда «Призрак».",
    "Кликни на меня, если нужна помощь."
  ];

  const questions = [
    { id: 'clones', text: 'Об отряде', icon: 'Users' },
    { id: 'mando', text: 'О наставнике', icon: 'Shield' },
    { id: 'missions', text: 'Миссии', icon: 'Target' },
    { id: 'navigation', text: 'Навигация', icon: 'Map' }
  ];

  const responses: Record<string, string[]> = {
    clones: [
      'Отряд «Призрак» — три элитных клона.',
      'Jeing (лидер), Nuar (пилот), Rampa (штурмовик).',
      'Кликай на карточки ниже для досье.'
    ],
    mando: [
      'Шнэ Мхокар — мандалорец, наш наставник.',
      'Чисс, 21 год. Обучила нас всему.',
      'Её файл в секретном разделе.'
    ],
    missions: [
      'Провели 89+ операций.',
      '«Тень Кореллии», «Vorna-12», «Устранение»...',
      'Детали засекречены.'
    ],
    navigation: [
      'Прокрути вниз — увидишь карточки клонов.',
      'Ещё ниже — кнопка к досье наставника.',
      'Используй «Получить доступ» для входа.'
    ]
  };

  useEffect(() => {
    if (!showQuestions && currentMessageIndex < greetings.length) {
      const timer = setTimeout(() => {
        setDisplayedMessages(prev => [...prev, greetings[currentMessageIndex]]);
        setCurrentMessageIndex(prev => prev + 1);
      }, currentMessageIndex === 0 ? 500 : 2000);
      return () => clearTimeout(timer);
    } else if (!showQuestions && currentMessageIndex === greetings.length) {
      const timer = setTimeout(() => {
        setShowQuestions(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [currentMessageIndex, showQuestions]);

  const handleQuestionClick = (questionId: string) => {
    setShowQuestions(false);
    setDisplayedMessages([]);
    setCurrentMessageIndex(0);
    
    const messages = responses[questionId];
    
    messages.forEach((msg, index) => {
      setTimeout(() => {
        setDisplayedMessages(prev => [...prev, msg]);
        if (index === messages.length - 1) {
          setTimeout(() => setShowQuestions(true), 1500);
        }
      }, index * 2000);
    });
  };

  return (
    <div className="fixed right-8 bottom-8 z-50 flex flex-col items-end gap-4">
      {/* Messages */}
      {!isMinimized && (
        <div className="flex flex-col items-end gap-3 max-w-sm">
          {displayedMessages.map((msg, index) => (
            <div 
              key={index}
              className="relative bg-cyan-900/90 backdrop-blur-sm border-2 border-cyan-400 rounded-2xl rounded-br-sm px-4 py-3 shadow-2xl animate-fade-in"
            >
              <p className="text-cyan-100 text-sm font-medium leading-relaxed">
                {msg}
              </p>
              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-cyan-900 border-r-2 border-b-2 border-cyan-400 rotate-45"></div>
            </div>
          ))}

          {/* Quick Questions */}
          {showQuestions && (
            <div className="flex flex-col gap-2 animate-fade-in">
              <div className="bg-cyan-900/90 backdrop-blur-sm border-2 border-cyan-400 rounded-2xl rounded-br-sm px-4 py-2 shadow-xl">
                <p className="text-cyan-100 text-xs font-semibold flex items-center gap-2">
                  <Icon name="MessageSquare" size={12} />
                  Чем помочь?
                </p>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {questions.map((q) => (
                  <button
                    key={q.id}
                    onClick={() => handleQuestionClick(q.id)}
                    className="flex items-center gap-2 bg-gray-800/90 backdrop-blur-sm border-2 border-cyan-700/50 rounded-lg px-3 py-2 text-xs text-cyan-300 hover:bg-cyan-900/40 hover:border-cyan-500 transition-all shadow-lg"
                  >
                    <Icon name={q.icon as any} size={12} />
                    <span>{q.text}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Clone Character */}
      <button
        onClick={() => setIsMinimized(!isMinimized)}
        className="relative group"
      >
        <div className="absolute inset-0 bg-cyan-400 rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition-opacity"></div>
        <div className="relative">
          <img
            src="https://cdn.poehali.dev/files/48425f21-2751-4146-82ab-a880aee60fc9.png"
            alt="Куратор CT-7891"
            className="w-28 h-28 object-cover rounded-full border-4 border-cyan-400 shadow-2xl hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-gray-900 border-2 border-cyan-400 rounded-full px-3 py-1 shadow-xl">
            <span className="text-cyan-400 font-orbitron font-bold text-xs whitespace-nowrap">CT-7891</span>
          </div>
          <div className="absolute top-1 right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-gray-900 animate-pulse shadow-lg"></div>
        </div>
      </button>
    </div>
  );
};
