import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../../../store/store";
import LoginForm from "../../components/LoginForm/LoginForm";
import styles from "./Login.module.scss";

const Login = () => {
  const token = useAppSelector((state) => state.user.token);
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate("/profile");
    }
  }, [token, navigate]);

  return (
    <main className={styles.login}>
      <section className={styles.loginContent}>
        <LoginForm />
      </section>
    </main>
  );
};

export default Login;
