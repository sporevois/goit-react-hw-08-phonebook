import styles from '../HomePage/HomePage.module.css';

import GreeetMessage from 'components/GreetMessage/GreetMessage';

const HomePage = () => {
  return (
    <div className={styles.container}>
      <GreeetMessage />
    </div>
  );
};

export default HomePage;
