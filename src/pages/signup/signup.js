import React from 'react'
import './signup.css'
import {Link} from 'react-router-dom'

function SignUp() {
  return (
    <div className="form-body">
        <form action="home.html" className="form1">
            <h1>Signup</h1>
            <input className="sign-input" type="email" id="email" placeholder="Email"/>
            <input className="sign-input" type="password" id="password" placeholder="Create Password"/>
            <input className="sign-input" type="password" id="password" placeholder="Confirm Password"/>
            <button type="submit" id='submit-btn'>signup</button>
            <p><small>Already have an account?<Link to='/login'> Login</Link></small></p>
        </form>
    </div>
  )
}

export default SignUp