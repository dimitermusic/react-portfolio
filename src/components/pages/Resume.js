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
              <li>ReactJS</li>
              <li>Javascript</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>NodeJS</li>
              <li>ExpressJS</li>
              <li>Bootstrap</li>
              <li>Handlebars</li>
              <li>MySQL</li>
              <li>MongoDB</li>
              <li>GraphQL</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>jQuery</li>
              <li>Angular</li>
              <li>RESTful APIs</li>
              <li>MVC Pattern</li>
              <li>Object-relational Mapping</li>
              <li>Responsive/Mobile-First Design</li>
              <li>Agile Methodologies</li>
              <li>Project Management</li>
              <li>Affable Team Player</li>
              <li>Professional Demeanor</li>
              <li>Creative Visionary</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="resume-link">
        <p>
          <a
            target="_blank"
            href="https://drive.google.com/file/d/1OPjdF9ivqicTkfwL00KAz8izl7SdCVly/view?usp=sharing"
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
