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
        Full Stack Web Developer with strong storytelling and problem-solving abilities. Notable history embodying the essence of stories and visuals through creating music for Netflix, Hulu, Prime Video, NEON, and more. Eager to leverage my extensive experience in Film and TV, Communications, Team Management, and Web Design, Development and Testing to join and collaborate with a diverse team of engineers in order to learn and grow as a Web Developer, making an impact in the world of mobile user experience.
      </p>
    </div>
  );
}
