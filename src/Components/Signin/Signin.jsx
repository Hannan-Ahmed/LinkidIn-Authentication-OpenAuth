import React, { useEffect, useState } from 'react'
import "./Signin.css"
import Head from '../Head/Head'
import Linkdin from '../imgaes/Linkidin.png'
import FooterImg from '../imgaes/footimg.jpg'
import { useNavigate } from 'react-router-dom'
import G from '../imgaes/g.jpg'
import { googleLogout, useGoogleLogin } from '@react-oauth/google';


function Signin() {
    const navigate = useNavigate()

    // *********************  GOOGLE LOGIN FUNCTIONALITY *********************************
    const [user, setUser] = useState([]);
    const [check, setcheck] = useState(false)

    const login = useGoogleLogin({
        onSuccess: (codeResponse) => {
            setUser(codeResponse)
            setcheck(true)
        },
        onError: (error) => console.log('Login Failed:', error)
    });


    // ***********************  GOOGLE LOGIN FUNCTIONALITY ENDS HERE *********************************


    const Movetosignup = () => {
        navigate('/')
    }

    const checkFunction = () => {
        console.log("sdsdd")
        localStorage.setItem('tocken', user.access_token)
        navigate('/dashboard')
    }

    return (
        <div>

            <Head />

            {check ? checkFunction() : null}

            <div className="signin">

                <div className="headingSignin">Sign in</div>
                <div className="textSignin">Stay updated on your professional world</div>

                <div className='signininputBox'>

                    <div className='SignInputs'><input placeholder='Email or Phone' type="text" name="" id="" /></div>

                    <div className='SignInputs'><input placeholder='Password' type="password" name="" id="" /></div>

                </div>

                <div className='Forgetpass'>Forgett Password?</div>

                <div>
                    <button className='Signinbtn' id='agree1' >Sign in</button>

                    <div className='line_Or1'>
                        <div className='lineor' id='Signiline'></div>
                        <div >or</div>
                        <div className='lineor' id='Signiline'></div>
                    </div>

                    <div className='Googlecontinue1'>
                        <div><img id='g_img' src={G} style={{ position: 'relative', left: '5.8rem' }} alt="" /></div>
                        <div id='continue1' onClick={() => login()}>Continue with Google </div>

                    </div>

                    <div className='Googlecontinue1'>
                        <div><img id='g_img' className='LinkedinContinue' src={Linkdin} alt="" /></div>
                        <div id='continue1'>Continue with LinkedIn </div>
                    </div>

                </div>
            </div>

            <div className='newuser'>New to LinkedIn?  <span onClick={Movetosignup} className='joinnow'>Join now</span> </div>

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

export default Signin


