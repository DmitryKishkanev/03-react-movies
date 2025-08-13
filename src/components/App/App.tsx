import { useState } from 'react';
import SearchBar from 'components/SearchBar/SearchBar';
import MovieGrid from 'components/MovieGrid/MovieGrid';
import fetchMovies from 'services/movieService';
import type { Movie } from 'types/movie';
import { Toaster, toast } from 'react-hot-toast';
// import css from 'components/App/App..module.css';

export default function App() {
  const [movies, setMovies] = useState<Movie[]>([]);

  const handleSearch = async (query: string) => {
    try {
      const data = await fetchMovies({ query: query });

      if (data.movies.length === 0) {
        toast('No movies found for your request.', {
          style: {
            background: '#a20e0e',
            color: '#fff',
          },
        });
      }

      setMovies(data.movies);
    } catch {
      setMovies([]);
      toast('No movies found for your request.', {
        style: {
          background: '#a20e0e',
          color: '#fff',
        },
      });
    }
  };

  const handleSelect = (movie: Movie) => {
    console.log('Выбран фильм:', movie.title);
  };

  return (
    <>
      <SearchBar onSubmit={handleSearch} />
      {movies.length > 0 && (
        <MovieGrid movies={movies} onSelect={handleSelect} />
      )}
      <Toaster position="top-center" reverseOrder={false} />;
    </>
  );
}
