import React from "react";
import styles from "./Button.module.scss";
import PropTypes from "prop-types";
import { ButtonProps } from "./ButtonProps";

const Button = (props: ButtonProps): JSX.Element => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (props.clickHandler) {
      props.clickHandler(event);
    }
  };

  const getButtonClassName = () => {
    switch (props.style) {
      case "login":
        return styles.buttonLogin;
      case "edit":
        return styles.buttonEdit;
      case "transaction":
        return styles.buttonTransaction;
      default:
        return styles.button;
    }
  };

  return (
    <button
      id={props.id}
      className={getButtonClassName()}
      onClick={handleClick}
      type={props.type}
      disabled={props.isDisabled}
    >
      {props.value}
    </button>
  );
};

Button.propTypes = {
  id: PropTypes.string.isRequired,
  clickHandler: PropTypes.func,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  style: PropTypes.oneOf(["login", "edit", "transaction"]),
  isDisabled: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
};

Button.defaultProps = {
  type: "button",
  isDisabled: false,
};

export default Button;
