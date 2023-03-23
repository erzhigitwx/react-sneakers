import React from "react";
import { BsArrowLeftSquare } from "react-icons/bs";
import { Link } from "react-router-dom";

const Header = function ({ title }) {
  return (
    <div className="favorite-header">
      <Link to={"/"}>
        <BsArrowLeftSquare className="favorite-back" />
      </Link>
      <h1 className="favorite-title">{title}</h1>
    </div>
  );
};

export default Header;
