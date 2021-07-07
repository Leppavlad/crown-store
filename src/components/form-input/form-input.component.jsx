import React from "react";
import "./form-input.styles.css";

const Input = ({ handleChange, label, ...rest }) => {
  return (
    <div className="input-group">
      <input onChange={handleChange} {...rest} />
      {label ? (
        <label
          className={`${rest.value.length ? "shrink" : ""} form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default Input;
