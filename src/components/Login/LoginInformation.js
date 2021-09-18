import React from "react";

import glShield from "../../images/gl_shield-20x20.png";
import glMobile from "../../images/gl_mobile-20x20.png";

const LoginInformation = () => {
  return (
    <div className="login__information">
      <h1>
        Seguro de <span>Salud</span>
      </h1>

      <div className="service">
        <figure>
          <img src={glShield} alt="gl shield" />
        </figure>
        <p>Compralo de manera fácil y rápida</p>
      </div>

      <div className="service">
        <figure>
          <img src={glMobile} alt="gl shield" />
        </figure>
        <p>Cotiza y compra tu seguro 100% digital</p>
      </div>

      <div className="service">
        <figure>
          <img src={glShield} alt="gl shield" />
        </figure>
        <p>Hasta S/.12 millones de cobertuta anual</p>
      </div>

      <div className="service">
        <figure>
          <img src={glMobile} alt="gl mobile" />
        </figure>
        <p>Mas de 300 clinicas en todo el país</p>
      </div>

      <p className="login__copyright">
        &copy; {new Date().getFullYear()} RIMAC Seguros y Reaseguros
      </p>
    </div>
  );
};

export default LoginInformation;
