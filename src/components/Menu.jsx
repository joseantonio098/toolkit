import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "../assets/styles/menu.css";

function Menu() {
  return (
    <nav className="menu">
      <div className="menu__option">
        <FontAwesomeIcon className="menu__option-icon" icon={faHouse} />
        <p className="menu__option-txt">TOOLTIK</p>
      </div>
    </nav>
  );
}

export default Menu;
