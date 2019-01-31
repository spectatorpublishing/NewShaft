import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import DormButton from '../components/DormButton';
import '../css/Explore.css';
import Dorm from './Dorm.js';
import Updater from '../components/Updater';
import ExploreSidebar from "../components/ExploreSidebar";
import "../css/Explore.css";
import map from "../assets/map.png";

export default class Explore extends Component {
  render() {
    var dorms = [
      {
        id: "McBain",
        school: "Columbia",
        name: "McBain Hall",
        image: "https://housing.columbia.edu/files/housing/McBain.jpg",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nulla nulla, condimentum a mattis in, faucibus id sapien. Sed rhoncus.",
        amenities: "No AC"
      },
      {
        id: "Carman",
        school: "Columbia",
        name: "Carman Hall",
        image: "https://housing.columbia.edu/files/housing/Carman.jpg",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nulla nulla, condimentum a mattis in, faucibus id sapien. Sed rhoncus.",
        amenities: "No AC"
      },
      {
        id: "Sulzberger",
        school: "Barnard",
        name: "Sulzberger Tower",
        image: "https://housing.columbia.edu/files/housing/McBain.jpg",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nulla nulla, condimentum a mattis in, faucibus id sapien. Sed rhoncus.",
        amenities: "No AC"
      },
      {
        id: "mcbain",
        school: "Columbia",
        name: "McBain Hall",
        image: "https://housing.columbia.edu/files/housing/McBain.jpg",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nulla nulla, condimentum a mattis in, faucibus id sapien. Sed rhoncus.",
        amenities: "No AC"
      },
      {
        id: "mcbain",
        school: "Columbia",
        name: "McBain Hall",
        image: "https://housing.columbia.edu/files/housing/McBain.jpg",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nulla nulla, condimentum a mattis in, faucibus id sapien. Sed rhoncus.",
        amenities: "No AC"
      }
    ];
    return (
      <div className="explore">
        <div className="sidebar">
          <ExploreSidebar dorms={dorms} />
        </div>
        <Updater interval="15" />
      </div>
    );
  }
}
