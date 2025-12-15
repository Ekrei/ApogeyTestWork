import { useState, useEffect } from 'react';
import type { Review, ReviewsResponse } from '../types/reviews';

interface UseReviewsResult {
  reviews: Review[];
  stats: ReviewsResponse['stats'] | null;
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api';

export function useReviews(): UseReviewsResult {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [stats, setStats] = useState<ReviewsResponse['stats'] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchReviews = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`${API_URL}/reviews`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data: ReviewsResponse = await response.json();
      setReviews(data.reviews);
      setStats(data.stats);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Не удалось загрузить отзывы';
      setError(errorMessage);
      console.error('Ошибка загрузки отзывов:', err);
      
      // Fallback на пустые данные при ошибке
      setReviews([]);
      setStats(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  return {
    reviews,
    stats,
    loading,
    error,
    refetch: fetchReviews,
  };
}


