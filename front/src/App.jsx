import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./views/homepage/Home";
import Todos from "./components/Todos";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
