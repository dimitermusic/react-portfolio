import React from 'react';
import '../../styles/Portfolio.css';
import Project from '../Project';
import concert from '../../images/concert.webp';
import official from '../../images/official-website.webp';
import roman from '../../images/roman.webp';
import workout from '../../images/workout-tracker.webp';
import weather from '../../images/weather.webp';
import blog from '../../images/blog.webp';

export default function Portfolio() {
  return (
    <div className="portfolio">
      <h1>Portfolio</h1>
      <div className="project-row">
        <Project
          name="Concert API (MySQL/Node.js/Express.js/JavaScript)"
          desc="A simple API built with a Node.js/Express.js server and MySQL database that is used to manage my concerts!"
          github="https://github.com/dimitermusic/concert-api"
          deployed="https://api.dimitermusic.com"
          image={concert}
          alt="dimiter concert api"
        />
        <Project
          name="www.dimitermusic.com (JavaScript/CSS/HTML)"
          desc="My official music website with socials, news, and dynamically rendered concerts, newsletter, and footer."
          github="https://github.com/dimitermusic/official-website.html"
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
      <div className="project-row">
        <Project
          name="Workout Tracker (MongoDB/Node.js/Express.js/Bootstrap)"
          desc="Simple workout tracking app that utilizes MongoDB, Mongoose, Node and JavaScript."
          github="https://github.com/dimitermusic/nosql-workout-tracker"
          deployed="https://dimiter-workout-tracker.herokuapp.com"
          image={workout}
          alt="Workout Tracker"
        />
        <Project
          name="The Weather Dashboard (JavaScript/CSS/HTML)"
          desc="Single-page weather forecast app built with Bootstrap, Javascript, CSS, HTML, and third-party APIs."
          github="https://github.com/dimitermusic/weather-dashboard.html"
          deployed="https://dimitermusic.github.io/weather-dashboard.html"
          image={weather}
          alt="Weather Dashboard"
        />
        <Project
          name="Tech Blog (MySQL/Node.js/Express.js/Handlebars.js)"
          desc="Full stack blogging application with MySQL database, Node/Express server, and Handlebars views."
          github="https://github.com/dimitermusic/tech-blog"
          deployed="https://dimiter-tech-blog.herokuapp.com"
          image={blog}
          alt="tech blog"
        />
      </div>
    </div>
  );
}
