import React, { Component } from "react";


class UserInfo extends Component {
    constructor() {
      super();
      this.state = {
        name: "Kyle Horn",
        profession: "Web Programmer",
      };
    }
  
    // Function to generate a random lucky number
    getLuckyNumber = () => Math.floor(Math.random() * 10) + 1;

    render() {
      return (
        <div>
          <h2>User Information</h2>
          <p>Name: {this.state.name}</p>
          <p>Profession: {this.state.profession}</p>
          <p>Your lucky number is: {this.getLuckyNumber()}</p>
          {/* Button calls handleClick passed as a prop Task 4*/}
          <button onClick={this.props.handleClick}>Show Alert</button>
        </div>
    );
  }
}

export default UserInfo;
