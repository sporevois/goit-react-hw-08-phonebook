import styles from '../Logo/Logo.module.css';
const Logo = () => {
  return (
    <p className={styles.logoText}>
      <span className={styles.logoFirstPart}>PHONE</span>
      <span className={styles.logoSecondPart}>BOOK</span>
    </p>
  );
};
export default Logo;
