import React, { Component } from "react";

import Todo from "./Todo";
import AddTodo from "./AddTodo";

class Todos extends Component {
  //Component state with default values
  state = {
    addTodotitle: "",
    todos: [
      {
        id: 1,
        title: "Mengerjakan Exercise",
        completed: true,
      },
      {
        id: 2,
        title: "Mengerjakan Assigment",
        completed: false,
      },
    ],
  };

  //Local helper method to get date
  getTime() {
    let d = new Date();
    var n = d.getTime();
    return n;
  }

  //method called from Todo component
  handleDelete = (todo) => {
    const todos = this.state.todos.filter((t) => {
      return t.id !== todo;
    });
    this.setState({ todos });
  };

  handeCompleted = (todo) => {
    const todos = [...this.state.todos];
    todos.map((t) => {
      if (t.id === todo.id) {
        t.completed = !t.completed;
      }
      return t;
    });
    this.setState({ todos });
  };

  //method called from AddTodo component
  addNewTodo = (title) => {
    if (title) {
      const todos = [...this.state.todos];
      todos.push({
        id: this.getTime(),
        title: title,
        completed: false,
      });
      this.setState({ addTodotitle: "", todos });
    } else {
      console.log("Please Add Todo Text");
    }
  };

  render() {
    return (
      <table className="table">
        <tbody>
          <tr>
            <td colSpan="4" className="text-center">
              <AddTodo
                fooAddTodo={this.addNewTodo}
                addTodotitle={this.state.addTodotitle}
              />
            </td>
          </tr>
          {this.state.todos.map((todo, index) => (
            <tr key={todo.id}>
              <Todo
                todo={todo}
                fooDelete={this.handleDelete}
                fooDoneDone={this.handeCompleted}
              />
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default Todos;
