import React from 'react';
import { Link } from 'react-router-dom';
import {
  RiAncientPavilionLine,
  RiAccountCircleLine,
  RiLightbulbFlashLine,
  RiHealthBookLine,
  RiArrowDownLine,
} from 'react-icons/ri';
import './index.css';

const iconReact = 'src/assets/icons/react.svg';
const iconVite = 'src/assets/icons/vitejs.svg';

function Nav() {

  //check this handle, doesn't work properly
  const handleGoBottom = () => {
    window.scrollTo(0, document.body.scrollHeight); 
  }
  
  return (
    <div>
      <div className='section-container-left'></div>
      <nav className='nav-container'>
        <Link to='/' className='nav-links'>
          <RiAncientPavilionLine className='icon-menu' />
          Home
        </Link>
        <Link to='/about' className='nav-links'>
          <RiAccountCircleLine className='icon-menu' />
          About
        </Link>
        <Link to='/works' className='nav-links'>
          <RiLightbulbFlashLine className='icon-menu' />
          Works
        </Link>
        <Link to='/contact' className='nav-links'>
          <RiHealthBookLine className='icon-menu' />
          Contact
        </Link>
      </nav>
      <div className='section-container-right'>
        <div className='img-container'>
          <img src={iconReact} />
          <img src={iconVite} />
        </div>
        <div onClick={handleGoBottom} className='arrow-container '>
          <RiArrowDownLine  className='arrow' />
        </div>
      </div>
    </div>
  );
}

export { Nav };
