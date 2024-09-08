import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import "../assets/styles/category.css";

function Category({ selectCategory, defaultCategory }) {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    fetch("/toolkit/categories.json")
      .then((response) => response.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => console.error("Error al cargar el JSON:", error));

    setSelectedCategory(defaultCategory);
  }, []);

  const handleCategoryClick = (category) => {
    selectCategory(category);
    setSelectedCategory(category);
  };

  return (
    <div className="category">
      <div className="category__title">
        <p className="category__title-txt">CATEGORÍAS</p>
      </div>
      <div className="category__option">
        {categories.map((category) => (
          <div
            className={`category__option-opt ${
              selectedCategory === category.name ? "category__selected" : ""
            }`}
            onClick={() => handleCategoryClick(category.name)}
          >
            <p className="category__option-opt-txt">{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;
