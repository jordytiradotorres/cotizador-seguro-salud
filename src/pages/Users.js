import { useContext } from "react";
import Message from "../components/Message";

import { AuthContext } from "./../auth/AuthContext";
import Loader from "./../components/Loader/index";

const Users = () => {
  const { db, loading, error, deleteData } = useContext(AuthContext);

  return (
    <div>
      <h1>users</h1>

      {loading && <Loader />}
      {error && (
        <Message
          error={`Error: ${error.status} ${error.statusText}`}
          bgColor="#dc3545"
        />
      )}
      {db
        ? db.map((item) => (
            <div key={item.id}>
              <p>
                {item.name} {item.fatherLastName} {item.motherLastName}
              </p>
              <p>{item.dni}</p>
              <p>{item.birth}</p>
              <p>{item.gender}</p>
              <p>{item.phone}</p>
              <p>{item.insure}</p>
              <button class="button" onClick={() => deleteData(item.id)}>
                Eliminar
              </button>
            </div>
          ))
        : null}
    </div>
  );
};

export default Users;
