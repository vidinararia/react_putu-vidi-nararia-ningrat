import React from "react";
import Todos from "../components/Todos";

function Home() {
  return (
    <div className="container">
      <h1 className="text-center">todos</h1>
      <Todos />
    </div>
  );
}

export default Home;
