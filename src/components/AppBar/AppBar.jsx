import { useSelector } from 'react-redux';
import { selectUserisLoggedIn } from '../../redux/auth/selectors';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';

import s from './AppBar.module.css';

const AppBar = () => {
  const isLoggedIn = useSelector(selectUserisLoggedIn);

  return (
    <header className={s.navigation}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

export default AppBar;
