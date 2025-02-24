import styles from "./Header.module.css";
import Logo from "./Logo/Logo";
import Navigation from "./navigation/Navigation";
import Social from "./social/Social";

function Header() {
  return (
    <header className={styles.backGraund}>
      <div className={styles.header}>
        <Logo />
        <Navigation />
        <Social />
      </div>
    </header>
  );
}

export default Header;
