import React from 'react';
import './Index page.css';
/**
 * This is the helper function to create Index page for Library system
 * @returns Index page
 */
function Indexpage() {
  return (
    <>
      <header>
        <div className="wrapper">
          <div className="logo">
            <img src="https://www.fresherstore.com/wp-content/uploads/2021/01/RGUKT-logo.jpg" alt="" />
          </div>
        </div>
        <div className="welcome-text">
          <div><h1>Welcome to Smart Library</h1></div>
          <a href="a">Login</a>
        </div>
      </header>
    </>
  );

}
export default Indexpage;