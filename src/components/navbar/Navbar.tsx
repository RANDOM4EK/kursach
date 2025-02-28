import { Link, useNavigate } from 'react-router-dom';
import styles from './Navbar.module.css';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import MessageIcon from '@mui/icons-material/Message';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import NorthIcon from '@mui/icons-material/North';
import { useAuth } from '../../hooks/useAuthHook';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const actions = [
    { icon: <ManageAccountsIcon />, name: 'Аккаунт' },
    { icon: <MessageIcon />, name: 'Сообщения' },
    { icon: <ProductionQuantityLimitsIcon />, name: 'Заказы' },
    { icon: <NorthIcon />, name: 'Вверх' },
  ];

  return (
    <div>
      <nav className={styles.nav}>
        <Link to="/">Главная</Link>
        <Link to="/catalog">Каталог</Link>
        <Link to="/works">Наши работы</Link>
        <Link to="/cart">Корзина</Link>
        <Link to="/questions">Вопросы</Link>

        {user ? (
          <div className={styles.userSection}>
            <span>{user.email}</span>
            <button onClick={handleLogout} className={styles.logoutButton}>
              Выйти
            </button>
          </div>
        ) : (
          <div className={styles.userSection}>
            <Link to="/login" className={styles.loginButton}>
              Регистрация/Вход
            </Link>
          </div>
        )}
      </nav>
      <div>
        <Box
          sx={{
            position: 'absolute',
            bottom: 20,
            right: 20,
            transform: 'translateZ(0px)',
          }}
        >
          <SpeedDial
            ariaLabel="SpeedDial basic example"
            icon={<SpeedDialIcon />}
          >
            {actions.map((action) => (
              <SpeedDialAction
                key={action.name}
                icon={action.icon}
                tooltipTitle={action.name}
                role="menuitem"
              />
            ))}
          </SpeedDial>
        </Box>
      </div>
    </div>
  );
};

export default Navbar;
