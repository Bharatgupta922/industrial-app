
import React, { useRef } from "react";

import { withGoogleMap, GoogleMap } from 'react-google-maps';


export default function Map({height , width}) {

    const GoogleMapExample = withGoogleMap(props => (
  
      <GoogleMap
  
        defaultCenter = { { lat: 19.257984, lng: 73.045413 } }
  
        defaultZoom = { 13 }
  
      >
  
      </GoogleMap>
  
   ));
  
    return (
  
      <div>
  
      <GoogleMapExample
  
        containerElement={ <div style={{ height: `${height}`, width: `${width}` }} /> }
  
        mapElement={ <div style={{ height: `100%` }} /> }
  
      />
  
    </div>
  
    );
  
  }