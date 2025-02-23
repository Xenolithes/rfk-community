// ES6
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import React from 'react';

const Map = ReactMapboxGl({
  accessToken:
    'pk.eyJ1IjoiaGF5ZGVuYmV0dHMiLCJhIjoiY2syN2pramp3MGZnbTNibnB3ZXl0c3JjMSJ9.E-hnHmZ8WREOfhOEItLTBg',
  center: [-38.889588, -76.9731449, 17]
});

const MyMap = () => {
  return (
    <Map
      style="mapbox://styles/haydenbetts/ck33byxrz1lf61cp6qzzxeep2"
      containerStyle={{
        height: '100vh',
        width: '100vw'
      }}
      zoom={[14]}
      center={[-76.955793, 38.889588]}
      pitch={[30]}>
      <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
        <Feature coordinates={[-38.889588, -76.9731449, 17]} />
      </Layer>
    </Map>
  );
};

// in render()

export default MyMap;
