import React, { useState, useEffect } from "react";
import Carpeta from "./images/carpeta-test.png";
import "./category.css";

const Category = () => {
  const [sizes, setSizes] = useState([]);
  const [category_name, setCategory_name] = useState(null);
  const [category_id, setCategory_id] = useState(null)

  const fetchSizes = async () => {
    try {
      const url = window.location.href;
      const urlParams = new URLSearchParams(url.split("?")[1]);
      const category_id = urlParams.get("category_id");
      const category_name = urlParams.get("category_name");
      if(category_name != null){
        setCategory_name(category_name);
      }
      if(category_id != null){
        setCategory_id(category_id);
      }
      const response = await fetch(
        `${import.meta.env.PUBLIC_API}/size/sizes/${category_id}`
      );
      if (response.ok) {
        const data = await response.json();
        setSizes(data);
      } else {
        console.error("Error al obtener las categorías");
      }
    } catch (error) {
      console.error("Error de red:", error);
    }
  };

  useEffect(() => {
    fetchSizes();
  }, []);

  return (
    <div>
      <div className="box-button">
        <a href= {`/size/create/?category_name=${category_name}&category_id=${category_id}`} >
          <button>
            Crear talle
          </button>
        </a>
      </div>
      <div className="category-section">
        {sizes.map((size) => (
          <a key={size._id} href={``}>
            <div>
              <img src={Carpeta.src} alt="" />
              <div>
                <p> TALLE {size.name}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Category;
