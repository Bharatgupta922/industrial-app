import React, { useRef } from "react";

import { withGoogleMap, GoogleMap , Marker } from 'react-google-maps';

const markers = [
	{
		id:1,
		latitude:19.257984,
		longitude:73.045413,
		shelter:'marker 1',
	},
	{
		id:2,
		latitude:13.004960,
		longitude:77.487301,
		shelter:'marker 2',
	},
	{
		id:3,
		latitude:22.501563,
		longitude:88.374661,
		shelter:'marker 3',
	},
	{
		id:4,
		latitude:11.137422,
		longitude:77.322819,
		shelter:'marker 4',
	},
	{
		id:5,
		latitude:25.382856,
		longitude:82.553459,
		shelter:'marker 5',
	},
];

export default function Map({height , width}) {

    const GoogleMapExample = withGoogleMap(props => (
  
      <GoogleMap
  
        defaultCenter = { { lat: 19.257984, lng: 73.045413 } }
  
        defaultZoom = { 3 }
  
      >
  
  {markers.map(marker => (
    <Marker
      position={{ lat: marker.latitude, lng: marker.longitude }}
      key={marker.id}
    />
))}

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