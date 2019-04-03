import React, { Component } from 'react';
import axios from 'axios'
import Friend from './Friend/Friend';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/friends')
      .then(res => this.setState({
        friends: res.data
      }))
      .catch(err => console.log(err))
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
      </div>
    );
  }
}

export default App;
