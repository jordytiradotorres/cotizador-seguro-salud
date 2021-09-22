import React from "react";

const Message = ({ error, bgColor }) => {
  let styles = {
    backgroundColor: bgColor,
    padding: "1rem",
    marginBottom: "1rem",
  };

  return (
    <div style={styles}>
      <p>{error}</p>
    </div>
  );
};

export default Message;
