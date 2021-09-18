import React from "react";

const Title = ({ subTitle, subTitleBlue, paragraph }) => {
  return (
    <>
      <h2>
        {subTitle} <span>{subTitleBlue}</span>
      </h2>

      <p>{paragraph}</p>
    </>
  );
};

export default Title;
