import React, {useState, useEffect} from 'react'
import { useHistory, Link } from 'react-router-dom';
import axios from 'axios'

import '../CSS/AddPotlucks.css'

const initialFormValues = {
    potluck_id: '',
    potluck_name: '',
    potluck_description: '',
    potluck_date: '',
    potluck_time: '',
    potluck_location: '',
    organizer: ''
}
const initialFormErrors = {
    potluck_id: '',
    potluck_name: '',
    potluck_description: '',
    potluck_date: '',
    potluck_time: '',
    potluck_location: '',
    organizer: ''
}

const AddPotlucks = () => {
    const [formValues, setFormValues] = useState(initialFormValues)
    // const [formErrors, setFormErrors] = useState(initialFormErrors)
    const { push } = useHistory();

    const onSubmit = (event) => {
        event.preventDefault()
        const newItem = {
            potluck_id: Date.now(),
            potluck_name: formValues.potluck_name, 
            potluck_description: formValues.potluck_description,
            potluck_date: formValues.potluck_date, 
            potluck_time: formValues.potluck_time,
            potluck_location: formValues.potluck_location,
            organizer: formValues.organizer,
        }
        console.log("post Items=", newItem)
        const token = localStorage.getItem("token");
        axios.post('https://potluckplanner06.herokuapp.com/api/potlucks', newItem, {
            headers: {
              authorization: token
            }
          })
        .then(response => {
            console.log(response);
            push('/potlucks');
        })
        .catch(error => {
            console.error(error)
        })
        .finally(() => {
            setFormValues(initialFormValues)
        })

    }

    const onChange = (event) => {
        setFormValues({
            ...formValues,
            [event.target.name]: event.target.value,
        })

    }
    console.log("AddPotlucks", formValues) 
    return (
        <div className='AddUsers'>
            <h1>AddPotlucks </h1>
            <div id="one">
                <h1>Add the Potlucks item below!</h1>
            </div>
            <form className='form add-container 'onSubmit={onSubmit}>
                {/* potluck_name */}
                <div className='form-div'>
                    <div className='label-group'>
                        <h2>Input potluck Name </h2>
                        <p>Required</p>
                    </div>
                    <label >
                            <input
                                type="text"
                                name="potluck_name"
                                value={formValues.potluck_name}
                                onChange={onChange}
                                placeholder="  potluck Name"
                            />
                    </label>
                </div>

                {/* username */}
                <div className='form-div'>
                    <div className='label-group'>
                        <h2>Input potluck_description</h2>
                    </div>
                    <label className='location'>
                            <input
                                type="text"
                                name="potluck_description"
                                value={formValues.potluck_description}
                                onChange={onChange}
                                placeholder="  potluck_description"
                            />
                            
                    </label> 
                </div>

                {/* potluck_date */}
                <div className='form-div'>
                    <div className='label-group'>
                        <h2>Input potluck_date</h2>
                    </div>
                    <label className='location'>
                            <input
                                type="text"
                                name="potluck_date"
                                value={formValues.potluck_date}
                                onChange={onChange}
                                placeholder="  potluck_date 2021-12-28T00:00:00.000Z"
                            />
                            
                    </label> 
                </div>
                {/* <hr/> */}

                {/* potluck_time */}
                <div className='form-div'>
                    <div className='label-group'>
                        <h2>Input potluck_time</h2>
                    </div>
                    <label className='location'>
                            <input
                                type="text"
                                name="potluck_time"
                                value={formValues.potluck_time}
                                onChange={onChange}
                                placeholder="  potluck_time 12:00:00"
                            />
                            
                    </label> 
                </div>
                {/* <hr/> */}

                {/* potluck_location */}
                <div className='form-div'>
                    <div className='label-group'>
                        <h2>Input potluck_location</h2>
                    </div>
                    <label className='location'>
                            <input
                                type="text"
                                name="potluck_location"
                                value={formValues.potluck_location}
                                onChange={onChange}
                                placeholder="  potluck_location"
                            />
                            
                    </label> 
                </div>
                {/* <hr/> */}

                {/* organizer */}
                <div className='form-div'>
                    <div className='label-group'>
                        <h2>Input organizer</h2>
                    </div>
                    <label className='location'>
                            <input
                                type="text"
                                name="organizer"
                                value={formValues.organizer}
                                onChange={onChange}
                                placeholder="  organizer"
                            />
                            
                    </label> 
                </div>
                <hr/> 
                <div >
                    <div className=' label-button'>
                        <button >Add Potlucks </button>
                    </div>
                </div>
                
            </form>
        </div>
        // </div>
    )
}

export default AddPotlucks;