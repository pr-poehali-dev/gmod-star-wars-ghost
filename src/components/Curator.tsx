import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useState, useEffect, useRef } from "react";

interface Message {
  id: number;
  text: string;
  isBot: boolean;
}

export const Curator = () => {
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Приветствую, солдат! Я CT-7891, куратор базы данных отряда «Призрак». Чем могу помочь?",
      isBot: true
    }
  ]);
  const [selectedQuestion, setSelectedQuestion] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const questions = [
    { id: 'clones', text: 'Расскажи об отряде', icon: 'Users' },
    { id: 'mando', text: 'Кто такая Шнэ Мхокар?', icon: 'Shield' },
    { id: 'missions', text: 'Какие были миссии?', icon: 'Target' },
    { id: 'access', text: 'Как получить доступ?', icon: 'Lock' }
  ];

  const responses: Record<string, string> = {
    clones: 'Отряд «Призрак» — элитное подразделение из трёх клонов: Jeing (лидер), Nuar (пилот) и Rampa (штурмовик). Кликни на их карточки ниже, чтобы увидеть полное досье.',
    mando: 'Шнэ Мхокар — мандалорский наставник отряда. Чисс, 21 год. Обучила «Призраков» скрытным тактикам. Её досье находится в секретном разделе ниже.',
    missions: 'Отряд провёл 89+ операций: «Тень Кореллии», «Vorna-12», «Устранение», «Битва при Умбаре». Все детали засекречены.',
    access: 'Используйте кнопку «Получить доступ» в правом верхнем углу. Потребуется ввести пароль для просмотра секретных файлов.'
  };

  const handleQuestionClick = (questionId: string, questionText: string) => {
    if (selectedQuestion === questionId) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: questionText,
      isBot: false
    };

    const botMessage: Message = {
      id: messages.length + 2,
      text: responses[questionId],
      isBot: true
    };

    setMessages(prev => [...prev, userMessage]);
    
    setTimeout(() => {
      setMessages(prev => [...prev, botMessage]);
      setSelectedQuestion(questionId);
    }, 500);
  };

  return (
    <div className="fixed right-8 bottom-8 z-50">
      {isMinimized ? (
        <button
          onClick={() => setIsMinimized(false)}
          className="relative group"
        >
          <div className="absolute inset-0 bg-cyan-400 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
          <img
            src="https://cdn.poehali.dev/files/48425f21-2751-4146-82ab-a880aee60fc9.png"
            alt="Куратор"
            className="relative w-20 h-20 object-cover rounded-full border-4 border-cyan-400 shadow-2xl hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute -top-2 -right-2 w-5 h-5 bg-green-400 rounded-full border-2 border-gray-900 animate-pulse"></div>
        </button>
      ) : (
        <div className="flex items-end gap-4">
          {/* Clone Character */}
          <div className="relative">
            <div className="absolute inset-0 bg-cyan-400 rounded-full blur-2xl opacity-30"></div>
            <img
              src="https://cdn.poehali.dev/files/48425f21-2751-4146-82ab-a880aee60fc9.png"
              alt="Куратор CT-7891"
              className="relative w-32 h-32 object-cover rounded-full border-4 border-cyan-400 shadow-2xl"
            />
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-gray-900 border-2 border-cyan-400 rounded-full px-3 py-1">
              <span className="text-cyan-400 font-orbitron font-bold text-xs whitespace-nowrap">CT-7891</span>
            </div>
            <div className="absolute top-0 right-0 w-4 h-4 bg-green-400 rounded-full border-2 border-gray-900 animate-pulse"></div>
          </div>

          {/* Chat Window */}
          <Card className="w-96 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border-2 border-cyan-400 shadow-2xl">
            <CardContent className="p-0">
              {/* Header */}
              <div className="relative bg-gradient-to-r from-cyan-600 to-cyan-800 p-3 rounded-t-lg flex items-center justify-between">
                <div>
                  <h3 className="text-cyan-100 font-orbitron font-bold">Куратор базы данных</h3>
                  <p className="text-cyan-300 text-xs font-mono">Онлайн • CT-Навигатор</p>
                </div>
                <button
                  onClick={() => setIsMinimized(true)}
                  className="text-cyan-200 hover:text-white transition-colors"
                >
                  <Icon name="Minimize2" size={20} />
                </button>
              </div>

              {/* Chat Messages */}
              <div className="h-80 overflow-y-auto p-4 space-y-3 bg-gray-950/50">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.isBot ? 'justify-start' : 'justify-end'} animate-fade-in`}
                  >
                    <div
                      className={`max-w-[80%] rounded-lg p-3 ${
                        message.isBot
                          ? 'bg-cyan-900/40 border border-cyan-700/50 text-cyan-200'
                          : 'bg-orange-500/20 border border-orange-400/50 text-orange-200'
                      }`}
                    >
                      <p className="text-sm leading-relaxed">{message.text}</p>
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>

              {/* Quick Questions */}
              <div className="p-4 bg-gray-900 border-t-2 border-cyan-900/50 space-y-2">
                <p className="text-cyan-400 text-xs font-semibold mb-2 flex items-center gap-2">
                  <Icon name="MessageSquare" size={14} />
                  Быстрые вопросы:
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {questions.map((q) => (
                    <button
                      key={q.id}
                      onClick={() => handleQuestionClick(q.id, q.text)}
                      disabled={selectedQuestion === q.id}
                      className={`flex items-center gap-2 p-2 rounded-lg text-xs transition-all ${
                        selectedQuestion === q.id
                          ? 'bg-cyan-900/30 border border-cyan-700/30 text-cyan-500/50 cursor-not-allowed'
                          : 'bg-gray-800 border border-cyan-700/50 text-cyan-300 hover:bg-cyan-900/20 hover:border-cyan-500'
                      }`}
                    >
                      <Icon name={q.icon as any} size={14} />
                      <span>{q.text}</span>
                    </button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};
