// @flow
import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  return (
    <div>
      <label htmlFor="name">Hello World</label>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
