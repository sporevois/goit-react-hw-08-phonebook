import styles from '../GreetMessage/GreetMessage.module.css';

const GreeetMessage = () => {
  return (
    <div className={styles.container}>
      <p className={styles.message}>
        Welcome to online contact storage! We hope this application will be
        useful for you. Click "LOGIN" or "REGISTER" to enter.
      </p>
    </div>
  );
};
export default GreeetMessage;
