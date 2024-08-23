import React from "react";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import Nosotros from "./components/Nosotros";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<Nosotros />} />
      </Routes>
    </div>
  );
}

export default App;
