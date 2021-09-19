import { useEffect, useState } from "react";

const Users = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const response = fetch("http://localhost:5000/patients");

    response
      .then((result) => result.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  const handleDelete = (id) => {
    // console.log(data);
    //  data.filter((item) => item.id === id);
    // const idd = fetch(
    //   `https://my-json-server.typicode.com/jordytiradotorres/json-db/cursos/${id}`,
    //   {
    //     method: "DELETE",
    //   }
    // );
  };

  return (
    <div>
      <h1>users</h1>

      {data.map((item) => (
        <div key={item.id}>
          <h1>Nombre: {item.name}</h1>
          <p>DNI: {item.dni}</p>
          <p>Fecha de Nacimiento: {item.birth}</p>
          <p>Apellido Paterno: {item.fatherLastName}</p>
          <p>Apellido Materno: {item.motherLastName}</p>
          <p>Genero: {item.gender}</p>
          <p>Seguro: {item.insure}</p>
          <button type="button" onClick={() => handleDelete(item.id)}>
            eliminar
          </button>
        </div>
      ))}
    </div>
  );
};

export default Users;
