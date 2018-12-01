import React, { Component } from 'react';
import './app.css';
import ReactImage from './assets/react.png';
import './containers/Explore.js'
import Explore from './containers/Explore.js';

export default class App extends Component {
  state = { username: null };

  componentDidMount() {
    fetch('/api/getUsername')
      .then(res => res.json())
      .then(user => this.setState({ username: user.username }));
  }

  render() {
    return (
      <div>
        <Explore></Explore>
      </div>
      
    );
  }
}
