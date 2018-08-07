import React, { Component } from "react";
import axios from "axios";

import Suggestions from "./Suggestions";

// container component
// const zip = 60608;
// const specials = "Y";

class Search extends Component {
  constructor(props) {
    super(props);
    this.getInfo = this.getInfo.bind(this);
    this.state = {
      error: false,
      query: "",
      results: []
    };
  }

  componentDidMount() {
    this.getInfo();
  }

  getInfo = () => {
    axios
      .get("/bars")
      .then(response => {
        const data = response.data.success.results;
        this.setState({ posts: data });
      })
      .catch(error => console.log(error, "error"));
  };

  handleInputChange = () => {
    this.setState(
      {
        query: this.search.value
      },
      () => {
        if (this.state.query && this.state.query.length > 1) {
          // this.showDropdown()
          if (this.state.query.length % 2 === 0) {
            this.getInfo();
          }
        } else if (!this.state.query) {
          // this.hideDropdown()
        }
      }
    );
  };

  render() {
    return (
      <form>
        <input
          placeholder="Search for..."
          ref={input => (this.search = input)}
          onChange={this.handleInputChange}
        />
        <Suggestions results={this.state.results} />
      </form>
    );
  }
}

export default Search;