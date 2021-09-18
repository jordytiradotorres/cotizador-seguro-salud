import React from "react";

const Field = ({
  type,
  name,
  title,
  value,
  handleKeyDown,
  handleChange,
  handleBlur,
}) => {
  return (
    <>
      <label>
        <span>{title}</span>
        <input
          type={type}
          name={name}
          onKeyDown={handleKeyDown}
          onChange={handleChange}
          onBlur={handleBlur}
          value={value}
          required
        />
      </label>
    </>
  );
};

export default Field;
