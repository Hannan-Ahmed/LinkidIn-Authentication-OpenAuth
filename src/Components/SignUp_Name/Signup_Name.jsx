import React from 'react'
import "./Signup_Name.css"
import Head from '../Head/Head'
import FooterImg from '../imgaes/footimg.jpg'
import { useNavigate } from 'react-router-dom'

function Signup_Name() {
  
const navigate=useNavigate()
  const handleclick=()=>{
    navigate('/SignupWelcome')
  }

  return (
    <div className='Signup1'>

    <Head/>

      <div className='SignupHeading'>
        Make the most of your professional life
      </div>

      <div className="signupForm">

        <div className="mail">
          <span className='tagsname'>First Name</span>
          <span className='inputs'><input  type="text" name="" id="fname" /></span>
        </div>

        <div className="password">
          <span className='tagsname'>Last Name</span>
          <span className='inputs'><input type="text" name="" id="lname" /></span>
        </div>

        <div>
          <button id='agree' onClick={handleclick}>Continue</button>
        </div>

      </div>

      <div className="footNav" id='sd' >

        <li><img src={FooterImg} style={{width:'62px',height:'20px'}} alt="" /></li>
        <li>&copy; 2023</li>
        <li>About</li>
        <li>Accessibility</li>
        <li>User Agreement</li>
        <li>Privacy Policy</li>
        <li>Cookie Policy</li>
        <li>Copyright Policy</li>
        <li>Brand Policy</li>
        <li>Guest Controls</li>
        <li>Community Guidelines</li>
        
      </div>

    </div>
  )
}

export default Signup_Name
