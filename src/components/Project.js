import React from 'react';
import '../styles/Project.css'

function Project() {
    return (
        <div className="project-section">
            <div className="project-card">
                <div className="project-label">
                    <div>
                        <h1>Official Website (HTML/CSS/Javascript)</h1>
                    </div>
                    <div className="links">
                        <a
                        target="_blank"
                        href="https://github.com/dimitermusic/official-website.html"
                        >
                            Github Repository
                        </a>
                        <a
                        target="_blank"
                        href="https://www.dimitermusic.com/"
                        >
                            Deployed Site
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;
