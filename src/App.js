import "./App.css";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Layouts from "./Layouts";

function App() {
  return (
    <BrowserRouter>
      <Layouts />
    </BrowserRouter>
  );
}

export default App;
