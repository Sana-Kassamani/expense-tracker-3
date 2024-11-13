import "./styles/App.css";
import Login from "./pages/Login";

import { Routes, Route, useLocation } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/*" element={<h1>Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
