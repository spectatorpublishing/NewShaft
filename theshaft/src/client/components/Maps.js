import styled from "styled-components";
import React, { Component } from "react";
import ReactMapGL, { Marker, Popup} from "react-map-gl";
import { fromJS } from "immutable";
import "mapbox-gl/src/css/mapbox-gl.css";
import mark from "../assets/marker.svg";
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';


console.log("Entry");
console.log(process.env)
console.log(process.env.MAPBOX);

let MarkerIcon = styled.img`
  transform: translate(-50%, -100%);
  height: 25px;
  width : 25px;
`

class MapItem extends Component {
  constructor(props) {
    super(props)

    this.state = {
      popUp: "none",
    }

    this.setPopUp = this.setPopUp.bind(this);
    this.clearPopUp = this.clearPopUp.bind(this);
  }

  setPopUp() {
    this.setState({popUp: "flex"});
  }

  clearPopUp() {
    this.setState({popUp: "none"});
  }

  render(){
    const {lat, long, popupInfo, popupId} = this.props
    return <div>
      <Marker
        latitude={lat}
        longitude={long}
      >
        <div onClick={this.setPopUp}>
        <MarkerIcon src={mark} alt="fireSpot"/>
        </div>                
      </Marker>
      <div style={{display:this.state.popUp}}>
        <Popup tipSize={5}
          anchor="bottom-left"
          offsetTop={-23}
          offsetLeft={7}
          dynamicPosition={true}
          longitude={long}
          latitude={lat}
          onClose={this.clearPopUp}
          closeOnClick={true}>
          <Link to={"/" + popupId} style={{margin:'0'}}>{popupInfo}</Link>
        </Popup>
      </div>
  </div>
  }
}

export default class Maps extends Component {
  constructor(props) {
    super(props);

    this.state = {
      viewport: {
        latitude: 40.7128,
        longitude: -74.006,
        zoom: 15
      },
      coordinates: {
        latitudes: this.props.latitudes,
        longitudes : this.props.longitudes
      },
      popup: {
        popupInfo: this.props.popupInfo,
        popupId: this.props.popupId,
        popupIndex: popupIndex
      }
    };    
    this.handleViewportChange = this.handleViewportChange.bind(this);
  }

  handleViewportChange(vp) {
    this.setState({ viewport: vp });
  }

  render() {
    const view = this.state.viewport;
    const markers = [];
    let k = 0;
    for (let i = 0; i < this.state.coordinates.latitudes.length; i++){ 
      const lat = this.state.coordinates.latitudes[i]
      const long = this.state.coordinates.longitudes[i];
      const popupInfo = this.state.popup.popupInfo[i];
      const popupId = this.state.popup.popupId[i];
      markers.push(<MapItem key={k++} lat={lat} long={long} popupInfo={popupInfo} popupId={popupId}/>);
    }
    
    return (
      <div>
        <ReactMapGL
          mapboxApiAccessToken={process.env.MAPBOX}
          // mapboxApiAccessToken={"pk.eyJ1IjoiYXJzYWxhYW4iLCJhIjoiY2pxeDViZW41MDlmejQ4bnduMnE2aGhyNCJ9.0-y9yPqzqlWLd-yhUe5tcg"}
          mapStyle={"mapbox://styles/mapbox/basic-v9"}
          latitude={view.latitude}
          longitude={view.longitude}
          width={"100%"}
          height={"400px"}
          zoom={view.zoom}
          onViewportChange={this.handleViewportChange}
        >
        {markers}
        </ReactMapGL>
      </div>
    );
  }
}

