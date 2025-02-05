import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  ZoomableGroup
} from "react-simple-maps";

const Map = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [-10.0, -52.0, 0],
        center: [-5, -3],
        scale: 1100
      }}
      style={{width:"100%",height:"100%"}}
    >
      <Geographies
        geography="/features.json"
        fill="rgb(38, 4, 57)"
        stroke="#FFFFFF"
        strokeWidth={0.5}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      <Annotation
  subject={[77.2090, 28.6139]}  // Coordinates for New Delhi
  dx={-90}  // Adjust as needed
  dy={-30}  // Adjust as needed
  connectorProps={{
    stroke: "white",
    strokeWidth: 2,
    strokeLinecap: "round"
  }}
>
<text x="-8" textAnchor="end" alignmentBaseline="middle" fill="#F53">
{"Paris"}
  </text>
</Annotation>

      
    </ComposableMap>
  );
};

export default Map;
