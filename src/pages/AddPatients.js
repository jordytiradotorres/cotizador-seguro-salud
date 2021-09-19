import React, { useContext } from "react";
import { useHistory } from "react-router";
import { AuthContext } from "../auth/AuthContext";
import Button from "../components/Button";
import Field from "../components/Field";
import Title from "../components/Title";
import base from "../images/Base.png";
import shadow from "../images/Illustration-1.png";
import Step from "./../components/Step/index";

// import db from "../api/db.json";

const AddPatients = () => {
  const { form, errors, handleADD, handleChange, handleBlur, handleKeyDown } =
    useContext(AuthContext);

  const history = useHistory();

  const handleSend = (e) => {
    e.preventDefault();

    fetch("http://localhost:5000/patients", {
      method: "POST",
      body: JSON.stringify({
        dni: form.dni,
        birth: form.birth,
        phone: form.phone,
        name: form.name,
        fatherLastName: form.fatherLastName,
        motherLastName: form.motherLastName,
        gender: form.gender,
        insure: form.insure,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((result) => console.log(result));

    if (Object.keys(errors).length === 0) {
      history.push("/choosePlan");
    } else {
      return;
    }
  };

  return (
    <section className="addPatients">
      <div className="login__hero">
        <img
          src={base}
          alt="base"
          className="login__base addPatients__imgBase"
        />
        <img
          src={shadow}
          alt="shadow"
          className="login__shadow addPatients__imgShadow"
        />
      </div>

      <div className="login__form addPatients__content">
        <Step first={1} last={7} />

        <Title
          subTitle="Hola"
          subTitleBlue={form.name || "Paciente"}
          paragraph="Valida que los datos sean correctos"
        />

        <p className="subtitle">Datos personales del titular</p>

        {/* <form onSubmit={handleSubmit}> */}
        <form onSubmit={handleSend}>
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
              value={form.dni || ""}
            />
          </div>
          {errors.dni && <p className="error">{errors.dni}</p>}

          <div className="field">
            <Field
              type="text"
              name="name"
              title="Nombres"
              handleChange={handleChange}
              handleBlur={handleBlur}
              handleKeyDown={handleKeyDown}
              value={form.name || ""}
            />
          </div>
          {errors.name && <p className="error">{errors.name}</p>}

          <div className="field">
            <Field
              type="text"
              name="fatherLastName"
              title="Apellido Paterno"
              handleChange={handleChange}
              handleBlur={handleBlur}
              handleKeyDown={handleKeyDown}
              value={form.fatherLastName || ""}
            />
          </div>
          {errors.fatherLastName && (
            <p className="error">{errors.fatherLastName}</p>
          )}

          <div className="field">
            <Field
              type="text"
              name="motherLastName"
              title="Apellido Materno"
              handleChange={handleChange}
              handleBlur={handleBlur}
              handleKeyDown={handleKeyDown}
              value={form.motherLastName || ""}
            />
          </div>
          {errors.motherLastName && (
            <p className="error">{errors.motherLastName}</p>
          )}

          <div className="field">
            <Field
              type="date"
              name="birth"
              title="Fecha de Nacimiento"
              handleChange={handleChange}
              handleBlur={handleBlur}
              value={form.birth || ""}
            />
          </div>
          {errors.birth && <p className="error">{errors.birth}</p>}

          <div className="gender">
            <p>Género</p>
            <label>
              <Field
                type="radio"
                name="gender"
                handleChange={handleChange}
                value="masculino"
                checked={form.gender === "masculino"}
              />
              <span>Masculino</span>
            </label>

            <label>
              <Field
                type="radio"
                name="gender"
                handleChange={handleChange}
                value="femenino"
                checked={form.gender === "femenino"}
              />
              <span>Femenino</span>
            </label>
          </div>

          <div className="insure">
            <p>¿A quíen vamos a asegurar?</p>

            <label>
              <Field
                type="radio"
                name="insure"
                handleChange={handleChange}
                value="me"
                checked={form.insure === "me"}
              />
              <span>A mí</span>
            </label>

            <label>
              <Field
                type="radio"
                name="insure"
                handleChange={handleChange}
                value="meAndFamily"
                checked={form.insure === "meAndFamily"}
              />
              <span>A mí y a mi familia</span>
            </label>
          </div>

          <button type="button" onClick={handleADD}>
            agregar paciente
          </button>
          <Button content="Continuar" />
        </form>
      </div>
    </section>
  );
};

export default AddPatients;
