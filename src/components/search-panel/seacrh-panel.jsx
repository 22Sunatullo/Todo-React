import React, { Component } from "react";
import "./search-panel.css";

export default class SearchPanel extends Component {
  state = {
    tern: "",
  };
  onSerchChange = (e)=>{
    const tern = e.target.value;
    this.setState({tern});
    this.props.onSerchChange(tern);

  }
  render() {
    return (
      <input
        type="search"
        className="form-control search-input"
        placeholder="search"
        value={this.state.tern}
        onChange={this.onSerchChange}
      />
    );
  }
}
