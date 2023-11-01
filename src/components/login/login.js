import React from 'react'
import '../signup/signup.css'
import {Link} from 'react-router-dom'

function Login() {
  return (
    <div className='form-body'>
        <form action="home.html" className="form1">
        <h1>Login</h1>
        <input type="email" id="email" placeholder="Email"/>
        <input type="password" className="password" placeholder="Password"/>
        <button type="submit" className='submit-btn'>Login</button>
        <p><small>Don't have an account?<Link to='/signup'> Signup</Link></small></p>
        </form>
    </div>
  )
}

export default Login