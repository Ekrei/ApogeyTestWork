const services = [
  {
    icon: '🔧',
    title: 'Техническая поддержка 1С',
    description: 'Решение любых технических вопросов и ошибок в работе программы',
  },
  {
    icon: '📚',
    title: 'Консультации по учету',
    description: 'Помощь в настройке учета и ведении бухгалтерии в 1С',
  },
  {
    icon: '🎧',
    title: 'Оперативная помощь',
    description: 'Быстрый ответ на вопросы и решение срочных задач',
  },
  {
    icon: '⚡',
    title: 'Оптимизация работы',
    description: 'Ускорение работы программы и настройка производительности',
  },
  {
    icon: '🎓',
    title: 'Обучение сотрудников',
    description: 'Подробные инструкции и видеоуроки для эффективной работы',
  },
  {
    icon: '📄',
    title: 'Обновление и настройка',
    description: 'Установка обновлений и настройка конфигураций 1С',
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full mb-4">
            Наши услуги
          </div>
          <h2 className="text-4xl text-black mb-4">
            Что мы решаем для вас
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Комплексная поддержка работы в 1С для госучреждений
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-red-600 hover:shadow-xl transition-all group"
            >
              <div className="text-5xl mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl text-black mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
