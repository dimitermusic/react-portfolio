import React from 'react';
import '../../styles/AboutMe.css'
import dimiterProfile from '../../images/dimiter-profile.webp'

export default function AboutMe() {
  return (
    <div className="about-me">
      <h1>
        About Me
      </h1>
      <img src={dimiterProfile} alt="dimiter yordanov"/>
      <p>
        Established, award-winning music composer (Netflix, Hulu, Prime Video, NEON), musical artist, and full stack web developer. At the core, I am a problem solver, learner, and creative visionary. Always growing and discovering.
      </p>
    </div>
  );
}
