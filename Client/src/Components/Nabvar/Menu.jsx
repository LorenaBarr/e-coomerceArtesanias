import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";

const Menu = () => {
  return (
    <ul className="menu menu-vertical lg:menu-horizontal bg-base-200 rounded-box flex justify-center">
      <li>
        <Link to="/">Inicio</Link>
      </li>
      <li>
        <Link to="/about">Nosotros</Link>
      </li>
      <li>
        <Link to="/products">Productos</Link>
      </li>
      <li>
        <Link to="/contact">Contacto</Link>
      </li>
    </ul>
  );
};

export default Menu;
