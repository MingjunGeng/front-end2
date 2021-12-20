import React from 'react';

const Guest = (props) => {
    const { } = props;

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
            <form>
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
                </label>



            </form>
        </div>
    )

}


export default Guest;