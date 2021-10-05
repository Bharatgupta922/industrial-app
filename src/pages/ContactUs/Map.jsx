import React, { useRef } from "react";

import { withGoogleMap, GoogleMap  , Marker} from "react-google-maps";
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

export default function Map() {
	const GoogleMapExample = withGoogleMap((props) => (
		<GoogleMap
			defaultCenter={{ lat: 25.382856, lng: 82.3459 }}
			defaultZoom={5}
		>
			{markers.map(marker => (
    <Marker
      position={{ lat: marker.latitude, lng: marker.longitude }}
      key={marker.id}
    />
))}
{/* <Marker position={{lat:19.257984 , lng: 73.045413}} key="1" /> */}
		</GoogleMap>
	));

	return (
		<div>
			<GoogleMapExample
				containerElement={<div className="iframe-map" />}
				mapElement={
					<div
						style={{
							height: `100%`,
							width: `100% !important`,
						}}
					/>
				}
			/>
		</div>
	);
}
