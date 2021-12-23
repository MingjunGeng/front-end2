import React, { useEffect } from "react";
import axios from 'axios'


const Logout = (props) => {

    useEffect(()=> {
        const token = localStorage.getItem("token");
        axios.post('http://localhost:4000/api/logout', {}, {
            headers:{
                authorization: localStorage.getItem('token')
            }
        })
        .then(resp => {
                localStorage.removeItem('token');
              
                props.history.push('/login');
            });
    }, []);

    return (
        <div className="logout">
            <h1>Logout</h1>
        </div>
    )
}
export default Logout;