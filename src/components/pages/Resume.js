import React from 'react';
import '../../styles/Resume.css'

export default function Resume() {
  return (
    <div className="resume">
      <h1>
        Resume
      </h1>
      <div className="resProf">
        <h5>
          Proficiencies:
        </h5>
        <div className="prof-col">
          <div>
            <ul>
              <li>Javascript</li>
              <li>ReactJS</li>
              <li>NodeJS</li>
              <li>ExpressJS</li>
              <li>Angular</li>
              <li>MySQL</li>
              <li>MongoDB</li>
              <li>GraphQL</li>
              <li>Bootstrap</li>
              <li>HTML</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>CSS</li>
              <li>jQuery</li>
              <li>RESTful APIs</li>
              <li>MVC Pattern</li>
              <li>Responsive/Mobile-First Design</li>
              <li>Project Management</li>
              <li>Github</li>
              <li>Agile</li>
              <li>SEO</li>
              <li>Marketing</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="resume-link">
        <p>
          <a
            target="_blank"
            href="https://drive.google.com/file/d/1VMOJwObY6hqVxgulrWM4l4Jfo-3diUzT/view?usp=sharing"
            rel="noreferrer"
          >
            Click Here
          </a>
          {' '}to view and download my resume.
        </p>
      </div>
    </div>
  );
}
