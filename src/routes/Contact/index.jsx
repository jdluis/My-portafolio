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

      <div>
        <p>
          <span className='special-text'>Would</span> you like to know more? Don't hesitate to contact
          me!
        </p>
      </div>

      <div className='container-contact'>
        <div className='wrapper'>
          <div className='mail'>
            <div className='cover'></div>
            <div className='letter'>
              <h2> Contact Me </h2>
              <FaMobileAlt className='icon' />
            </div>
          </div>
        </div>
        <ul className='list-container'>
          <li className='li-list'>
            <FaMapMarkerAlt className='icon' />
            <h4>Direction</h4>
          </li>
          <li className='li-list'>
            <FaMobileAlt className='icon' />
            <h4>Telefono</h4>
          </li>
          <li className='li-list'>
            <FaEnvelope className='icon' />
            <h4>Correo</h4>
          </li>
        </ul>

        <ul className='list-container'>
          <li className='li-list'>
            <FaLinkedin className='icon' />
            <h4>linkedin</h4>
          </li>
          <li className='li-list'>
            <FaInstagram className='icon' />
            <h4>instagram</h4>
          </li>
          <li className='li-list'>
            <FaTwitter className='icon' />
            <h4>twitter</h4>
          </li>
        </ul>
      </div>
    </div>
  );
}

export { Contact };
