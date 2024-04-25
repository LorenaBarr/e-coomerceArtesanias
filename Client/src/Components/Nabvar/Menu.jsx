import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";

const Menu = () => {
    return (
        <ul className="menu menu-horizontal flex items-center justify-center space-x-4 bg-base-200 rounded-box">
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
