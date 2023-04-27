import React, { Component } from "react";
import "./item-add-form.css";
export class ItemAddForm extends Component {
  state = {
    label: "",
  };

  onLableChange = (e) => {
    this.setState({
      label: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addItem(this.state.label);
    this.setState({
      label: "",
    });
  };
  
  render() {
    return (
      <form className="item-add-form" onSubmit={this.onSubmit}>
        <input
          type="text"
          className="form-control"
          onChange={this.onLableChange}
          placeholder="What do you want"
          value={this.state.label}
        />
        <button className="btn btn-outline-secondary">Add</button>
      </form>
    );
  }
}
