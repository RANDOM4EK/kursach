import styles from "./Header.module.css";
import Logo from "./Logo/Logo";
import Navbar from "../Navbar/Navbar";
import Social from "./social/Social";

function Header() {
  return (
    <header className={styles.backGraund}>
      <div className={styles.header}>
        <Logo />
        <Navbar/>
        <Social />
      </div>
    </header>
  );
}

export default Header;
