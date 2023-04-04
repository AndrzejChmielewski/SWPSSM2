import { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";
import { Link } from 'react-router-dom';
import "../CSS/navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setMenuOpen(!menuOpen);
  }

  return (
    <nav className="navigation">
      <Link to="/" className="brand-name">
        SWPSUM
      </Link>
      <div className={menuOpen ? "navigation-menu open" : "navigation-menu"}>
        <ul>
          {navLinks.map((nav) => (
            <li key={nav.id}>
              <Link to={`/${nav.id}`}>{nav.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="menu-icon" onClick={handleMenuOpen}>
        {menuOpen ? <img src={close} alt="close icon" /> : <img src={menu} alt="menu icon" />}
      </div>
    </nav>
  );
}