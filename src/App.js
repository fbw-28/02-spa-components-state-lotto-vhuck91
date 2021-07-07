import React, { Component } from "react";
import Lucky from "./Numbers";
import "./style.css"

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Lotto 6/49</h1>
        <h3>Calc lucky numbers</h3>
        <Lucky />
      </div>
    );
  }
}

export default App;
