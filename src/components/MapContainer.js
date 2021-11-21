import React, { Component, useState } from "react";
import { Map, Marker } from "pigeon-maps";

// -6.177828022783735 to -6.179154469118252 (latitude)
// 106.77350302422087 to 106.87907129086342 (longitude)
function MyMap(props) {
  const purple = `hsl(273, 100%, 50%)`;
  const black = `hsl(0, 100%, 0%)`;
  const min_lat = -6.184477092506308;
  const min_long = 106.7579383201126;
  const max_lat = -6.238131999890257;
  const max_long = 106.8484322958861;

  return (
    <>
      <h1>{props.name}</h1>
      <Map width={200} height={100} defaultCenter={[((min_lat + max_lat) / 2),((min_long + max_long) / 2)]} defaultZoom={10.5}>
        <Marker
          width={50}
          anchor={props.from}
          color={purple}
        />
        <Marker
          width={50}
          anchor={props.to}
          color={black}
        />
      </Map>
    </>
  );
  //   }
}

export default MyMap;
