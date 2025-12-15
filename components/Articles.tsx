import { ImageWithFallback } from './figma/ImageWithFallback';

const articles = [
  {
    title: 'Как исправить ошибку при проведении документа в 1С',
    description: 'Пошаговая инструкция со скриншотами для быстрого решения проблемы',
    readTime: '5 мин',
    category: 'Ошибки',
    image: 'https://apogey.ru/api/instruction-images/file/3.png',
  },
  {
    title: 'Настройка учетной политики организации',
    description: 'Подробное руководство по настройке учетной политики в 1С 8.3',
    readTime: '8 мин',
    category: 'Настройка',
    image: 'https://apogey.ru/api/instruction-images/file/1.png',
  },
  {
    title: 'Формирование отчетности за квартал',
    description: 'Пошаговая инструкция с примерами заполнения отчетов',
    readTime: '10 мин',
    category: 'Отчетность',
    image: 'https://apogey.ru/api/instruction-images/file/3.png',
  },
  {
    title: 'Работа с закрывающими документами',
    description: 'Как правильно закрывать период и избежать типичных ошибок',
    readTime: '7 мин',
    category: 'Учет',
    image: 'https://apogey.ru/api/instruction-images/file/1.png',
  },
  {
    title: 'Импорт данных из Excel в 1С',
    description: 'Простой способ загрузки данных из Excel файлов',
    readTime: '6 мин',
    category: 'Инструкции',
    image: 'https://apogey.ru/api/instruction-images/file/3.png',
  },
  {
    title: 'Резервное копирование базы 1С',
    description: 'Как создать резервную копию и восстановить базу данных',
    readTime: '5 мин',
    category: 'Безопасность',
    image: 'https://apogey.ru/api/instruction-images/file/1.png',
  },
];

export function Articles() {
  return (
    <section id="articles" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full mb-4">
            База знаний
          </div>
          <h2 className="text-4xl text-black mb-4">
            Статьи и инструкции по 1С
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Пошаговые руководства со скриншотами — просто и понятно для каждого
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <article 
              key={index}
              className="bg-white border-2 border-gray-200 rounded-2xl overflow-hidden hover:border-red-600 hover:shadow-xl transition-all group cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback 
                  src={article.image}
                  alt={article.title}
                  className="w-auto h-auto object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm">
                    {article.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 text-gray-500 mb-3">
                  <span className="text-sm">📖 Статья</span>
                  <span className="text-sm ml-2">⏱️ {article.readTime}</span>
                </div>
                
                <h3 className="text-xl text-black mb-3 group-hover:text-red-600 transition-colors">
                  {article.title}
                </h3>
                
                <p className="text-gray-600 mb-4">
                  {article.description}
                </p>
                
                <div className="flex items-center text-red-600 group-hover:gap-3 transition-all">
                  <span>Читать</span>
                  <span className="ml-2">→</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-black text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors">
            Посмотреть все статьи
          </button>
        </div>
      </div>
    </section>
  );
}
