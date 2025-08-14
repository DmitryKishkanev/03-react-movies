import { useState } from 'react';
import SearchBar from 'components/SearchBar/SearchBar';
import MovieGrid from 'components/MovieGrid/MovieGrid';
import fetchMovies from 'services/movieService';
import Loader from 'components/Loader/Loader';
import ErrorMessage from 'components/ErrorMessage/ErrorMessage';
import MovieModal from 'components/MovieModal/MovieModal';
import type { Movie } from 'types/movie';
import { Toaster, toast } from 'react-hot-toast';
import css from 'components/MovieModal/MovieModal.module.css';
import style from 'components/App/App.module.css';
import noImage from 'assets/no-image.jpg';

export default function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  const handleSearch = async (query: string) => {
    try {
      setIsLoading(true);
      setIsError(false);
      setMovies([]);
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
    } catch (error) {
      console.error('Ошибка при загрузке:', error);
      setIsError(true);
      setMovies([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSelect = (movie: Movie) => {
    setSelectedMovie(movie);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMovie(null);
  };

  return (
    <div className={style.app}>
      <SearchBar onSubmit={handleSearch} />
      {isLoading && <Loader message="Loading movies, please wait..." />}
      {isError && (
        <ErrorMessage message="There was an error, please try again..." />
      )}
      {!isError && movies.length > 0 && (
        <MovieGrid movies={movies} onSelect={handleSelect} />
      )}
      {isModalOpen && selectedMovie && (
        <MovieModal onClose={closeModal}>
          <img
            src={
              selectedMovie.backdrop_path
                ? `https://image.tmdb.org/t/p/original${selectedMovie.backdrop_path}`
                : noImage
            }
            alt={selectedMovie.title}
            className={css.image}
          />
          <div className={css.content}>
            <h2>{selectedMovie.title}</h2>
            <p>{selectedMovie.overview}</p>
            <p>
              <strong>Release Date:</strong> {selectedMovie.release_date}
            </p>
            <p>
              <strong>Rating:</strong> {selectedMovie.vote_average}/10
            </p>
          </div>
        </MovieModal>
      )}
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}
