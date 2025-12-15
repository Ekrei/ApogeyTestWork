export interface Review {
  id?: string;
  name: string;
  position?: string;
  location?: string;
  rating: number;
  text: string;
  source: 'Google' | 'Яндекс' | '2ГИС' | 'Фламп';
  likes?: number;
  date?: string;
  avatar?: string;
}

export interface ReviewsStats {
  averageRating: number;
  totalReviews: number;
  reviewsBySource: {
    Google: number;
    Яндекс: number;
    '2ГИС': number;
    Фламп: number;
  };
}

export interface ReviewsResponse {
  reviews: Review[];
  stats: ReviewsStats;
}


