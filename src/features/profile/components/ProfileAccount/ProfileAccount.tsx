import styles from "./ProfileAccount.module.scss";
import Button from "../../../../components/Button/Button";

const ProfileAccount = () => {
  return (
    <section className={styles.account}>
      <div className={styles.accountWrapper}>
        <h3>Argent Bank Checking (x8349)</h3>
        <p className={styles.accountAmount}>$2,082.79</p>
        <p className={styles.accountDescription}>Available Balance</p>
      </div>
      <div className={styles.accountWrapperCta}>
      <Button id="view-account" type="button" value="View transactions" style="transaction" />
      </div>
    </section>
  );
};

export default ProfileAccount;
