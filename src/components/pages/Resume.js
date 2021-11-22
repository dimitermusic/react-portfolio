import React from 'react';
import '../../styles/Resume.css'

export default function Resume() {
  return (
    <div className="resume">
      <h1>
        Resume
      </h1>
      <h4>
        Proficiencies:
      </h4>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
        <li>NodeJS</li>
        <li>ExpressJS</li>
        <li>MySQL</li>
        <li>MongoDB</li>
        <li>ReactJS</li>
        <li>Bootstrap</li>
        <li>Npm</li>
        <li>Github</li>
        <li>Agile</li>
        <li>Project Management</li>
      </ul>
      <div className="resume-link">
        <p>
          <a
            target="_blank"
            href="https://drive.google.com/file/d/1cwcsnHhTMlWOk5BMqWJevgqZG5DxZ45j/view?usp=sharing">
            Click Here
          </a>
          {' '}to view and download my resume.
        </p>
      </div>
    </div>
  );
}
