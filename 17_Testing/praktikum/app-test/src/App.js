import logo from "./logo.svg";
import "./App.css";
import FormCoding from "./assets/FormCoding/FormCoding.jsx";
import Search from "./assets/Search/Search.jsx";
import { useInputValue } from "./assets/useInputValue/useInputValue.js";

function App() {
  return (
    <div className="App">
      <FormCoding />
      {/* <Search /> */}
    </div>
  );
}

export default App;
