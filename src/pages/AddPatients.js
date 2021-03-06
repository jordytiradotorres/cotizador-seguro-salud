import React, { useContext } from "react";
import { useHistory } from "react-router";
import { AuthContext } from "../auth/AuthContext";
import Button from "../components/Button";
import Field from "../components/Field";
import Title from "../components/Title";
import base from "../images/Base.png";
import shadow from "../images/Illustration-1.png";
import Step from "./../components/Step/index";

const AddPatients = () => {
  const {
    form,
    setForm,
    initialForm,
    errors,
    createData,
    handleChange,
    handleBlur,
    handleKeyDown,
  } = useContext(AuthContext);

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    createData(form);

    if (Object.keys(errors).length === 0) {
      setForm(initialForm);
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
          subTitleBlue={form.name.toUpperCase() || "Paciente"}
          paragraph="Valida que los datos sean correctos"
        />

        <p className="subtitle">Datos personales del titular</p>

        {/* <form onSubmit={handleSubmit}> */}
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
            <p>G??nero</p>
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
            <p>??A qu??en vamos a asegurar?</p>

            <label>
              <Field
                type="radio"
                name="insure"
                handleChange={handleChange}
                value="me"
                checked={form.insure === "me"}
              />
              <span>A m??</span>
            </label>

            <label>
              <Field
                type="radio"
                name="insure"
                handleChange={handleChange}
                value="meAndFamily"
                checked={form.insure === "meAndFamily"}
              />
              <span>A m?? y a mi familia</span>
            </label>
          </div>

          <Button type="submit" content="Continuar" />
        </form>
      </div>
    </section>
  );
};

export default AddPatients;
