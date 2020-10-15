import React from "react";
import "./Footer.scss";
import { Button } from "../button/Button";
import { Link } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='footer'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the Adventure newsletter to receive out best vacation deals
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-area'>
          <form>
            <input
              className='footer-input'
              type='email'
              name='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn-outline'>Subscribe</Button>
          </form>
        </div>
      </section>

      <section className='footer-link'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Destinations</Link>
            <Link to='/'>Sponsorships</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Videos</h2>
            <Link to='/'>Submit Video</Link>
            <Link to='/'>Ambassadors</Link>
            <Link to='/'>Agency</Link>
            <Link to='/'>Influencer</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </section>

      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='logo'>
              TRVL
              <i className='fab fa-typo3' />
            </Link>
          </div>
          <small className='website-rights'>TRVL &copy; {currentYear}</small>
          <div className='social-media-icon'>
            <Link
              className='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'>
              <i className='fab fa-facebook-f' />
            </Link>
            <Link
              className='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'>
              <i className='fab fa-instagram' />
            </Link>
            <Link
              className='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'>
              <i className='fab fa-youtube' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'>
              <i className='fab fa-twitter' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'>
              <i className='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
