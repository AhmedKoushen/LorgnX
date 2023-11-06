
//import React from 'react';
//import { Button } from './Button';
import "./Footer.css"
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/LorgnX'>What is Lorgn</Link>
            <Link to='/LorgnX'>What we do</Link>
            <Link to='/LorgnX'>Contact Us</Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/LorgnX' className='social-logo'>
              Lorgn X
            </Link>
          </div>
          <small className='website-rights'>© 2020</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link facebook'
              to='/LorgnX'
              target='_blank'
              aria-label='Facebook'
            >
              <i className='fab fa-facebook-f' />
            </Link>
            <Link
              className='social-icon-link instagram'
              to='/LorgnX'
              target='_blank'
              aria-label='Instagram'
            >
              <i className='fab fa-instagram' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/LorgnX'
              target='_blank'
              aria-label='TikTok'
            >
              <i className='fab fa-tiktok' />
            </Link>

          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
