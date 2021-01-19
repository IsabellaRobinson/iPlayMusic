import React from "react";
import './App.css';
import { Router } from "@reach/router";
import StartUpCard from "./pages/StartUpPage";

function App() {
  return (

    <Router>
      <StartUpCard path="/" />
    </Router>
    
  );
}

export default App;