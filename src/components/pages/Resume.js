import React from 'react';
import '../../styles/Resume.css'

export default function Resume() {

  const skillsArr = ["React.js", "JavaScript", "HTML", "CSS", "Node.js", "Express.js", "Bootstrap", "Handlebars.js", "MySQL", "MongoDB", "GraphQL", "jQuery", "Angular", "RESTful APIs", "MVC Pattern", "Object-relational Mapping", "Responsive/Mobile-First Design", "Agile Methodologies", "Project Management", "Affable Team Player", "Professional Demeanor", "Creative Visionary"]

  const skillsList = skillsArr.map((skill, index) =>
    <li key={index}>{skill}</li>
  )

  return (
    <div className="resume">
      <h1>
        Resume
      </h1>
      <h6>
        Proficiencies:
      </h6>
      <div className="proficiencies">
        <ul>
          {skillsList}
        </ul>
      </div>
      <div className="resume-link">
        <p>
          <a
            target="_blank"
            href="https://drive.google.com/file/d/1wU1jrl2IxJbAdHRmJB0w4Ji95KeWTB52/view?usp=sharing"
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