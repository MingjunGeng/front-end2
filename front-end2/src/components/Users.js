import React, { useEffect, useState } from "react";
import axios from 'axios'


import '../CSS/Users.css'

import usersimgJped from '../images/userImg.png'
import pinterestPng from '../images/pinterest.png'
const Users = (props) => {

    const initstate = []
    

    const [users, setUsers] = useState(initstate)

    useEffect(()=>{
        const token = localStorage.getItem("token");

        // axios.get('http://localhost:8000/api/users', {
        axios.get('https://potluckplanner06.herokuapp.com/api/users', {
          headers: {
            authorization: token
          }
        })
          .then(resp=> {
            console.log("FriendsList", resp.data)
            setUsers(resp.data)
          })
          .catch(err=> {
            console.log(err.response.data);
          })

    },[])

    return (
        <div className="users-list col">
        <h2>All the users!</h2>

        <table className="table table-striped table-hover">
            <thead>
                <tr>
                    <th>id</th>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Food List</th>
                    <th>Phone</th>
                </tr>
            </thead>
            {users.map(user => {
                return (
                    <tr key={user.id}>
                        <td>{user.user_id}</td>
                        <td>                  
                            <a target="_blank" >
                                <img src={pinterestPng} alt='usersimg Jped' />
                            </a> </td>
                        
                        <h3>{user.username}</h3>
                    
                    </tr>

                )
            })}
        </table>
    </div>
    )
}
export default Users;