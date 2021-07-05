import React from "react";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <h1>4LUB</h1>
      <nav>
        <ul>
          <li>
            <NavLink activeClassName="selected" to="/inicio">
              INICIO
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="selected" to="/productos">
              PRODUCTOS
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="selected" to="/blog">
              CONTENIDO
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="selected" to="/contacto">
              CONTACTO
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
