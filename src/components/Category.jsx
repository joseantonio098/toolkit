import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../assets/styles/category.css";

function Category({ selectCategory }) {
  const categories = [
    "Herramientas Web",
    "Librerías Javascript",
    "Extensiones - Chrome",
    "Extensiones - VS Code",
    "Diseño Web",
    "Tecnologías Web",
    "Libros Pdf",
  ];
  return (
    <div className="category">
      <div className="category__title">
        <p className="category__title-txt">CATEGORÍAS</p>
      </div>
      <div className="category__option">
        {categories.map((category) => (
          <div
            className="category__option-opt"
            onClick={() => selectCategory(category)}
          >
            <p className="category__option-opt-txt" value={category}>
              {category}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;
