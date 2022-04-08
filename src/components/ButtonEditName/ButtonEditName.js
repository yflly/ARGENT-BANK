import React from "react";
import "./ButtonEditName.css";

const ButtonEditName = ({ className, text, action }) => {
  return (
    <button className={className} onClick={action}>
      {text}
    </button>
  );
};

export default ButtonEditName;
