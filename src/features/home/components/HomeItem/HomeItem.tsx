import PropTypes from "prop-types";
import styles from "./HomeItem.module.scss";
import { HomeItemProps } from "./HomeItemProps";

const HomeItem = ({ image, header, content }: HomeItemProps) => {
  return (
    <div className={styles.item}>
      <img src={image} alt="Chat Icon" />
      <h3>{header}</h3>
      <p>{content}</p>
    </div>
  );
};

HomeItem.propTypes = {
  image: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default HomeItem;
