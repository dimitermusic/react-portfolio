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
        Full Stack Web Developer with strong storytelling and problem-solving abilities. Notable history embodying the essence of stories and visuals, creating music for Netflix, Hulu, Prime Video, NEON, and more. Eager to offer my unique perspective and extensive experience in Film and TV, Communications, Team Management, and Web Development by joining and collaborating with a diverse and passionate team of engineers in order to learn and grow as a Web Developer, making an impact in the world of user experience.
      </p>
    </div>
  );
}
