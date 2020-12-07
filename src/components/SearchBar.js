import React, { useRef } from "react";

import "../css/App.css";

function SearchBar(props) {
  const textInput = useRef();

  const onSearch = (e) => {
    e.preventDefault();
    props.onSearch(textInput.current.value);
  };

  return (
    <div className="fade-in step-0">
      <h3>Search</h3>
      <form>
        <input type="text" ref={textInput} />
        &nbsp;<button onClick={onSearch}>Search</button>
      </form>
    </div>
  );
}

export default SearchBar;
