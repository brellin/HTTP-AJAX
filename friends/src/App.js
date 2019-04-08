import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Friend from './Friend/Friend';
import NewFriend from './NewFriend/NewFriend';
import './App.scss';

const App = () => {
  const [friends, setFriends] = useState([]);

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

  return (
    <div className="App">
      <header>
        <h1>Friends</h1>
      </header>
      <div className='friends'>
        {friends.map((friend, id) => (
          <Friend
            friend={friend}
            setMounted={setMounted}
            key={id}
          />
        ))}
      </div>
      <div>
        <NewFriend setMounted={setMounted} />
      </div>
    </div>
  );
}

export default App;
