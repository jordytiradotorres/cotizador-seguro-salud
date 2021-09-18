import React from "react";

import base from "../../images/Base.png";
import shadow from "../../images/Illustration-1.png";
import LoginInformation from "./LoginInformation";
import LoginForm from "./LoginForm";

const LoginWrapper = () => {
  return (
    <section className="login">
      <div className="login__hero">
        <img src={base} alt="base" className="login__base" />
        <img src={shadow} alt="shadow" className="login__shadow" />
      </div>

      <div className="login__wrapper">
        <LoginInformation />
        <LoginForm />
      </div>
    </section>
  );
};

export default LoginWrapper;
