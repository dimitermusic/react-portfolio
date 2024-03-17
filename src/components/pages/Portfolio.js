import React from 'react';
import '../../styles/Portfolio.css';
import Project from '../Project';
// import concert from '../../images/concert-api.webp';
// import official from '../../images/official-website.webp';
import roman from '../../images/roman.webp';
import tkd from '../../images/tkd.webp';
import playlist from '../../images/playlist.webp';
import insta from '../../images/insta.webp';

export default function Portfolio() {
  return (
    <div className="portfolio">
      <h1>Portfolio</h1>
      <div className="project-row">
        <Project
          name="Film and TV Music Composition Reel"
          desc=""
          // github="https://github.com/dimitermusic/official-website-react"
          deployed="https://www.dimitermusic.com"
          action="Watch Now"
          image={tkd}
          alt="dimiter music official site"
        />
        <Project
          name="My Favorite Songs as a Singer/Songwriter"
          desc="A collection of my all-time favorite songs as a singer/songwriter. I write, sing, play every instrument on, and produce all of my original music."
          // github="https://github.com/dimitermusic/concert-api"
          deployed="https://open.spotify.com/playlist/1LPOZoPSIj3WTZzHnAH2aO?si=2f30605d2ce64f10"
          action="Listen Now"
          image={playlist}
          alt="dimiter concert api"
        />
        <Project
          name="Live Performance of 'If the World Was Ending'"
          desc=""
          // github="https://github.com/dimitermusic/concert-api"
          deployed="https://www.instagram.com/p/B_pnotlJ6Nh/"
          action="Watch Now"
          image={insta}
          alt="dimiter concert api"
        />
        <Project
          name="Roman Numeral Converter (JavaScript/CSS/HTML)"
          desc="Simple and clean Roman Numeral converter app with switchable and automatically scheduled dark mode."
          // github="https://github.com/dimitermusic/roman-numeral-converter.html"
          deployed="https://romnum.netlify.app"
          image={roman}
          alt="roman numeral converter"
        />
      </div>
    </div>
  );
}
