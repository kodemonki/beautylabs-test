import React from "react";

import "../css/App.css";

function StarSystem(props) {

  return (
    <div className="fade-in step-0" style={{width:'100%'}}>


      <h3>Star Systems</h3>

      {props.starData === null && <h3>Loading</h3>}

      {props.starData !== null && (
        <table
          border="1"
          cellPadding="2"
          cellSpacing="0"
          style={{ width: "100%" }}
        >
          <thead>
            <tr>
              <td>Name</td>
              <td>Distance</td>
              <td>Planets</td>
              <td>Button</td>
            </tr>
          </thead>

          {props.starData._embedded.stars.map((item, index) => (
            <tbody key={"ss" + index}>
              <tr>
                <td>{item.name}</td>
                <td>{item.distance}</td>
                <td>{item.numberOfPlanets}</td>
                <td>
                  <button
                    onClick={() => {
                      props.getDetail(item);
                    }}
                  >
                    detail
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      )}

      {props.starData !== null && (
        <p>
          Page {props.starData.page.number} of {props.starData.page.totalPages}
        </p>
      )}
    </div>
  );
}

export default StarSystem;
