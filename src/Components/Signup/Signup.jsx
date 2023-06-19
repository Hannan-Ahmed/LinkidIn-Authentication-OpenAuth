import React from 'react'
import './Signup.css'
import G from '../imgaes/g.jpg'
import Linkdin from '../imgaes/Linkidin.png'
import FooterImg from '../imgaes/footimg.jpg'
import { useNavigate } from "react-router-dom";
import Head from '../Head/Head'

function Signup() {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/SignupName");
  }

  const Movetosignin = () => {
    navigate('/signin')
  }

  return (
    <div className='Signup11'>

      <Head />

      <div className='SignupHeading'>
        Make the most of your professional life
      </div>

      <div className="signupForm1">

        <div className="mail">
          <span className='tagsname'>Email</span>
          <span className='inputs'><input type="email" name="" id="" /></span>
        </div>

        <div className="password">
          <span className='tagsname'>Password (6 or more characters)</span>
          <span className='inputs'><input type="password" name="" id="" /></span>
        </div>

        <div>
          <p id='aggrement1'>
            By clicking Agree & Join, you agree to the LinkedIn <span style={{ color: "#0A66C2" }}> User</span> <br />  <span style={{ color: "#0A66C2" }}>Agreement</span>,<span style={{ color: "#0A66C2" }}> Privacy</span> <span style={{ color: "#0A66C2" }}>Policy</span>, and Cookie Policy.
          </p>
        </div>

        <div>
          <button id='agree1' onClick={handleClick}>Agree & Join</button>
        </div>

        <div className='line_Or1'>
          <div className='lineor'></div>
          <div >or</div>
          <div className='lineor'></div>
        </div>

        <div className='Googlecontinue1'>
          <div><img id='g_img' src={G} alt="" /></div>
          <div id='continue1' className='SiginContinue'>Continue with Google </div>
        </div>

        <div className='Googlecontinue1'>
          <div><img id='g_img' className='LinkedinContinue'  src={Linkdin} alt="" /></div>
          <div id='continue1' className='SiginContinue'>Continue with LinkedIn </div>
        </div>

        <div className='Sign_if1'>
          <p>Already on LinkedIn? <span onClick={Movetosignin} style={{ color: '#8344CC' }}>Sign in</span> </p>
        </div>

      </div>

      <div className='bottom_text1'>
        <p>Looking to create a page for a business? <span style={{ color: '#0A66C2' }}> Get help</span></p>
      </div>












      <div className="footNav1">

        <li><img src={FooterImg} style={{ width: '62px', height: '20px' }} alt="" /></li>
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

export default Signup
