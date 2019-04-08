import React, { useState } from 'react'
import axios from 'axios';
import { useForm } from 'customHooks';

const NewFriend = props => {
    const [clicked, setClicked] = useState(false);

    const postFriend = () => {
        axios
            .post('http://localhost:5000/friends', fields)
            .then(res => console.log(res.data.successMessage))
            .catch(err => console.log(err))
        props.setMounted(false)
    }

    const { fields, handleChanges, submit } = useForm(postFriend);

    return (
        <>
            <button
                onClick={() => setClicked(true)}
                style={{ display: clicked === true ? 'none' : 'flex' }}
            >Add New Friend</button>
            <form
                style={{ display: clicked === false ? 'none' : 'flex' }}
                onSubmit={submit}
            >
                <label>Name:</label>
                <input
                    name='name'
                    value={fields.name}
                    onChange={handleChanges}
                />
                <label>Age:</label>
                <input
                    name='age'
                    value={fields.age}
                    onChange={handleChanges}
                    type='number'
                />
                <label>E-mail:</label>
                <input
                    name='email'
                    value={fields.email}
                    onChange={handleChanges}
                />
                <button onClick={() => setClicked(false)}>Submit</button>
            </form>
        </>
    )
}

export default NewFriend
