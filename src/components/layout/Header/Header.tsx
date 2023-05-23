import styles from "./Header.module.scss";
import { NavLink } from "react-router-dom";
import logo from "../../../assets/argentBankLogo.png";
import AppNavigation from "../AppNavigation/AppNavigation";

const Header = () => {
  return (
    <header>
      <nav className={styles.nav}>
        <NavLink className={styles.navLogo} to="/">
          <img src={logo} alt="Argent Bank Logo" />
          <h1 className="sr-only">Argent Bank</h1>
        </NavLink>
        <AppNavigation />
      </nav>
    </header>
  );
};

export default Header;
