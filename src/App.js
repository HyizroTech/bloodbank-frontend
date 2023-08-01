import "./App.css";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Layouts from "./Layouts";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:8080/";

function App() {
  return (
    <BrowserRouter>
      <Layouts />
    </BrowserRouter>
  );
}

export default App;
