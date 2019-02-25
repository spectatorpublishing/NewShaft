import styled from "styled-components";
import React, { Component } from "react";
import ReactMapGL, { Marker, Popup} from "react-map-gl";
import { fromJS } from "immutable";
import "mapbox-gl/src/css/mapbox-gl.css";
import mark from "../assets/marker.svg";
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';


let MarkerIcon = styled.img`
  transform: translate(-50%, -100%);
  height: 25px;
  width : 25px;
`

class MapItem extends Component {
  constructor(props) {
    super(props)

    this.state = {
      popUp: "flex",
      lat: this.props.lat,
      long: this.props.long,
      popupInfo: this.props.popupInfo,
    }

    this.setPopUp = this.setPopUp.bind(this);
    this.clearPopUp = this.clearPopUp.bind(this);
  }

  componentDidUpdate(oldProps){
    if(oldProps != this.props){
      this.setState({
        lat: this.props.lat,
        long: this.props.long,
        popupInfo: this.props.popupInfo,
      })
    }
  }

  setPopUp() {
    this.setState({popUp: "flex"});
  }

  clearPopUp() {
    this.setState({popUp: "none"});
  }

  render(){
    return <div>
      <Marker
        latitude={this.state.lat}
        longitude={this.state.long}
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
          longitude={this.state.long}
          latitude={this.state.lat}
          onClose={this.clearPopUp}
          closeOnClick={true}>
          <Link to={"/explore/" + this.state.popupInfo.replace(/\s+/g, '')} style={{margin:'0'}}>{this.state.popupInfo}</Link>
        </Popup>
      </div>
  </div>
  }
}

export default class Maps extends Component {
  constructor(props) {
    super(props);
    const popupIndex = this.props.popupInfo.map(() => {return false})

    this.state = {
      viewport: {
        latitude: 40.7128,
        longitude: -74.006,
        zoom: 16
      },
      coordinates: {
        latitudes: this.props.latitudes,
        longitudes : this.props.longitudes
      },
      popup: {
        popupInfo: this.props.popupInfo,
        popupIndex: popupIndex
      },
      //width and height are passed in from outside
      height: this.props.height,
      width: this.props.width
    };    
    this.handleViewportChange = this.handleViewportChange.bind(this);
  }

  componentDidUpdate(oldProps){
    if(oldProps != this.props){
      this.setState({
        coordinates: {
          latitudes: this.props.latitudes,
          longitudes: this.props.longitudes
        },
        popup: {
          popupInfo: this.props.popupInfo,
          popupIndex: this.props.popupInfo.map(() => {return false})
        }
      })
    }
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
      markers.push(<MapItem key={k++} lat={lat} long={long} popupInfo={popupInfo}/>);
    }
    
    return (
      <div>
        <ReactMapGL
          mapboxApiAccessToken={process.env.MAPBOX}
          mapStyle={"mapbox://styles/mapbox/basic-v9"}
          latitude={view.latitude}
          longitude={view.longitude}
          //width and height are passed in from outside
          width={this.props.width}
          height={this.props.height}
          zoom={view.zoom}
          onViewportChange={this.handleViewportChange}
          scrollZoom ={false}
          //minzoom={view.zoom}
         // maxzoom={view.zoom}
          doubleClickZoom={false}
        >
        {markers}
        <Popup latitude={40} longitude={-75.41} closeButton={true} closeOnClick={false} anchor="top">
          <h1>You are here</h1>
        </Popup>
        </ReactMapGL>
      </div>
    );
  }
}

