import { useState, useEffect } from "react";
import "./Header.css";
import Logo from "./images/alfastore-icon.png";
import Menu from "./images/menubar.png";
import Admin from "./images/admin.png";

const Header = () => {
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
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

  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <header className="header-mobile">
      <div className="box-left">
        <img className="image" src={Logo.src} alt="" />
        <h2 className="title">Alfastore</h2>
      </div>
      <div className="box-mid" onClick={toggleMenu}>
        <img className="menubar" src={Menu.src} alt="" />
        {openMenu ? (
          <div className="close">
            <ul>
              {categories.map((category) => (
                <a
                  key={category._id}
                  href={`/categoria/?category_name=${category.name}&category_id=${category._id}`}
                >
                  <li>{category.name}</li>
                </a>
              ))}
            </ul>
          </div>
        ) : null}
      </div>

      <div className="box-right">
        <div className="box-image">
          <img className="image" src={Admin.src} alt="" />
        </div>
        <a href="/admin">
          <h2 className="title">Admin</h2>
        </a>
      </div>
    </header>
  );
};

export default Header;
