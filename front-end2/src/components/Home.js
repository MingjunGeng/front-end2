import React from "react";
import styled from 'styled-components';


const StyledHome = styled.div`
display: flex;
justify-content: space-between;
background-color: yellow;


img {
    width: 100%;
    image-render: cover;
}
.signup {
    background-color: green;
}
.guest {
    background-color: lightblue;
    display: flex;
    flex-flow: wrap column;
    justify-content: space-between;
    align-items: center;
}
.guest input {
    display: flex;
    align-items: center;
}

.userbox {
    display: flex;
}
.userbox div{
    width: 50%;
    display: flex;
    flex-flow: wrap column;
    padding: 5%;
    margin: 1%;
}

.recipes {
    display: flex;
    justify-content: center;
    flex-flow: row wrap;
    margin: 5%;
}
.food {
    width: 80%;
    background-color: white;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.food img {
    width: 100%;
}
.food p {
    text-align: center;
    padding: 10px 20px;
}
`


function Home(props){
    const { values, submit, change, disabled, errors } = props;

    const onSubmit = evt => {
        evt.preventDefault();
        submit();
    }
    const onChange = evt => {
        const { name, value, checked, type } = evt.target;
    }


    return (
    <StyledHome>
      <div className='container'>
            <div className="top">
                <img src="front-end2\src\assets\banner.jpg" alt="vegetable dish"/>
            </div>  

            <div className="userbox">
                <div className="signup">
                    <h2>SignUp</h2>
                    <p>Sign-Up Now to create a customizable online PotLuck Planner! <br />If already signed Up please Log-In Now!</p>
                    <button>Sign-Up</button>
                    <button>Log-In</button>
                </div>
                <div className="guest">
                    <h2>Find your PotLuck!</h2>
                    <p>Find your Potluck group below!</p>
                    <form id="find-form" onSubmit={onSubmit}>
                        <label>
                            <input
                                name='hostName'
                                type='input'
                                placeholder="Enter Host's LastName"
                                onChange={onChange}
                                maxLength='30'
                            />
                        Enter Host's LastName</label>
                        <label>
                            <input 
                                name="guestPassword"
                                type='password'
                                placeholder="Enter Password"
                            />
                        Password</label>
                        <button id="find" disabled={disabled}>Find</button>
                    </form>
                </div>
            </div>

            <div className="recipes">
                <div className="food 1">
                    <img src="front-end2\src\assets\food1.jpg" />
                    <p>Food 1</p>
                </div>
                <div className="food 2">
                    <img src="front-end2\src\assets\food2.jpg" />
                    <p>Food 2</p>
                </div>
                <div className="food 3">
                    <img src="front-end2\src\assets\food3.jpg" />
                    <p>Food 3</p>
                </div>
                <div className="food 4">
                    <img src="front-end2\src\assets\food4.jpg" />
                    <p>Food 4</p>
                </div>
            </div>          
      </div>
    </StyledHome>
    )
  }

  export default Home;