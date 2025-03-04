import React from "react";

// Greeting component now accepts a username prop TASK 1
const Greeting = ({ username }) => {
  return <h1>Hello, {username}!</h1>;
};

export default Greeting;
