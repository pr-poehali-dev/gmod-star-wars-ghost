import Icon from "@/components/ui/icon";
import { useState, useEffect } from "react";

export const Curator = () => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [showQuestions, setShowQuestions] = useState(false);
  const [currentMessage, setCurrentMessage] = useState("Приветствую, солдат! Я CT-7891. Кликни на меня для продолжения.");
  const [isMinimized, setIsMinimized] = useState(false);
  const [isReawakened, setIsReawakened] = useState(false);
  const [usedQuestions, setUsedQuestions] = useState<string[]>([]);
  const [showThankYou, setShowThankYou] = useState(false);
  const [isAnswering, setIsAnswering] = useState(false);
  const [messageKey, setMessageKey] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [showDossierReturn, setShowDossierReturn] = useState(false);

  useEffect(() => {
    const fromDossier = localStorage.getItem('fromDossier');
    
    if (fromDossier === 'true') {
      localStorage.removeItem('fromDossier');
      setIsMinimized(false);
      setIsReawakened(true);
      setCurrentMessage("Нужна ли помощь?");
      setShowDossierReturn(true);
      setIsVisible(true);
      setShowMessage(true);
    } else {
      const appearTimer = setTimeout(() => {
        setIsVisible(true);
      }, 300);
      
      const messageTimer = setTimeout(() => {
        setShowMessage(true);
      }, 1300);
      
      return () => {
        clearTimeout(appearTimer);
        clearTimeout(messageTimer);
      };
    }
  }, []);

  const greetings = [
    "Приветствую, солдат! Я CT-7891. Кликни на меня для продолжения.",
    "Я куратор базы данных отряда «Призрак».",
    "Помогу разобраться тебе тут.",
    "Выбери вопрос ниже, чтобы узнать больше."
  ];

  const initialQuestions = [
    { id: 'guide', text: 'Что тут есть?', icon: 'Info' },
    { id: 'self', text: 'Сам разберусь', icon: 'X' }
  ];

  const reawakeQuestions = [
    { id: 'ghosts', text: 'Кто такие призраки?', icon: 'Users' },
    { id: 'info', text: 'Что мне надо знать о призраках?', icon: 'BookOpen' },
    { id: 'game', text: 'Поиграем?', icon: 'Gamepad2' },
    { id: 'nothing', text: 'Спасибо, ничем', icon: 'ThumbsUp' }
  ];

  const dossierReturnQuestions = [
    { id: 'dossier_yes', text: 'Пожалуй да', icon: 'CheckCircle' },
    { id: 'dossier_no', text: 'Нет, спасибо', icon: 'X' }
  ];

  const questions = showDossierReturn ? dossierReturnQuestions : (isReawakened ? reawakeQuestions : initialQuestions);

  const responses: Record<string, string[]> = {
    self: [
      'Понял, солдат. Удачи в изучении базы данных.',
      'Если нужна помощь — кликни на меня снова.'
    ],
    guide: [
      'На этой базе данных три категории.',
      'Информация об отряде «Призрак».',
      'Досье на трёх бойцов: Jeing, Nuar, Rampa.',
      'И досье наставника — Шнэ Мхокар.'
    ],
    ghosts: [
      'Отряд «Призрак» — элитное подразделение клонов.',
      'Специализация: скрытные операции в тылу врага.',
      'Три бойца: Jeing, Nuar, Rampa.',
      'Обучены мандалорским наставником Шнэ Мхокар.'
    ],
    info: [
      'Прокрути вниз — увидишь полную информацию.',
      'Кликай на карточки бойцов для досье.',
      'Используй «Получить доступ» для входа.',
      'Есть секретная кнопка к досье наставника.'
    ],
    game: [
      'Боец, вы больны? Тут как бы не место для игрушек.',
      'Советую проверится у медиков на всякий случай.'
    ],
    thankyou: [
      'Рад помочь, солдат.',
      'Если что — я буду рядом.'
    ],
    nothing: [
      'Понял, солдат.',
      'Буду на связи.'
    ],
    dossier_yes: [
      'Слушаю вас, солдат.',
      'Выберите интересующую тему.'
    ],
    dossier_no: [
      'Понял, солдат.',
      'Буду на связи.'
    ]
  };

  const handleCharacterClick = () => {
    if (isAnswering) return;
    
    if (isMinimized) {
      setIsMinimized(false);
      setIsReawakened(true);
      setCurrentMessage("Чем могу помочь?");
      setShowQuestions(true);
      return;
    }

    if (currentMessageIndex < greetings.length - 1) {
      const nextIndex = currentMessageIndex + 1;
      setCurrentMessageIndex(nextIndex);
      setCurrentMessage(greetings[nextIndex]);
      setMessageKey(prev => prev + 1);
    } else if (currentMessageIndex === greetings.length - 1 && !showQuestions) {
      setShowQuestions(true);
    }
  };

  const handleQuestionClick = (questionId: string) => {
    if (usedQuestions.includes(questionId)) return;
    
    const messages = responses[questionId];
    setUsedQuestions([...usedQuestions, questionId]);
    let messageIndex = 0;
    
    setShowQuestions(false);
    setShowThankYou(false);
    setShowDossierReturn(false);
    setIsAnswering(true);
    setCurrentMessage(messages[0]);
    setMessageKey(prev => prev + 1);

    const delay = questionId === 'game' ? 3500 : 2500;
    
    const intervalId = setInterval(() => {
      messageIndex++;
      if (messageIndex < messages.length) {
        setCurrentMessage(messages[messageIndex]);
        setMessageKey(prev => prev + 1);
        
        if ((questionId === 'self' || questionId === 'thankyou' || questionId === 'nothing' || questionId === 'game' || questionId === 'dossier_no') && messageIndex === messages.length - 1) {
          const finalDelay = questionId === 'game' ? 3000 : 2000;
          setTimeout(() => {
            setIsMinimized(true);
            setIsReawakened(false);
            setUsedQuestions([]);
            setShowThankYou(false);
            setIsAnswering(false);
          }, finalDelay);
        }
        
        if (questionId === 'dossier_yes' && messageIndex === messages.length - 1) {
          setTimeout(() => {
            setShowQuestions(true);
            setIsReawakened(true);
          }, 1500);
        }
      } else {
        clearInterval(intervalId);
        setIsAnswering(false);
        if (questionId === 'guide') {
          setTimeout(() => setShowThankYou(true), 1000);
        } else if (questionId !== 'self' && questionId !== 'thankyou' && questionId !== 'nothing' && questionId !== 'game' && questionId !== 'dossier_no' && questionId !== 'dossier_yes') {
          setTimeout(() => setShowQuestions(true), 1000);
        }
      }
    }, delay);
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
                mixBlendMode: 'screen',
                transform: 'scaleX(-1)'
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
        {showMessage && (
          <div key={messageKey} className="relative bg-cyan-900/90 backdrop-blur-sm border-2 border-cyan-400 rounded-2xl px-5 py-4 shadow-2xl animate-slide-from-right">
            <p className="text-cyan-100 text-base font-medium leading-relaxed">
              {currentMessage}
            </p>
            {/* Triangle pointer to the right */}
            <div className="absolute bottom-4 -right-3 w-0 h-0 border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent border-l-[12px] border-l-cyan-900"></div>
            <div className="absolute bottom-4 -right-3.5 w-0 h-0 border-t-[13px] border-t-transparent border-b-[13px] border-b-transparent border-l-[13px] border-l-cyan-400"></div>
          </div>
        )}

        {/* Quick Questions */}
        {(showQuestions || showDossierReturn) && (
          <div className="flex flex-col gap-3 animate-slide-from-right">
            <div className="bg-cyan-900/70 backdrop-blur-sm border-2 border-cyan-400/60 rounded-xl px-4 py-2 shadow-xl">
              <p className="text-cyan-100 text-sm font-semibold flex items-center gap-2">
                <Icon name="MessageSquare" size={14} />
                Выбери вопрос:
              </p>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {questions.map((q) => {
                const isUsed = usedQuestions.includes(q.id);
                return (
                  <button
                    key={q.id}
                    onClick={() => handleQuestionClick(q.id)}
                    disabled={isUsed}
                    className={`flex items-center gap-2 backdrop-blur-sm border-2 rounded-lg px-3 py-2.5 text-sm transition-all shadow-lg ${
                      isUsed 
                        ? 'bg-gray-800/40 border-gray-700/30 text-gray-500 cursor-not-allowed opacity-50'
                        : 'bg-gray-800/90 border-cyan-700/50 text-cyan-300 hover:bg-cyan-900/40 hover:border-cyan-500'
                    }`}
                  >
                    <Icon name={q.icon as any} size={16} />
                    <span>{q.text}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Thank You Button */}
        {showThankYou && (
          <div className="flex flex-col gap-3 animate-slide-from-right">
            <button
              onClick={() => handleQuestionClick('thankyou')}
              className="flex items-center justify-center gap-2 bg-gray-800/90 backdrop-blur-sm border-2 border-cyan-700/50 rounded-lg px-4 py-3 text-sm text-cyan-300 hover:bg-cyan-900/40 hover:border-cyan-500 transition-all shadow-lg"
            >
              <Icon name="ThumbsUp" size={16} />
              <span>Спасибо, дальше я сам</span>
            </button>
          </div>
        )}
      </div>

      {/* Clone Character with Hologram Scanlines Effect */}
      <button
        onClick={handleCharacterClick}
        className={`relative group flex-shrink-0 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
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
              className="w-72 h-auto object-contain relative z-10 scale-x-[-1]"
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