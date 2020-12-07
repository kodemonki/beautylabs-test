import React, { useState, useEffect } from "react";
import axios from "axios";

import StarSystem from "./StarSystem";
import StarSystemDetail from "./StarSystemDetail";
import SearchBar from "./SearchBar";

import "../css/App.css";

function App() {
  const [starData, setStarData] = useState(null);
  const [planetData, setPlanetData] = useState(null);

  const prefix = "http://cors-anywhere.herokuapp.com/";
  const apiUrl =
    prefix + "http://webdevelopertest.playfusionservices.com/webapptest/";

  const getInitialData = () => {
    axios
      .get(apiUrl + "stars")
      .then((response) => {
        setStarData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getDetail = (item) => {
    axios
      .get(prefix + item._links.planets.href)
      .then((response) => {
        setPlanetData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onSearch = (str) => {
    console.log(str);
    //alternateNames/search/findByNameLike?name=11%20Co%25
    
    axios
      .get(apiUrl + 'alternateNames/search/findByNameLike?name=11%20Co%25')
      .then((response) => {
        //setPlanetData(response.data);
        console.log(response.data)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getInitialData();
  }, []);

  return (
    <div className="AppWrapper">
      <div id="space">
        <div className="stars"></div>
        <div className="stars"></div>
        <div className="stars"></div>
        <div className="stars"></div>
        <div className="stars"></div>
      </div>
      <div className="App">
        <SearchBar onSearch={onSearch} />
        <StarSystem starData={starData} getDetail={getDetail} />
        <StarSystemDetail planetData={planetData} />
      </div>
    </div>
  );
}

export default App;
