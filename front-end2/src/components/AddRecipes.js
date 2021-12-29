import React, {useState, useEffect} from 'react'
import { useHistory, Link } from 'react-router-dom';
import axios from 'axios'

import '../CSS/AddRecipes.css'

const initialFormValues = {
    food_name: '',
    food_description: '',
}
const initialFormErrors = {
    food_name: '',
    food_description: '',
}

const AddRecipes = () => {
    const [formValues, setFormValues] = useState(initialFormValues)
    const [formErrors, setFormErrors] = useState(initialFormErrors)
    const { push } = useHistory();

    const onChange = (event) => {
        setFormValues({
            ...formValues,
            [event.target.name]: event.target.value,
        })
    }

    const onSubmit = (event) => {
        event.preventDefault()
        const newItem = {
            food_name: formValues.food_name, 
            food_description: formValues.food_description,
        }
        console.log("post Items=", newItem)
        const token = localStorage.getItem("token");
        // axios.post('https://potluckplanner06.herokuapp.com/api/foods', newItem)
        axios.post('https://potluckplanner06.herokuapp.com/api/foods', newItem, {
            headers: {
              authorization: token
            }
          })
        .then(response => {
            console.log(response);
            push('/recipes');
        })
        .catch(error => {
            console.error(error)
        })
        .finally(() => {
            setFormValues(initialFormValues)
        })
    }

    
   console.log("AddRecipes", formValues) 
 return(
     <div className="rddrecipes">
         {/* <h1>AddRecipes </h1> */}
         {/* <div id="add-main"> */}
            <div id="one">
                <h1>Add the food item below!</h1>
            </div>
            <form className='form add-container 'onSubmit={onSubmit}>
                {/* food_name */}
                <div className='form-div'>
                    <div className='label-group'>
                        <h2>Input food Name </h2>
                        <p>Required</p>
                    </div>
                    <label >
                            <input
                                type="text"
                                name="food_name"
                                value={formValues.food_name}
                                onChange={onChange}
                                placeholder="food Name"
                            />
                    </label>
                </div>

                {/* location */}
                <div className='form-div'>
                    <div className='label-group'>
                        <h2>Input food description</h2>
                    </div>
                    <label className='location'>
                            <input
                                type="text"
                                name="food_description"
                                value={formValues.food_description}
                                onChange={onChange}
                                placeholder="food description"
                            />
                            
                    </label> 
                </div>
                <hr/>
                {/* location */}
                <div >
                    <div className=' label-button'>
                        <button >Add Food Iterm</button>
                    </div>
                </div>
                
            </form>
        </div>

    //  </div>
 )   
}

export default AddRecipes;