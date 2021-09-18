import React, { useContext } from "react";
import { AuthContext } from "../../auth/AuthContext";
import Button from "../Button";
import Field from "../Field";
import Title from "../Title";
import { useHistory } from "react-router";

const LoginForm = () => {
  const {
    form,
    errors,
    protectionPolicy,
    shippingPolicy,
    handleSubmit,
    handleChange,
    handleBlur,
    handleCheckedProtectionPolicy,
    handleCheckedShippingPolicy,
    handleKeyDown,
  } = useContext(AuthContext);

  const history = useHistory();
  console.log(history);

  const handleSend = (e) => {
    if (!errors.dni && !errors.date && !errors.phone) {
      history.push("/addPatients");
    } else {
      return;
    }
  };

  return (
    <div className="login__form">
      <div className="gutter">
        <Title
          subTitle="Obten tu"
          subTitleBlue="seguro ahora"
          paragraph="Ingresa los datos para comenzar"
        />

        <form onSubmit={handleSubmit}>
          <div className="field">
            <select name="option">
              <option value="dni">DNI</option>
              <option value="---">---</option>
              <option value="---">---</option>
            </select>

            <Field
              type="text"
              name="dni"
              title="Nro. de Documento"
              handleChange={handleChange}
              handleBlur={handleBlur}
              handleKeyDown={handleKeyDown}
              value={form.dni}
            />
          </div>
          {errors.dni && <p className="error">{errors.dni}</p>}

          <div className="field">
            <Field
              type="date"
              name="birth"
              title="Fecha de Nacimiento"
              handleChange={handleChange}
              handleBlur={handleBlur}
              value={form.birth}
            />
          </div>
          {errors.birth && <p className="error">{errors.birth}</p>}

          <div className="field">
            <Field
              type="tel"
              title="Celular"
              name="phone"
              handleKeyDown={handleKeyDown}
              handleChange={handleChange}
              handleBlur={handleBlur}
              value={form.phone}
            />
          </div>
          {errors.phone && <p className="error">{errors.phone}</p>}

          <label className="terms">
            <input
              type="checkbox"
              value={protectionPolicy}
              onClick={handleCheckedProtectionPolicy}
            />
            <p>
              Acepto la
              <a href="/politica">
                {" "}
                Política de Protección de Datos Personales y los Términos y
                Condiciones.
              </a>
            </p>
          </label>
          {!protectionPolicy && <p className="error">El campo es requerido</p>}

          <label className="terms">
            <input
              type="checkbox"
              value={shippingPolicy}
              onClick={handleCheckedShippingPolicy}
            />
            <p>
              Acepto la
              <a href="/politica">
                {" "}
                Política de Envio de Comunicaciones Comerciales
              </a>
            </p>
          </label>
          {!shippingPolicy && <p className="error">El campo es requerido</p>}

          <Button
            content="Comencemos"
            disabled={!protectionPolicy || !shippingPolicy}
            handleSend={handleSend}
            href="/addPatients"
          />
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
