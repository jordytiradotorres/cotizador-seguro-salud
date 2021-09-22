import React from "react";

const Button = ({ content, disabled, type }) => {
  return (
    <button type={type} className="button" disabled={disabled}>
      {content}
    </button>
  );
};

export default Button;
