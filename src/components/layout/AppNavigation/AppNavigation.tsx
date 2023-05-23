import styles from "./AppNavigation.module.scss";
import { NavLink, useNavigate } from "react-router-dom";
import { removeCookie } from "typescript-cookie";
import { logout } from "../../../store/features/userSlice";
import { useAppDispatch, useAppSelector } from "../../../store/store";

const AppNavigation = () => {
  const token = useAppSelector((state) => state.user.token);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();


  const handleLogout = () => {
    dispatch(logout());
    removeCookie("token");
    navigate("/");
  };

  return (
    <div>
      <NavLink className={styles.navItem} to="/login">
        <i className="fa fa-user-circle"></i>
        <span> Sign In </span>
      </NavLink>
      {token && (
        <button className={styles.navItem} onClick={handleLogout}>
          <i className="fa fa-sign-out"></i>
          <span> Sign Out </span>
        </button>
      )}
    </div>
  );
};

export default AppNavigation;
