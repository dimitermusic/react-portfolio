import React from 'react';
import '../../styles/Portfolio.css'
import Project from '../Project';
import official from '../../images/official-website.png'
import ecommerce from '../../images/ecommerce.png'
import budget from '../../images/budget-tracker.png'
import workout from '../../images/workout-tracker.png'
import bebop from '../../images/bebop.png'
import workday from '../../images/work-day-2.png'

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
          name="E-Commerce Backend (NodeJs/ExpressJS)"
          github="https://github.com/dimitermusic/ecommerce-backend"
          deployed="https://dy-ecommerce.herokuapp.com/"
          image={ecommerce}
          alt="ecommerce backend"
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
          name="Bebop Music (MySQL/NodeJS/ExpressJS)"
          github="https://github.com/deannaboiani/bebop"
          deployed="https://bebopmusic.herokuapp.com/"
          image={bebop}
          alt="bebop music"
        />
        <Project
          name="Work Day Planner (Javascript/HTML/CSS)"
          github="https://github.com/dimitermusic/work-day-planner.html"
          deployed="https://dimitermusic.github.io/work-day-planner.html/"
          image={workday}
          alt="work day planner"
        />
      </div>
    </div>
  );
}
