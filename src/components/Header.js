import React, { useState } from "react";
import "./Header.css";
import Mobile from "./Mobile";
import Web from "./Web";

function Header() {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="header">
      <div className="logo"> <img className="logo-header" alt="logo-pic" src={require("../assets/images/logo..png").default}/></div>
      <div className="menu">
        <div className="web-menu">
            <Web />
        </div>
        <div className="mobile-menu">
            <div onClick={() => setIsOpen(!isOpen)}>
                <i className="fi fi-rr-apps menu-icon"></i>
            </div>
            {isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen} />}
        </div>
      </div>
    </div>
  );
}

export default Header;
