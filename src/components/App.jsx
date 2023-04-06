import MainPage from 'pages/MainPage';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import SharedLayout from './sharedLayout/SharedLayout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<MainPage />} />
        <Route path="*" element={<MainPage />} />
      </Route>
    </Routes>
  );
};
