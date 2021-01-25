import React from "react";
import './App.css';
import { Router } from "@reach/router";
import StartUpCard from "./pages/StartUpPage";
import Walktrough  from "./pages/WalktroughMenu";
import Walktrough_pg2 from "./pages/WalktroughMenu_page2";

function App() {
  return (

    <Router>
      <StartUpCard path="/" />
      <Walktrough path="/Walktrough"/>
      <Walktrough_pg2 path="/Walktrough2"/>

    </Router>
    
  );
}

export default App;