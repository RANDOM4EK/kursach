import styles from "./Navbar.module.css";
import * as React from "react";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import MessageIcon from '@mui/icons-material/Message';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import NorthIcon from '@mui/icons-material/North';
import { Link } from "react-router-dom";


function Navigation() {

  const actions = [
    { icon: <ManageAccountsIcon />, name: "Аккаунт" },
    { icon: <MessageIcon />, name: "Сообщения" },
    { icon: <ProductionQuantityLimitsIcon />, name: "Заказы" },
    { icon: <NorthIcon />, name: "Вверх" },
  ];
  return (
    <div>
      <div className={styles.navigationHader}>
        <span>Главная</span>
        <span><Link to={'/catalog'}>Каталог</Link></span>
        <span>Наши работы</span>
        <span>Корзина</span>
        <span>Вопросы</span>
        <span><Link to={'/login'}>Регистрация/Вход</Link></span>
      </div>
      <div>
        <Box sx={{position:'absolute', bottom: 20 , right: 20, transform: "translateZ(0px)" }}>
          <SpeedDial
            ariaLabel="SpeedDial basic example"
            icon={<SpeedDialIcon />}
          >
            {actions.map((action) => (
              <SpeedDialAction
                key={action.name}
                icon={action.icon}
                tooltipTitle={action.name}
              />
            ))}
          </SpeedDial>
        </Box>
      </div>
    </div>
  );
}

export default Navigation;
