import React from 'react';
import './DeleteBooksPage.css';
import { Link } from 'react-router-dom';
/**
 * This is the helper Function used to DeleteBooks 
 * @returns DeleteBooksPage
 */

function DeleteBooksPage() {

  return (
    <>
      <nav className="navv">
        <a className="nav-loo" href="aa">RGUKT IIIT</a>
        <ul className="nav-menuu">
          <li className="nav-itemm">
            <a href="a" className="nav-linkk"><Link to='/LibrarianOperationsPage'>Back</Link></a>
          </li>
        </ul>
      </nav>
      <div class="hello">
      <form>
        <h4>Delete Books Here!</h4>
        <input name="sAuthUsername" type="text" id="sAuthUsername" size="20" maxlength="15" tabindex="100" autocomplete="off" placeholder="Enter BookName you want to delete" />
        <input name="sAuthPassword" type="password" id="sAuthPassword" size="20" maxlength="15" tabindex="110" autocomplete="off" placeholder="Enter BookId " />
        <input class="button" type="submit" value="Delete" />
      </form>
      </div>
      <div className="footer">
        @Copyright <a href="https://rguktn.ac.in/about/aboutrgukt/"> RGUKT </a> 2022- All Right Reserved.
      </div>

    </>
  )
}
export default DeleteBooksPage;