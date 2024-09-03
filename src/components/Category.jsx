import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import "../assets/styles/category.css";

function Category() {
  return (
    <div className="category">
      <div className="category__option">
        <FontAwesomeIcon
          className="category__option-icon"
          icon={faLayerGroup}
        />
        <p className="category__option-txt">CATEGORÍAS</p>
      </div>
    </div>
  );
}

export default Category;
