import React from 'react'
import './App.css';
import Signup from './Components/Signup/Signup';
import Signup_Name from './Components/SignUp_Name/Signup_Name';
import Welcome from './Components/Welcome/Welcome';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './Components/Pages/Profile/Profile';
import Otp from './Components/Pages/OTP/Otp';
import SampleDashboard from './Components/Pages/OTP/SampleDashboard';
import Signin from './Components/Signin/Signin';

function App() {
  

  return (
    <div>
     <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/SignupName" element={<Signup_Name />} />
        <Route path="/SignupWelcome" element={<Welcome />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/otp" element={<Otp />} />
        <Route path="/signin" element={<Signin />} />
        
        {/*This Route is  just for the dashobaord i-e its sample dashboard    */}
        <Route path="/dashboard" element={<SampleDashboard />} />
      
      </Routes>
    </Router>

    </div>
  )
}

export default App
