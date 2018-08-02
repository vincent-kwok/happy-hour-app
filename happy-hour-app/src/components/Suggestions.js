import React, { Component } from "react";

// presentational component

const Suggestions = props => {
  const options = props.results.map(r => <li key={r.ID}>{r.Name}</li>);
  return <ul>{options}</ul>;
};

export default Suggestions;
