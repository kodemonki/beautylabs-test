import React, { useState } from "react";

import "../css/App.css";

function Orbit(props) {
  const getPlanets = () => {
    const totalPlanets = props.data.length;
    const items = [];
    const degreeInc = 360 / totalPlanets;

    for (let i = 0; i < totalPlanets; i++) {
      items.push(
        <div
          key={"o" + i}
          className="OrbitPlanetSpacer"
          style={{
            transformOrigin: "left center",
            transform: "rotate(" + i * degreeInc + "deg)",
          }}
        >
          <div className="OrbitPlanet rotate"></div>
        </div>
      );
    }

    return items;
  };

  return (
    <div className="fade-in step-0 OrbitContainer">
      <div className="OrbitBox">
        <div className="OrbitPlanetContainer rotate">{getPlanets()}</div>
        <div className="OrbitStar"></div>
      </div>
      
    </div>
  );
}

export default Orbit;
