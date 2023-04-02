import { useState } from "react";

import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

import "../CSS/navbar.css"

export default function Navbar() {
  return (
    <nav className="navigation">
      <a href="/" className="brand-name">
        SWPSUM
      </a>
      
      <div className="navigation-menu">
          <ul>
            
            {navLinks.map((nav) => (
              <li>
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
    </nav>
  );
}