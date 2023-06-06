import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { setCookie } from "typescript-cookie";
import Button from "../../../../components/Button/Button";
import { useAppSelector } from "../../../../store/store";
import useLoginForm from "../../hooks/useLoginForm";
import styles from "./LoginForm.module.scss";

const LoginForm = () => {
  const navigate = useNavigate();
  const { handleSubmit, resetForm } = useLoginForm();
  const [remember, setRemember] = useState<boolean>(false);
  //store
  const loginStatus = useAppSelector((state) => state.user.loginStatus);
  const loginError = useAppSelector((state) => state.user.loginError);
  const token = useAppSelector((state) => state.user.token);

  useEffect(() => {
    if (loginStatus === "resolved") {
      if (remember) {
        setCookie("token", token, { expires: 7 });
      }
      navigate("/profile");
    } else if (loginStatus === "rejected") {
      resetForm();
    }
  }, [loginStatus, navigate]);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      username: { value: string };
      password: { value: string };
    };

    const email = target.username.value;
    const password = target.password.value;

    handleSubmit(email, password);
  };

  return (
    <div>
      <i className="fa fa-user-circle sign-in-icon"></i>
      <h1>Sign In</h1>
      <form id="login-form" onSubmit={onSubmit}>
        <div className={styles.inputWrapper}>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" required />
        </div>
        <div className={styles.inputWrapper}>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" required />
        </div>
        <div className={styles.inputRemember}>
          <input
            type="checkbox"
            id="remember-me"
            checked={remember}
            onChange={(e) => setRemember(e.target.checked)}
          />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        <div className={styles.error}>{loginError}</div>
        <Button id="submit-form" type="submit" value="Sign In" style="login" />
      </form>
    </div>
  );
};

export default LoginForm;
