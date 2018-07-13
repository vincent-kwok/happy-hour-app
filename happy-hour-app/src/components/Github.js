import React, { Component } from "react";
import axios from "axios";

class GitHub extends Component {
  constructor(props) {
    super(props);
    this.state = {
      requestFailed: false
    };
    this.getData = this.getData.bind(this);
  }

  getData() {
    axios
      .get("/bars")
      .then(response => {
        console.log(response.data);
      })
      .catch(error => console.log(error, "error"));
  }

  render() {
    const data = this.getData();
    if (this.state.requestFailed) return <p>Failed!</p>;
    if (!this.state.githubData) return <p>Loading...</p>;
    return (
      <div>
        <GitHub username="jackfranklin" />
      </div>
    );
  }
}

export default GitHub;
