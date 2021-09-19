import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Button from "../components/Button";
import CardBenefits from "../components/Card/CardBenefits";
import CardMonthly from "../components/Card/CardMonthly";
import Step from "../components/Step";
import Title from "../components/Title";
import base from "../images/Base.png";
import shadow from "../images/Illustration-1.png";

const ChoosePlan = () => {
  const [typePlan, setTypePlan] = useState("Básico");
  const history = useHistory();

  const handleTypePlan = (e) => {
    let parent = e.target.closest(".price");
    let text = parent.children[2];
    setTypePlan(text.textContent);
  };

  const handleSend = (e) => {
    history.push("/thanks");
  };

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
  }, [typePlan]);

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
          <CardMonthly
            plan="Básico"
            amount="160"
            handleTypePlan={handleTypePlan}
          />
          <CardMonthly
            plan="Avanzado"
            amount="200"
            handleTypePlan={handleTypePlan}
          />
          <CardMonthly
            plan="Premium"
            amount="250"
            handleTypePlan={handleTypePlan}
          />
          <CardMonthly
            plan="Full"
            amount="500"
            handleTypePlan={handleTypePlan}
          />
        </div>

        <CardBenefits typePlan={typePlan} />

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
          {/* <button className="button">Comprar plan</button> */}
          <Button content="Comprar plan" handleSend={handleSend} />
        </div>
      </div>
    </section>
  );
};

export default ChoosePlan;
