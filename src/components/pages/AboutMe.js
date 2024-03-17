import React from 'react';
import '../../styles/AboutMe.css';
import dimiterProfile from '../../images/dimiter-profile-2.webp';

export default function AboutMe() {
  return (
    <div className='about-me'>
      <h1>About Me</h1>
      <img src={dimiterProfile} alt='dimiter yordanov' />
      <p>
      I am a singer/songwriter and film and TV music composer based in Seattle, known for creating the entire original score for both seasons of Netflix docu-series, 'The Kindness Diaries', most of the original score for David Arquette's biopic, 'You Cannot Kill David Arquette', and some music in Sony Pictures film, 'Bad Country'. My style has been described as peaceful, uplifting, powerful, and heartfelt.
      <br />
      <br />
      While creating the original score for 'The Kindness Diaries', I took a creative detour from my typical instrumental compositions and added an acoustic track with my voice on it called, 'Rain' that received an overwhelmingly positive response from fans worldwide. This spark from my new fans inspired me to break down the barriers that had previously kept me from singing and performing.
      <br />
      <br />
      I now release and perform original music around the US while growing my passion for music composition in the film and TV world. When I am not working, I love cooking, traveling with friends and family, playing tennis, volleyball, and basketball, having a beach day, or sitting at the piano playing my favorite classical piece.
      </p>
    </div>
  );
}
