import React from 'react';
import './index.css';
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaMobileAlt,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from 'react-icons/fa';

function Contact() {
  return (
    <div id='contact' className='container'>
      <div className='title'>
        <div className='line'></div>
        <h1>Contact</h1>
        <div className='line'></div>
      </div>

      <div className='text-container'>
        <p>
          <span className='special-text'>Would</span> you like to know more? Don't hesitate to
          contact me!
        </p>
      </div>

      <div className='container-contact'>
        <div className='wrapper'>
          <div className='mail'>
            <div className='cover'></div>
            <a href="mailto:jdluisdev@gmail.com">
            <div className='letter'>
              <h2> Contact Me </h2>
              <FaMobileAlt className='icon' />
            </div>
            </a>
          </div>
        </div>
        <div className='container-of-lists'>
          <ul className='list-container'>
            <li className='li-list'>
              <FaMapMarkerAlt className='icon' />
              <h4>Hamburg, Germany</h4>
            </li>
            <li className='li-list'>
              <FaMobileAlt className='icon' />
              <h4>+34 608 99 14 69</h4>
            </li>
            <li className='li-list'>
              <FaEnvelope className='icon' />
              <h4>jdluisdev@gmail.com</h4>
            </li>
          </ul>

          <ul className='list-container'>
            <li className='li-list'>
              <FaLinkedin className='icon' />
              <a target='_blank' href='https:/www.linkedin.com/in/jdluis'>linkedin</a>
            </li>
            <li className='li-list'>
              <FaInstagram className='icon' />
              <a target='_blank' href='https://www.instagram.com/danieldeluis'>instagram</a>
            </li>
            <li className='li-list'>
              <FaTwitter className='icon' />
              <a target='_blank' href='https://twitter.com/JdLuisDev'>twitter</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export { Contact };
