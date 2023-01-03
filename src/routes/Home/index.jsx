import React from 'react';
import './index.css';
import imgMe from './meAvatar.png';

function Home () {
    return (
        <div className='container'>
            <div className='section-left'>
                <div>
                    <h1>Hi my name is <span className='special-text'>Jose Daniel!</span></h1>
                    <div className='divisor'/>
                    <p>This is my website, if you are here is because you will love to know more about me and who i am, so check in the following buttons.</p>
                </div>
                <div>
                    <button>More About Me</button>
                    <button>Contact Me</button>
                </div>
            </div>
            <div className='section-right'>
                <img src={imgMe}/>
            </div>
        </div>
    );
}

export { Home };