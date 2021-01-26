import React from "react";
import './App.css';
import { Router } from "@reach/router";
import StartUpCard from "./pages/StartUpPage";
import Walktrough  from "./pages/Walktrough_page1";
import Walktrough_Pg2 from "./pages/Walktrough_page2";
import Walktrough_pg3 from "./pages/Walkthrough_page3";


function App() {
  return (

    <Router>
      <StartUpCard path="/" />
      <Walktrough path="/Walktrough"/>
      <Walktrough_Pg2 path="/Walktrough2"/>
      <Walktrough_pg3 path ="/Walktrough3"/>

    </Router>
    
  );
}

export default App;