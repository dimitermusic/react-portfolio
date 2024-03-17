import React from 'react';
import '../styles/Navigation.css'

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function Navigation({ currentPage, handlePageChange, }) {
  return (
    <div className="nav-bar">
      <h1>Dimiter Yordanov</h1>
      <ul className="nav">
        <li>
          <button
            onClick={() => { handlePageChange('AboutMe') }}
            // This is a conditional (ternary) operator that checks to see if the current page is "AboutMe"
            // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
            className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}
          >
            About Me
          </button>
        </li>
        <li>
          <button
            onClick={() => { handlePageChange('Portfolio') }}
            // Check to see if the currentPage is `Portfolio`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
          >
            Portfolio
          </button>
        </li>
        <li>
          <button
            onClick={() => { handlePageChange('Contact') }}
            // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
          >
            Contact Me
          </button>
        </li>
        {/* <li>
          <button
            onClick={() => { handlePageChange('Resume') }}
            // Check to see if the currentPage is `Resume`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
          >
            Resume
          </button>
        </li> */}
      </ul>
    </div>
  );
}

export default Navigation;
