import ToDoPage from "./pages/ToDoPage";
import { mockUsers } from "./mockData";

function App() {
  return <ToDoPage user={mockUsers} />;
}

export default App;
