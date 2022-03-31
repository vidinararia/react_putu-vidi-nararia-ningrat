import React, { Component } from "react";

class AddTodo extends Component {
  state = {
    defaultValue: "",
    value: this.props.addTodotitle,
  };

  handleChange = (e) => {
    //Updating local component state
    this.setState({
      value: e.target.value,
    });
  };

  clearInput = () => {
    //Clear existing value in input
    document.getElementById("todoTitle").value = "";

    //Updating local component state
    this.setState({ value: "" });
  };

  addTodo = () => {
    //Call method reference in Todos component using props
    this.props.fooAddTodo(this.state.value);
    this.clearInput();
  };

  render() {
    return (
      <div>
        <input
          type="text"
          className="form-control"
          id="todoTitle"
          placeholder="ToDo"
          onChange={this.handleChange}
        />
        <div className="input-group-append">
          <button
            onClick={this.addTodo}
            className="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
          >
            Add New ToDo
          </button>
        </div>
      </div>
    );
  }
}

export default AddTodo;
