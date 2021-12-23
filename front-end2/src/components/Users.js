import React, { useEffect, useState } from "react";
import axios from 'axios'


import '../CSS/Users.css'

import usersimgJped from '../images/userImg.png'
import pinterestPng from '../images/pinterest.png'
const Users = (props) => {

    const initstate = []
    

    const [friends, setFriends] = useState(initstate)

    useEffect(()=>{
        const token = localStorage.getItem("token");

        axios.get('http://localhost:8000/api/users', {
          headers: {
            authorization: token
          }
        })
          .then(resp=> {
            console.log("FriendsList", resp.data)
            setFriends(resp.data)
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
            {friends.map(friend => {
                return (
                    <tr key={friend.id}>
                        <td>{friend.id}</td>
                        <td>                  
                            <a target="_blank" >
                                <img src={pinterestPng} alt='usersimg Jped' />
                            </a> </td>
                        
                        <h3>{friend.name}</h3>
                    
                    </tr>

                )
            })}
        </table>
    </div>
    )
}
export default Users;