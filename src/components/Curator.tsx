import Icon from "@/components/ui/icon";
import { useState } from "react";

export const Curator = () => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [showQuestions, setShowQuestions] = useState(true);
  const [currentMessage, setCurrentMessage] = useState("Приветствую, солдат! Я CT-7891. Кликни на меня для продолжения.");

  const greetings = [
    "Приветствую, солдат! Я CT-7891. Кликни на меня для продолжения.",
    "Я куратор базы данных отряда «Призрак».",
    "Помогу разобраться с информацией на этой базе.",
    "Выбери вопрос ниже, чтобы узнать больше."
  ];

  const questions = [
    { id: 'clones', text: 'Об отряде', icon: 'Users' },
    { id: 'mando', text: 'О наставнике', icon: 'Shield' },
    { id: 'missions', text: 'Миссии', icon: 'Target' },
    { id: 'navigation', text: 'Навигация', icon: 'Map' }
  ];

  const responses: Record<string, string[]> = {
    clones: [
      'Отряд «Призрак» — элитное подразделение из трёх клонов.',
      'Jeing (G-01) — лидер и тактик.',
      'Nuar (G-02) — пилот и снайпер.',
      'Rampa (G-07) — штурмовик и танк.',
      'Кликай на их карточки ниже для полного досье.'
    ],
    mando: [
      'Шнэ Мхокар — мандалорский наставник отряда.',
      'Чисс, 21 год. Позывной «Красная Тень».',
      'Обучила «Призраков» скрытным тактикам.',
      'Её досье находится в секретном разделе.',
      'Прокрути вниз и найди кнопку с зелёным цветом.'
    ],
    missions: [
      'Отряд провёл более 89 операций.',
      'Известные: «Тень Кореллии», «Vorna-12».',
      'Также «Устранение», «Битва при Умбаре».',
      'Детали большинства миссий засекречены.',
      'Уровень допуска: ВЫСШИЙ.'
    ],
    navigation: [
      'Прокрути вниз — увидишь информацию об отряде.',
      'Дальше — карточки с бойцами «Призрака».',
      'Ещё ниже — кнопка к досье наставника.',
      'Для входа используй «Получить доступ» вверху.',
      'Жми на карточки для подробной информации.'
    ]
  };

  const handleCharacterClick = () => {
    if (currentMessageIndex < greetings.length - 1) {
      const nextIndex = currentMessageIndex + 1;
      setCurrentMessageIndex(nextIndex);
      setCurrentMessage(greetings[nextIndex]);
      
      if (nextIndex === greetings.length - 1) {
        setShowQuestions(true);
      }
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
      } else {
        clearInterval(intervalId);
        setTimeout(() => setShowQuestions(true), 1000);
      }
    }, 2500);
  };

  return (
    <div className="fixed right-12 bottom-12 z-50 flex items-end gap-6">
      {/* Messages and Questions Container */}
      <div className="flex flex-col gap-4 max-w-md">
        {/* Speech Bubble */}
        <div className="relative bg-cyan-900/90 backdrop-blur-sm border-2 border-cyan-400 rounded-2xl rounded-br-none px-5 py-4 shadow-2xl animate-fade-in">
          <p className="text-cyan-100 text-base font-medium leading-relaxed">
            {currentMessage}
          </p>
          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-cyan-900 border-r-2 border-b-2 border-cyan-400 rotate-45"></div>
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

      {/* Clone Character */}
      <button
        onClick={handleCharacterClick}
        className="relative group flex-shrink-0"
      >
        <img
          src="https://cdn.poehali.dev/files/48425f21-2751-4146-82ab-a880aee60fc9.png"
          alt="Куратор CT-7891"
          className="w-64 h-64 object-cover drop-shadow-2xl hover:scale-105 transition-transform duration-300 filter brightness-105"
        />
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-gray-900 border-2 border-cyan-400 rounded-full px-4 py-1.5 shadow-xl">
          <span className="text-cyan-400 font-orbitron font-bold text-sm whitespace-nowrap">CT-7891</span>
        </div>
        <div className="absolute top-2 right-2 w-5 h-5 bg-green-400 rounded-full border-2 border-gray-900 animate-pulse shadow-lg"></div>
      </button>
    </div>
  );
};
