import React from "react";
import "./Navbar.css";
import { MessageCircle } from "lucide-react";

const Navbar = () => {
  return (
    <div className="container-navBar">
      <h2>
        Plano <span>Vende+</span>
      </h2>
      <nav className="navBar-links">
        <ul>
          <li>
            <a href="">Inicio</a>
          </li>
          <li>
            <a href="">Consultorias</a>
          </li>
          <li>
            <a href="">Como funciona</a>
          </li>
          <li>
            <a href="">Pra quem é</a>
          </li>
          <li>
            <a href="">FAQ</a>
          </li>
        </ul>
      </nav>
      <button className="btt-wathsApp-Navbar">
        <MessageCircle size={18} strokeWidth={2} /> Falar no WathsApp
      </button>
    </div>
  );
};

export default Navbar;
