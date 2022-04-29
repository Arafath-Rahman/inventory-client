import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <nav className="container w-screen h-20 bg-slate-400 flex items-center justify-between">
    <div className="flex items-center gap-2">
      <img className="h-12" src={require('../../../Assets/images/logo.png')} alt="" />
      <h2 className="text-xl font-bold">PRAN Dealer Inventory</h2>
    </div>
      <div>
        <ul className="flex ">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
