import React, { Component } from "react";
import axios from "axios";

class GitHub extends Component {
  constructor(props) {
    super(props);
    this.state = {
      requestFailed: false
    };
    this.getData = this.getData.bind(this);
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    this.getData();
  }
  getData() {
    // axios.get("/bars").then(res => {
    //   const posts = res.data.success.results.map(obj => ({
    //     id: obj.id,
    //     name: obj.name
    //   }));
    //   this.setState({ posts });
    // });
    // .catch(error => console.log(error, "error"));

    axios
      .get("/bars")
      .then(response => {
        const data = response.data.success.results;
        this.setState({ posts: data });
      })
      .catch(error => console.log(error, "error"));
  }

  render() {
    const myData = this.state.posts;
    console.log(myData);
    // if (this.state.requestFailed) return <p>Failed!</p>;
    // if (!this.state.githubData) return <p>Loading...</p>;
    return (
      <div>
        <h1>Hi</h1>
        <ul>{myData.map(item => <li key={item.ID}>{item.Name}</li>)}</ul>
      </div>
      // <ul>

      //   {this.state.posts.map(function(post, index) {
      //     return (
      //       <div key={index}>
      //         <h1>{post.id}</h1>
      //         <p>{post.name}</p>
      //       </div>
      //     );
      //   })}
      // </ul>
    );
  }
}

export default GitHub;
