import React from 'react';
import '../../styles/AboutMe.css';
import dimiterProfile from '../../images/dimiter-profile-2.webp';

export default function AboutMe() {
  return (
    <div className='about-me'>
      <h1>About Me</h1>
      <img src={dimiterProfile} alt='dimiter yordanov' />
      <p>
        Passionate and curious person with keen
        learning and storytelling abilities that have been recognized by c-suite leadership, currently working as an Associate Software Engineer at Qualtrics.
        I have a notable history creating award-winning music for Netflix, Hulu, Prime Video, and other platforms. At the core, I am most driven by growth and discovery and the little details that make experiences memorable.
      </p>
    </div>
  );
}
