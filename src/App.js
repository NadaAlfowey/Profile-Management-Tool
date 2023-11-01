// import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/navbar'
import Footer from './components/footer/footer'
import LandingPage from './components/landingPage/landingPage'
import Table from './components/table/table'
import AboutUs from './components/aboutUs/aboutus'
import SignUp from './components/signup/signup'
import Login from './components/login/login'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
          <Route path="/" Component={LandingPage}/>
          <Route path="/table" Component={Table} />
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

