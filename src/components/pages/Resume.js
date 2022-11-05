import React from "react";
import "../../styles/Resume.css";

export default function Resume() {
  return (
    <div className="resume">
      <h1>Resume</h1>
      <div className="skills">
        <h5>Proficiencies:</h5>
        <p>
          Extensive experience and deep understanding of React, Typescript,
          Node, Python, MySQL, MongoDB, Git, AWS, Jira, Test Driven Development,
          Agile Methodologies. Impressive pedigree of delivering products and
          features to Fortune 50 enterprise business customers with 90%-100%
          unit test coverage on-time and up to two weeks ahead of timeline.
          Other skills include Java, NoSQL, REST API Best Practices, HTML, CSS,
          Docker, Nomad, Jenkins, CI/CD Pipeline, Splunk, VictorOps.
        </p>
      </div>
      <div className="skills">
        <h5>Soft Skills:</h5>
        <p>
          Unusually determined and lightning-fast learner at the core, always
          curious, genuinely excited to come to work five days per week and
          collaborate with my team, adept and relentless problem solver,
          professional demeanor, proven leader, excellent time manager, creative
          visionary.
        </p>
      </div>
      <div className="resume-link">
        <p>
          <a
            target="_blank"
            href="https://drive.google.com/file/d/11gibUW3GNGG97NloVX6c3avDwi-2lfCU/view?usp=sharing"
            rel="noreferrer"
          >
            Click Here
          </a>{" "}
          to view and download my resume.
        </p>
      </div>
    </div>
  );
}
