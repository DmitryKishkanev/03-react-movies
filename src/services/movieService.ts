import axios from 'axios';
import type { AxiosResponse } from 'axios';
import type { Movie } from 'types/movie';

const BASE_URL = 'https://api.themoviedb.org/3/search/movie';
const myKey = import.meta.env.VITE_TMDB_TOKEN;

interface FatchMoviesParams {
  query: string;
  page?: number;
  include_adult?: boolean;
  language?: string;
}

interface MoviesHttpResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

interface FetchMoviesResult {
  movies: Movie[];
  page: number;
  total_pages: number;
  total_results: number;
}

export default async function fetchMovies(
  params: FatchMoviesParams,
): Promise<FetchMoviesResult> {
  try {
    const response: AxiosResponse<MoviesHttpResponse> = await axios.get(
      BASE_URL,
      {
        params,
        headers: {
          Authorization: `Bearer ${myKey}`,
        },
      },
    );

    const { results, page, total_pages, total_results } = response.data;

    return {
      movies: results,
      page,
      total_pages,
      total_results,
    };
  } catch (error) {
    console.error('Ошибка при получении фильмов:', error);
    return {
      movies: [],
      page: 0,
      total_pages: 0,
      total_results: 0,
    };
  }
}
