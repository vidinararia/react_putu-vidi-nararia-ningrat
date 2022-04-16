import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Git from "./pages/Git";
import Uiux from "./pages/Uiux";
import Figma from "./pages/Figma";
import Html from "./pages/Html";
import Css from "./pages/Css";
import Bootstrap from "./pages/Bootstrap";
import Javascript from "./pages/Javascript";
import Cleancode from "./pages/Cleancode";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Git />} />
          <Route path="/uiux" element={<Uiux />} />
          <Route path="/figma" element={<Figma />} />
          <Route path="/html" element={<Html />} />
          <Route path="/css" element={<Css />} />
          <Route path="/bootstrap" element={<Bootstrap />} />
          <Route path="/javascriptrefresment" element={<Javascript />} />
          <Route path="/cleancode" element={<Cleancode />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
