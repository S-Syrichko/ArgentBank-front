import PropTypes from "prop-types";
import Button from "../../../../components/Button/Button";
import styles from "./ProfileAccount.module.scss";
import { AccountProps } from "./ProfileAccountProps";

const ProfileAccount = ({ accountType, balance, card }: AccountProps) => {
  return (
    <section className={styles.account}>
      <div className={styles.accountWrapper}>
        <h3>Argent Bank {accountType}</h3>
        <p className={styles.accountAmount}>${balance}</p>
        <p className={styles.accountDescription}>{card ? "Current Balance":"Available Balance"}</p>
      </div>
      <div className={styles.accountWrapperCta}>
      <Button id="view-account" type="button" value="View transactions" style="transaction" />
      </div>
    </section>
  );
};

ProfileAccount.propTypes = {
  accountType: PropTypes.string.isRequired,
  balance: PropTypes.string.isRequired,
  card: PropTypes.bool,
};

export default ProfileAccount;
