import MainPage from 'pages/MainPage';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import SharedLayout from './sharedLayout/SharedLayout';
import MoviesPage from 'pages/MoviesPage';
import FilmDetailsPage from 'pages/FilmsDetailsPage';
import Cast from './Cast';
import Reviews from './Reviews';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<MainPage />} />
        <Route path="movies" element={<MoviesPage></MoviesPage>} />
        <Route path="movies/:filmId" element={<FilmDetailsPage />}>
          <Route path='cast' element={<Cast/>} />
          <Route path='reviews' element={<Reviews/>} />
        </Route>
        <Route path="*" element={<MainPage />} />
      </Route>
    </Routes>
  );
};
