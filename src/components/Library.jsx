import "../assets/styles/library.css";

function Library({ tools }) {
  return (
    <div className="library">
      <div className="library__search">
        <input
          type="search"
          className="library__search-inp"
          placeholder="Empieza a buscar..."
          name=""
          id=""
        />
      </div>
      <div className="library__cont">
        {tools.map((tool, index) => (
          <div className="library__cont-opt" key={index}>
            <div className="library__cont-opt-cont">
              <img
                className="library__cont-opt-cont-img"
                src={tool.img}
                alt={tool.name}
              />
              <p className="library__cont-opt-cont-name">{tool.name}</p>
            </div>
            <div className="library__cont-opt-desc">
              <p className="library__cont-opt-desc-txt">{tool.description}</p>
            </div>
            <a
              target="_blank"
              href={tool.url}
              className="library__cont-opt-link"
            >
              Enlace directo
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Library;
