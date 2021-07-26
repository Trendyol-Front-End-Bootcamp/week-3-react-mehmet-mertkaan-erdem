import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";

function Header() {
  return (
    <Link to="/">
      <h1 className="header">
        Rick <span>And</span> Morty
      </h1>
    </Link>
  );
}

export default Header;
