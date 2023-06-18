import React from 'react'
import Head from '../../Head/Head'
import './Profile.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


function Profile() {

    const [display, setdiplay] = useState(false)
    const [display2, setdisplay2] = useState(false)
    const [toggle, settoggle] = useState(false)


    const navigate = useNavigate()

    const handletoggle = () => {
        if (toggle == false)
            settoggle(true)

        else
            settoggle(false)

        console.log("Toggeld")
    }

    const handleStudent = () => {
        setdisplay2(true)
    }
    const handleNotStudent = () => {
        setdisplay2(false)
        settoggle(false)
    }
    const handleFocus = () => {

        setdiplay(true)
    }

    const handlenavigate = () => {
        navigate('/otp')
    }

    return (
        <div className='prof'>

            <Head />

            <div className='SignupHeading2'>
                Your profile helps you discover new people and <br /> opportunities
            </div>

            <div className="signupForms">

                {!display2 &&

                    <div className="mail">
                        <span className='tagsnames'>Most recent job title *</span>
                        <span className='inputs'><input type="text" name="" id="" onClick={handleFocus} /></span>
                    </div>
                }

                {display && !display2 &&

                    <div className='password'>

                        <span className='tagsnames'>Employment type</span>

                        <select className="employments" id="cars">
                            <option value="Full">Full-time</option>
                            <option value="Part">Part-time</option>
                            <option value="Self">Self-employed</option>
                            <option value="Freelance">Freelance</option>
                            <option value="Contract">Contract</option>
                            <option value="Intrenship">Intrenship</option>
                            <option value="Apprenticeship">Apprenticeship</option>
                            <option value="Seasonal">Seasonal</option>
                        </select>

                    </div>
                }

                {display && !display2 &&
                    <div className="mail" >
                        <span className='tagsnames'>Most recent company *</span>
                        <span className='inputs'><input type="text" name="" id="" /></span>
                    </div>
                }

                {/* ***************************  STUDENT FORM DATA  ***************************  */}


                {display2 &&

                    <div>

                        <div className="mail">
                            <span className='tagsnames'>School or College/University *</span>
                            <span className='inputs'><input type="text" name="" id="" onClick={handleFocus} /></span>
                        </div>

                        <div className='timeperiod'>

                            <div className="mail" id='date'>
                                <span className='tagsnames'>Start year *</span>


                                <select className="dates" id="cars">
                                    <option value="Full">2023</option>
                                    <option value="Part">2022</option>
                                    <option value="Self">2021</option>
                                    <option value="Freelance">2020</option>
                                    <option value="Contract">2019</option>
                                    <option value="Intrenship">2018</option>
                                    <option value="Apprenticeship">2017</option>
                                    <option value="Seasonal">2016</option>
                                    <option value="Seasonal">2015</option>
                                    <option value="Seasonal">2014</option>
                                    <option value="Seasonal">2013</option>
                                    <option value="Seasonal">2012</option>
                                    <option value="Seasonal">2011</option>
                                    <option value="Seasonal">2010</option>
                                    <option value="Seasonal">2009</option>
                                    <option value="Seasonal">2008</option>
                                    <option value="Seasonal">2007</option>
                                    <option value="Seasonal">2006</option>
                                    <option value="Seasonal">2005</option>
                                    <option value="Seasonal">2004</option>
                                    <option value="Seasonal">2003</option>
                                    <option value="Seasonal">2002</option>
                                    <option value="Seasonal">2001</option>
                                    <option value="Seasonal">2000</option>
                                </select>

                            </div>

                            <div className="mail" id='date'>
                                <span className='tagsnames'>End year (or expected) *</span>

                                <select className="dates" id="cars">
                                    <option value="Full">2023</option>
                                    <option value="Part">2022</option>
                                    <option value="Self">2021</option>
                                    <option value="Freelance">2020</option>
                                    <option value="Contract">2019</option>
                                    <option value="Intrenship">2018</option>
                                    <option value="Apprenticeship">2017</option>
                                    <option value="Seasonal">2016</option>
                                    <option value="Seasonal">2015</option>
                                    <option value="Seasonal">2014</option>
                                    <option value="Seasonal">2013</option>
                                    <option value="Seasonal">2012</option>
                                    <option value="Seasonal">2011</option>
                                    <option value="Seasonal">2010</option>
                                    <option value="Seasonal">2009</option>
                                    <option value="Seasonal">2008</option>
                                    <option value="Seasonal">2007</option>
                                    <option value="Seasonal">2006</option>
                                    <option value="Seasonal">2005</option>
                                    <option value="Seasonal">2004</option>
                                    <option value="Seasonal">2003</option>
                                    <option value="Seasonal">2002</option>
                                    <option value="Seasonal">2001</option>
                                    <option value="Seasonal">2000</option>
                                </select>

                            </div>

                        </div>


                        <div className='ageValidation'>
                            <span>I'm over 16</span>

                            <span style={{ display: 'flex', alignItems: 'center' }}>


                                {toggle ? <span className='toggletext'>Yes</span> : <span className='toggletext'>No</span>}

                                <label class="switch">

                                    <input type="checkbox" onClick={handletoggle} />
                                    <span class="slider round"></span>
                                </label>
                            </span>

                        </div>


                        {toggle && <div className="mail">

                            <span className='tagsnames birth'>Date of birth</span>

                            <div className='time'>
                                <span>Month *</span><span style={{ paddingRight: '1.3rem' }}>Day *</span><span style={{ paddingRight: '5.3rem' }}>Year *</span>
                            </div>

                            <div className='time_inputs'>
                                <span><select className="dates" id="cars">
                                    <option selected="selected" value="Full">-</option>
                                    <option value="Full">January</option>
                                    <option value="Part">February</option>
                                    <option value="Self">March</option>
                                    <option value="Freelance">Aprail</option>
                                    <option value="Contract">May</option>
                                    <option value="Intrenship">June</option>
                                    <option value="Apprenticeship">July</option>
                                    <option value="Seasonal">August</option>
                                    <option value="Seasonal">September</option>
                                    <option value="Seasonal">October</option>
                                    <option value="Seasonal">December</option>
                                </select></span>



                                <span><select className="dates" id="cars">
                                    <option selected="selected" value="Full">-</option>
                                    <option value="Full">1</option>
                                    <option value="Part">2</option>
                                    <option value="Self">3</option>
                                    <option value="Freelance">4</option>
                                    <option value="Contract">5</option>
                                    <option value="Intrenship">6</option>
                                    <option value="Apprenticeship">7</option>
                                    <option value="Seasonal">8</option>
                                    <option value="Seasonal">9</option>
                                    <option value="Seasonal">10</option>
                                    <option value="Seasonal">11</option>
                                    <option value="Seasonal">12</option>
                                    <option value="Seasonal">13</option>
                                    <option value="Seasonal">14</option>
                                    <option value="Seasonal">15</option>
                                    <option value="Seasonal">16</option>
                                    <option value="Seasonal">17</option>
                                    <option value="Seasonal">18</option>
                                    <option value="Seasonal">19</option>
                                    <option value="Seasonal">20</option>
                                    <option value="Seasonal">21</option>
                                    <option value="Seasonal">22</option>
                                    <option value="Seasonal">23</option>
                                    <option value="Seasonal">24</option>
                                    <option value="Seasonal">25</option>
                                    <option value="Seasonal">26</option>
                                    <option value="Seasonal">27</option>
                                    <option value="Seasonal">28</option>
                                    <option value="Seasonal">29</option>
                                    <option value="Seasonal">30</option>
                                    <option value="Seasonal">31</option>
                                </select></span>


                                <span><select className="dates" id="cars">
                                    <option selected="selected" value="Full">-</option>

                                    <option value="Full">2023</option>
                                    <option value="Part">2022</option>
                                    <option value="Self">2021</option>
                                    <option value="Freelance">2020</option>
                                    <option value="Contract">2019</option>
                                    <option value="Intrenship">2018</option>
                                    <option value="Apprenticeship">2017</option>
                                    <option value="Seasonal">2016</option>
                                    <option value="Seasonal">2015</option>
                                    <option value="Seasonal">2014</option>
                                    <option value="Seasonal">2013</option>
                                    <option value="Seasonal">2012</option>
                                    <option value="Seasonal">2011</option>
                                    <option value="Seasonal">2010</option>
                                    <option value="Seasonal">2009</option>
                                    <option value="Seasonal">2008</option>
                                    <option value="Seasonal">2007</option>
                                    <option value="Seasonal">2006</option>
                                    <option value="Seasonal">2005</option>
                                    <option value="Seasonal">2004</option>
                                    <option value="Seasonal">2003</option>
                                    <option value="Seasonal">2002</option>
                                    <option value="Seasonal">2001</option>
                                    <option value="Seasonal">2000</option>
                                </select></span>
                            </div>

                        </div>}

                    </div>
                }


                {/* ***************************  End  ***************************  */}


                {!display2 &&
                    <div className='student' onClick={handleStudent}>
                        I'm a stduent
                    </div>
                }

                {display2 && <div className='student' onClick={handleNotStudent} style={{ marginTop: '1rem' }}>
                    I'm not a stduent
                </div>
                }

                <div>
                    <button id='agree' onClick={handlenavigate}>Continue</button>
                </div>

            </div>

        </div>
    )
}

export default Profile
