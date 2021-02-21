import React, { Component } from "react";
import Assignment from "./Assignment.js";

import "../../utilities.css";

class AssignmentBar extends Component {
  constructor(props) {
    super(props);
    // Initialize Default State
    this.state = {};
  }

  componentDidMount() {
    get("/api/assignments").then((assignments) => {
      this.setState({assignments: assignments})
    })
    // remember -- api calls go here!
  }

  render() {
    return (
      <>
        {this.state.assignments.map((assignment) => (
            <Assignment name={assignment.name} />
        ))}
      </>
    );
  }
}

export default AssignmentBar;
