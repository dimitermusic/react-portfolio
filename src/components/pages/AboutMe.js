import React from 'react';
import '../../styles/AboutMe.css'
import dimiterProfile from '../../images/dimiter-profile-2.webp'

export default function AboutMe() {
  return (
    <div className="about-me">
      <h1>
        About Me
      </h1>
      <img src={dimiterProfile} alt="dimiter yordanov" />
      <p>
        Passionate Full Stack Software Engineer with unparalleled learning and storytelling abilities, currently working at Qualtrics. Notable history creating music for Netflix, Hulu, Prime Video, NEON, and others. I am driven by growth and discovery and always eager to leverage my unique perspective and extensive experience in Film and TV, Communications, Team Management, and Software Engineering by contributing to a diverse team of passionate engineers in order to make a positive impact in the world of human experiences.
      </p>
    </div>
  );
}
