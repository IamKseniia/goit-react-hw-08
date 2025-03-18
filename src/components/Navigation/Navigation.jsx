import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';
import { useSelector } from 'react-redux';
import { selectUserisLoggedIn } from '../../redux/auth/selectors';

const Navigation = () => {
  const isLoggedIn = useSelector(selectUserisLoggedIn);
  return (
    <div className={s.mainNav}>
      <NavLink
        to="/"
        className={({ isActive }) => clsx(s.link, isActive && s.activeLink)}
      >
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink
          to="/contacts"
          className={({ isActive }) => clsx(s.link, isActive && s.activeLink)}
          end
        >
          My Contacts
        </NavLink>
      )}
    </div>
  );
};

export default Navigation;
