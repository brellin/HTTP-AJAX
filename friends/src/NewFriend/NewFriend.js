import React, { useState } from 'react'

const NewFriend = (props) => {
    const [clicked, setClicked] = useState(false);

    return (
        <>
            <button
                onClick={() => setClicked(true)}
                style={{ display: clicked === true ? 'none' : 'flex' }}
            >Add New Friend</button>
            <form
                style={{ display: clicked === false ? 'none' : 'flex' }}
                onSubmit={props.newFriend}
            >
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
                <button onClick={() => setClicked(false)}>Submit</button>
            </form>
        </>
    )
}

export default NewFriend
