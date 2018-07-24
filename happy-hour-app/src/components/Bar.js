import React, { Component } from "react";
import axios from "axios";

class Bar extends Component {
  constructor() {
    super();
    this.state = {
      bars: [],
    };
  }

  getData() {

    var params = {
      zip: this.zip;
    };

    axios
      .post("/bars", params)
      .then(results => {
        console.log(results.data.success.results)
        return results.json();
      }).then(data => {
        let bars = data.results.map((bar) => {
          return(
            <div key={bar.results}>
          )
        })
      })
      .catch(error => {
        console.log(error, "error");
      });
  }

  render() {
    const data = this.getData();

    return (
      <div className="bars-container">
        Bars: {this.state.bar}
      </div>
    )
  }
}

export default Bar;
