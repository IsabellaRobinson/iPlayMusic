
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
import ErrorBoundary from "./components/ErrorBoundary";




function App() {

  var tokenState = useState(null);

  return (
    <ErrorBoundary>

      <TokenContext.Provider value={tokenState}>
        <Router>
  
          <StartUpCard path="/" />
          <LoginPg default/>
          <Callback path ="/callback"/>
          <Walktrough path="/Walktrough"/>
          <WalktroughPg2 path="/Walktrough2"/>
          <WalktroughPg3 path ="/Walktrough3"/>
          <FeaturedPg path="/Featured"/>
          <CategoriesPg path = "/Categories"/>
  
         </Router>
      </TokenContext.Provider>

      </ErrorBoundary>
    );
  }

export default App;