import React from 'react';

function Registerpage(){
  return(
    <>
    <div class="registration-form">
        <form>
            <div class="form-icon">
                <span>Register Page</span>
            </div>
            <div class="form-group">
                <input type="text" class="form-control item" id="username" placeholder="Username"/>
            </div>
            <div class="form-group">
                <input type="password" class="form-control item" id="password" placeholder="Password"/>
            </div>
            <div class="form-group">
                <input type="text" class="form-control item" id="email" placeholder="Email"/>
            </div>
            <div class="form-group">
                <input type="text" class="form-control item" id="phone-number" placeholder="Phone Number"/>
            </div>
            <div class="form-group">
                <input type="text" class="form-control item" id="branch" placeholder="Branch"/>
            </div>
            <div class="form-group">
                <button type="button" class="btn btn-block create-account">Create Account</button>
            </div>
        </form>
    </div>
    </>
  )
}
export default Registerpage;