import React, { Component } from "react";

class Example extends Component {
  constructor(props) {
    super(props);

    this.state = { zip: "" };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      zip: e.target.value
    });
  }

  render() {
    return <input onChange={this.handleChange} type="text" />;
  }
}

export default Example;
