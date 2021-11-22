import React from 'react';
import '../../styles/AboutMe.css'
import dimiterProfile from '../../images/dimiter-profile.png'

export default function AboutMe() {
  return (
    <div className="about-me">
      <h1>
        About Me
      </h1>
      <img src={dimiterProfile} alt="dimiter yordanov"/>
      <p>
        Established, award-winning music composer (Netflix, Hulu, Prime Video, NEON, and more), musical artist, and full stack web developer. At the core, I am a problem solver and learner. Always growing.
      </p>
    </div>
  );
}
