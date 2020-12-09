import React, { useRef } from "react";

import "../css/App.css";

function SearchBar(props) {
  const textInput = useRef();

  const onSearch = (e) => {
    e.preventDefault();
    props.onSearch(textInput.current.value);
  };

  return (
    <div className="fade-in step-0" style={{ width: "100%" }}>
      <h3>Search</h3>
      <form>
        <input type="text" ref={textInput} />
        &nbsp;<button onClick={onSearch}>Search</button>
      </form>
      {props.searchData !== null && (
        <>
          <h3>Search Results</h3>
          <table
            border="1"
            cellPadding="2"
            cellSpacing="0"
            style={{ width: "100%" }}
          >
            {props.searchData._embedded.alternateNames.map((item, index) => (
              <React.Fragment key={"ss" + index}>
                {true && (
                  <tbody>
                    <tr>
                      <td>{item.name}</td>
                    </tr>
                  </tbody>
                )}
              </React.Fragment>
            ))}
          </table>
        </>
      )}
    </div>
  );
}

export default SearchBar;
