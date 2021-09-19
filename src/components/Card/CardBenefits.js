import React from "react";
import illustration from "../../images/Illustration.png";

const CardBenefits = ({ typePlan }) => {
  return (
    <div className="cardBenefits">
      <h3 className="cardBenefits__title">Cuentas con estos beneficios:</h3>
      <div className="cardBenefits__head">
        <div>
          <h5>Cobertura máxima</h5>
          <span>S/1MM</span>
          <button className="button">Plan {typePlan}</button>
        </div>
        <figure>
          <img src={illustration} alt="illustration" />
        </figure>
      </div>

      <div className="cardBenefits__body">
        <p className="heartBlue">
          💙 Lima <span>(zona de cobertura)</span>
        </p>
        <p className="heartBlue">
          💙 +30 clínicas <span>(en red afiliada)</span>
        </p>
        <p
          className={
            typePlan === "Avanzado" ||
            typePlan === "Premium" ||
            typePlan === "Full"
              ? "heartBlue"
              : "heartBlack"
          }
        >
          💙 Médico a domicilio
        </p>
        <p
          className={
            typePlan === "Avanzado" ||
            typePlan === "Premium" ||
            typePlan === "Full"
              ? "heartBlue"
              : "heartBlack"
          }
        >
          💙 Chequeos preventivos
        </p>
        <p
          className={
            typePlan === "Premium" || typePlan === "Full"
              ? "heartBlue"
              : "heartBlack"
          }
        >
          💙 Reembolso nacional
        </p>
        <p className={typePlan === "Full" ? "heartBlue" : "heartBlack"}>
          💙 Reembolso internacional
        </p>
      </div>
    </div>
  );
};

export default CardBenefits;
