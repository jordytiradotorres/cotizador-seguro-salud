import base from "../images/Base.png";
import shadow from "../images/Illustration-1.png";

const ChoosePlan = () => {
  // const { form, users, setUsers } = useContext(AuthContext);

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

      <div className="choosePlan__content"></div>
    </section>
  );
};

export default ChoosePlan;
