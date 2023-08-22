import React from "react";
import ReactDOM from "react-dom";
import "react-virtualized/styles.css"; // only needs to be imported once
import faker from "faker";
import Demo from "./Demo";

// Table data as an array of objects
const list = new Array(100).fill(true).map(() => ({
  name: faker.name.findName(),
  description: faker.name.jobTitle(),
  location: faker.address.city()
}));

ReactDOM.render(<Demo list={list} />, document.getElementById("root"));
