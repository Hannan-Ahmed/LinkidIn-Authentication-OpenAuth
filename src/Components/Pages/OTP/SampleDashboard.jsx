import React,{useState,useEffect} from 'react'
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
function SampleDashboard() {

  const navigate=useNavigate()

  const logOut = () => {
    googleLogout();
  
    navigate('/')
};

const [ user, setUser ] = useState(true);
    const [ profile, setProfile ] = useState([]);

const a=localStorage.getItem('tocken')


useEffect(
  () => {
      if (user) {
          axios
              .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${a}`, {
                  headers: {
                      Authorization: `Bearer ${user.access_token}`,
                      Accept: 'application/json'
                  }
              })
              .then((res) => {
                  setProfile(res.data);
              })
              .catch((err) => console.log(err));
      }
  },
  [ user ]
);



  return (
    <h1>
     Welcome to the Dashboard 


     {profile ? (
        <div>
            <img src={profile.picture} alt="user image" />
            <h3>User Logged in</h3>
            <p>Name: {profile.name}</p>
            <p>Email Address: {profile.email}</p>
            <br />
            <br />
            <button onClick={logOut}>Log out</button>
        </div>
    ) : (
        <button >Sign in with Google 🚀 </button>
    )}

    </h1>
  )
}

export default SampleDashboard
