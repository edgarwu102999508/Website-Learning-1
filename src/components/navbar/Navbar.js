import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "../button/Button";
import "./Navbar.scss";

function Navbar() {
  const [clicked, setClicked] = useState(false);
  const [mobileMode, setMobileMode] = useState(true);

  useEffect(() => {
    showButton();
  }, []);

  // Toggle hanburger button
  const handleClick = () => setClicked(!clicked);

  const closeMobileMenu = () => setClicked(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setMobileMode(false);
    } else {
      setMobileMode(true);
    }
  };
  window.addEventListener("resize", showButton);

  return (
    <Fragment>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo'>
          TRVL <i className='fab fa-typo3' />
        </Link>
        <div className='hamburger-btn' onClick={handleClick}>
          <i className={clicked ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={clicked ? "nav-menu active" : "nav-menu"}>
          <li className='nav-item'>
            <Link to='/' className='nav-link'>
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/services' className='nav-link'>
              Services
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/products' className='nav-link'>
              Products
            </Link>
          </li>
          {!mobileMode && (
            <li className='nav-item'>
              <Link
                to='/signup'
                className='nav-link-mobile'
                onClick={closeMobileMenu}>
                Sign Up
              </Link>
            </li>
          )}
        </ul>
        {mobileMode && <Button buttonStyle='btn-outline'>Sign Up</Button>}
      </nav>
    </Fragment>
  );
}

export default Navbar;
