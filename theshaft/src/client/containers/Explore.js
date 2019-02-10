import React, { Component } from 'react';
import styled from "styled-components";
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import DormButton from '../components/DormButton';
import '../css/Explore.css';
import Dorm from './Dorm.js';
import Updater from '../components/Updater';
import ExploreSidebar from "../components/ExploreSidebar";
//import "../css/Explore.css";
import map from "../assets/map.png";
import Maps from "../components/Maps";

// div.explore {
//   width: 100%;
//   height: 100%;
//   padding: 0 auto;
//   overflow: hidden;
//   /* flex-direction: row; */
// }

let Explore = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 auto;
  overflow: hidden;
  flex-direction: row;
`

let SideBar = styled.div`
  width: 90%;
  padding-left: 1em;
  overflow-y: scroll; 
  @media only screen and (min-width: 768px) {
    width: 30%;
    min-height: 100%;
    z-index: 1;
  }
`

let MapView = styled.div`
display: none;
width: 0%;
@media only screen and (min-width: 768px) {
  display: inline;
  position: fixed;
  padding-left: 1em;
  float: right;
  width: 67%;
  right: 0;
  top: 0;
  z-index:1;
}
`

let ColOne = styled.div`
  display: flex;
  width: 100%;
`

let ColTwo = styled.div`
  display: inline;
  position: fixed;
  padding-left: 1em;
  float: right;
  // width: 67%;
  right: 0;
  top: 0;
  z-index:1;
  // display: flex;
  //flex-direction: column;
  width: ${(mobile) => mobile ? `67%`: `50%`};
  //width: 50%;
`

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

      <Explore>
        <ColOne>
          <SideBar>
            <ExploreSidebar dorms={dorms} />
          </SideBar>
        </ColOne>
        <ColTwo>
          <Maps latitudes={[40.7128, 40.7129, 40.7128]} longitudes={[-74.006, -74.007, -74.008]} popupInfo={["Carman", "McBain", "John Jay"]} popupId={["Carman", "McBain", "JohnJay"]}/>
        {/* <div className="map">
            <img src={map} />
        </div> */}
        </ColTwo>
        <Updater interval="15" />
      </Explore>
    );
  }
}
