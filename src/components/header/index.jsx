import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiX, FiMenu } from "react-icons/fi";

const Header = ({ color }) => {
  const [toggalNav, setToggalNav] = useState("");

  return (
    <header
      className={`header-area formobile-menu header--transparent ${color}`}
    >
      <div className={`header-wrapper ${toggalNav}`} id="header-wrapper">
        <div className="header-left">
          <div className="logo">{/* <a href="/">{logoUrl}</a> */}</div>
        </div>
        <div className="header-right">
          <nav className="mainmenunav d-lg-block">
            <ul className="mainmenu">
              <li className="has-droupdown">
                <Link to="#">Home</Link>
                <ul className="submenu">
                  <li>
                    <Link to="/main-demo">Main Demo</Link>
                  </li>
                  <li>
                    <Link to="/dark-main-demo">Main Demo Dark</Link>
                  </li>
                  <li>
                    <Link to="/studio-agency">Studio Agency</Link>
                  </li>
                  <li>
                    <Link to="/designer-portfolio">Designer Portfolio</Link>
                  </li>
                  <li>
                    <Link to="/interactive-agency">Interactive Agency</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/contact-us">Contact</Link>
              </li>
              <li>
                <Link to="/contact-us">About</Link>
              </li>
            </ul>
          </nav>
          {/* Start Humberger Menu  */}
          <div className="humberger-menu d-block d-lg-none pl--20">
            <span
              onClick={() => setToggalNav("menu-open")}
              className="menutrigger text-white"
            >
              <FiMenu />
            </span>
          </div>
          {/* End Humberger Menu  */}
          <div className="close-menu d-block d-lg-none">
            <span onClick={() => setToggalNav("")} className="closeTrigger">
              <FiX />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
