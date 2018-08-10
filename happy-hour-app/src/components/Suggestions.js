<<<<<<< HEAD
import React from "react";

// presentational component

const Suggestions = (props) => {
  const options = props.results.map(r => (
    <li key={r.name}>
      {r.Name}
    </li>
  ))
  return <ul>{options}</ul>;
}

export default Suggestions
