import React from "react";
import { Link } from "react-router-dom";

import "./BackButton.css";

function BackButton({ buttonTitle }) {
  return (
    <Link to="/">
      <button className="backButton">{buttonTitle}</button>
    </Link>
  );
}

export default BackButton;
