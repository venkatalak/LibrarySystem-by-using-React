import React from 'react';
import Footer from './files/common/footerpage.js'
/**
 * This is the helper fucntion to create about page of library system
 * @returns 
 */

function Aboutpage() {
  return (
    <div>
      <nav className="navbar">
        <a href="#" className="nav-logo">RGUKT IIIT</a>
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="Home page.html" className="nav-link">Home</a>
          </li>

          <li className="nav-item">
            <a href="#" className="nav-link">Branches</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">Contact</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">Profile</a>
          </li>
        </ul>

      </nav>
      <div className="about">
        <h2>About University Library</h2>
        <p> Library is exposed to vast knowledge on various disciplines through electronic resources. The Library is well
          developed to meet the needs of the students and the faculty. Video Recordings are prepared in well established
          studios within RGUKT. Students have open access to the Library to make use of Books. Online resources also
          produced by the RGUKT to serve the needs of students.
          <h2>Objectives of Library</h2>
          <p>To procure library collection as basic requirement to enriching quality education.
            The collection includes Text Books, Additional Reading Books, Reference Books, Newspapers, Magazines and
            Periodicals etc.,
            Encouraging self-learning among the students.
            Keeping the libraries in the late hours after the class room sessions.
            Motivating the students towards study culture.
            To procure books on personality development etc.,
            To ensure library support with the help of library automation and automated services;
            To provide Electronic Resources viz., e-Books, e-Journals and e-Content.
            To support with research material.</p>
        </p>
      </div>
      <div><Footer/></div>
    </div>
  )
}
export default Aboutpage;