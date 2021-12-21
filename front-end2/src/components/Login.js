
import React, { useState } from 'react'
import { useHistory, Link } from 'react-router-dom';

import validation from '../validation/validation';
import '../CSS/Login.css'

const initForm = {
    username: '',
    password: ''
}
const Login = () =>{
    const [values, setValues] = useState(initForm)
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }
    console.log(values)
    const handleSubmit = (e) => {
        e.preventDefault();  
        setErrors(validation(values))
       
    }

    return(
        <div className="login-from">
            {/* <h1>Login</h1> */}
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
                    {errors.name && <p className='error'>{errors.name}</p>}
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



            {/* <label> Role:
                <select name="role" onChange={handleChange}>
                    <option value="">---Select your role---</option>
                    <option value="admin">Admin</option>
                    <option value="user">User</option>
                </select>
            </label> */}

            <button>Log in</button>
            </form>
        </div>

    );
}

export default Login;