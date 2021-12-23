import React, { useState, useEffect } from 'react'
import { Link, useRouteMatch } from 'react-router-dom';
import axios from 'axios';

import '../CSS/Recipes.css'
import pinterestPng from '../images/pinterest.png'
import usersimgJped from '../images/userImg.png'
const Potlucks = () => {

    const initstate = [] 
    const [potlucks, setPotlucks] = useState(initstate)
   


    useEffect(() => {
        
        
        const token = localStorage.getItem("token");

        // axios.get('http://localhost:4000/api/products', {
        axios.get('https://potluckplanner06.herokuapp.com/api/Potlucks', {
            headers: {
                authorization: token
              }
            })
              .then(resp=> {
                console.log("FriendsList", resp.data)
                setPotlucks(resp.data)
              })
              .catch(err=> {
                console.log(err.response.data);
              })
    
        },[])
      console.log("Potlucks", potlucks)

      return (
        <div className="users-list col">
        <h2>All the Potlucks!</h2>

        <table className="table table-striped table-hover">
            <thead>
                <tr>
                    <th>Potlucks Id</th>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Food List</th>
                    <th>Details</th>
                </tr>
            </thead>
            {potlucks.map(potluck => {
                return (
                    <tr key={potluck.potluck_id}>
                        <td>{potluck.potluck_id}</td>
                        <td>                  
                            <a target="_blank" >
                                <img src={usersimgJped} alt='usersimg Jped' />
                            </a> </td>
                        
                        <h3>{potluck.potluck_name}</h3>
                    
                    </tr>

                )
            })}
        </table>
    </div>
    )
}
export default Potlucks;