import LoginForm from "../../components/LoginForm/LoginForm";
import styles from "./Login.module.scss";

const Login = () => {
    return (
        <main className={styles.login}>
            <section className={styles.loginContent}>
                <LoginForm />
            </section>
        </main>
    );
};

export default Login;