import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Logo from "./images/alfastore-icon.png";
import Menu from "./images/menubar.png";
import Admin from "./images/admin.png";

const Header = () => {
  function handleLinkClick(event) {
    location.replace(`https://example.com/#${location.pathname}`);
  }

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
            <a href={"/categoria/?category=jeans"}>
              <li>JEANS</li>
            </a>
            <a href="">
              <li>JEANS</li>
            </a>
            <a href="">
              <li>JEANS</li>
            </a>
            <a href="">
              <li>JEANS</li>
            </a>
          </ul>
        </div>
        ) : null}
      </div>

      <div className="box-right">
        <div className="box-image">
          <img className="image" src={Admin.src} alt="" />
        </div>
        <a href="/admin"><h2 className="title">Admin</h2></a>
        
      </div>
    </header>
  );
};

export default Header;
