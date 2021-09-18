import React from "react";

const Button = ({ content, disabled, handleSend }) => {
  return (
    <button className="button" disabled={disabled} onClick={handleSend}>
      {content}
    </button>
  );
};

export default Button;
