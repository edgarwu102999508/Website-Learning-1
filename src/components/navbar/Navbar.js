import React, { Fragment, useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
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
        <Link to='/home' className='navbar-logo' onClick={closeMobileMenu}>
          TRVL <i className='fab fa-typo3' />
        </Link>
        <div className='hamburger-btn' onClick={handleClick}>
          <i className={clicked ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={clicked ? "nav-menu mobile" : "nav-menu"}>
          <li className='nav-item'>
            <NavLink to='/home' className='nav-link' onClick={closeMobileMenu}>
              Home
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink
              to='/service'
              className='nav-link'
              onClick={closeMobileMenu}>
              Services
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink
              to='/product'
              className='nav-link'
              onClick={closeMobileMenu}>
              Products
            </NavLink>
          </li>
          {!mobileMode && (
            <li className='nav-item'>
              <NavLink
                to='/signup'
                className='nav-link-mobile'
                onClick={closeMobileMenu}>
                SIGN UP
              </NavLink>
            </li>
          )}
        </ul>
        {mobileMode && <Button buttonStyle='btn-outline'>SIGN UP</Button>}
      </nav>
    </Fragment>
  );
}

export default Navbar;
