import React, { Component } from "react";
import axios from "axios";

import Suggestions from "./Suggestions";

// container component
<<<<<<< HEAD
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
=======
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
>>>>>>> 351fbd0c3ea32e4ec94c103b440c2720ff7ee1be
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

<<<<<<< HEAD
export default Search;
=======
export default Search;
>>>>>>> 351fbd0c3ea32e4ec94c103b440c2720ff7ee1be
