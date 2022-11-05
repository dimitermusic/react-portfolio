import React from 'react';
import '../styles/Project.css';

function Project(props) {
  return (
    <div className='project-card'>
      <div className='img-container'>
        <a target='_blank' href={props.github} rel='noreferrer'>
          <img src={props.image} alt={props.alt} />
          <h6>{props.name}</h6>
        </a>
      </div>
      <div className='project-label'>
        <div>
          <h1>{props.name}</h1>
          <p>{props.desc}</p>
        </div>
        <div className='links'>
          <a target='_blank' href={props.github} rel='noreferrer'>
            Github Repository
          </a>
          {props.deployed && (
            <a target='_blank' href={props.deployed} rel='noreferrer'>
              Deployed Site
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default Project;
