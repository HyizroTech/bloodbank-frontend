import "./App.css";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Layouts from "./Layouts";
import axios from "axios";
import Navbar from "./Components/Navbar/Navbar";

axios.defaults.baseURL = "http://localhost:8080/";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Layouts />
    </BrowserRouter>
  );
}

export default App;
