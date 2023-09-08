import React from "react";
import  HomePage from "./pages/HomePage";
import { LawyerDircectives } from "./pages/LawyerDirectives";
import { BrowserRouter, Routes, Route } from "react-router-dom";
export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/lawyer-directives" element={<LawyerDircectives />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
