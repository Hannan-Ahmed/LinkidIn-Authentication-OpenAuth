import React from 'react'
import "./Welcome.css"
import logo from '../imgaes/logo.png'
import G from '../imgaes/g.jpg'
import FooterImg from '../imgaes/footimg.jpg'
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

function Welcome() {
 
    const navigate = useNavigate()
    const [country, setCountry] = useState('');
    const [region, setRegion] = useState('');

    const selectCountry = (val) => {
        setCountry(val);
    }
    const selectRegion = (val) => {
        setRegion(val);
    }

    const handleclick = () => {
        navigate('/Profile')
    }

    return (
        <div className='Signup1'>

            <div className="head">
                <img src={logo} alt="" />
            </div>

            <div className='SignupHeading'>
                Welcome, sdfsf! What's your location?
            </div>

            <div className='Secondary_geading'>
                See people, jobs, and news in your area.
            </div>

            <div className="signupForm">

                <div className="mail">
                    <span className='tagsname'>Country/Region  *</span>

                    <span className='inputs'>

                        <CountryDropdown
                            classes='dropdowns'
                            value={country}
                            onChange={(val) => selectCountry(val)}

                            style={{
                                fontSize: '15px',
                                appearance: 'none'
                            }}
                        />

                    </span>
                </div>

                <div className="password"  >
                    <span className='tagsname'>City/State *</span>
                    <span className='inputs'>
                        <RegionDropdown
                            country={country}
                            value={region}
                            style={{
                                fontSize: '15px',
                                appearance: 'none'
                            }}
                            classes='dropdowns'
                            onChange={(val) => selectRegion(val)}
                        /></span>
                </div>

                <div>
                    <button id='agree' onClick={handleclick}>Next</button>
                </div>

            </div>

        </div>
    )
}

export default Welcome