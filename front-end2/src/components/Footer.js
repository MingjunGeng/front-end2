
import React, { useEffect, useState } from "react";

import './../CSS/Footer.css'


// ttamlogotop
import ttamlogotopJpg from "./../images/ttamlogotop.jpeg"

const Footer = (props) => {




    return (
        <div className="footer">
            {/* <h2>Footer</h2> */}
            <div className="footer-border">
                <div className="footer-border-radius-left footer-bg">
                </div>
                <div className="footer-border-radius-right">
                    <a><img src={ttamlogotopJpg} alt='ttamlogotop'/></a>
                    <br/>
                    <a href="https://www.takethemameal.com" target="_blank">Coordinate meals for friends and family in need with TakeThemAMeal.com</a>
                
                </div>
            </div>
            <div className="footer-bar">
                <a>find a meal</a>
                &nbsp;•&nbsp;

                <a>plan a meal</a>
                &nbsp;•&nbsp;

                <a>view a sample</a>
                &nbsp;•&nbsp;

                <a>group meal ideas</a>
                &nbsp;•&nbsp;

                <a>(in)frequently asked questions</a>
                &nbsp;•&nbsp;

                <a>our story</a>
                &nbsp;•&nbsp;

                <a>contact us</a>

                <br/>
                <span>Copyright 2010-2021</span>
                &nbsp;•&nbsp;

                <a>privacy policy</a>
                &nbsp;•&nbsp;

                <a>terms of use</a>
                
                
            </div>

            <div>

            </div>
        </div>
    )
}
export default Footer;