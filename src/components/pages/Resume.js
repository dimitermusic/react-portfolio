import React from 'react';
import '../../styles/Resume.css';

export default function Resume() {
  return (
    <div className='resume'>
      <h1>Resume</h1>
      <div className='skills'>
        <h5>Technical Proficiencies:</h5>
        <p>
          Extensive experience in application security, team leadership, software design, and maintenance of complex legacy systems processing millions of sensitive records securely. My technical proficiency spans a range of technologies and methodologies, including React, TypeScript, Node.js, Python, MySQL, MongoDB, Git, AWS, Jira, Test Driven Development (TDD), and Agile practices. I have a proven track record in delivering solutions to enterprise customers, consistently hitting deadlines. I spearheaded a comprehensive overhaul of our organization's security operations. This initiative involved personally designing, building, testing, and launching an innovative automation solution. The project was part of a broader strategy to address existing gaps in the workload and timeline management of our application security remediations.
        </p>
      </div>
      <div className='skills'>
        <h5>Personal Attributes:</h5>
        <p>
          Unusually determined and lightning-fast learner at the core, always
          curious, genuinely excited to come to work five days per week and
          collaborate with my team, adept and relentless problem solver,
          professional demeanor, proven leader, excellent time manager, creative
          visionary.
        </p>
      </div>
      <div className='resume-link'>
        <p>
          <a
            target='_blank'
            href='https://drive.google.com/file/d/1pQwcHFVcnfVpBrLwGh8wZqT_i_rHvNoR/view?usp=sharing'
            rel='noreferrer'
          >
            Click Here
          </a>{' '}
          to view and download my resume.
        </p>
      </div>
    </div>
  );
}
