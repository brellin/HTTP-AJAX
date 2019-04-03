import React, { Component } from 'react';
import axios from 'axios'
import Friend from './Friend/Friend';
import NewFriend from './NewFriend/NewFriend';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [],
      postRes: '',
      friend: {
        name: '',
        age: 0,
        email: ''
      }
    }
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(res => this.setState({
        friends: res.data
      }))
      .catch(err => console.log(err))
  }

  handleChanges = e => {
    this.setState({
      friend: {
        ...this.state.friend,
        [e.target.name]: e.target.value
      }
    })
  }

  postFriend = friend => {
    axios
      .post('http://localhost:5000/friends', friend)
      .then(res => this.setState({
        postRes: res.data.successMessage
      }))
      .catch(err => console.log(err))
  }

  newFriend = () => {
    this.postFriend(this.state.friend)
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>Friends</h1>
        </header>
        <div className='friends'>
          {this.state.friends.map((friend, id) => <Friend friend={friend} key={id} />)}
        </div>
        <div>
          <NewFriend
            handleChanges={this.handleChanges}
            newFriend={this.newFriend}
            friend={this.state.friend}
          />
        </div>
      </div>
    );
  }
}

export default App;
