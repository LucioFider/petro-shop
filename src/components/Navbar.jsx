import React from "react";
import "./Navbar.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="links">
        <Link to="/">Shop</Link>
        <Link to="/cart">
          <AiOutlineShoppingCart size={32} />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
