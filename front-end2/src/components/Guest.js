import React from 'react';
// import styled from 'styled-components';


// const StyledGuest = styled.div`
//     display: flex;
//     width: 60%;
//     justify-content: space-between;
//     padding: 10px;

// `;

const Guest = (props) => {
    const { values, submit, change, disabled, errors } = props;

    const onSubmit = evt => {
        evt.preventDefault();
        submit(); 
    }
    const onChange = evt => {
        console.log(evt.target.checked, evt.target.type);
        const { name, value, checked, type } = evt.target;
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse);
    }

    return (
        <div className='form'>
            <h1>Guest Form</h1>
            <form id='guest-form' onSubmit={onSubmit}>
                
                <div id='rsvp'>
                    <label>Will you be attending?
                        <input 
                            type='checkbox'
                            name='attending'
                            checked={values.attending}
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

                    <label>Category 
                        <select name='category' value={values.category} onChange={onChange}>
                            <option value=''>---Select---</option>
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
                            placeholder='What am I bringing?'
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
        </div>
    )

}


export default Guest;