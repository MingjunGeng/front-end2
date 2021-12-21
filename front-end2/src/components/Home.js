
import React from "react";

import { Link } from 'react-router-dom';
import '../CSS/Home.css'

import splashppJpg from "./../images/splash-pp.jpeg"
import splashcreatePng from "./../images/splash_create.png"
import splashfindPng from "./../images/splash_find.png"
import send32Png from "./../images/send-32.png"
import splashbuttoncreatePng from './../images/splash_button_create.png'
import splashbuttonfindPng from './../images/splash_button_find.png'
import Login from "./Login";


const Home = () => {

    return (
        <div className="home">
            <div className="home-image">
                {/* <a><img src={splashppJpg} alt='splash-pp.jpeg'/></a> */}
            </div>
            <div >
                <h2>did everyone bring mac and cheese?</h2>
            </div>

            <div className="home-border">
                <div className="home-border-radius">
                    <div><img src={splashcreatePng} alt='splash create'/></div>
                    <div>Create a customized online sign up sheet that makes it easy to plan a group meal.</div>
                    <ul>
                        <li>Fast, Easy, and FREE</li>
                        <li>Get Started in 5 Minutes or Less</li>
                        <li>We Send the Invitations</li>
                        <li>Automated Reminder Emails</li>
                    </ul>
                    <div> <img src={splashbuttoncreatePng} alt='splash button create'/></div>
                    <div>
                        <small>View A Sample Schedule!</small>
                    </div>
                </div>
                <div className="home-border-radius">
                    <div><img src={splashfindPng} alt='splash find'/></div>
                    <div>Find a group meal sign up sheet by searching below.</div>
                    {/* <Switch> */}
                        {/* <Route  component={Login}/>    */}
                        <div className="home-border-radius-login">
                        <Link to='/login'> <img src={splashbuttonfindPng} alt='splash button find Png'/></Link>
                            {/* <Login /> */}
                        </div>
                        
                    {/* </Switch> */}
                    <div>Need Help? Click Here!</div>
                </div>
                <div className="home-border-radius home-border-radius-Img">
                    {/* <div> */}
                        {/* <img src={send32Png} alt='send32Png'/> */}
                    {/* </div> */}
                </div>
            </div>
           
        </div>
    )
}

export default Home;
