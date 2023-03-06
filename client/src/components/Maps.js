import styled from "styled-components";
import React, { useEffect,  useState } from "react";
import Map, { Marker, Popup} from "react-map-gl";
import "mapbox-gl/src/css/mapbox-gl.css";
import mark from "../assets/marker2.svg";
import { Link, BrowserRouter as Router } from 'react-router-dom';

let MarkerIcon = styled.img`
  transform: translate(-50%, -100%);
  height: 12px;
  width : 12px;
`

const MapItem = (props) => {
  const [showPopUp, setShowPopUp] = useState(false);

  return ( 
    <div
          onMouseEnter={() => setShowPopUp(true)}
          onMouseLeave={() => setTimeout(() => {
            setShowPopUp(false)
          }, 500)}
    >
      <Marker
        latitude={props.lat}
        longitude={props.long}
        onClick={() => setShowPopUp(true)}
      >
        <div
        >
          <MarkerIcon src={mark} alt="fireSpot"/>
        </div>
      </Marker>
      {showPopUp && (
        <Popup 
          anchor="top-left"
          dynamicPosition={true}
          longitude={props.long}
          latitude={props.lat}
          onClose={() => setShowPopUp(false)}
          closeOnClick={false}
          >
          <Link to={"/explore/" + props.popupInfo.replace(/\s+/g, '-')} style={{margin:'0'}}>{props.popupInfo}</Link>
        </Popup>
       )}
  </div>
  )
};


const Maps = (props) => {
  const [viewState, setViewState] = useState({
    latitude: props.centerLatitude,
    longitude: props.centerLongitude,
    zoom: props.zoom
  });

  const [popup, setPopup] = useState({
    popupInfo: props.popupInfo,
    popupIndex: props.popupInfo.map(() => {return false})
  });

  useEffect(() => {
    setPopup({
      popupInfo: props.popupInfo,
      popupIndex: props.popupInfo.map(() => {return false})
    })
    }
    , [props]);

  const markers = [];
  let k = 0;
  for (let i = 0; i < props.latitudes.length; i++){
    const lat = props.latitudes[i]
    const long = props.longitudes[i];
    const popupInfo = popup.popupInfo[i];
    markers.push(<MapItem key={k++} lat={lat} long={long} popupInfo={popupInfo}/>);
  }

  return (
    <Map
      mapboxAccessToken={"pk.eyJ1IjoiYXJzYWxhYW4iLCJhIjoiY2pxeDViZW41MDlmejQ4bnduMnE2aGhyNCJ9.0-y9yPqzqlWLd-yhUe5tcg"}
      mapStyle={"mapbox://styles/mapbox/basic-v9?optimize=true"}
      initialViewState={{
        longitude: viewState.longitude,
        latitude: viewState.latitude,
        zoom: viewState.zoom
      }}
      style={{width: props.width, height: props.height}}
      onMove={evt => setViewState(evt.viewState)}
      scrollZoom ={true}
      doubleClickZoom={false}
    >
    {markers}
    </Map>
  );
}


export default Maps;

