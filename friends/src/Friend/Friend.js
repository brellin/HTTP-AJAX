import React, { useState } from 'react'

const Friend = (props) => {
    const [updating, setUpdating] = useState(false);

    return (
        <div className='friend'>
            <button
                onClick={() => setUpdating(true)}
                style={{ display: updating === false ? 'block' : 'none' }}
            >Update Friend</button>
            <form onSubmit={e => props.updateFriend(e, props.friend, props.friendFields)}>
                <p>Name: {
                    updating === false ? props.friend.name :
                        <input
                            name='name'
                            value={props.friendFields.name}
                            onChange={props.handleChanges}
                            type='text'
                        />
                }</p>
                <p>Age: {
                    updating === false ? props.friend.age :
                        <input
                            name='age'
                            value={props.friendFields.age}
                            onChange={props.handleChanges}
                            type='number'
                        />
                }</p>
                <p>Email: {
                    updating === false ? props.friend.email :
                        <input
                            name='email'
                            value={props.friendFields.email}
                            onChange={props.handleChanges}
                            type='email'
                            required='required'
                        />
                }</p>
                <button onClick={() => {
                    updating === false && props.deleteFriend(props.friend)
                }}>{updating === false ? 'Delete' : 'Update'}</button>
            </form>
        </div>
    )
}

export default Friend
