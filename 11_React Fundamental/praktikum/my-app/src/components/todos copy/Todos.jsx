import React, { useState } from "react";

import Todo from "./Todo";
import AddTodo from "./AddTodo";

const todos = [
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
];

function Todos() {
  const [data, setData] = useState(todos);
  const [addTodotitle] = useState("");

  //Local helper method to get date
  function getTime() {
    let d = new Date();
    var n = d.getTime();
    return n;
  }

  //method called from Todo component
  const handleDelete = (todo) => {
    setData((todos) =>
      todos.filter((t) => {
        return t.id !== todo;
      })
    );
  };

  const handeCompleted = (todo) => {
    setData = [...todos];
    todos.map((t) => {
      if (t.id === todo.id) {
        t.completed = !t.completed;
      }
      return t;
    });
    setData({ todos });
  };

  //method called from AddTodo component
  const addNewTodo = (title) => {
    if (title) {
      setData = [...todos];
      todos.push({
        id: getTime(),
        title: title,
        completed: false,
      });
      setData({ addTodotitle: "", todos });
    } else {
      console.log("Please Add Todo Text");
    }
  };

  return (
    <table className="table">
      <tbody>
        <tr>
          <td colSpan="4" className="text-center">
            <AddTodo fooAddTodo={addNewTodo} addTodotitle={addTodotitle} />
          </td>
        </tr>
        {todos.map((todo, index) => (
          <tr key={todo.id}>
            <Todo
              todo={todo}
              fooDelete={handleDelete}
              fooDoneDone={handeCompleted}
            />
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Todos;
