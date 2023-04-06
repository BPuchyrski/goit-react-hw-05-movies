import axios from 'axios';
import { useEffect, useState } from 'react';
const FilmList = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const getTrendingMovies = async () => {
      const apiKey = '51934b572a5859af92b6c7b46a350a1c';
      const response = await axios.get(
        `https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}`
      );
      const arrOfTrendingMovies = response.data.results;
      setTrendingMovies(arrOfTrendingMovies);
    };
    getTrendingMovies();
  }, []);

  return (
    <div>
      {trendingMovies.length > 0 ? (
        trendingMovies.map(movie => {
          return <p key={movie.id}>{movie.original_title}</p>;
        })
      ) : (
        <p>Sorry no films...</p>
      )}
    </div>
  );
};

export default FilmList;
