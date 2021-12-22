
import React, { useState } from 'react'
import '../CSS/Signup.css';

const initForm = {
    username: '',
    password: ''
}

const Signup = () => {
    const [values, setValues] = useState(initForm)
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    console.log("Sign Up",values)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Signup")
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
                        value={values.username}
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
                        value={values.password}
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