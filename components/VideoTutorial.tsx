const videos = [
  {
    title: 'Быстрый старт в 1С: Бухгалтерия 8.3',
    duration: '12:35',
    views: '15.2К',
    thumbnail: 'bg-gradient-to-br from-red-600 to-red-800',
  },
  {
    title: 'Исправление ошибок при закрытии месяца',
    duration: '8:47',
    views: '8.9К',
    thumbnail: 'bg-gradient-to-br from-gray-700 to-black',
  },
  {
    title: 'Настройка отчетов для руководителя',
    duration: '15:20',
    views: '12.4К',
    thumbnail: 'bg-gradient-to-br from-red-800 to-black',
  },
  {
    title: 'Работа с подотчетными лицами',
    duration: '10:15',
    views: '6.7К',
    thumbnail: 'bg-gradient-to-br from-red-600 to-gray-800',
  },
];

export function VideoTutorials() {
  return (
    <section id="videos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full mb-4">
            Видеоуроки
          </div>
          <h2 className="text-4xl text-black mb-4">
            Обучающие видео по 1С
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Короткие и понятные видеоинструкции для эффективной работы
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {videos.map((video, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-shadow group cursor-pointer"
            >
              <div className={`${video.thumbnail} h-48 flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black opacity-20 group-hover:opacity-40 transition-opacity" />
                <div className="relative z-10 w-16 h-16 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <div className="absolute bottom-3 right-3 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-sm flex items-center gap-1">
                  ⏱️ {video.duration}
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-lg text-black mb-3 group-hover:text-red-600 transition-colors">
                  {video.title}
                </h3>
                <div className="flex items-center gap-2 text-gray-500">
                  <span className="text-sm">👁️ {video.views} просмотров</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-red-600 text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-colors">
            Смотреть все видео
          </button>
        </div>
      </div>
    </section>
  );
}
