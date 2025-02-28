import styles from './Header.module.css';
import Logo from './logo/Logo';
import Navbar from '../navbar/Navbar';
import Social from './social/Social';

const Header = () => {
  return (
    <header className={styles.backGraund}>
      <div className={styles.header}>
        <Logo />
        <Navbar />
        <Social />
      </div>
    </header>
  );
};

export default Header;
