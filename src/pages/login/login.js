import React, { useState } from "react";
import "../signup/signup.css";
import instance from "../../interceptors/interceptors";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const initialUserData = {
    username: "",
    password: "",
  };

  // State to manage user input data
  const [userData, setUserData] = useState(initialUserData);

  // Handle user input change
  const handleUserInput = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    const { username, password } = userData;
    e.preventDefault();

    // Check if any input field is empty
    if (Object.values(userData).some((item) => item === "")) {
      console.log("Input data is not complete");
      return;
    }
    // Make API call to authenticate user and obtain a token
    instance
      .post("api/token/", {
        username,
        password,
      })
      .then((res) => {
        const token = res.data.access_token;
        console.log("Login successful");
        navigate("/table");
      })
      .catch((err) => {
        alert(`Error logging in: ${err.message}`);
      });
  };

  return (
    <div className="form-body">
      <form onSubmit={handleSubmit} className="form1">
        <h1>Login</h1>
        <input
          type="input"
          className="sign-input"
          id="email"
          name="username"
          placeholder="Username"
          value={userData.username}
          onChange={handleUserInput}
        />
        <input
          type="password"
          className="sign-input"
          name="password"
          placeholder="Password"
          value={userData.password}
          onChange={handleUserInput}
        />
        <button type="submit" className="submit-btn">
          Login
        </button>
        <p>
          <small>
            Don't have an account?<Link to="/signup"> Signup</Link>
          </small>
        </p>
      </form>
    </div>
  );
}

export default Login;
