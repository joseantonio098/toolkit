import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../assets/styles/category.css";

function Category() {
  return (
    <div className="category">
      <div className="category__title">
        <p className="category__title-txt">CATEGORÍAS</p>
      </div>
      <div className="category__option">
        <div className="category__option-opt">
          <p className="category__option-opt-txt">Herramientas Web</p>
        </div>
        <div className="category__option-opt">
          <p className="category__option-opt-txt">Librearías Javascript</p>
        </div>
        <div className="category__option-opt">
          <p className="category__option-opt-txt">Extensiones - Chrome</p>
        </div>
        <div className="category__option-opt">
          <p className="category__option-opt-txt">Extensiones - VS Code</p>
        </div>
        <div className="category__option-opt">
          <p className="category__option-opt-txt">Diseño Web</p>
        </div>
        <div className="category__option-opt">
          <p className="category__option-opt-txt">Tecnologías Web</p>
        </div>
      </div>
    </div>
  );
}

export default Category;
