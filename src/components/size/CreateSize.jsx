import { useState, useEffect } from "react";
import "./createSize.css";

const CreateSize = () => {
  const [categories, setCategories] = useState([]);
  const [category_id, setCategory_id] = useState(null);
  const [category_name, setCategory_name] = useState(null);

  //formulario
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [name, setName] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const data = {
      name,
      category_id: category_id,
    };

    // Realizar la solicitud POST
    fetch("http://localhost:3000/size/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok) {
          // La solicitud se completó con éxito
          console.log("Solicitud POST exitosa");
          // Puedes hacer algo aquí después de una solicitud exitosa
        } else {
          // La solicitud no se completó con éxito
          console.error("Error en la solicitud POST");
        }
      })
      .catch((error) => {
        console.error("Error en la solicitud POST:", error);
      });
  };

  const fetchCategories = async () => {
    const url = window.location.href;
    const urlParams = new URLSearchParams(url.split("?")[1]);
    const category_id = urlParams.get("category_id");
    const category_name = urlParams.get("category_name");
    if (category_id != null) {
      setCategory_id(category_id);
    }
    if (category_name != null) {
      setCategory_name(category_name);
    }
    try {
      const response = await fetch(
        `${import.meta.env.PUBLIC_API}/category/categories`
      );
      if (response.ok) {
        const data = await response.json();
        setCategories(data);
      } else {
        console.error("Error al obtener las categorías");
      }
    } catch (error) {
      console.error("Error de red:", error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className="box-create-size">
      {category_name ? (
        <h3>Crear talle {"en " + category_name}</h3>
      ) : (
        <h3>Crear talle</h3>
      )}
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="categorySelect">Categoria</label>
        <select
          id="categorySelect"
          value={selectedCategory || ""}
          onChange={handleCategoryChange}
        >
          <option value="">Selecciona una categoría</option>
          {categories.map((category) => (
            <option key={category._id} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>
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

export default CreateSize;
