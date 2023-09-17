import { useState } from "react";
import Sucess from "../../notify/Success"
import "./categoryForm.css";

const CategoryForm = () => {
  const [name, setName] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const data = {
      name,
    };

    // Realizar la solicitud POST
    fetch(`${import.meta.env.PUBLIC_API}/category/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok) {
          console.log("Solicitud POST exitosa");
        } else {
          console.error("Error en la solicitud POST");
        }
      })
      .catch((error) => {
        console.error("Error en la solicitud POST:", error);
      });
  };

  return (
    <div className="box-create-size">
      <Sucess type="Categoria"/>
      <h3>Crear Categoria</h3>

      <form onSubmit={handleFormSubmit}>
        <label htmlFor="nombre">Nombre</label>
        <input
          id="nombre"
          type="text"
          placeholder="nombre.."
          value={name}
          onChange={handleNameChange}
        />
        <button type="submit">Crear</button>
      </form>
    </div>
  );
};

export default CategoryForm;
