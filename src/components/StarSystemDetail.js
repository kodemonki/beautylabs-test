import React from "react";
import Orbit from "./Orbit";

import "../css/App.css";

function StarSystemDetail(props) {
  
  const convertDate = (str) => {
    var d = new Date(str);
    return d.getDate()+'-'+d.getMonth()+'-'+d.getFullYear();
  }

  return (
    <div className="fade-in step-0">
      {props.planetData !== null && <h3>Detail</h3>}
      {props.planetData !== null && (
        <Orbit data={props.planetData._embedded.planets} />
      )}

      {props.planetData !== null &&
        props.planetData._embedded.planets.map((item, index) => (
          <div key={"ssd" + index}>
            <h4>{item.name}</h4>
            <p>{item.description}</p>
            <p>discoveryDate : {convertDate(item.discoveryDate)}</p>

            <table
              border="1"
              cellPadding="2"
              cellSpacing="0"
              style={{ width: "100%" }}
            >
              <thead>
                <tr>
                  <td>discoveryMethod</td>
                  <td>list</td>
                  <td>mass</td>
                  <td>radius</td>
                  <td>temperature</td>
                  <td>age</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{item.discoveryMethod}</td>
                  <td>{item.list}</td>
                  <td>{item.mass}</td>
                  <td>{item.radius}</td>
                  <td>{item.temperature}</td>
                  <td>{item.age}</td>
                </tr>
              </tbody>
            </table>
          </div>
        ))}
    </div>
  );
}

export default StarSystemDetail;
