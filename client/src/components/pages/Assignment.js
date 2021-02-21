import React, { Component } from "react";


import "../../utilities.css";

class Assignment extends Component {
  constructor(props) {
    super(props);
    // Initialize Default State
    this.state = {};
  }

  componentDidMount() {
    // remember -- api calls go here!
  }

  render() {
    return (
      <>
        {this.props.name}
        <br />
      </>
    );
  }
}

export default Assignment;
