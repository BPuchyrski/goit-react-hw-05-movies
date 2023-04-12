import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
const FilmList = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const getTrendingMovies = async () => {
      const apiKey = '51934b572a5859af92b6c7b46a350a1c';

      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}`
        );
        const arrOfTrendingMovies = response.data.results;
        setTrendingMovies(arrOfTrendingMovies);
      } catch (error) {
        return;
      }
    };
    getTrendingMovies();
  }, []);

  return (
    <div>
      {trendingMovies.length > 0 ? (
        trendingMovies.map(movie => {
          const filmId = `/movies/${movie.id}`;
          return (
            <p key={movie.id}>
              <Link to={filmId} state={{ from: location }}>
                {movie.title}
              </Link>
            </p>
          );
        })
      ) : (
        <p>Sorry no films...</p>
      )}
    </div>
  );
};

export default FilmList;
