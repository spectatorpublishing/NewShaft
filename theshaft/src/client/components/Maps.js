import React, { Component } from "react";
import ReactMapGL, { Marker, Popup} from "react-map-gl";
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
    var popupIndex = this.props.popupInfo.map(() => {return false})
    this.state = {
      viewport: {
        width: 400,
        height: 400,
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
  }

  renderPopup(){
    console.log("Rendering! popups: " + this.state.popup.popupIndex);
    var popups = this.state.popup.popupIndex.map((e, i) => {
      if(e){
        return (
          <Popup tipSize={10}
            anchor="bottom-right"
            longitude={this.state.coordinates.longitudes[i]}
            latitude={this.state.coordinates.latitudes[i]}
            onClose={() => {
              var popupIndex = this.state.popup.popupIndex;
              popupIndex[i] = false;
              console.log("Closed! popups: " + popupIndex)
              this.setState({popup: {popupInfo: this.state.popup.popupInfo, popupIndex: popupIndex}})}
            }
            closeOnClick={true}>
            <p>{this.state.popup.popupInfo[i]}</p>
          </Popup>
        );
      }
    });

    return popups;
  }

  render() {
    const view = this.state.viewport;
    
    var markers = this.state.coordinates.latitudes.map((lat, i) => {
      var long = this.state.coordinates.longitudes[i];
      var handlePopupClick = function () {
        var popupIndex = this.state.popup.popupIndex;
        popupIndex[i] = true;
        console.log("Clicked! popups: " + popupIndex)
        this.setState({popup: {popupInfo: this.state.popup.popupInfo, popupIndex: popupIndex}});
      }
      var marker =  <Marker
                      latitude={lat}
                      longitude={long}
                      offsetLeft={-20}
                      offsetTop={10}
                    >
                      <div>{"Marker" + i}</div>
                      <div onClick={() => {handlePopupClick()}}>
                        <img src={mark} className="marker_style" alt="fireSpot"/>
                      </div>
                    </Marker>
      // handlePopupClick = handlePopupClick.bind(marker)
      return marker;
    });
    
    return (
      <div>
        <ReactMapGL
          // mapboxApiAccessToken={process.env.MAPBOX}
          mapboxApiAccessToken={"pk.eyJ1IjoiYXJzYWxhYW4iLCJhIjoiY2pxeDViZW41MDlmejQ4bnduMnE2aGhyNCJ9.0-y9yPqzqlWLd-yhUe5tcg"}
          mapStyle={"mapbox://styles/mapbox/basic-v9"}
          latitude={view.latitude}
          longitude={view.longitude}
          width={view.width}
          height={view.height}
          zoom={view.zoom}
          onViewportChange={viewport => this.setState({ viewport })}
        >
        {markers}
        {this.renderPopup()}
        </ReactMapGL>
      </div>
    );
  }
}

