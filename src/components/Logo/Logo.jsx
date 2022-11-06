import styles from '../Logo/Logo.module.css';
const Logo = () => {
  return (
    <p>
      <b>
        <span className={styles.logoFirstPart}>PHONE</span>
        <span className={styles.logoSecondPart}>BOOK</span>
      </b>
    </p>
  );
};
export default Logo;
