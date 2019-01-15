import React, { Component } from "react";
import { Link } from "react-router-dom";
import Photos from '../components/Photos';
export default class Dorm extends React.PureComponent {
  render() {
    return (
      <div>
        <Photos imageOne="https://memegenerator.net/img/images/17438601/dat-sad-fat-cat.jpg" imageTwo="https://i.imgflip.com/26a82h.jpg" imageThree="https://i.imgflip.com/1eg7jb.jpg" imageFour="https://i.imgflip.com/1yt82g.jpg"/>
        <h1>{this.props.match.params.dorm}</h1>
        <Link to="/">Back</Link>
      </div>
    );
  }
}
