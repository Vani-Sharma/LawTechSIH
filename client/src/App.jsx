import React from "react";
import HomePage from "./pages/HomePage";
import { ChatComponent } from "./features/chat/ChatComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LawyerDirectory } from "./features/LawyersList/LawyersDirectory";
export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/chat" element={<ChatComponent />} />
          <Route path="/lawyers" element={<LawyerDirectory />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
