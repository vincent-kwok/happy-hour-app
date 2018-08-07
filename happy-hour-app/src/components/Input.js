import React, { Component } from "react";
import Example from "./Example";

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = { zip: "" };
    this.handleUserInput = this.handleUserInput.bind(this);
  }

  handleUserInput(e) {
    this.setState({
      zip: e.target.value
    });
  }
  render() {
    return (
      <div>
        <input
          type="text"
          onChange={this.handleUserInput}
          value={this.state.zip}
        />
        <h1>{this.state.zip}</h1>
      </div>
    );
  }
}

export default Input;
