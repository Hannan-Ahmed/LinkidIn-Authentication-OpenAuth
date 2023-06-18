import React, { useEffect, useState } from 'react'
import "./Otp.css"
import Head from '../../Head/Head'
import { useNavigate } from 'react-router-dom'

function Otp() {

    const [verify, setverify] = useState(true)
    const [otp, setotp] = useState('')
    const navigate = useNavigate()

    const handlechange = (e) => {
        setotp(e.target.value)
    }

    const MoveToDashboard = (e) => {
        navigate('/dashboard')
    }

    useEffect(() => {
        if (otp == '1234') {
            setverify(false)
            console.log(otp)
        }
    }, [otp])

   
    return (
        <div className='prof'>

            <Head />

            <div className='otpHeading'>
                Confirm your email
            </div>

            <div className='otptext'>
                Type in the code we sent to 345n846@gmail.com.<span style={{ fontWeight: 600 }}>Edit email</span>
            </div>

            <div className="signupForms">

                <div className="otps">
                    <span className='otpinput'><input onChange={handlechange} type="text" name="" id="partitioned" maxlength="4" placeholder=' _ _ _ _' /></span>
                </div>

                <div className='impNote'>
                    <span id='privacy'>Your privacy is important</span>
                    <p id='updates'>
                        We may send you member updates, recruiter messages, job suggestions, invitations, reminders and promotional messages from us and our partners. You can change your <span style={{ color: '#70B5F9' }}>preferences</span>  anytime.
                    </p>
                </div>

                <div className='reSend'>
                    <span>Didn't receive the code? </span>
                    <span id='again'>Send again</span>
                </div>

                <div>
                    <button onClick={MoveToDashboard} className='confirm' disabled={verify} id='agree'>Agree and confirm</button>
                </div>

            </div>

        </div>
    )
}

export default Otp