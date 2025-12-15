import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full mb-6">
              Огромная база готовых решений
            </div>
            
            <h1 className="text-5xl text-black mb-6">
              Решим любую задачу <span className="text-red-600">в 1С</span> быстро и надежно
            </h1>
            
            <p className="text-xl text-gray-600 mb-8">
              Помогаем главным бухгалтерам госучреждений работать эффективно. 
              Попробуйте бесплатно — решим несколько ваших задач.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <span className="text-2xl text-red-600 flex-shrink-0">✓</span>
                <div>
                  <div className="text-black">Любая задача будет решена</div>
                  <div className="text-gray-600">Накоплен огромный опыт и база решений</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl text-red-600 flex-shrink-0">⚡</span>
                <div>
                  <div className="text-black">Быстрое решение проблем</div>
                  <div className="text-gray-600">Минимум времени на ожидание ответа</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl text-red-600 flex-shrink-0">🛡️</span>
                <div>
                  <div className="text-black">Надежность и профессионализм</div>
                  <div className="text-gray-600">Сотни положительных отзывов клиентов</div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="bg-red-600 text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-colors shadow-lg">
                Попробовать бесплатно
              </button>
              <button className="bg-white text-black px-8 py-4 rounded-lg hover:bg-gray-50 transition-colors border-2 border-black">
                Узнать подробнее
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="bg-red-600 rounded-3xl p-2 shadow-2xl">
              <ImageWithFallback 
                src="https://apogey.ru/api/instruction-images/file/4.png"
                alt="worker"
                className="w-auto h-auto rounded-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl border-4 border-black">
                <div className="text-4xl text-red-600 mb-2">600,000+</div>
                <div className="text-sm text-black">Задач было решено нами в этом году!</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
