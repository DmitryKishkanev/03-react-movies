import { useEffect } from 'react';
import axios from 'axios';
import type { Movie } from 'types/movie';

const BASE_URL = 'https://api.themoviedb.org/3/search/movie';

export default function fetchMovies({ movie }: Movie) {
  useEffect(() => {
    async function fatchMovie() {
      const response = await axios.get(BASE_URL, {
        params: {},
        headers: {
          Authorization: `Bearer ${VITE_TMDB_TOKEN}`,
        },
      });
    }
  });
}
