import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./views/homepage/Home";
import Sport from "./views/sport/Sport";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/sports" element={<Sport />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
