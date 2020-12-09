import React, { useRef, useState } from "react";

import "../css/App.css";

function StarSystem(props) {
  const textInput = useRef();
  const [minPlanets, setMinPlanets] = useState(0);

  const updateFilter = () => {
    setMinPlanets(textInput.current.value);
  };
  return (
    <div className="fade-in step-0" style={{ width: "100%" }}>
      <h3>Star Systems</h3>

      {props.starData === null && <h3>Loading</h3>}

      {props.starData !== null && (
        <>
          <div>
            <span><b>Min planets</b></span>
            <br />
            <input type="text" ref={textInput} onChange={updateFilter} />
            <br />
            <br />
          </div>
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
              <>
                {item.numberOfPlanets >= minPlanets && (
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
                )}
              </>
            ))}
          </table>
        </>
      )}

      {props.starData !== null && (
        <p>
          <button
            onClick={() => {
              props.prevPage();
            }}
          >
            Previous page
          </button>
          &nbsp;
          <span>
            Page {props.starData.page.number} of{" "}
            {props.starData.page.totalPages}
          </span>
          &nbsp;
          <button
            onClick={() => {
              props.nextPage();
            }}
          >
            Next page
          </button>
        </p>
      )}
    </div>
  );
}

export default StarSystem;
