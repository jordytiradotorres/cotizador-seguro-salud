import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CardBenefits from "../components/Card/CardBenefits";
import CardMonthly from "../components/Card/CardMonthly";
import Step from "../components/Step";
import Title from "../components/Title";
import base from "../images/Base.png";
import shadow from "../images/Illustration-1.png";

const ChoosePlan = () => {
  const [typePlan, setTypePlan] = useState("Básico");

  const handleTypePlan = (e) => {
    let parent = e.target.closest(".price");
    let text = parent.children[2];
    setTypePlan(text.textContent);
  };

  useEffect(() => {
    const cards = [...document.querySelectorAll(".cards > .price")];

    cards.forEach((card, index) => {
      card.addEventListener("click", (e) => {
        let parent = e.target.closest(".price");
        parent.classList.add("card-active");
        cards[index].children[1].style.display = "block";

        const rest = cards.filter((card, i) => i !== index);
        console.log(rest);

        rest.forEach((item) => {
          item.children[1].style.display = "none";
          item.classList.remove("card-active");
        });
      });
    });
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

          <Link class="button" to="/thanks">
            Comprar plan
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ChoosePlan;
