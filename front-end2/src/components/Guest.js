import React, { useState } from 'react';
import styled from 'styled-components';


const StyledGuest = styled.div`

.topGuest {
    background-image: url(front-end2\src\assets\food2.jpg);
    width: 90%;
    image-render: cover;
}
#rsvp {
    display: flex;
    align-items: center;
    margin: 10px;
    border: 1px black solid;
    background-color: lightgray;
  }
.form {
    border: 1px black solid;
    display: flex;
    flex-direction: column;
    align-items: space-between;
    justify-content: center;
    margin: auto;
    width: 90%;
  }
  
label {
    display: flex;
    justify-content: space-between
    margin: 10px;
    padding: 10px;
  }
  
input, select {
    margin-left: 50px;
  }
button {
    margin: 20px;
    font-weight: bold;
  }

`;

const initGuestForm = {
    attending : '',
    guestName : '',
    guestEmail : '',
    guestPhone : '',
    category: '',
    bring : '',

}

const Guest = (props) => {
    const [values, setValues] = useState(initGuestForm)
    const [errors, setErrors] = useState(initGuestForm)
    // const { values, submit, change, disabled, errors } = props;
    const { submit, change, disabled} = props;

    const onSubmit = evt => {
        evt.preventDefault();
        submit(); 
    }
    const onChange = evt => {
        // console.log(evt.target.checked, evt.target.type);
        const { name, value, checked, type } = evt.target;
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse);
    }

    return (
        <StyledGuest className='form'>
            <div className='topGuest'>
                <h1>You're invited to a potluck!</h1>
                <p>Please let us know if you're coming and what you'll be bringing.</p>
            </div>
            <form id='guest-form' onSubmit={onSubmit}>
                
                <div id='rsvp'>
                    <p>Will you be attending?</p>
                    <label>Yes
                        <input 
                            type='radio'
                            name='attending'
                            value='yes'
                            checked={values.attending === 'yes'}
                            onChange={onChange}
                        />
                    </label>
                    <label>No
                        <input 
                            type='radio'
                            name='attending'
                            value='no'
                            checked={values.attending === 'no'}
                            onChange={onChange}
                        />
                    </label>
                </div>

                <div id='guest-info'>
                    <label>Guest Name 
                        <input 
                            value={values.guestName}
                            onChange={onChange}
                            name='guestName'
                            type='text'
                            placeholder='Enter your name here'
                            maxLength='30'
                        />
                    </label>

                    <label>E-mail Address
                        <input
                            value={values.guestEmail}
                            onChange={onChange}
                            name='guestEmail'
                            type='text'
                            placeholder='Enter your email here'
                        />
                    </label>

                    <label>Phone Number
                        <input 
                            value={values.guestPhone}
                            onChange={onChange}
                            name='guestPhone'
                            type='tel'
                            placeholder='Format: 123-456-7890'
                            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                            maxLength='12'
                        />
                    </label>

                    <label>Potluck Category 
                        <select name='category' 
                        value={values.category}
                         onChange={onChange}>
                            <option value=''>------Select------</option>
                            <option value='Appetizer'>Appetizer</option>
                            <option value='Main Dish'>Main Dish</option>
                            <option value='Side Dish'>Side Dish</option>
                            <option value='Dessert'>Dessert</option>
                            <option value='Snacks'>Snacks</option>
                            <option value='Beverages'>Beverages</option>
                            <option value='Other'>Other</option>
                        </select>
                    </label>

                    <label>What I'll Bring
                        <input 
                            value={values.bring}
                            onChange={onChange}
                            name='bring'
                            type='text'
                            placeholder='Name of item'
                            maxLength='30'
                        />
                    </label>
                </div>

                <div className='submit-btn'>
                    <button id='submit' disabled={disabled}>Add to menu</button>
                </div>


                <div className='errors'>
                    <div>{errors.attending}</div>
                    <div>{errors.guestName}</div>
                    <div>{errors.guestEmail}</div>
                    <div>{errors.guestPhone}</div>
                    <div>{errors.category}</div>
                    <div>{errors.bring}</div>
                </div>

            </form> 
        </StyledGuest>
    )

}


export default Guest;