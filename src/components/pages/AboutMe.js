import React from 'react';
import '../../styles/AboutMe.css';
import dimiterProfile from '../../images/dimiter-profile-2.webp';

export default function AboutMe() {
  return (
    <div className='about-me'>
      <h1>About Me</h1>
      <img src={dimiterProfile} alt='dimiter yordanov' />
      <p>
        Passionate and curious Full Stack Software Engineer with unparalleled
        learning and storytelling abilities, currently working at Qualtrics.
        Notable history creating music for Netflix, Hulu, Prime Video, NEON, and
        others. I am driven by growth and discovery and always eager to leverage
        my unique perspective and extensive experience in Film and TV,
        Communications, Team Management, and most recently Software Engineering
        by joining a team of passionate engineers who are devoted to solving
        real business problems, closing gaps, and making substantial, positive
        impacts in the world of human experience.
      </p>
    </div>
  );
}
