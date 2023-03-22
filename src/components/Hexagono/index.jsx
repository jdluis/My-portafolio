import { useState } from 'react';
import './style.css';
import { BsGithub } from 'react-icons/bs';

const Hexagono = ({ titulo, coverImg }) => {
  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  return (
    <div
      className='hexagono'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={
        hover
          ? { backgroundImage: `url(${coverImg})`, backgroundSize: 'cover' }
          : { backgroundColor: 'var(--text-color-project)' }
      }
    >
      <div className='hexagono-titulo'>{titulo}</div>
    </div>
  );
};

export default Hexagono;
