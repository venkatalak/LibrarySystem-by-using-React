import React from 'react';
/**
 * This is the helper function to create Index page for Library system
 * @returns Index page
 */
function Indexpage() {
  return (
    <>
      <header>
        <div class="wrapper">
          <div class="logo">
            <img src="https://www.fresherstore.com/wp-content/uploads/2021/01/RGUKT-logo.jpg" alt="" />
          </div>
        </div>
        <div class="welcome-text">
          <div><h1>Welcome to Smart Library</h1></div>
          <a href="#">Login</a>
        </div>
      </header>
    </>
  );

}
export default Indexpage;