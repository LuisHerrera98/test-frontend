import "./Header.css";
import Logo from "./images/alfastore-icon.png"
import Menu from "./images/menubar.png"

const Header = () => {
  return (
    <header className="header-mobile">
      <div className="box-left">
        <img className="image" src={Logo.src} alt="" />
        <h2 className="title">Alfastore</h2>
      </div>
      <div className="box-mid">
        <img className="menubar" src={Menu.src} alt="" />
      </div>

    </header>
  );
};

export default Header;
