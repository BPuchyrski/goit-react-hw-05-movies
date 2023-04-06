import axios from 'axios';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// import { Link } from 'react-router-dom';
const MoviesPage = () => {
  const [filmsArr, setFilmsArr] = useState([]);
  const [filmList, setFilmList] = useSearchParams();
  const searchFilm = filmList.get('filmName');

  const handleSubmit = e => {
    e.preventDefault();
    setFilmList({ filmName: e.target[0].value });
  };

  useEffect(() => {
    if (searchFilm === null) {
      return;
    }
    const getArrOfMovies = async () => {
      const apiKey = '51934b572a5859af92b6c7b46a350a1c';
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchFilm}`
        );
        setFilmsArr(response.data.results);
        console.log(response.data.results);
      } catch (error) {
        return;
      }
    };
    getArrOfMovies();
  }, [searchFilm]);

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <input placeholder="Type movie title"></input>
          <button>Search</button>
        </form>
        {filmsArr.length > 0 ? (
          filmsArr.map(film => {
            const filmId = `/movies/${film.id}`;
            return (
              <p key={film.id}>
                <Link to={filmId}>{film.title}</Link>
              </p>
            );
          })
        ) : (
          <p>Search your fav films</p>
        )}
      </div>
    </div>
  );
};

export default MoviesPage;
