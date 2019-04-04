import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Friend from './Friend/Friend';
import NewFriend from './NewFriend/NewFriend';
import './App.scss';

const App = () => {
  const [friends, setFriends] = useState([]);
  const [friendFields, setFriendFields] = useState({ name: '', age: '', email: '' });

  // CDM
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    !mounted &&
      axios
        .get('http://localhost:5000/friends')
        .then(res => setFriends(res.data))
        .catch(err => console.log(err))
    setMounted(true);
  })

  const handleChanges = e => {
    setFriendFields({
      ...friendFields,
      [e.target.name]: e.target.value
    })
  }

  const postFriend = e => {
    e.persist();
    axios
      .post('http://localhost:5000/friends', friendFields)
      .then(res => console.log(res.data.successMessage))
      .catch(err => console.log(err))
    setMounted(false)
  }

  const deleteFriend = friend => {
    axios
      .delete(`http://localhost:5000/friends/${friend.id}`)
      .then(res => setFriends(res.data))
      .catch(err => console.log(err))
    setMounted(false)
  }

  const updateFriend = (e, friend, newFriend) => {
    e.persist();
    axios
      .put(`http://localhost:5000/friends/${friend.id}`, newFriend)
      .then(res => {
        setFriends(res.data)
        console.log(res)
      })
      .catch(err => console.log(err))
    setMounted(false)
  }

  return (
    <div className="App">
      <header>
        <h1>Friends</h1>
      </header>
      <div className='friends'>
        {friends.map((friend, id) => (
          <Friend
            friend={friend}
            deleteFriend={deleteFriend}
            handleChanges={handleChanges}
            friendFields={friendFields}
            updateFriend={updateFriend}
            key={id}
          />
        ))}
      </div>
      <div>
        <NewFriend
          handleChanges={handleChanges}
          newFriend={postFriend}
          friend={friendFields}
        />
      </div>
    </div>
  );
}

export default App;
