import React, { useState } from 'react'
import axios from 'axios';
import { useForm } from 'customHooks';

const Friend = (props) => {
    const [updating, setUpdating] = useState(false);

    const deleteFriend = () => {
        axios
            .delete(`http://localhost:5000/friends/${props.friend.id}`)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
        props.setMounted(false)
    }

    const updateFriend = () => {
        axios
            .put(`http://localhost:5000/friends/${props.friend.id}`, fields)
            .then(res => {
                console.log(res.data)
                console.log(res)
            })
            .catch(err => console.log(err))
        props.setMounted(false)
        setUpdating(false)
    }

    const { fields, submit, handleChanges } = useForm(updateFriend);

    return (
        <div className='friend'>
            <button
                onClick={() => setUpdating(true)}
                style={{ display: updating === false ? 'block' : 'none' }}
            >Update Friend</button>
            <form onSubmit={submit}>
                <p>Name: {
                    updating === false ? props.friend.name :
                        <input
                            name='name'
                            value={fields.name}
                            onChange={handleChanges}
                            type='text'
                        />
                }</p>
                <p>Age: {
                    updating === false ? props.friend.age :
                        <input
                            name='age'
                            value={fields.age}
                            onChange={handleChanges}
                            type='number'
                        />
                }</p>
                <p>Email: {
                    updating === false ? props.friend.email :
                        <input
                            name='email'
                            value={fields.email}
                            onChange={handleChanges}
                            type='email'
                            required='required'
                        />
                }</p>
                <button onClick={() => {
                    updating === false && deleteFriend()
                }}>{updating === false ? 'Delete' : 'Update'}</button>
            </form>
            <button
                style={{ display: updating === false ? 'none' : 'block' }}
                onClick={() => setUpdating(false)}
                onSubmit={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                }}
            >Cancel</button>
        </div>
    )
}

export default Friend
