const steps = [
  {
    icon: '💬',
    number: '01',
    title: 'Вы описываете задачу',
    description: 'Просто напишите или позвоните нам — опишите вашу проблему своими словами',
    illustration: '👩‍💼 → 💬',
  },
  {
    icon: '🔍',
    number: '02',
    title: 'Наш специалист анализирует',
    description: 'Мы быстро находим решение в нашей огромной базе готовых решений',
    illustration: '👨‍💻 → 🔍',
  },
  {
    icon: '⚙️',
    number: '03',
    title: 'Решаем проблему',
    description: 'Наш эксперт применяет решение — вы можете наблюдать за процессом',
    illustration: '⚙️ → ✨',
  },
  {
    icon: '✅',
    number: '04',
    title: 'Проверяем результат',
    description: 'Убеждаемся, что всё работает идеально, и объясняем что было сделано',
    illustration: '✅ → 😊',
  },
];

export function HowWeWork() {
  return (
    <section id="how-we-work" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full mb-4">
            Наш подход
          </div>
          <h2 className="text-4xl text-black mb-4">
            Как мы работаем с вами
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Простой и понятный процесс решения ваших задач в 1С
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 text-[120px] text-red-50 leading-none pr-4">
                {step.number}
              </div>
              
              <div className="relative z-10">
                <div className="flex items-start gap-6 mb-4">
                  <div className="text-4xl flex-shrink-0">
                    {step.icon}
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-red-600 mb-2">Шаг {step.number}</div>
                    <h3 className="text-2xl text-black mb-3">{step.title}</h3>
                    <p className="text-gray-600 mb-4">{step.description}</p>
                    <div className="text-4xl">{step.illustration}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Section */}
        <div className="bg-black text-white rounded-3xl p-12 text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl mb-6">
              Мы заботимся о каждом клиенте
            </h3>
            <p className="text-xl text-gray-300 mb-8">
              Наши специалисты понимают, как важна ваша работа. Мы не просто решаем технические 
              задачи — мы помогаем вам работать спокойно и уверенно. Каждый вопрос для нас важен.
            </p>
            <div className="flex flex-wrap justify-center gap-12">
              <div>
                <div className="text-4xl text-red-600 mb-2">{'< 15 мин'}</div>
                <div className="text-gray-400">Среднее время ответа</div>
              </div>
              <div>
                <div className="text-4xl text-red-600 mb-2">98%</div>
                <div className="text-gray-400">Довольных клиентов</div>
              </div>
              <div>
                <div className="text-4xl text-red-600 mb-2">24/7</div>
                <div className="text-gray-400">Поддержка клиентов</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
