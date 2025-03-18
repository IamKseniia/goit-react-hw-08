import { NavLink } from 'react-router-dom';
import s from './AuthNav.module.css';
import clsx from 'clsx';

const AuthNav = () => {
  return (
    <div className={s.loginButtons}>
      <NavLink
        className={({ isActive }) => clsx(s.link, isActive && s.activeLink)}
        to="/register"
      >
        Register
      </NavLink>
      <NavLink
        className={({ isActive }) => clsx(s.link, isActive && s.activeLink)}
        to="/login"
      >
        Log in
      </NavLink>
    </div>
  );
};

export default AuthNav;
