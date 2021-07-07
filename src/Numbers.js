import React, { Component } from "react";

class Counter extends Component {
  state = {
    number1: " ",
    number2: " ",
    number3: " ",
    number4: " ",
    number5: " ",
    number6: " ",
  };

  baseState = this.state;

  randomNumber = () => {
    this.setState({
      number1: Math.ceil(Math.random() * 49),
      number2: Math.ceil(Math.random() * 49),
      number3: Math.ceil(Math.random() * 49),
      number4: Math.ceil(Math.random() * 49),
      number5: Math.ceil(Math.random() * 49),
      number6: Math.ceil(Math.random() * 49),
    });
  };

  resetNumber = () => {
    this.setState(this.baseState);
  };

  render() {
    return (
      <div>
        <ul>
          <li>{this.state.number1}</li>
          <li>{this.state.number2}</li>
          <li>{this.state.number3}</li>
          <li>{this.state.number4}</li>
          <li>{this.state.number5}</li>
          <li>{this.state.number6}</li>
        </ul>

        <button className="reset-button" onClick={this.resetNumber}>
          Reset
        </button>
        <button className="lucky-button" onClick={this.randomNumber}>
          Show me lucky numbers
        </button>
      </div>
    );
  }
}

export default Counter;
