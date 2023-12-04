import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="Header">
      <img src="https://media.crocs.com/images/t_B2B/f_auto%2Cq_auto/products/10012550_001_ALT100/crocs-rick-and-morty-morty" alt="Logo" />
      <div className="Header__links">
        <a href="#">Home</a>
        <a href="#">Criar</a>
      </div>
    </div>
  );
}

export default Header;
