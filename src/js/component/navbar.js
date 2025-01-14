import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-danger mb-3">
      <i className="fa-solid fa-jedi" style={{ color: "#51291f" }}></i>
      <Link to="/">
        <span className="navbar-brand mb-0 h1">Home</span>
      </Link>
      <div className="ml-auto">
        <div className="dropdown">
          <btn
            className="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            favorites
          </btn>
          <ul className="dropdown-menu dropdown-menu-dark mr-2 dropdon-menu-end">
            {favorites.map((favorite, index) => (
              <li>
                <a className="dropdown-item" key={index}>
                  {favorite}
                </a>
                <btn onClick={() => actions.removeFromFavorites(favorite)}>
                  X
                </btn>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
