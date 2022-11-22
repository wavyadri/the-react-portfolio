import React from 'react';
import Adriana from './adriana.jpg';
import resume from '../files/AdrianaCalvoMatos-Resume.pdf';
import {
  FaFileDownload,
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaReact,
  FaNode,
  FaGit,
} from 'react-icons/fa';
import { FiFigma } from 'react-icons/fi';
import {
  SiJavascript,
  SiTypescript,
  SiVisualstudio,
  SiGo,
  SiRuby,
  SiPostgresql,
} from 'react-icons/si';

const About = () => {
  return (
    <section id='about'>
      <div className='container'>
        <div className='about-img'>
          <img src={Adriana} alt='Adriana' />
        </div>
        <div className='about-text'>
          <div className='about-me'>
            <h2>About</h2>
            <p>
              Hey there! I am Adriana, a front-end developer based in Canada. My
              greatest strength as a developer is my ability to problem solve. I
              genuinely find the challenge of tackling new projects to be fun,
              am fascinted by how many different ways we can solve the same
              problem and am hooked on the feeling of satisfaction I get once I
              solve a bug.
            </p>
          </div>
          <div className='about-toolkit'>
            <h3>My Toolkit</h3>
            <ul className='about-toolkit-icon'>
              <li>
                <SiJavascript className='about-icon' />
              </li>
              <li>
                <SiTypescript className='about-icon' />
              </li>
              <li>
                <FaReact className='about-icon' />
              </li>
              <li>
                <FaHtml5 className='about-icon' />
              </li>
              <li>
                <FaCss3Alt className='about-icon' />
              </li>
              <li>
                <FaSass className='about-icon' />
              </li>
              <li>
                <FiFigma className='about-icon' />
              </li>
              <li>
                <FaNode className='about-icon' />
              </li>
              <li>
                <SiGo className='about-icon' />
              </li>
              <li>
                <SiRuby className='about-icon' />
              </li>
              <li>
                <SiPostgresql className='about-icon' />
              </li>
              <li>
                <SiVisualstudio className='about-icon' />
              </li>
              <li>
                <FaGit className='about-icon' />
              </li>
            </ul>
          </div>
          <div className='about-resume'>
            <h3>My Resume</h3>
            <div className='about-resume-icon'>
              <a href={resume} target='_blank' rel='noreferrer'>
                <FaFileDownload className='about-icon about-download' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
