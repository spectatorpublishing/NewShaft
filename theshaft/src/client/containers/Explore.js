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
  constructor(props){
    super(props);
    fetch('/api/filterDorm', {
      method: 'POST',
      headers: {
        'X-Powered-By': 'Express',
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: {
        "college": -1,
        "single": true,
        "double": true,
        "triple": true,
        "suite": [],
        "make_up":[]
      }
    }).then((res) => {console.log("\nRESPONSE: "); console.log(JSON.stringify(res));})
      .then((dorms) => {
        this.setState({
          dorms: dorms.map((dorm) => {
            return {
              id: dorm['dorm'],
              school: dorm['college'],
              name: dorm['dorm'] + 'Hall',
              image: dorm['thumbnail_image'],
              description: dorm['description'],
              amenities: dorm['amenities']
            };
          })
        });
      });
  }
  
  render() {
    // var dorms = [
    //   {
    //     id: "McBain",
    //     school: "Columbia",
    //     name: "McBain Hall",
    //     image: "https://housing.columbia.edu/files/housing/McBain.jpg",
    //     description:
    //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nulla nulla, condimentum a mattis in, faucibus id sapien. Sed rhoncus.",
    //     amenities: "No AC"
    //   },
    //   {
    //     id: "Carman",
    //     school: "Columbia",
    //     name: "Carman Hall",
    //     image: "https://housing.columbia.edu/files/housing/Carman.jpg",
    //     description:
    //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nulla nulla, condimentum a mattis in, faucibus id sapien. Sed rhoncus.",
    //     amenities: "No AC"
    //   },
    //   {
    //     id: "Sulzberger",
    //     school: "Barnard",
    //     name: "Sulzberger Tower",
    //     image: "https://housing.columbia.edu/files/housing/McBain.jpg",
    //     description:
    //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nulla nulla, condimentum a mattis in, faucibus id sapien. Sed rhoncus.",
    //     amenities: "No AC"
    //   },
    //   {
    //     id: "mcbain",
    //     school: "Columbia",
    //     name: "McBain Hall",
    //     image: "https://housing.columbia.edu/files/housing/McBain.jpg",
    //     description:
    //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nulla nulla, condimentum a mattis in, faucibus id sapien. Sed rhoncus.",
    //     amenities: "No AC"
    //   },
    //   {
    //     id: "mcbain",
    //     school: "Columbia",
    //     name: "McBain Hall",
    //     image: "https://housing.columbia.edu/files/housing/McBain.jpg",
    //     description:
    //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nulla nulla, condimentum a mattis in, faucibus id sapien. Sed rhoncus.",
    //     amenities: "No AC"
    //   }
    // ];


    return (
      <div className="explore">
        <div className="sidebar">
          <ExploreSidebar dorms={this.state.dorms} />
        </div>
        <div className="map">
            <img src={map} />
        </div>
        <Updater interval="15" />
      </div>
    );
  }
}
