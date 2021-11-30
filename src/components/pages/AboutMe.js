import React from 'react';
import '../../styles/AboutMe.css'
import dimiterProfile from '../../images/dimiter-profile.webp'

export default function AboutMe() {
  return (
    <div className="about-me">
      <h1>
        About Me
      </h1>
      <img src={dimiterProfile} alt="dimiter yordanov" />
      <p>
        Full Stack Web Developer and established, award-winning music composer and songwriter with strong storytelling and problem-solving abilities. Notable experience embodying the essence of stories and visuals through music for Netflix, Hulu, Prime Video, NEON, and more. Eager to leverage my extensive experience in Film and TV, Creative Direction, Team Management, Marketing and Design to build onto my Web Development skills and become a positive contribution to an engineering team as well as an impact in the world of mobile user experience.
      </p>
    </div>
  );
}
