import styles from "./ProfileHeader.module.scss";
import Button from "../../../../components/Button/Button";

const ProfileHeader = () => {
  return (
    <div className={styles.header}>
      <h1>
        Welcome back
        <br />
        Tony Jarvis!
      </h1>
      <Button id="edit-name" type="button" value="Edit Name" style="edit" />
    </div>
  );
};

export default ProfileHeader;
