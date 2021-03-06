import "./Styles/App.scss";
import AppRouter from "./routers/AppRouter";
import { AuthContext } from "./auth/AuthContext";
import useForm from "./hooks/useForm";
import { useEffect, useState } from "react";
import { helpHttp } from "./helpers/helpHttp";

const App = () => {
  const initialForm = {
    dni: "",
    birth: "",
    phone: "",
    name: "",
    fatherLastName: "",
    motherLastName: "",
    gender: "masculino",
    insure: "me",
  };

  const [protectionPolicy, setProtectionPolicy] = useState(false);
  const [shippingPolicy, setShippingPolicy] = useState(false);

  const [db, setDb] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  let url = "http://localhost:5000/patients";

  useEffect(() => {
    setLoading(true);
    helpHttp()
      .get(url)
      .then((result) => {
        console.log(result);
        if (!result.err) {
          setDb(result);
          setError(null);
          setLoading(false);
        } else {
          setDb(null);
          setError(result);
          setLoading(false);
        }
      });
  }, [url]);

  const createData = (data) => {
    data.id = Date.now();

    let options = {
      body: data,
      headers: {
        "content-type": "application/json",
      },
    };

    helpHttp()
      .post(url, options)
      .then((result) => {
        console.log(result);
        if (!result.err) {
          setDb([...db, result]);
        } else {
          setError(result);
        }
      });
  };

  const deleteData = (id) => {
    let isDeleted = window.confirm("Estas seguro de elimar");

    if (isDeleted) {
      let endpoint = `${url}/${id}`;

      let options = {
        headers: {
          "content-type": "application/json",
        },
      };

      helpHttp()
        .del(endpoint, options)
        .then((result) => {
          if (!result.err) {
            setDb(db.filter((item) => item.id !== id));
          } else {
            setError(result);
          }
        });
    } else {
      return;
    }
  };

  const validateForm = (form) => {
    let errors = {};

    const regexDNI = /^\d{8}(?:[-\s]\d{4})?$/;
    const regexPhone = /^\d{9}(?:[-\s]\d{4})?$/;
    const regexNamesOrLastNames = /^[a-z ,.'-]+$/i;

    if (!form.name.trim()) {
      errors.name = "El campo es requerido";
    } else if (!regexNamesOrLastNames.test(form.name.trim())) {
      errors.name = `${form.name} no es valido`;
    }

    if (!form.fatherLastName.trim()) {
      errors.fatherLastName = "El campo es requerido";
    } else if (!regexNamesOrLastNames.test(form.fatherLastName.trim())) {
      errors.fatherLastName = `${form.fatherLastName} no es valido`;
    }

    if (!form.motherLastName.trim()) {
      errors.motherLastName = "El campo es requerido";
    } else if (!regexNamesOrLastNames.test(form.motherLastName.trim())) {
      errors.motherLastName = `${form.motherLastName} no es valido`;
    }

    if (!form.dni.trim()) {
      errors.dni = "El campo es requerido";
    } else if (!regexDNI.test(form.dni.trim())) {
      errors.dni =
        "El DNI ingresado no es correcto (8 caracteres y solo numeros)";
    }

    if (!form.birth.trim()) {
      errors.birth = "El campo es requerido";
    }
    if (!form.phone.trim()) {
      errors.phone = "El campo es requerido";
    } else if (!regexPhone.test(form.phone.trim())) {
      errors.phone =
        "El N??mero de tel??fono ingresado no es correcto (9 caracteres y solo numeros)";
    }

    return errors;
  };

  const { form, setForm, errors, handleChange, handleBlur } = useForm(
    initialForm,
    validateForm
  );

  const handleCheckedProtectionPolicy = (e) => {
    setProtectionPolicy(e.target.checked);
  };

  const handleCheckedShippingPolicy = (e) => {
    setShippingPolicy(e.target.checked);
  };

  const handleKeyDown = (e) => {
    let span = e.target.previousElementSibling,
      input = e.target,
      size = input.value.length;

    if (size > 0) {
      span.style.top = "2px";
      input.style.marginTop = ".8rem";
    } else {
      span.style.top = "14px";
      input.style.marginTop = "0px";
    }
  };

  return (
    <div className="wrapper">
      <AuthContext.Provider
        value={{
          initialForm,
          form,
          setForm,
          errors,
          protectionPolicy,
          shippingPolicy,
          db,
          loading,
          error,
          createData,
          deleteData,
          handleChange,
          handleBlur,
          handleCheckedProtectionPolicy,
          handleCheckedShippingPolicy,
          handleKeyDown,
        }}
      >
        <AppRouter />
      </AuthContext.Provider>
    </div>
  );
};

export default App;
