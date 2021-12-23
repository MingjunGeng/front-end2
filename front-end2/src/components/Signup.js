import React, { useState, useEffect } from "react";
import { useHistory, Route, Link } from 'react-router-dom'
import styled from 'styled-components';
import Home from "./Home";
import axios from "axios";


const StyledSignup = styled.div`
display: flex;
justify-content: center;
.container {
background-color: ivory;
border-radius: 20px;
margin: 10%;
}

.top h1{
    font-family: 'cookie', cursive;
    font-size: 4rem;
    color: crimson;
    text-shadow: 1px 1px 2px black, 0 0 25px chocolate, 0 0 5px chocolate;
}




.top button{
    background-color: peru;
    padding: 1% 3%;
    border-radius: 20px;
    border: 0;
    color: white;
    font-family: 'frijole', cursive;
    font-size: 1.8rem;
}
#register {
    font-size: 1rem;
    margin: 2%;
    padding: 1% 2%;
    border-radius: 8px;
    color: rgb(30, 220, 20);
    background-color: white;
    border: 2px solid rgb(30, 220, 20);
}
#register:disabled {
    color: crimson;
    background-color: white;
    border: 2px solid crimson;
    cursor: not-allowed;
  }

button:hover {
    background-color: sandybrown;
    color: black;
    cursor: pointer;
}

h2{
    font-family: 'cookie', cursive;
    font-size: 4rem;
    color: sandybrown;
    text-shadow: 1px 1px 2px black, 0 0 25px wheat, 0 0 5px black;
}
.form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: wrap column;
}
label{
    font-family: times;
    color: saddlebrown;
    font-size: 1.1rem;
}
input{
    font-family: 'Croissant One', cursive;
    margin: 2%;
    padding: .8%;
    background-color: navajowhite;
    color: saddlebrown;
    text-align: center;
}
input[type=input]:focus {
  font-family: 'Croissant One', cursive;
  background-color: peru;
  color: white;

}
input[type=password]:focus {
  font-family: 'Croissant One', cursive;
  background-color: peru;
  color: white;
}
`



function Signup(props){
    const { values, submit, change, disabled, errors } = props;
 

    
    return (
        <StyledSignup>
        <div className="container">
            <div className="top">
                <h1>POTLUCK PALOOZA</h1>
                <nav>
                    <Link to='/'><button>Home</button></Link>
                    <Route exact path='/' component={Home.props} />
                </nav>
                <h2>Sign-Up</h2>
                <div className="signup">
                    <form className='form container'>
                        <label>First Name
                            <input 
                                name='firstName'
                                type='input'
                                
                            />
                        </label>
                        <label>Last Name
                            <input 
                                name='lastName'
                                type='input'
                                
                            />
                        </label>
                        <label>Email
                            <input 
                                name='signupEmail'
                                type='email'
                                
                            />
                        </label>  
                        <label>Password
                            <input 
                                name='signupPassword'
                                type='password'
                                
                            />
                        </label>
                        <label>Re-Enter Password
                            <input 
                                name='signupPasswordRepeat'
                                type='password'
                                
                            />
                        </label>
                        <button id="register" >Sign-Up</button>
                    </form>
                </div>
            </div>  
        </div>
        </StyledSignup>
    )

}

export default Signup;