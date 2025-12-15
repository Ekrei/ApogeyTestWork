const reviews = [
  {
    name: 'Елена Петрова',
    position: 'Главный бухгалтер, МБУ "Образование"',
    location: 'Москва',
    rating: 5,
    text: 'Огромное спасибо специалистам! Решили проблему с закрытием месяца за 10 минут. Всё объяснили понятно, теперь я сама знаю, как исправить эту ошибку.',
    source: 'Google',
    likes: 24,
  },
  {
    name: 'Ольга Смирнова',
    position: 'Бухгалтер, ГБОУ СОШ №45',
    location: 'Санкт-Петербург',
    rating: 5,
    text: 'Работаю с этой компанией уже год. Профессионалы своего дела! Всегда быстро отвечают, помогают даже с самыми сложными вопросами. Рекомендую!',
    source: 'Яндекс',
    likes: 31,
  },
  {
    name: 'Марина Иванова',
    position: 'Главный бухгалтер, МАУ "Спорт"',
    location: 'Казань',
    rating: 5,
    text: 'Очень довольна сервисом. Статьи на сайте помогли решить много вопросов самостоятельно. А когда нужна была помощь — специалисты ответили моментально.',
    source: '2ГИС',
    likes: 18,
  },
  {
    name: 'Татьяна Волкова',
    position: 'Бухгалтер, МКУ "Культура"',
    location: 'Екатеринбург',
    rating: 5,
    text: 'Спасибо за терпение и профессионализм! Объясняли несколько раз, пока я не поняла. Теперь чувствую себя увереннее в работе с 1С.',
    source: 'Фламп',
    likes: 27,
  },
  {
    name: 'Светлана Королева',
    position: 'Главный бухгалтер, МБОУ ДОД',
    location: 'Новосибирск',
    rating: 5,
    text: 'Отличная команда! Помогли настроить отчетность за квартал. Всё сделали быстро и качественно. Цены адекватные, сервис на высоте.',
    source: 'Google',
    likes: 22,
  },
  {
    name: 'Наталья Соколова',
    position: 'Бухгалтер, ГБУЗ Поликлиника №12',
    location: 'Нижний Новгород',
    rating: 5,
    text: 'Очень благодарна за помощь! Думала, что проблема серьезная, а оказалось всё просто. Специалист всё показал и научил. Теперь сама справляюсь.',
    source: 'Яндекс',
    likes: 20,
  },
];

const sourceBadgeColors: Record<string, string> = {
  'Google': 'bg-blue-100 text-blue-700',
  'Яндекс': 'bg-yellow-100 text-yellow-700',
  '2ГИС': 'bg-green-100 text-green-700',
  'Фламп': 'bg-purple-100 text-purple-700',
};

export function Testimonials() {
  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full mb-4">
            Отзывы клиентов
          </div>
          <h2 className="text-4xl text-black mb-4">
            Что говорят наши клиенты
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Сотни положительных отзывов от довольных клиентов на независимых платформах
          </p>
        </div>

        <div className="bg-gradient-to-r from-red-600 to-red-800 text-white rounded-3xl p-12 mb-16 text-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div>
              <div className="text-6xl mb-4">4.9</div>
              <div className="flex gap-1 mb-2 justify-center">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-2xl">⭐</span>
                ))}
              </div>
              <div className="text-red-100">Средняя оценка</div>
            </div>
            
            <div className="h-20 w-px bg-red-400 hidden md:block" />
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="text-3xl mb-2">450+</div>
                <div className="text-red-100 text-sm">Отзывов в Google</div>
              </div>
              <div>
                <div className="text-3xl mb-2">380+</div>
                <div className="text-red-100 text-sm">Отзывов в Яндекс</div>
              </div>
              <div>
                <div className="text-3xl mb-2">290+</div>
                <div className="text-red-100 text-sm">Отзывов в 2ГИС</div>
              </div>
              <div>
                <div className="text-3xl mb-2">150+</div>
                <div className="text-red-100 text-sm">Отзывов во Фламп</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div 
              key={index}
              className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-red-600 hover:shadow-xl transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h4 className="text-lg text-black mb-1">{review.name}</h4>
                  <p className="text-sm text-gray-600 mb-1">{review.position}</p>
                  <div className="flex items-center gap-1 text-gray-500 text-sm">
                    <span>📍</span>
                    {review.location}
                  </div>
                </div>
                <span className={`${sourceBadgeColors[review.source] || 'bg-gray-100 text-gray-700'} px-3 py-1 rounded-full text-xs`}>
                  {review.source}
                </span>
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <span key={i} className="text-red-600">⭐</span>
                ))}
              </div>

              <p className="text-gray-700 mb-4">
                "{review.text}"
              </p>

              <div className="flex items-center gap-2 text-gray-500 text-sm pt-4 border-t border-gray-200">
                <span>👍</span>
                <span>{review.likes} человек считают отзыв полезным</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Все отзывы — от реальных клиентов на независимых платформах
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="border-2 border-black text-black px-6 py-3 rounded-lg hover:bg-black hover:text-white transition-colors">
              Читать отзывы в Google
            </button>
            <button className="border-2 border-black text-black px-6 py-3 rounded-lg hover:bg-black hover:text-white transition-colors">
              Читать отзывы в Яндекс
            </button>
            <button className="border-2 border-black text-black px-6 py-3 rounded-lg hover:bg-black hover:text-white transition-colors">
              Читать отзывы в 2ГИС
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
