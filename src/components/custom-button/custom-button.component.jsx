import React from "react";
import "./custom-button.styles.css";

const CustomButton = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className={`${props.className ? props.className : ""} custom-button`}
    >
      {children}
    </button>
  );
};

export default CustomButton;
