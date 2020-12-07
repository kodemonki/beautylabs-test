import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "../reducers";

import Page2 from "../components/Page2";

it("renders without crashing", () => {
  const store = createStore(rootReducer);
  const div = document.createElement("div");
  ReactDOM.render(
    <Provider store={store}>
      <Page2 />
    </Provider>,
    div
  );
});
