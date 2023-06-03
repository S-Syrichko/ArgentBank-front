import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../../../store/store";
import ProfileAccount from "../../components/ProfileAccount/ProfileAccount";
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";
import styles from "./Profile.module.scss";

const Profile = () => {
  const token = useAppSelector((state) => state.user.token);
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token]);

  return (
    <main className={styles.profile}>
      <ProfileHeader />
      <h2 className="sr-only">Accounts</h2>
      <ProfileAccount />
      <ProfileAccount />
      <ProfileAccount />
    </main>
  );
};

export default Profile;
