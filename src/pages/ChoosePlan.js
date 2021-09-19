import { useEffect, useRef, useState } from "react";
import CardMonthly from "../components/Card/CardMonthly";
import Step from "../components/Step";
import Title from "../components/Title";
import base from "../images/Base.png";
import shadow from "../images/Illustration-1.png";
import illustration from "../images/Illustration.png";

const ChoosePlan = () => {
  // const { form, users, setUsers } = useContext(AuthContext);

  useEffect(() => {
    const cards = [...document.querySelectorAll(".cards > .price")];

    for (let i = 0; i < cards.length; i++) {
      cards[i].addEventListener("click", (e) => {
        if (i === 0) {
          cards[0].classList.add("card-active");
          cards[1].classList.remove("card-active");
          cards[2].classList.remove("card-active");
          cards[3].classList.remove("card-active");
          cards[0].children[1].style.display = "block";
          cards[1].children[1].style.display = "none";
          cards[2].children[1].style.display = "none";
          cards[3].children[1].style.display = "none";
        }
        if (i === 1) {
          cards[0].classList.remove("card-active");
          cards[1].classList.add("card-active");
          cards[2].classList.remove("card-active");
          cards[3].classList.remove("card-active");
          cards[3].children[1].style.display = "none";
          cards[2].children[1].style.display = "none";
          cards[0].children[1].style.display = "none";
          cards[1].children[1].style.display = "block";
        }
        if (i === 2) {
          cards[0].classList.remove("card-active");
          cards[1].classList.remove("card-active");
          cards[2].classList.add("card-active");
          cards[3].classList.remove("card-active");
          cards[2].children[1].style.display = "block";
          cards[1].children[1].style.display = "none";
          cards[0].children[1].style.display = "none";
          cards[3].children[1].style.display = "none";
        }
        if (i === 3) {
          cards[0].classList.remove("card-active");
          cards[1].classList.remove("card-active");
          cards[2].classList.remove("card-active");
          cards[3].classList.add("card-active");
          cards[2].children[1].style.display = "none";
          cards[1].children[1].style.display = "none";
          cards[0].children[1].style.display = "none";
          cards[3].children[1].style.display = "block";
        }
      });
    }
  }, []);

  return (
    <section className="choosePlan">
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

      <div className="login__form  choosePlan__content">
        <Step first={2} last={7} />

        <Title
          subTitle="Elige"
          subTitleBlue="tu protección"
          paragraph="Selecciona tu plan de salud ideal"
        />

        <div className="cards">
          <CardMonthly plan="Básico" amount="160" />
          <CardMonthly plan="Avanzado" amount="200" />
          <CardMonthly plan="Premium" amount="250" />
          <CardMonthly plan="Full" amount="500" />
        </div>

        <div className="cardBenefits">
          <h3 className="cardBenefits__title">Cuentas con estos beneficios:</h3>
          <div className="cardBenefits__head">
            <div>
              <h5>Cobertura máxima</h5>
              <span>S/1MM</span>
              <button className="button">Plan Básico</button>
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
            <p className="heartBlack">🖤 Médico a domicilio</p>
            <p className="heartBlack">🖤 Chequeos preventivos</p>
            <p className="heartBlack">🖤 Reembolso nacional</p>
            <p className="heartBlack">🖤 Reembolso internacional</p>
          </div>
        </div>

        <div className="services">
          <h2 className="services__title">
            Revisa nuestros <span>servicios y exclusiones</span>
          </h2>

          <div className="services__item">
            <h3>Servicios brindados</h3>
            <span>&#709;</span>
          </div>

          <div className="services__item">
            <h3>Exclusiones</h3>
            <span>&#709;</span>
          </div>
        </div>

        <div className="buyPlan">
          <a href="https://gmail.com">Enviar cotizacion por correo</a>
          <button className="button">Comprar plan</button>
        </div>
      </div>
    </section>
  );
};

export default ChoosePlan;
