import React, { useState } from "react";
import Todos from "./Todos";

function Todo() {
  const [fooDoneDone, setFooDoneDone] = useState("");
  const [fooDelete, setFooDelete] = useState();

  return (
    <React.Fragment>
      <td style={{ width: 10 }} className="text-center"></td>
      <td style={{ width: 15 }} className="text-center">
        <input
          type="checkbox"
          defaultChecked={Todos.completed}
          onChange={() => fooDoneDone(Todo)}
        />
      </td>
      <td></td>
      <td style={{ width: 100 }} className="text-center">
        <button
          onClick={() => fooDelete(Todos.id)}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      </td>
    </React.Fragment>
  );

  {
    if (Todos.completed) return <s>{Todos.title}</s>;
    else return Todos.title;
  }
}

export default Todo;
