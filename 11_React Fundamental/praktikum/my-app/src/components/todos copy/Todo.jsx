import React, { Component } from "react";

class Todo extends Component {
  render() {
    return (
      <React.Fragment>
        <td style={{ width: 10 }} className="text-center">
          {this.props.index}
        </td>
        <td style={{ width: 15 }} className="text-center">
          <input
            type="checkbox"
            defaultChecked={this.props.todo.completed}
            onChange={() => this.props.fooDoneDone(this.props.todo)}
          />
        </td>
        <td>{this.renderTodo()}</td>
        <td style={{ width: 100 }} className="text-center">
          <button
            onClick={() => this.props.fooDelete(this.props.todo.id)}
            className="btn btn-danger btn-sm"
          >
            Delete
          </button>
        </td>
      </React.Fragment>
    );
  }

  renderTodo() {
    if (this.props.todo.completed) return <s>{this.props.todo.title}</s>;
    else return this.props.todo.title;
  }
}

export default Todo;
