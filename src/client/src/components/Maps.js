import styled from "styled-components";
import React, { Component } from "react";
import ReactMapGL, { Marker, Popup} from "react-map-gl";
//import { fromJS } from "immutable";
import "mapbox-gl/src/css/mapbox-gl.css";
import mark from "../assets/marker2.svg";
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

let PopupContainer = styled.div`
  opacity: 0;
  transition: opacity 0.3s;
  -webkit-transition: opacity 0.3s;
`

let MarkerIcon = styled.img`
  transform: translate(-50%, -100%);
  height: 12px;
  width : 12px;
`

let LocationTitle = styled.h2`
  margin-bottom: 20px;
`

class MapItem extends Component {
  constructor(props) {
    super(props)

    this.state = {
      popUp: "none",
      lat: this.props.lat,
      long: this.props.long,
      popupInfo: this.props.popupInfo,
      isOpen: false,
      mouseTracked: false,
    }

    this.setPopUp = this.setPopUp.bind(this);
    this.clearPopUp = this.clearPopUp.bind(this);
    this.trackMouse = this.trackMouse.bind(this);
    this.untrackMouse = this.untrackMouse.bind(this);

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
    this.setState({popUp: "1", isOpen: true, display: "flex"});
  }

  clearPopUp() {
    this.setState({popUp: "0", isOpen: false});
    setTimeout(() => {
      if (!this.state.mouseTracked) {
          this.setState({display: "none"});      }
    }, 100);
  }

  trackMouse() {
    this.setState({ mouseTracked: true });
    if (!this.state.isOpen) {
      this.setPopUp();
    }
  }

  untrackMouse() {
    this.setState({ mouseTracked: false });
    setTimeout(() => {
      if (!this.state.mouseTracked) {
        this.clearPopUp();
      }
    }, 100);
  }


  render(){
    return <div
          onClick={this.setPopUp} 
          onMouseEnter={this.trackMouse} 
          onMouseLeave={this.untrackMouse} 
    >
      <Marker
        latitude={this.state.lat}
        longitude={this.state.long}
      >
        <div 
        >
          <MarkerIcon src={mark} alt="fireSpot"/>
        </div>                
      </Marker>
      <PopupContainer style={{opacity:this.state.popUp, display:this.state.display}}>
        <Popup tipSize={5}
          anchor="bottom-left"
          offsetTop={-8}
          offsetLeft={0}
          dynamicPosition={true}
          longitude={this.state.long}
          latitude={this.state.lat}
          onClose={this.clearPopUp}
          closeOnClick={true}>
          <Link to={"/explore/" + this.state.popupInfo.replace(/\s+/g, '')} style={{margin:'0'}}>{this.state.popupInfo}</Link>
        </Popup>
      </PopupContainer>
  </div>
  }
}

export default class Maps extends Component {
  constructor(props) {
    super(props);
    const popupIndex = this.props.popupInfo.map(() => {return false})

    this.state = {
      viewport: {
        latitude: this.props.centerLatitude,
        longitude: this.props.centerLongitude,
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
        viewport: {
          latitude: this.props.centerLatitude,
          longitude: this.props.centerLongitude,
          zoom: 16
        },
        coordinates: {
          latitudes: this.props.latitudes,
          longitudes: this.props.longitudes
        },
        popup: {
          popupInfo: this.props.popupInfo,
          popupIndex: this.props.popupInfo.map(() => {return false})
        },
        centerLatitude: this.props.centerLatitude,
        centerLongitude: this.props.centerLongitude
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
        <LocationTitle>Location</LocationTitle>
        <ReactMapGL
          mapboxApiAccessToken={"pk.eyJ1IjoiYXJzYWxhYW4iLCJhIjoiY2pxeDViZW41MDlmejQ4bnduMnE2aGhyNCJ9.0-y9yPqzqlWLd-yhUe5tcg"}
          mapStyle={"mapbox://styles/mapbox/basic-v9?optimize=true"}
          latitude={view.latitude}
          longitude={view.longitude}
          //width and height are passed in from outside
          width={this.props.width}
          height={this.props.height}
          zoom={view.zoom}
          onViewportChange={this.handleViewportChange}
          scrollZoom ={true}
          //minzoom={view.zoom}
         // maxzoom={view.zoom}
          doubleClickZoom={false}
        >
        {markers}
        </ReactMapGL>
      </div>
    );
  }
}

