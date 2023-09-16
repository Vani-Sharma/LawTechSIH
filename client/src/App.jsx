import React from "react";
import HomePage from "./pages/HomePage";
import { ChatComponent } from "./features/chat/ChatComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/chat" element={<ChatComponent />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
