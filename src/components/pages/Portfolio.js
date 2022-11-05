import React from 'react';
import '../../styles/Portfolio.css';
import Project from '../Project';
import concert from '../../images/concert-api.webp';
import official from '../../images/official-website.webp';
import roman from '../../images/roman.webp';

export default function Portfolio() {
  return (
    <div className="portfolio">
      <h1>Portfolio</h1>
      <div className="project-row">
        <Project
          name="Concert API (MySQL/Node.js/Express.js/JavaScript)"
          desc="A simple API built with a Node.js/Express.js server and MySQL database that is used to manage my concerts!"
          github="https://github.com/dimitermusic/concert-api"
          image={concert}
          alt="dimiter concert api"
        />
        <Project
          name="www.dimitermusic.com (React.js/JavaScript/CSS)"
          desc="My official music website with socials, news, and dynamically rendered concerts, newsletter, and footer."
          github="https://github.com/dimitermusic/official-website-react"
          deployed="https://www.dimitermusic.com"
          image={official}
          alt="dimiter music official site"
        />
        <Project
          name="Roman Numeral Converter (JavaScript/CSS/HTML)"
          desc="Simple and clean Roman Numeral converter app with switchable and automatically scheduled dark mode."
          github="https://github.com/dimitermusic/roman-numeral-converter.html"
          deployed="https://romnum.netlify.app"
          image={roman}
          alt="roman numeral converter"
        />
      </div>
    </div>
  );
}
