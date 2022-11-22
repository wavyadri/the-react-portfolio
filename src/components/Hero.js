import React from 'react';
import Typewriter3 from './Typewriter3';
import { HiOutlineMail } from 'react-icons/hi';
import { AiOutlineGithub } from 'react-icons/ai';
import { FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id='hero'>
      <div className='container'>
        <h1>hi, I'm Adriana</h1>
        <Typewriter3
          words={['Software Developer', 'Problem Solver', 'User Oriented']}
        />
        <ul className='social-links'>
          <li>
            <a href='mailto:adriana.calvomatos@gmail.com?'>
              <HiOutlineMail className='icon' />
            </a>
          </li>
          <li>
            <a
              href='https://github.com/wavyadri'
              role='button'
              target='_blank'
              rel='noreferrer'
            >
              <AiOutlineGithub className='icon' />
            </a>
          </li>
          <li>
            <a
              href='https://www.linkedin.com/in/adriana-cm/'
              role='button'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedin className='icon' />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Hero;
