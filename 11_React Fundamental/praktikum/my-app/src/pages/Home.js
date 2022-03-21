import React from "react";
import ToDoList from "../components/ToDoList";

export default function Home({ user }) {
  return (
    <>
      <div className="home">
        {user.map((user) => (
          <ToDoList user={user} />
        ))}
      </div>
    </>
  );
}
