import Menu from "./components/Menu";
import Category from "./components/Category";
import Library from "./components/Library";
import { useEffect, useState } from "react";
import "./assets/styles/app.css";

function App() {
  const [tools, setTools] = useState([]);
  const [filteredTools, setFilteredTools] = useState([]);
  const defaultCategory = "Herramientas Web";

  useEffect(() => {
    fetch("/toolkit/tools.json")
      .then((response) => response.json())
      .then((data) => {
        setTools(data);
        setFilteredTools(
          data.filter((tool) => tool.category === defaultCategory)
        );
      })
      .catch((error) => console.error("Error al cargar el JSON:", error));
  }, []);

  const handleSelectCategory = (category) => {
    const filtered = tools.filter((tool) => tool.category === category);
    setFilteredTools(filtered);
  };

  return (
    <div className="App">
      <div className="App__menu">
        <Menu />
        <Category
          selectCategory={handleSelectCategory}
          defaultCategory={defaultCategory}
        />
      </div>
      <Library tools={filteredTools} />
    </div>
  );
}

export default App;
