import React, { useState, useEffect } from "react";
import { useHistory, Route, Link } from 'react-router-dom'
import styled from 'styled-components';
import Home from "./Home";
import axios from "axios";
import { MdClose } from 'react-icons/md';

const StyledLogin = styled.div`
display: flex;
justify-content: center;
align-items: flex-start;

#loginButton {
    font-size: 1rem;
    margin: 2%;
    padding: 1% 2%;
    border-radius: 8px;
    color: rgb(30, 220, 20);
    background-color: white;
    border: 2px solid rgb(30, 220, 20);
}
#loginButton:disabled {
    color: crimson;
    background-color: white;
    border: 2px solid crimson;
    cursor: not-allowed;
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
const Background = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    position: absolute;
    `

const ModalWrapper = styled.div `
    display: flex;
    justify-content: center;
    align-items: flex-start;
    box-shadow: 0 15px 26px rgba(0, 0, 0, 0.2);
    background: #fff;
    color: #000;
    position: relative;
    border-radius: 10px;
`


const ModalContent = styled.div`
   
`

const CloseModalButton = styled(MdClose)`
    cursor: pointer;
    position: absolute;
    top: 20px;
    right: 20px;
    width: 32px;
    height: 32px;
    padding: 0;
    z-index: 10;
`

function Login(props){
    const { values, submit, change, disabled, errors, showModal, setShowModal } = props;
 

    
    return (
        <StyledLogin>
            {showModal ? (
                <Background>
                    <ModalWrapper showModal={showModal}>
                        <ModalContent>

                        
        <div className="container">
            <div className="top">    
                <h2>login</h2>
                <div className="login">
                    <form className='form container'>
                        <label>username
                            <input 
                                name='loginUsername'
                                type='input'
                                
                            />
                        </label>
                        <label>Password
                            <input 
                                name='loginPassword'
                                type='password'
                                
                            />
                        </label>
                        <button id="loginButton" >Login</button>
                    </form>
                </div>
            </div>  
        </div>
        </ModalContent>
        <CloseModalButton aria-label='Close model' onClick={() => setShowModal(prev => !prev)} />
                    </ModalWrapper>
                </Background>
            ): null}
        </StyledLogin>
    )

}

export default Login;