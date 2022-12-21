import React from 'react';
import './StudentsInformationPage.css';
import { Link } from 'react-router-dom';
/**
 * This is the helper Function used to DeleteBooks 
 * @returns DeleteBooksPage
 */

function StudentsInformationPage() {

  return (
    <>
      <nav className="navstudent">
        <a className="nav-looostudent" href="aa">RGUKT IIIT</a>
        <ul className="nav-menuuustudent">
          <li className="nav-itemmmstudent">
            <a href="a" className="nav-linkkkstudent"><Link to='/LibrarianOperationsPage'>Back</Link></a>
          </li>
        </ul>
      </nav>
      <div class="hellostudent">
      <form id="studentt">
        <h4> Get Student Details!</h4>
        <input class="buttonn" type="submit" value="Get Data" />
      </form>
      </div>
      <div className="footer">
        @Copyright <a href="https://rguktn.ac.in/about/aboutrgukt/"> RGUKT </a> 2022- All Right Reserved.
      </div>

    </>
  )
}
export default StudentsInformationPage;