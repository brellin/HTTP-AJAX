import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Friend from './Friend/Friend';
import NewFriend from './NewFriend/NewFriend';
import './App.scss';

const App = () => {
  const [friends, setFriends] = useState([]);
  const [postRes, setPostRes] = useState('');
  const [friend, setFriend] = useState({ name: '', age: '', email: '' });

  useEffect(() => {
    axios
      .get('http://localhost:5000/friends')
      .then(res => setFriends(res.data))
      .catch(err => console.log(err))
  })

  const handleChanges = e => {
    setFriend({
      ...friend,
      [e.target.name]: e.target.value
    })
  }

  const postFriend = e => {
    e.persist();
    axios
      .post('http://localhost:5000/friends', friend)
      .then(res => setPostRes(res.data.successMessage))
      .catch(err => console.log(err))
  }

  return (
    <div className="App">
      <header>
        <h1>Friends</h1>
      </header>
      <div className='friends'>
        {friends.map((friend, id) => <Friend friend={friend} key={id} />)}
      </div>
      <div>
        <NewFriend
          handleChanges={handleChanges}
          newFriend={postFriend}
          friend={friend}
        />
      </div>
    </div>
  );
}

export default App;
