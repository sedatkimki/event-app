/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import { Link } from "react-router-dom";
function Navbar() {
  const [isActive, setIsActive] = useState(false);
  const handeToggleMenu = (e) => {
    setIsActive((current) => !current);
  };
  return (
    <header className={isActive ? "navbar open " : "navbar"}>
      <nav className=" container container-pall flex flex-jc-sb flex-ai-c">
        <div className="overlay">
          <Link to="/about" onClick={handeToggleMenu}>
            Konser
          </Link>
          <Link to="/" onClick={handeToggleMenu}>
            Tiyatro
          </Link>
          <Link to="/about" onClick={handeToggleMenu}>
            Festival
          </Link>
        </div>

        <a href="/" className="navbar-logo">
          <h1>EventApp</h1>
        </a>

        <a
          href="#"
          className="navbar-toggle hide-for-desktop "
          onClick={handeToggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </a>

        <div className="navbar-links hide-for-mobile">
          <Link to="/">Konser</Link>
          <Link to="/">Tiyatro</Link>
          <Link to="/">Festival</Link>
        </div>

        <button type="button" className="navbar-btn hide-for-mobile">
          Bul
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
