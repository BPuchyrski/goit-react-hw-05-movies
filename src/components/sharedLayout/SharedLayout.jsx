import { Suspense } from 'react';
import css from './SharedLayout.module.css';
const { NavLink, Outlet } = require('react-router-dom');

const SharedLayout = () => {
  const activePageStyle = ({ isActive, isPending }) => {
    return isPending ? 'pending' : isActive ? css.active : css.noActive;
  };

  return (
    <>
      <div>
        <NavLink className={activePageStyle} to="/">
          Home
        </NavLink>
        <NavLink className={activePageStyle} to="/movies">
          Films
        </NavLink>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet></Outlet>
      </Suspense>
    </>
  );
};

export default SharedLayout;
