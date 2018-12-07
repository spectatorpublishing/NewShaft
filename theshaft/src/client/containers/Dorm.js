import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Dorm extends Component {

    render() {
      return (
        <div>
          <h1>{this.props.match.params.dorm}</h1>
          <Link to="/">Back</Link>
        </div>
      );
    }
  }
