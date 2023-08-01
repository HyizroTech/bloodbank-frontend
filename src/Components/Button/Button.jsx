import React from "react";

const Button = (props) => {
  return (
    <button type="button" className={props.className} onClick={props.onClick}>
      {props.value}
    </button>
  );
};

export default Button;
