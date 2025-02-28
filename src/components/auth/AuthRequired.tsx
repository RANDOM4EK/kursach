import { Link } from 'react-router-dom';
import styles from './AuthRequired.module.css';

const AuthRequired = () => {
  return (
    <div className={styles.container}>
      <div className={styles.message}>
        <h2>Требуется авторизация</h2>
        <p>Для доступа к этой странице необходимо авторизоваться</p>
        <Link to="/login" className={styles.loginLink}>
          Перейти к авторизации
        </Link>
      </div>
    </div>
  );
};

export default AuthRequired;
