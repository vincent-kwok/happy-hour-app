import React, { Component } from "react";
import axios from "axios";

import Suggestions from "./Suggestions";

// container component
const zip = 60608;
const specials = "Y";

const { API_KEY } = process.env;
const API_URL =
  "https://api.barzz.net/api/search?zip=#{zip}&specials=#{specials}&user_key=#{ENV['api_key']}";

class Search extends Component {
  state = {
    error: false,
    query: "",
    results: []
  };

  getInfo = () => {
    axios
      .get(`${API_URL}?api_key=${API_KEY}`)
      .then(({ data }) => {
        this.setState({
          results: data
        });
      })
      .catch(() => this.setState({ error: true }));
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
