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
import Mobile from './Mobile';

const iconReact = '/assets/icons/react.svg';
const iconVite = '/assets/icons/vitejs.svg';

function Nav() {
  //check this handle, doesn't work properly
  const handleGoBottom = () => {
    window.scrollTo(0, document.body.scrollHeight);
  };

  return (
    <>
      <div id='menu-container'>
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
            <img src={iconReact} alt='react icon' />
            <img src={iconVite} alt='vite icon' />
            {/* <Link to={"/3dMode"}>3D</Link> */}
          </div>
          <div onClick={handleGoBottom} className='arrow-container '>
            <RiArrowDownLine className='arrow' />
          </div>
        </div>
      </div>

      <Mobile />
    </>
  );
}

export { Nav };
