import React from 'react'

const NewFriend = (props) => {
    return (
        <form onSubmit={props.newFriend}>
            <label>Name:</label>
            <input
                name='name'
                value={props.friend.name}
                onChange={props.handleChanges}
            />
            <label>Age:</label>
            <input
                name='age'
                value={props.friend.age}
                onChange={props.handleChanges}
            />
            <label>E-mail:</label>
            <input
                name='email'
                value={props.friend.email}
                onChange={props.handleChanges}
            />
            <button>Submit</button>
        </form>
    )
}

export default NewFriend
