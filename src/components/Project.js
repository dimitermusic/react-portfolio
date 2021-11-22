import React from 'react';
import '../styles/Project.css'

function Project(props) {
    return (
        <div className="project-card">
            <img
                src={props.image}
                alt={props.alt}
            />
            <div className="project-label">
                <div>
                    <h1>{props.name}</h1>
                </div>
                <div className="links">
                    <a
                        target="_blank"
                        href={props.github}
                    >
                        Github Repository
                    </a>
                    <a
                        target="_blank"
                        href={props.deployed}
                    >
                        Deployed Site
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Project;
