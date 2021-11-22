import React from 'react';
import '../../styles/Portfolio.css'
import Project from '../Project';

export default function Portfolio() {
  return (
    <div className="portfolio">
      <h1>Portfolio</h1>
      <div className="project-row">
        <Project />
        <Project />
        <Project />
      </div>
      <div className="project-row">
        <Project />
        <Project />
        <Project />
      </div>
    </div>
  );
}
