
import React, { useState } from 'react'
import { useHistory, Link } from 'react-router-dom';
import axios from 'axios';

import '../CSS/Signup.css';
const initForm = {
    username: '',
    password: ''
}

const Signup = () => {
    const [newUser, setNewUser] = useState(initForm)
    const [errors, setErrors] = useState({});

    const { push } = useHistory();

    const handleChange = (e) => {
        setNewUser({
            ...newUser,
            [e.target.name]: e.target.value
        })
    }

    console.log("Sign Up",newUser)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Signup")

        axios.post(`https://potluckplanner06.herokuapp.com/api/auth/register`, newUser)
        .then(resp => {
            console.log('resp.data in Register.js: ', resp.data);
            // alert(`Your role is: ${resp.data.role}, you need your prop role to do something!`);
            push('/login');
        })
        .catch(err => {
            console.log(err);
        })
    } 
    return (
        <div className='signup'>
            <h1>Register Here!!!</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    Username:
                    <br/>
                    <input
                        type="text"
                        name="username"
                        value={newUser.username}
                        onChange={handleChange}
                    />
                    {/* {errors.name && <p className='error'>{errors.name}</p>} */}
                </div>

                <div>
                    Password:
                    <br/>
                    <input
                        type="password"
                        name="password"
                        value={newUser.password}
                        onChange={handleChange}
                    />
                    {/* {errors.password && <p className='error'>{errors.password}</p>} */}
                </div>

            <button>Sign Up</button>
            </form>
        </div>
    )
}
export default Signup;