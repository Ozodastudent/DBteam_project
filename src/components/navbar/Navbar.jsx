import React, { useState, useEffect, useRef } from "react";
// import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import "./navbar.css";
import LoginBtn from "../loginBtn/LoginBtn";
import HomeAddBtn from "../homeAddBtn/HomeAddBtn";

const Menu = ({ closeMenu }) => {
  return (
    <>
      <div className="nav-links-mobile">
        <ul>
          <li>
            <Link to="/culture" onClick={closeMenu}>
              Home
            </Link>
            <Link to="/caseStudies" onClick={closeMenu}>
              About
            </Link>
            <Link to="/services" onClick={closeMenu}>
              Listings
            </Link>
            <Link to="/packages" onClick={closeMenu}>
              Services
            </Link>
            <Link to="/about" onClick={closeMenu}>
              Blogs
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const menuRef = useRef(null);

  const closeMenu = () => {
    setToggleMenu(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="wrapper">
      <div className="navbar">   

        <div className="navbar-items">
          <div className="nav-links">
            <ul>
              <li>
                <Link to="/" onClick={closeMenu}>
                Home
                </Link>
                <Link to="/about" onClick={closeMenu}>
                About
                </Link>
                <Link to="/listings" onClick={closeMenu}>
                Listings
                </Link>
                <Link to="/services" onClick={closeMenu}>
                Services
                </Link>
                <Link to="/blogs" onClick={closeMenu}>
                Blogs
                </Link>
              </li>
            </ul>
          <LoginBtn />
          <HomeAddBtn/>
          </div>
        </div>

        {/* <div className="navbar-menu" ref={menuRef} style={{ zIndex: 99 }}>
          {toggleMenu ? (
            <RiCloseLine
              color="#3632FF"
              size={27}
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <RiMenu3Line
              color="#3632FF"
              size={27}
              onClick={() => setToggleMenu(true)}
            />
          )}
          {toggleMenu && (
            <div className="navbar-menu_container">
              <Menu closeMenu={closeMenu} />
            </div>
          )}
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;
