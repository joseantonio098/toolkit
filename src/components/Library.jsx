import "../assets/styles/library.css";

function Library() {
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
        <div className="library__cont-opt">
          <div className="library__cont-opt-cont">
            <img
              className="library__cont-opt-cont-img"
              src="https://diwprog.s3.amazonaws.com/imgTools/googlePageSpeed.png"
              alt=""
            />
            <p className="library__cont-opt-cont-name">Google PageSpeed</p>
          </div>
          <div className="library__cont-opt-desc">
            <p className="library__cont-opt-desc-txt">
              Es una herramienta que analiza y mejora la velocidad y el
              rendimiento de páginas web mediante recomendaciones para optimizar
              recursos, como imágenes, CSS y JavaScript, y gestionar el caché
              del navegador. Su objetivo es proporcionar una experiencia de
              usuario más rápida y eficiente.
            </p>
          </div>
          <a
            target="blank"
            href="https://pagespeed.web.dev/"
            className="library__cont-opt-link"
          >
            Enlace directo
          </a>
        </div>
        <div className="library__cont-opt">
          <div className="library__cont-opt-cont">
            <img
              className="library__cont-opt-cont-img"
              src="https://diwprog.s3.amazonaws.com/imgTools/w3cMarkupValidation.png"
              alt=""
            />
            <p className="library__cont-opt-cont-name">W3C Markup Validation</p>
          </div>
          <div className="library__cont-opt-desc">
            <p className="library__cont-opt-desc-txt">
              Es una herramienta que verifica la validez del código HTML y XHTML
              de una página web, asegurando que cumpla con los estándares
              establecidos por el World Wide Web Consortium (W3C). Ayuda a
              detectar errores y mejorar la compatibilidad y accesibilidad de
              las páginas web.
            </p>
          </div>
          <a
            target="blank"
            href="https://validator.w3.org/"
            className="library__cont-opt-link"
          >
            Enlace directo
          </a>
        </div>
        <div className="library__cont-opt">
          <div className="library__cont-opt-cont">
            <img
              className="library__cont-opt-cont-img"
              src="https://diwprog.s3.amazonaws.com/imgTools/canIuse.png"
              alt=""
            />
            <p className="library__cont-opt-cont-name">Can I Use</p>
          </div>
          <div className="library__cont-opt-desc">
            <p className="library__cont-opt-desc-txt">
              Es una herramienta en línea que proporciona información sobre la
              compatibilidad de características web (como HTML, CSS y
              JavaScript) en diferentes navegadores y versiones. Permite a los
              desarrolladores verificar el soporte de tecnologías web en
              diversos navegadores para asegurar que sus sitios funcionen
              correctamente para todos los usuarios.
            </p>
          </div>
          <a
            target="blank"
            href="https://caniuse.com/"
            className="library__cont-opt-link"
          >
            Enlace directo
          </a>
        </div>
        <div className="library__cont-opt">
          <div className="library__cont-opt-cont">
            <img
              className="library__cont-opt-cont-img"
              src="https://diwprog.s3.amazonaws.com/imgTools/GTmetrix.png"
              alt=""
            />
            <p className="library__cont-opt-cont-name">GTmetrix</p>
          </div>
          <div className="library__cont-opt-desc">
            <p className="library__cont-opt-desc-txt">
              Es una herramienta en línea que analiza el rendimiento de las
              páginas web, proporcionando informes detallados sobre la velocidad
              de carga y las recomendaciones para mejorarla. Evalúa aspectos
              como el tiempo de carga, el tamaño de la página y el número de
              solicitudes, y ofrece sugerencias basadas en las mejores prácticas
              para optimizar el rendimiento y la experiencia del usuario.
            </p>
          </div>
          <a
            target="blank"
            href="https://gtmetrix.com/"
            className="library__cont-opt-link"
          >
            Enlace directo
          </a>
        </div>
        <div className="library__cont-opt">
          <div className="library__cont-opt-cont">
            <img
              className="library__cont-opt-cont-img"
              src="https://diwprog.s3.amazonaws.com/imgTools/similarWeb.png"
              alt=""
            />
            <p className="library__cont-opt-cont-name">SimilarWeb</p>
          </div>
          <div className="library__cont-opt-desc">
            <p className="library__cont-opt-desc-txt">
              Es una herramienta de análisis de tráfico web que proporciona
              información sobre el rendimiento y las métricas de visitantes de
              sitios web. Ofrece datos sobre el tráfico de un sitio, las fuentes
              de tráfico, la demografía de los usuarios y las tendencias de uso.
              También permite comparar el desempeño de diferentes sitios web y
              obtener insights sobre la competencia.
            </p>
          </div>
          <a
            target="blank"
            href="https://www.similarweb.com/"
            className="library__cont-opt-link"
          >
            Enlace directo
          </a>
        </div>
        <div className="library__cont-opt">
          <div className="library__cont-opt-cont">
            <img
              className="library__cont-opt-cont-img"
              src="https://diwprog.s3.amazonaws.com/imgTools/waybackMachine.png"
              alt=""
            />
            <p className="library__cont-opt-cont-name">Wayback Machine</p>
          </div>
          <div className="library__cont-opt-desc">
            <p className="library__cont-opt-desc-txt">
              Es un servicio en línea proporcionado por la Internet Archive que
              permite ver versiones archivadas de páginas web en diferentes
              momentos del pasado. Los usuarios pueden acceder a copias
              históricas de sitios web para ver cómo lucían y cómo funcionaban
              en fechas anteriores, lo que resulta útil para investigación,
              recuperación de información y análisis de evolución de sitios web.
            </p>
          </div>
          <a
            target="blank"
            href="https://web.archive.org/"
            className="library__cont-opt-link"
          >
            Enlace directo
          </a>
        </div>
      </div>
    </div>
  );
}

export default Library;
