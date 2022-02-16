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
        Passionate Full Stack Software Engineer with unparalleled learning and storytelling abilities. Recently graduated with a certificate from University of Washington’s Coding Bootcamp where I gained invaluable insight and proficiency in JavaScript, Node.js, React.js, MySQL, GraphQL, REST APIs, Git, Agile Methodologies and much more. Notable history creating music for Netflix, Hulu, Prime Video, NEON, and others. Eager to leverage my unique perspective and extensive experience in Film and TV, Communications, Team Management, and Software Engineering by joining and collaborating with a diverse team of passionate engineers in order to learn, grow, and make a positive impact in the world of user experience.
      </p>
    </div>
  );
}
