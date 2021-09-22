import { useContext } from "react";
import Message from "../components/Message";

import { AuthContext } from "./../auth/AuthContext";
import Loader from "./../components/Loader/index";

const Users = () => {
  const { db, loading, error, deleteData } = useContext(AuthContext);

  return (
    <>
      <h1>Usuarios</h1>
      {loading && <Loader />}
      {error && (
        <Message
          error={`Error: ${error.status} ${error.statusText}`}
          bgColor="#dc3545"
        />
      )}
      <div className="users">
        {db
          ? db.map((item) => (
              <div key={item.id}>
                <p>
                  {item.name} {item.fatherLastName} {item.motherLastName}
                </p>
                <p>DNI: {item.dni}</p>
                <p>Fecha de Nacimiento: {item.birth}</p>
                <p>Género: {item.gender}</p>
                <p>Celular: {item.phone}</p>
                <p>Seguro: {item.insure === "me" ? "Yo" : "Yo y mi familia"}</p>
                <button className="button" onClick={() => deleteData(item.id)}>
                  Eliminar
                </button>
              </div>
            ))
          : null}
      </div>
    </>
  );
};

export default Users;
