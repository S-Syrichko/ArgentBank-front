import ProfileAccount from "../../components/ProfileAccount/ProfileAccount";
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";
import styles from "./Profile.module.scss";

const Profile = () => {
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
