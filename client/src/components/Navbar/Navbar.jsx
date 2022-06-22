/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
function Navbar() {
  const [isActive, setIsActive] = useState(false);
  const handeToggleMenu = (e) => {
    setIsActive((current) => !current);
  };
  return (
    <header className={isActive ? "navbar open " : "navbar"}>
      <nav className=" container container-pall flex flex-jc-sb flex-ai-c">
        <div className="overlay">
          <Link to="/search?category=konser" onClick={handeToggleMenu}>
            Konser
          </Link>
          <Link to="/search?category=tiyatro" onClick={handeToggleMenu}>
            Tiyatro
          </Link>
          <Link to="/search?category=festival" onClick={handeToggleMenu}>
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
          <Link to="/search?category=konser">
            Konser
            <span className="navbar-links-underline"></span>
          </Link>
          <Link to="/search?category=tiyatro">
            Tiyatro
            <span className="navbar-links-underline"></span>
          </Link>
          <Link to="/search?category=festival">
            Festival
            <span className="navbar-links-underline"></span>
          </Link>
        </div>
        <Link className="hide-for-mobile" to="/search">
          <Button className="navbar-btn hide-for-mobile">Hemen Bul!</Button>
        </Link>
      </nav>
    </header>
  );
}

export default Navbar;
