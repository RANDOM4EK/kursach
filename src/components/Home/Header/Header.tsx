import { useState } from 'react';
import style from './Header.module.css';
import logo from "../../../assets/logo.png";
import icon from "../../../assets/icon.svg";
import { Link } from 'react-router-dom';

export default function Header() {
  const [isFormVisible, setFormVisible] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [userName, setUserName] = useState(localStorage.getItem('userName') || '');

  const handleOpenForm = () => {
    setFormVisible(true);
  };

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const phone = formData.get("phone") as string;
    const email = formData.get("email") as string;

    localStorage.setItem("userName", name);
    localStorage.setItem("userPhone", phone);
    localStorage.setItem("userEmail", email);

    setUserName(name);
    setFormVisible(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("userName");
    localStorage.removeItem("userPhone");
    localStorage.removeItem("userEmail");
    window.location.reload(); // Перезагрузка страницы
  };

  return (
    <header className={style.header}>
      <div className={style.logo}> 
        <Link to="/"><img src={logo} alt="" /></Link>
      </div>
      
      <button className={style.burger_menu} onClick={toggleMenu}>
        ☰
      </button>

      <nav className={`${style.navigation} ${isMenuOpen ? style.open : ''}`}>
        <span><Link to="/">Main Page</Link></span>
        <span><Link to="/Categories">Categories</Link></span>
        <span><Link to="/All_Product">All products</Link></span>
        {userName ? (
          <>
            <span>{userName}</span> 
            <button className={style.logoutButton} onClick={handleLogout}>Выйти из аккаунта</button>
          </>
        ) : (
          <span onClick={handleOpenForm}>Registr</span>
        )}
      </nav>

      <div className={style.purchases}>
        <Link to={'/basket'}><img src={icon} alt="" /></Link>
      </div>

      {isFormVisible && (
        <div className={style.form_container}>
          <form onSubmit={handleRegister}>
            <h2>Регистрация</h2>
            <input type="text" name="name" placeholder="Имя" required />
            <input type="tel" name="phone" placeholder="Номер телефона" required />
            <input type="email" name="email" placeholder="Электронная почта" required />
            <button type="submit">Отправить</button>
          </form>
        </div>
      )}
    </header>
  );
}
