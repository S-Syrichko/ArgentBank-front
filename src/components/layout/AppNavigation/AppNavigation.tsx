import { useNavigate } from "react-router-dom";
import { logout } from "../../../store/features/userSlice";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import styles from "./AppNavigation.module.scss";

const AppNavigation = () => {
  const isUserLogged = useAppSelector((state) => state.user.isLogged);
  const firstName = useAppSelector((state) => state.user.userData.firstName);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleProfile = () => {
    if (isUserLogged) {
      navigate("/profile");
    } else {
      navigate("/login");
    }
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <div>
      <button className={styles.navItem} onClick={handleProfile}>
        <i className="fa fa-user-circle"></i>
        {isUserLogged ? <span> {firstName} </span> : <span> Sign In</span>}
      </button>
      {isUserLogged && (
        <button className={styles.navItem} onClick={handleLogout}>
          <i className="fa fa-sign-out"></i>
          <span> Sign Out </span>
        </button>
      )}
    </div>
  );
};

export default AppNavigation;
