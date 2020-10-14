import React from "react";
import "./Header.scss";
import { Button } from "../button/Button";

function Header() {
  return (
    <div className='header-container'>
      <video src='/videos/video-2.mp4' autoPlay loop muted />
      {/* <img src='%PUBLIC_URL%/images/image-1' alt='' /> */}
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className='header-btn'>
        <Button
          className='btn'
          buttonStyle='btn-outline'
          buttonSize='btn-large'>
          GET STARTED
        </Button>
        <Button
          className='btn'
          buttonStyle='btn-primary'
          buttonSize='btn-large'>
          WATCH TRAILER
          <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default Header;
