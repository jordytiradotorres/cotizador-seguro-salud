import React from "react";
import glShield from "../images/gl_shield-20x20.png";
import glMobile from "../images/gl_mobile-20x20.png";
import base from "../images/Base.png";
import shadow from "../images/Illustration-1.png";

const Login = () => {
  return (
    <section className="login">
      <div className="login__hero">
        <img src={base} alt="base" className="login__base" />
        <img src={shadow} alt="shadow" className="login__shadow" />
      </div>

      <div className="login__wrapper">
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

        <div className="login__form">
          <div className="gutter">
            <h2>
              Obtén tu <span>seguro ahora</span>
            </h2>

            <p>Ingresa los datos para comenzar:</p>

            <form>
              <div className="field">
                <select name="type">
                  <option value="dni">DNI</option>
                  <option value="---">---</option>
                  <option value="---">---</option>
                </select>

                <label>
                  <span>Nro. de Documento</span>
                  <input type="text" />
                </label>
              </div>
              <div className="field">
                <label>
                  <span>Fecha de Nacimiento</span>
                  <input type="date" />
                </label>
              </div>
              <div className="field">
                <label>
                  <span>Celular</span>
                  <input type="tel" />
                </label>
              </div>

              <label className="terms">
                <input type="checkbox" />
                <p>
                  Acepto la
                  <a href="/politica">
                    {" "}
                    Política de Protección de Datos Personales y los Términos y
                    Condiciones.
                  </a>
                </p>
              </label>

              <label className="terms">
                <input type="checkbox" />
                <p>
                  Acepto la
                  <a href="/politica">
                    {" "}
                    Política de Envio de Comunicaciones Comerciales
                  </a>
                </p>
              </label>

              <button className="button">Comencemos</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
