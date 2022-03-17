import Header from "./components/Header";
import ToDoList from "./components/ToDoList";

export default function ToDoPage({ user }) {
  return (
    <>
      <Header />
      {user.map((user) => (
        <ToDoList user={user} />
      ))}
    </>
  );
}
