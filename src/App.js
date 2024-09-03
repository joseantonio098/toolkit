import Menu from "./components/Menu";
import Category from "./components/Category";
import Library from "./components/Library";
import "./assets/styles/app.css";

function App() {
  return (
    <div className="App">
      <div className="App__menu">
        <Menu />
        <Category />
      </div>
      <Library />
    </div>
  );
}

export default App;
