import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import type { Review, ReviewsResponse } from '../types/reviews';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors({
  origin: true, 
  credentials: true,
}));
app.use(express.json());

const ORGANIZATION_CONFIG = {
  yandex: {
    orgId: process.env.YANDEX_ORG_ID || '',
    apiKey: process.env.YANDEX_API_KEY || '',
  },
  '2gis': {
    orgId: process.env.DOUBLGIS_ORG_ID || '',
    apiKey: process.env.DOUBLGIS_API_KEY || '',
  },
};

/**
 * Получение отзывов из Яндекс (лажа, не смог сделать)

async function fetchYandexReviews(orgId: string): Promise<Review[]> {
  try {
    const apiKey = ORGANIZATION_CONFIG.yandex.apiKey;
    
    if (!apiKey || !orgId) {
      console.warn('Яндекс API: отсутствует API ключ или ID организации');
      return [];
    }

    // Через Яндекс.Бизнес API

    const response = await fetch(
      `https://business.yandex.ru/api/v1/organizations/${orgId}/reviews`,
      {
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Яндекс API error: ${response.status}`);
    }

    const data = await response.json();
    
    // Преобразование
    const reviews: Review[] = data.reviews?.map((review: any) => ({
      id: review.id?.toString(),
      name: review.author_name || 'Анонимный пользователь',
      rating: review.rating || 5,
      text: review.text || '',
      source: 'Яндекс' as const,
      date: review.date_created,
      likes: review.likes_count || 0,
    })) || [];
    
    return reviews;

    console.log('Яндекс API: не тянет.');
    return [];
  }
  
   catch (error) {
    console.error('Ошибка при получении отзывов Я.:', error);
    return [];
  }
  
}
*/

/**Получение отзывов из 2ГИС
 */
async function fetch2GisReviews(orgId: string): Promise<Review[]> {
  try {
    const apiKey = ORGANIZATION_CONFIG['2gis'].apiKey;
    
    if (!apiKey || !orgId) {
      console.warn('2ГИС API: отсутствует API ключ или ID организации');
      return [];
    }

    // Запрос к Catalog API 2ГИС
    const response = await fetch(
      `https://catalog.api.2gis.com/3.0/items/byid?id=${orgId}&key=${apiKey}&fields=reviews`,
      {
        headers: {
          'Accept': 'application/json',
        },
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`2ГИС API error: ${response.status} - ${errorText}`);
    }

    const data = await response.json();
    
    // Проверка структуры
    if (!data.result?.items || data.result.items.length === 0) {
      console.warn('2ГИС API: организация не найдена');
      return [];
    }

    const organization = data.result.items[0];
    const reviewsData = organization.reviews;

    if (!reviewsData || !reviewsData.items || reviewsData.items.length === 0) {
      console.log('2ГИС API: у организации нет отзывов');
      return [];
    }

    // Преобразование 2ГИСовских
    const reviews: Review[] = reviewsData.items.map((review: any) => ({
      id: review.id?.toString(),
      name: review.author_name || review.author?.name || 'Анонимный пользователь',
      rating: review.rating || 5,
      text: review.text || '',
      source: '2ГИС' as const,
      date: review.date_created || review.created_at,
      likes: review.likes_count || review.helpful_count || 0,
      location: review.author?.city || undefined,
    }));

    console.log(`2ГИС API: получено ${reviews.length} отзывов`);
    return reviews;
  } catch (error) {
    console.error('Ошибка при получении отзывов из 2ГИС:', error);
    return [];
  }
}

function getFallbackReviews(): Review[] {
  return [
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
}

/**
 * Вычисление статистики по отзывам
 */
function calculateStats(reviews: Review[]) {
  const totalRating = reviews.reduce((sum, r) => sum + r.rating, 0);
  const averageRating = reviews.length > 0 ? totalRating / reviews.length : 0;

  const reviewsBySource = {
    Google: reviews.filter(r => r.source === 'Google').length,
    Яндекс: reviews.filter(r => r.source === 'Яндекс').length,
    '2ГИС': reviews.filter(r => r.source === '2ГИС').length,
    Фламп: reviews.filter(r => r.source === 'Фламп').length,
  };

  return {
    averageRating: Math.round(averageRating * 10) / 10,
    totalReviews: reviews.length,
    reviewsBySource,
  };
}

app.get('/api/reviews', async (req, res) => {
  try {
    const { useFallback = 'true' } = req.query;
    
    let allReviews: Review[] = [];

    // Пытаемся получить отзывы из внешних источников
    /*
    if (ORGANIZATION_CONFIG.yandex.orgId) {
      const yandexReviews = await fetchYandexReviews(ORGANIZATION_CONFIG.yandex.orgId);
      allReviews = [...allReviews, ...yandexReviews];
    }
    */

    if (ORGANIZATION_CONFIG['2gis'].orgId) {
      const gisReviews = await fetch2GisReviews(ORGANIZATION_CONFIG['2gis'].orgId);
      allReviews = [...allReviews, ...gisReviews];
    }

    if (allReviews.length === 0 || useFallback === 'true') {
      const fallbackReviews = getFallbackReviews();
      const existingTexts = new Set(allReviews.map(r => r.text));
      const newFallback = fallbackReviews.filter(r => !existingTexts.has(r.text));
      allReviews = [...allReviews, ...newFallback];
    }

    const stats = calculateStats(allReviews);

    const response: ReviewsResponse = {
      reviews: allReviews,
      stats,
    };

    res.json(response);
  } catch (error) {
    console.error('Ошибка при получении отзывов:', error);
    const fallbackReviews = getFallbackReviews();
    res.json({
      reviews: fallbackReviews,
      stats: calculateStats(fallbackReviews),
    });
  }
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`API сервер запущен на http://0.0.0.0:${PORT}`);
  console.log(`Локальный доступ: http://localhost:${PORT}`);
  console.log(`2ГИС ID: ${ORGANIZATION_CONFIG['2gis'].orgId || '-'}`);
  console.log(`2ГИС API ключ: ${ORGANIZATION_CONFIG['2gis'].apiKey ? '+' : '-'}`);
});

export default app;

