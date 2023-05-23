import { useEffect } from "react";
import styles from "./Login.module.scss";
import { useNavigate } from "react-router-dom";
import LoginForm from "../../components/LoginForm/LoginForm";
import useCookie from "../../hooks/useCookie";


const Login = () => {
  const { isCookie } = useCookie();
  const navigate = useNavigate();

  useEffect(() => {
    if (isCookie) {
      navigate("/profile");
    }
  }, [isCookie, navigate]);

  return (
    <main className={styles.login}>
      <section className={styles.loginContent}>
        <LoginForm />
      </section>
    </main>
  );
};

export default Login;
