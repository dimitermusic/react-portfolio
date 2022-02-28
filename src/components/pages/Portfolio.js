import React from 'react';
import '../../styles/Portfolio.css';
import Project from '../Project';
import concert from '../../images/concert.webp';
import official from '../../images/official-website.webp';
import workout from '../../images/workout-tracker.webp';
import weather from '../../images/weather.webp';
import blog from '../../images/blog.webp';

export default function Portfolio() {
  return (
    <div className="portfolio">
      <h1>Portfolio</h1>
      <div className="project-row">
        <Project
          name="Concert API (Node.js/Express.js/JavaScript/MySQL)"
          desc="A simple API built with a Node.js/Express.js server and MySQL database that is used to manage my concerts!"
          github="https://github.com/dimitermusic/official-website.html"
          deployed="https://concert-api-5i4uylvzdq-wl.a.run.app/"
          image={concert}
          alt="dimiter concert api"
        />
        <Project
          name="www.dimitermusic.com (HTML/CSS/JavaScript)"
          desc="Official website for my music includng social links, new releases, and custom JavaScript components for concerts, newsletter, and footer."
          github="https://github.com/dimitermusic/official-website.html"
          deployed="https://www.dimitermusic.com/"
          image={official}
          alt="dimiter music official site"
        />
        <Project
          name="Workout Tracker (Bootstrap/Node.js/Express.js/MongoDB)"
          desc="Simple workout tracking app that utilizes MongoDB, Mongoose, Node and JavaScript."
          github="https://github.com/dimitermusic/nosql-workout-tracker"
          deployed="https://dimiter-workout-tracker.herokuapp.com/"
          image={workout}
          alt="Workout Tracker"
        />
      </div>
      <div className="project-row">
        <Project
          name="Weather Dashboard (HTML/CSS/JavaScript)"
          desc="Single-page weather forecast app built with Bootstrap, Javascript, CSS, HTML, and third-party APIs."
          github="https://github.com/dimitermusic/weather-dashboard.html"
          deployed="https://dimitermusic.github.io/weather-dashboard.html/"
          image={weather}
          alt="Weather Dashboard"
        />
        <Project
          name="Tech Blog (Handlebars/Node.js/Express.js/MySQL)"
          desc="Full stack blogging application with MySQL database, Node/Express server, and Handlebars views."
          github="https://github.com/dimitermusic/tech-blog"
          deployed="https://dimiter-tech-blog.herokuapp.com/"
          image={blog}
          alt="tech blog"
        />
      </div>
    </div>
  );
}
