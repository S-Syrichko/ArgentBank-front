import styles from "./Header.module.scss";
import { NavLink } from "react-router-dom";
import logo from "../../../assets/argentBankLogo.png";

const Header = () => {
  return (
    <header>
      <nav className={styles.nav}>
        <NavLink className={styles.navLogo} to="/">
          <img src={logo} alt="Argent Bank Logo" />
          <h1 className="sr-only">Argent Bank</h1>
        </NavLink>

        <div>
          <NavLink className={styles.navItem} to="/login">
            <i className="fa fa-user-circle"></i>
            <span> Sign In </span>
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;
