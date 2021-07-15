import React from "react";
// import "./custom-button.styles.css";

import { Button } from "./custom-button.styles";

const CustomButton = ({ children, ...props }) => {
  return <Button {...props}>{children}</Button>;
};

export default CustomButton;
