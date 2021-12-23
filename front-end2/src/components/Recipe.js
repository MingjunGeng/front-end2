import React, { useState, useEffect } from 'react'

import { useParams, NavLink} from 'react-router-dom';

import axios from 'axios';

import '../CSS/Recipe.css'
const Recipe = (props) => {
    const [item, setItem] = useState([])
    
    const { id } = useParams();
    console.log("Recipe ", id)
    useEffect(() => {
        // axiosWithAuth().get('/products')
        
        const token = localStorage.getItem("token");

        axios.get(`http://localhost:4000/api/products/${id}`, {
          headers: {
            authorization: token
          }
        })
          .then(resp => {
            setItem(resp.data);
          })
          .catch(err => {
            console.log(err.response);
          })
        // fetchStock().then(res => setItems(res.data))
      }, [])
      console.log("Recipes", item)




      const handleClickEdit = () => {

      }

      const handleClickDelete = () => {

      }
    return (
        <div className="item-wrapper">
             {/* <h1>Recipe</h1> */}
              {/* <h1></h1> */}
            <div className="item-header">
                <div className="image-wrapper">
                    <img src={item.imageUrl} alt={item.food_name} />
                </div>
                <div className="item-title-wrapper">
                    <h2>{item.food_name}</h2>
                </div>
            </div>
            <nav className="item-sub-nav">
            <NavLink exact to={`/products/${item.id}`}>
                food description
            </NavLink>
            
            </nav>
            {/* <Route
            exact
            path="/item-list/:id"
            // render={props => <ItemDescription {...props} item={item} />}
            /> */}
            <p className="item-description">{item.food_description}</p>

            <button onClick={handleClickEdit} className="md-button">
            Edit
            </button>
            <button onClick={handleClickDelete} className="md-button">
            Delete
            </button>
        </div>
    )
}
export default Recipe;