import React from "react";
import imgCheck from "../../images/gl_correct.png";

const CardMonthly = ({ plan, amount }) => {
  return (
    <div className="price">
      <span className="price__check"></span>
      <img src={imgCheck} alt="check" />
      <h3 className="price__title">{plan}</h3>
      <div className="price__total">
        <span>S/</span>
        <span>{amount}</span>
      </div>
      <p className="price__monthly">mensual</p>
    </div>
  );
};

export default CardMonthly;
