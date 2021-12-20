import React from 'react';
import '../../styles/Portfolio.css';
import Project from '../Project';
import petit from '../../images/petit.webp';
import blog from '../../images/blog.webp';
import official from '../../images/official-website.webp';
import workout from '../../images/workout-tracker.webp';
import bebop from '../../images/bebop.webp';
import weather from '../../images/weather.webp';

export default function Portfolio() {
  return (
    <div className="portfolio">
      <h1>Portfolio</h1>
      <div className="project-row">
        <Project
          name="Petit (React/Node/Express/MySQL/JavaScript)"
          desc="Full stack social networking app allowing users to inform each other on the pet-friendliness of employers and establishments using MySQL, React, and Node."
          github="https://github.com/dimitermusic/petit-frontend/"
          deployed="https://petit-petfriendly.herokuapp.com/"
          image={petit}
          alt="petit pet friendly"
        />
        <Project
          name="Bebop Music (MySQL/NodeJS/JavaScript)"
          desc="App that utilizes MySQL, the MVC design pattern, and REST APIs to deliver a social networking tool that brings live music lovers together."
          github="https://github.com/dimitermusic/bebop"
          deployed="https://bebopmusic.herokuapp.com/"
          image={bebop}
          alt="bebop music"
        />
        <Project
          name="Dimiitermusic.com (Javascript/HTML/CSS)"
          desc="Official website for award-winning Netflix, Hulu, Prime Video, and NEON music composer and recording artist, including latest releases, film and tv work, upcoming concert dates, and social media links."
          github="https://github.com/dimitermusic/official-website.html"
          deployed="https://www.dimitermusic.com/"
          image={official}
          alt="dimiter music official site"
        />
      </div>
      <div className="project-row">
        <Project
          name="Workout Tracker (Javascript/Node/MongoDB)"
          desc="Simple workout tracking app that utilizes MongoDB, Mongoose, Node and JavaScript."
          github="https://github.com/dimitermusic/nosql-workout-tracker"
          deployed="https://dimiter-workout-tracker.herokuapp.com/"
          image={workout}
          alt="Workout Tracker"
        />
        <Project
          name="Weather Dashboard (Javascript/HTML/CSS)"
          desc="Single-page weather forecast app built with Bootstrap, Javascript, CSS, HTML, and third-party APIs."
          github="https://github.com/dimitermusic/weather-dashboard.html"
          deployed="https://dimitermusic.github.io/weather-dashboard.html/"
          image={weather}
          alt="Weather Dashboard"
        />
        <Project
          name="Tech Blog (Handlebars/Node/Express/MySQL)"
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
