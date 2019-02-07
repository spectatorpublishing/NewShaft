import styled from "styled-components";
import React, { Component } from "react";
import ReactMapGL, { Marker, Popup} from "react-map-gl";
import { fromJS } from "immutable";
import "mapbox-gl/src/css/mapbox-gl.css";
import mark from "../assets/marker.svg";

console.log("Entry");
console.log(process.env)
console.log(process.env.MAPBOX);

let MarkerIcon = styled.img`
  height: 10%;
  width : 10%;
`

class MapItem extends Component {
  constructor(props) {
    super(props)

    this.state = {
      popUp: "flex",
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
    const {lat, long, popupInfo} = this.props
    return <div>
      <Marker
        latitude={lat}
        longitude={long}
        offsetLeft={-20}
        offsetTop={10}
      >
        <div>{"Marker"}</div>
        <div onClick={this.setPopUp}>
        <MarkerIcon src={mark} alt="fireSpot"/>
        </div>                
      </Marker>
      <div style={{display:this.state.popUp}}>
        <Popup tipSize={5}
          anchor="bottom-right"
          longitude={long}
          latitude={lat}
          onClose={this.clearPopUp}
          closeOnClick={true}>
          <p>{popupInfo}</p>
        </Popup>
      </div>
  </div>
  }
}

export default class Maps extends Component {
  constructor(props) {
    super(props);

    var popupIndex = this.props.popupInfo.map(() => {return false})

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
        popupIndex: popupIndex
      }
    };
    // this.renderPopup = this.renderPopup.bind(this);
    
    this.handleViewportChange = this.handleViewportChange.bind(this);
  }

  handleViewportChange(vp) {
    this.setState({ viewport: vp });
  }

  // renderPopup(){
  //   console.log("Rendering! popups: " + this.state.popup.popupIndex);
  //   var popups = this.state.popup.popupIndex.map((e, i) => {
  //     if(e){
  //       return (
  //         <Popup tipSize={5}
  //           anchor="bottom-right"
  //           longitude={this.state.coordinates.longitudes[i]}
  //           latitude={this.state.coordinates.latitudes[i]}
  //           onClose={() => {
  //             var popupIndex = this.state.popup.popupIndex;
  //             popupIndex[i] = false;
  //             console.log("Closed! popups: " + popupIndex)
  //             this.setState({popup: {popupInfo: this.state.popup.popupInfo, popupIndex: popupIndex}}), () => {this.renderPopup()}}
  //           }
  //           closeOnClick={true}>
  //           <p>{this.state.popup.popupInfo[i]}</p>
  //         </Popup>
  //       );
  //     }
  //   });
  //   return popups;
  // }

  render() {
    const view = this.state.viewport;
    let markers = [];
    let k = 0;
    for (let i = 0; i < this.state.coordinates.latitudes.length; i++){ 
      var lat = this.state.coordinates.latitudes[i]
      var long = this.state.coordinates.longitudes[i];
      const popupInfo = this.state.popup.popupInfo[i]
      markers.push(<MapItem key={k++} lat={lat} long={long} popupInfo={popupInfo}/>);
    }
    
    return (
      <div>
        <ReactMapGL
          // mapboxApiAccessToken={process.env.MAPBOX}
          mapboxApiAccessToken={"pk.eyJ1IjoiYXJzYWxhYW4iLCJhIjoiY2pxeDViZW41MDlmejQ4bnduMnE2aGhyNCJ9.0-y9yPqzqlWLd-yhUe5tcg"}
          mapStyle={"mapbox://styles/mapbox/basic-v9"}
          latitude={view.latitude}
          longitude={view.longitude}
          width={"100%"}
          height={"400px"}
          zoom={view.zoom}
          onViewportChange={this.handleViewportChange}
        >
        {markers}
        {/* {this.renderPopup()} */}
        </ReactMapGL>
      </div>
    );
  }
}

