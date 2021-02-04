
import { Router } from "@reach/router";
import { useState } from "react";

import './App.css';
import './fontello.svg';

import Callback from "./pages/Callback";
import TokenContext from "./TokenContext";

import StartUpCard from "./pages/StartUpPage";
import LoginPg from "./pages/Login";
import Walktrough  from "./pages/Walktrough_page1";
import WalktroughPg2 from "./pages/Walktrough_page2";
import WalktroughPg3 from "./pages/Walkthrough_page3";
import FeaturedPg from "./pages/Featured";
import CategoriesPg from "./pages/Categories";



function App() {

  var tokenState = useState(null);

  return (

    <TokenContext.Provider value={tokenState}>
      <Router>

        <StartUpCard path="/" />
        <LoginPg path="/Login"/>
        <Callback path ="/callback"/>
        <Walktrough path="/Walktrough"/>
        <WalktroughPg2 path="/Walktrough2"/>
        <WalktroughPg3 path ="/Walktrough3"/>
        <FeaturedPg path="/Featured"/>
        <CategoriesPg path = "/Categories"/>

       </Router>
    </TokenContext.Provider>

  );
}

export default App;