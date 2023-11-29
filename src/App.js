// import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/navbar'
import Footer from './components/footer/footer'
import LandingPage from './pages/landingPage/landingPage'
import Profiles from './pages/profiles/profiles'
import AboutUs from './pages/aboutUs/aboutus'
import SignUp from './pages/signup/signup'
import Login from './pages/login/login'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
          <Route path="/" Component={LandingPage}/>
          <Route path="/table" Component={Profiles} />
          <Route path="/AboutUs" Component={AboutUs} />
          <Route path="/logout" Component={Login} />
          <Route path="/login" Component={Login} />
          <Route path="/signup" Component={SignUp}/>
      </Routes>
      <Footer />

    </div>
  );
}

export default App;

