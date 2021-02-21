import React, { Component } from "react";
import Classroom from "./Class.js";
import AddClass from "./AddClass.js"

import "../../utilities.css";
import { get } from "../../utilities";

class ClassBar extends Component {
  constructor(props) {
    super(props);
    // Initialize Default State
    this.state = {};
  }

  componentDidMount() {
      get("/api/classes").then((classes) => {
          this.setState({classes: classes})
      })
    // remember -- api calls go here!
  }

  render() {
    return (
      <>
        {this.state.classes.map((classroom) => (
            <Classroom name={classroom.name} />
        ))}
        <AddClass />
      </>
    );
  }
}

export default ClassBar;
