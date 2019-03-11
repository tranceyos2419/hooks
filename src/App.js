import React, { Component } from "react";
import Hooks from "./Hooks";
import Provider from "./context/Provider";

class App extends Component {
  render() {
    return (
      <Provider>
        <div style={{ textAlign: "center" }}>
          <Hooks />
        </div>
      </Provider>
    );
  }
}

export default App;
