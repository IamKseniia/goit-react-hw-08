import { useDispatch } from 'react-redux';
import { logout } from '../../redux/auth/operations';
import s from './UserMenu.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <div className={s.wrapper}>
      <button className={s.buttonLogOut} type="button" onClick={onLogout}>
        Log Out
      </button>
    </div>
  );
};

export default UserMenu;
