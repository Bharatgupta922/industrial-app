
import React, { useRef } from "react";

import { withGoogleMap, GoogleMap } from 'react-google-maps';


export default function Map() {

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
  
        containerElement={ <div style={{ height: `600px`, width: '600px' }} /> }
  
        mapElement={ <div style={{ height: `100%` }} /> }
  
      />
  
    </div>
  
    );
  
  }