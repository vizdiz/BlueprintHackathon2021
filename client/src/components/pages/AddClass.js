import React, { Component } from "react";


import "../../utilities.css";
import { post } from "../../utilities";

class AddClass extends Component {
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
        <input type="text" value={this.state.content}
        onChange={(event) => {
            this.setState({content: event.target.value})
        }} />
        <button onClick={() => {
            post("/api/newclass", {className: this.state.className});
            this.setState({content: ""});
        }}>
            Add Class
        </button>
      </>
    );
  }
}

export default AddClass;
