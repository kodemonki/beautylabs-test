import React, { useState, useEffect } from "react";
import axios from "axios";

import StarSystem from "./StarSystem";
import StarSystemDetail from "./StarSystemDetail";
import SearchBar from "./SearchBar";

import "../css/App.css";

function App() {
  const [isLoading, setIsLoading] = useState(false);

  const [starData, setStarData] = useState(null);
  const [starPage, setStarPage] = useState(0);
  const [searchData, setSearchData] = useState(null);

  const [planetData, setPlanetData] = useState(null);

  const prefix = "http://cors-anywhere.herokuapp.com/";
  const apiUrl =
    prefix + "http://webdevelopertest.playfusionservices.com/webapptest/";

  const getInitialData = () => {
    setIsLoading(true);
    axios
      .get(apiUrl + "stars?sort=numberOfPlanets,desc&page=" + starPage)
      .then((response) => {
        setStarData(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  };

  const getDetail = (item) => {
    setIsLoading(true);
    axios
      .get(prefix + item._links.planets.href)
      .then((response) => {
        setPlanetData(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  };

  const onSearch = (str) => {
    if (str === "") {
      setSearchData(null);
    } else {
      setIsLoading(true);
      axios
        .get(
          apiUrl + "alternateNames/search/findByNameLike?name=%25" + str + "%25"
        )
        .then((response) => {
          setSearchData(response.data);
          setIsLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setIsLoading(false);
        });
    }
  };

  const prevPage = () => {
    let target = starPage - 1;
    if (target < 1) {
      target = 1;
    }
    setStarPage(target);
    getInitialData();
  };

  const nextPage = () => {
    let target = starPage + 1;
    setStarPage(target);
    getInitialData();
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
        <SearchBar onSearch={onSearch} searchData={searchData} />
        <StarSystem
          starData={starData}
          getDetail={getDetail}
          nextPage={nextPage}
          prevPage={prevPage}
        />
        <StarSystemDetail planetData={planetData} />
      </div>
      <div
        className="LoadingBlocker"
        style={{ display: isLoading === true ? "block" : "none" }}
      >
        <div className="LoadingSpinner">
          <div className="LoadingSpinner__inner"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
