import React from "react";
import "./Header.scss";
import { Button } from "../button/Button";

function Header() {
  return (
    <header className='header-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />

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
    </header>
  );
}

export default Header;
