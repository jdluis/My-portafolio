import React from 'react';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import imgMe from '../../assets/meAvatar.png';
import './index.css';

function Home () {
    return (
        <motion.div className='container' 
            id='header'
            initial={{ y: "10%", opacity:0}}
            animate={{ y: 0, opacity:1}}
            transition={{ duration: 1.5 }}
        >
            <div className='section-left'>
                <div   
                    
                >
                    <h1
                        initial={{ x: "-30%", scale: 0.5, opacity:0}}
                        animate={{ x: 0, scale: 1, opacity:1}}
                        transition={{ duration: 1.5 }}
                    >
                        Hi my name is <span className='special-text'>Jose Daniel!</span>
                    </h1>
                    <div className='divisor'/>
                    <p><span className='special-text'>A</span>s a web developer I want to go as far as my curiosity allows me, discover new challenges, improve day by day and work on projects with a great social impact.</p>
                </div>
                <div className='btn-container'>
                    <Link to='/about' className='btn'>More About Me</Link>
                    <Link to='/contact' className='btn'>Contact Me</Link>
                </div>
            </div>
            <div className='section-right'>
                <img src={imgMe}/>
            </div>
        </motion.div>
    );
};

export { Home };