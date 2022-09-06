import React from "react";
import "./style.css";

function Header() {
  return (
    <header>
      <div className="container">
        <a href="/" className="link-home">
          <div className="logo">
            <img src="assets/wi-cloudy.svg" alt="Logo" />
          </div>

          <div className="texto-logo">
            <h2>ACME TECH</h2>
          </div>
        </a>
      </div>
    </header>
  );
}

export default Header;
