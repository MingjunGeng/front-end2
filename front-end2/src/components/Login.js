
import React, { useState } from 'react'
import { useHistory, Link } from 'react-router-dom';
import axios from 'axios';


import validation from '../validation/validation';
import '../CSS/Login.css'

const initForm = {
    username: '',
    password: ''
}
const Login = () =>{
    const [values, setValues] = useState(initForm)
    const [errors, setErrors] = useState({});
    const { push } = useHistory();

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }
    // console.log("Login ",values)
    const handleSubmit = (e) => {
        e.preventDefault();  
        console.log("Login", values)
        // setErrors(validation(values))
        // axios.post('https://backend-potluck-planner.herokuapp.com/api/users/login', values)
        axios.post('http://potluckplanner06.herokuapp.com/api/auth/login', values)
        // axios.post('http://localhost:4000/api/login', values)
        .then(resp=>{
            console.log("login : resp = ",resp);
            // const token = localStorage.getItem("token")
            console.log("login : resp.data = ",resp.data.payload);
            localStorage.setItem('token', resp.data.payload);
            push('/recipes');
        })
        .catch(err=>{
            console.log(err);
        })
       
    }

    return(
        <div className="login-from">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    Username:
                    <br/>
                    <input
                        type="text"
                        name="username"
                        value={values.username}
                        onChange={handleChange}
                    />
                    {errors.username && <p className='error'>{errors.username}</p>}
                </div>

                <div>
                    Password:
                    <br/>
                    <input
                        type="password"
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                    />
                    {errors.password && <p className='error'>{errors.password}</p>}
                </div>

            <button>Log in</button>
            </form>
        </div>

    );
}

export default Login;