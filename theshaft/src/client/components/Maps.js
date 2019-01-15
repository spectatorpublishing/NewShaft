import React, { Component } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import { fromJS } from "immutable";
import "mapbox-gl/src/css/mapbox-gl.css";
import mark from "../assets/marker.svg";
import "./Maps.css";

console.log("Entry");
console.log(process.env)
console.log(process.env.MAPBOX);

export default class Maps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        width: 400,
        height: 400,
        latitude: 40.7128,
        longitude: -74.006,
        zoom: 15
      }
    };
  }

  render() {
    const view = this.state.viewport;
    return (
      <div>
        <ReactMapGL
          mapboxApiAccessToken={process.env.MAPBOX}
          mapStyle={"mapbox://styles/mapbox/basic-v9"}
          latitude={view.latitude}
          longitude={view.longitude}
          width={view.width}
          height={view.height}
          zoom={view.zoom}
          onViewportChange={viewport => this.setState({ viewport })}
        >
          <Marker
            latitude={40.7128}
            longitude={-74.006}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <img src={mark} className="marker_style" alt="fireSpot" />
          </Marker>
        </ReactMapGL>
      </div>
    );
  }
}
