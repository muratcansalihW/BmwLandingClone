import React from "react";
import "./Header.css";
import logo from "../assets/logo.svg";
import mobileLogo from "../assets/mobileLogo.svg";
import location from "../assets/location.png";
import locationMobile from "../assets/locationMobile.png";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useEffect } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 991) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <header className={`header ${isOpen ? "menu-open" : ""}`}>
        <div className="container">
          <div className={`navbar ${isOpen ? "navbar-open" : ""}`}>
            <div className="parentNav flex items-center">
              <img src={isOpen ? mobileLogo : logo} alt="BMW Logo" />{" "}
              <nav className="desktopNav nav ps-4">
                <ul>
                  <li>
                    <a href="#modeller">Modeller</a>
                  </li>
                  <li>
                    <a href="#elektrikli-modeller">%100 Elektrikli Modeller</a>
                  </li>
                  <li>
                    <a href="#online-rezervasyon">
                      BMW'nizi Online Rezerve Edin
                    </a>
                  </li>
                  <li>
                    <a href="#online-hizmetler">Online Hizmetler</a>
                  </li>
                  <li>
                    <a href="#bmw-kesfet">BMW'yi Keşfedin</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="float-right">
              <a className="location-a" href="">
                <img src={location} alt="location" />
              </a>
              <div className="navbarToggle">
                <a
                  className={`locationMobile ${isOpen ? "location-open" : ""}`}
                  href=""
                >
                  <img src={locationMobile} alt="location" />
                </a>
                <button
                  onClick={toggleNavbar}
                  className={`menu-toggle ${isOpen ? "open" : ""}`}
                >
                  {isOpen ? <X className="icon" /> : <Menu className="icon" />}
                </button>
              </div>
            </div>
          </div>
          {isOpen && (
            <nav className="mobileNav nav ps-4">
              <ul>
                <li>
                  <a href="#modeller">Modeller</a>
                </li>
                <li>
                  <a href="#elektrikli-modeller">%100 Elektrikli Modeller</a>
                </li>
                <li>
                  <a href="#online-rezervasyon">BMW'nizi Online Rezerve Edin</a>
                </li>
                <li>
                  <a href="#online-hizmetler">Online Hizmetler</a>
                </li>
                <li>
                  <a href="#bmw-kesfet">BMW'yi Keşfedin</a>
                </li>
              </ul>
            </nav>
          )}
        </div>
      </header>
    </>
  );
}

export default Header;
