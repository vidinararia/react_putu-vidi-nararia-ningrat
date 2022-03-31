import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutApp from "./pages/AboutApp";
import AboutAuthor from "./pages/AboutAuthor";
import Navbar from "./components/Navbar";
import NotFound from "./pages/NotFound";
import Form from "./pages/Form";
import TodoFunction from "./pages/TodoFunction";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/AboutApp" element={<AboutApp />} />
          <Route path="/AboutAuthor" element={<AboutAuthor />} />
          <Route path="/Todos" element={<TodoFunction />} />
          <Route path="/Form" element={<Form />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
