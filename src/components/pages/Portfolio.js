import React from 'react';
import '../../styles/Portfolio.css'
import Project from '../Project';
import official from '../../images/official-website.webp'
import ecommerce from '../../images/ecommerce.webp'
import budget from '../../images/budget-tracker.webp'
import workout from '../../images/workout-tracker.webp'
import bebop from '../../images/bebop.webp'
import weather from '../../images/weather.webp'

export default function Portfolio() {
  return (
    <div className="portfolio">
      <h1>Portfolio</h1>
      <div className="project-row">
        <Project
          name="Offical Website (HTML/CSS/Javascript)"
          github="https://github.com/dimitermusic/official-website.html"
          deployed="https://www.dimitermusic.com/"
          image={official}
          alt="dimiter official website"
        />
        <Project
          name="Bebop Music (MySQL/NodeJS/ExpressJS)"
          github="https://github.com/deannaboiani/bebop"
          deployed="https://bebopmusic.herokuapp.com/"
          image={bebop}
          alt="bebop music"
        />
        <Project
          name="PWA Budget Tracker (MongoDB/PWA)"
          github="https://github.com/dimitermusic/pwa-budget-tracker"
          deployed="https://dimiter-budget-tracker.herokuapp.com/"
          image={budget}
          alt="pwa budget tracker"
        />
      </div>
      <div className="project-row">
        <Project
          name="NoSql Workout Tracker (MongoDB/IndexedDB)"
          github="https://github.com/dimitermusic/nosql-workout-tracker"
          deployed="https://dimiter-workout-tracker.herokuapp.com/"
          image={workout}
          alt="NoSql Workout Tracker"
        />
        <Project
          name="Weather Dashboard (Javascript/HTML/CSS)"
          github="https://github.com/dimitermusic/weather-dashboard.html"
          deployed="https://dimitermusic.github.io/weather-dashboard.html/"
          image={weather}
          alt="Weather Dashboard"
        />
        <Project
          name="E-Commerce Backend (NodeJs/ExpressJS)"
          github="https://github.com/dimitermusic/ecommerce-backend"
          deployed="https://dy-ecommerce.herokuapp.com/"
          image={ecommerce}
          alt="ecommerce backend"
        />
      </div>
    </div>
  );
}
