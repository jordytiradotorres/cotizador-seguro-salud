import { useHistory } from "react-router";
import Button from "../components/Button";
import Title from "../components/Title";
import base from "../images/Base.png";
import shadow from "../images/Illustration-1.png";

const Thanks = () => {
  const history = useHistory();

  const handleSend = (e) => {
    history.push("/");
  };

  return (
    <section className="thanks">
      <div className="login__hero">
        <img src={base} alt="base" className="login__base thanks__imgBase" />
        <img
          src={shadow}
          alt="shadow"
          className="login__shadow thanks__imgShadow"
        />
      </div>

      <div className="login__form thanks__content">
        <Title subTitle="!Gracias por" subTitleBlue="confiar en nosotros" />
        <p className="description">
          Quremos conocer mas la salud de los asegurados. Un asesor{" "}
          <b>se pondra en contacto</b> contigo en las siguientes <b>48 horas</b>
        </p>

        <Button content="Ir a salud" handleSend={handleSend} />
      </div>
    </section>
  );
};

export default Thanks;
