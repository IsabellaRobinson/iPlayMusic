import React from "react";
import './App.css';
import { Router } from "@reach/router";
import StartUpCard from "./pages/StartUpPage";
import WalktroughMenuCard from "./components/WalktroughMenu";

function App() {
  return (

    <Router>
      <StartUpCard path="/" />
      <WalktroughMenuCard path="/Walktrough"/>
    </Router>
    
  );
}

export default App;