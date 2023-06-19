import React, { useEffect, useState } from 'react'

import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import SampleDashboard from './Pages/OTP/SampleDashboard';

function GoogleProfile() {

    const navigate = useNavigate()
    const [user, setUser] = useState([]);
    const [profile, setProfile] = useState([]);


    const login = useGoogleLogin({
        onSuccess: (codeResponse) => {
            setUser(codeResponse)
            localStorage.setItem('tocken',user.access_token)
        },
        onError: (error) => console.log('Login Failed:', error)
    });

    // useEffect(
    //     () => {
    //         if (user) {
    //             axios
    //                 .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
    //                     headers: {
    //                         Authorization: `Bearer ${user.access_token}`,
    //                         Accept: 'application/json'
    //                     }
    //                 })
    //                 .then((res) => {
    //                     setProfile(res.data);
    //                 })
    //                 .catch((err) => console.log(err));
    //         }
    //     },
    //     [user]
    // );
    // log out function to log the user out of google and set the profile array to null
    const logOut = () => {
        googleLogout();
        setProfile(null);
    };
    return (
        <div>
            <h2>React Google Login</h2>
            <br />
            <br />
            
            <button onClick={logOut}>Log out</button>


            <button onClick={() => login()}>Sign in with Google 🚀 </button>





        </div>
    )
}

export default GoogleProfile
