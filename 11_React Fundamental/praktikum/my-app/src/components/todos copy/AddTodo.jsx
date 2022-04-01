import React, { useState } from "react";

function AddTodo() {
  const [defaultValue, setDefaultValue] = useState("");
  const [fooAddTodo, setFooAddTodo] = useState("");

  const handleChange = (e) => {
    //Updating local component state
    setDefaultValue({
      value: e.target.value,
    });
  };

  const clearInput = () => {
    //Clear existing value in input
    document.getElementById("todoTitle").value = "";

    //Updating local component state
    setDefaultValue({ value: "" });
  };

  const addTodo = () => {
    clearInput();
  };

  return (
    <div>
      <input
        type="text"
        className="form-control"
        id="todoTitle"
        placeholder="ToDo"
        onChange={handleChange}
      />
      <div className="input-group-append">
        <button
          onClick={addTodo}
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

export default AddTodo;
