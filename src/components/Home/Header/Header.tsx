import React, { useState } from 'react';
import style from './Heder.module.css';
import logo from "../../../assets/logo.png";
import icon from "../../../assets/icon.svg";
import { Link } from 'react-router-dom';

export default function Header() {
  const [isFormVisible, setFormVisible] = useState(false);

  const handleOpenForm = () => {
    setFormVisible(true);
  };

  const handleCloseForm = () => {
    setFormVisible(false);
  };

  return (
    <header className={style.header}>
      <div className={style.logo}> <Link to="/"><img src={logo} alt="" /></Link></div>
      <div className={style.navigation}>
        <span> <Link to="/">Main Page</Link></span>
        <span> <Link to="/Categories">Categories</Link></span>
        <span><Link to="/All_Product">All products</Link></span>
        <span onClick={handleOpenForm}>Registr</span>
      </div>
      <div className={style.purchases}><Link to={'/basket'}><img src={icon} alt="" /></Link></div>
      {isFormVisible && (
        <div className={style.form_container}>
          <form onSubmit={(e) => { e.preventDefault(); handleCloseForm(); }}>
            <h2>Регистрация</h2>
            <input type="text" name="name" placeholder="Имя" />
            <input type="tel" name="phone" placeholder="Номер телефона" />
            <input type="email" name="email" placeholder="Электронная почта" />
            <button type="submit">Отправить</button>
          </form>
        </div>
      )}
    </header>
  );
}
