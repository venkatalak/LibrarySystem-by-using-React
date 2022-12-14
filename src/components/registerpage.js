import React from 'react';
import { useState } from "react";

/**
 * This is the helper function to create Register page 
 * @returns Register page
 */
function Registerpage() {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [mobileno, setMobileNO] = useState("")
  const [branch, setBranch] = useState("")
  const [formErrors,setFormErrors]=useState("")

  const handleInput = (event) => {
    switch (event.target.name) {
      case "username":
        setUsername(event.target.value)
        break;
      case "email":
        setEmail(event.target.value)
        break;
      case "password":
        setPassword(event.target.value)
        break;
      case "mobileno":
        setMobileNO(event.target.value)
        break;
      case "branch":
        setBranch(event.target.value)
        break;
      default:
      // code block
    }
  }
  const validate = (username, email, password,mobileno,branch) => {
		const errors = {}
    // const regex1 = /^[A-Za-z][A-Za-z0-9_]{7,29}$/;
		const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    // const regex3 = /^[A-Z]$/;
		if (!username) {
				errors.username = "UserName is required";
    }
    else{
      errors.username="";
    }

		if (!email) {
			errors.email = "Email is required!";
		} else if (!regex.test(email)) {
			errors.email = "This is not a valid email format!";
		}
		if (!password) {
			errors.password = "Password is required";
		} else if (password.length < 4) {
			errors.password = "Password must be more than 4 characters";
		} else if (password.length > 10) {
			errors.password = "Password cannot exceed more than 10 characters";
		}
    if(!mobileno)
    {
      errors.mobileno="mobile number is required ";
    }
    if(!branch)
    {
      errors.branch="branch is required ";
    }
		return errors;
	}
  const handleSubmit = (event) => {
		
		setFormErrors(validate(username,email,password,mobileno,branch))
		// console.log(validate(username).username)
		event.preventDefault()
	}


  return (
    <>
      <div className="registration-form">
        <form>
          <div className="form-icon">
            <h3>Register Page</h3>
          </div>
          <div className="form-group">
            <input type="text" className="form-control item" id="username" placeholder="Username" onChange={handleInput} />
            <div className="error">{formErrors.username}</div>
          </div>
          
  
          <div className="form-group">
            <input type="text" className="form-control item" id="email" placeholder="Email" onChange={handleInput}/>
            <div className="error">{formErrors.email}</div>
          </div>
          
          <div className="form-group">
            <input type="password" className="form-control item" id="password" placeholder="Password" onChange={handleInput}/>
            <div className="error">{formErrors.password}</div>
          </div>
          
          <div className="form-group">
            <input type="text" className="form-control item" id="phone-number" placeholder="Phone Number" onChange={handleInput}/>
            <div className="error">{formErrors.mobileno}</div>
          </div>
         
          <div className="form-group">
            <input type="text" className="form-control item" id="branch" placeholder="Branch" onChange={handleInput}/>
            <div className="error">{formErrors.branch}</div>
          </div>
          
          <div className="form-group">
            <button type="button" className="btn btn-block create-account" onClick={handleSubmit}>Create Account</button>
          </div>
        </form>
      </div>
    </>
  )
}
export default Registerpage;