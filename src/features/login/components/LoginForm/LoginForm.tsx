import Button from "../../../../components/Button/Button";
import styles from "./LoginForm.module.scss";

const LoginForm = () => {
  return (
    <div>
      <i className="fa fa-user-circle sign-in-icon"></i>
      <h1>Sign In</h1>
      <form>
        <div className={styles.inputWrapper}>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" />
        </div>
        <div className={styles.inputWrapper}>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
        </div>
        <div className={styles.inputRemember}>
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        <Button id="submit-form" type="submit" value="Sign In" />
      </form>
    </div>
  );
};

export default LoginForm;
