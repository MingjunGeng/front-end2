import React from 'react';

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
        <div>
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
                    <label>How many people in your party?
                        <input 
                            type='text'
                            name='numRsvp'
                            checked={values.numRsvp}
                            onChange={onChange}
                        />

                    </label>
                </div>

                <div id='guest-info'>
                    <label>Name 
                        <input 
                            value={values.name}
                            onChange={onChange}
                            name='name'
                            type='text'
                            placeholder='Enter name'
                            maxLength='30'
                        />
                    </label>

                    <label>E-mail Address
                        <input
                            value={values.email}
                            onChange={onChange}
                            name='email'
                            type='text'
                            placeholder='Enter email'
                        />
                    </label>

                    <label>Phone #
                        <input 
                            value={values.phone}
                            onChange={onChange}
                            name='phone'
                            type='text'
                            maxLength='10'
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
                    <div>{errors.name}</div>
                    <div>{errors.email}</div>
                    <div>{errors.phone}</div>
                    <div>{errors.category}</div>
                    <div>{errors.bring}</div>
                </div>

            </form>
        </div>
    )

}


export default Guest;