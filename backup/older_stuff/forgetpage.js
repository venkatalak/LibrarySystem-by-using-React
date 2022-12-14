import React from 'react';

function Forgetpage() {
  return (
    <>
      <div class="wrapper">
        <div class="inner-warpper text-center">
          <h2 class="title">Forget Password</h2>
          <form action="" id="formvalidate" />
          <div class="input-group">
            <label class="palceholder" for="Enter new password">New Password</label>
            <input class="form-control" name="new password" id="userName" type="text" placeholder="" />
            <span class="lighting"></span>
          </div>
          <div class="input-group">
            <label class="palceholder" for="Enter confirm password"> Confirm Password</label>
            <input class="form-control" name="confirm password" id="userPassword" type=" confirm password" placeholder="" />
            <span class="lighting"></span>
          </div>

          <button type="submit" id="login">Submit</button>
        </div>
      </div>
    </>
  )
}
export default Forgetpage;