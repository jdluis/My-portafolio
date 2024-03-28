import { useState } from 'react';
import {
  RiAccountCircleLine,
  RiAncientPavilionLine,
  RiHealthBookLine,
  RiLightbulbFlashLine,
  RiMenuUnfoldLine,
} from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';
function Mobile() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleOpenMenu = () => {
    setIsMenuOpen(true);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div hidden id='mobile-nav-container'>
      <div className={isMenuOpen ? 'hidden' : undefined}>
        <button className='btn-open' onClick={handleOpenMenu}>
          <RiMenuUnfoldLine />
        </button>
      </div>

      <nav
        onMouseLeave={handleCloseMenu}
        className={isMenuOpen ? 'nav-mobile' : 'hidden nav-mobile'}
      >
        <button className='btn-close' onClick={handleCloseMenu}>
          <AiOutlineClose />
        </button>
        <Link onClick={handleCloseMenu} to='/' className='nav-links'>
          <RiAncientPavilionLine className='icon-menu' />
          Home
        </Link>
        <Link onClick={handleCloseMenu} to='/about' className='nav-links'>
          <RiAccountCircleLine className='icon-menu' />
          About
        </Link>
        <Link onClick={handleCloseMenu} to='/works' className='nav-links'>
          <RiLightbulbFlashLine className='icon-menu' />
          Works
        </Link>
        <Link onClick={handleCloseMenu} to='/contact' className='nav-links'>
          <RiHealthBookLine className='icon-menu' />
          Contact
        </Link>
      </nav>
    </div>
  );
}

export default Mobile;
