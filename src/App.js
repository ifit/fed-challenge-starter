import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";

import Cards from "./Pages/challenge.js";


function App() {
  return (
    <Router basename="/">
      <div>
        
       
          <Route exact path="/" component={Cards}/>

        
      </div>
      
    </Router>
    
  );
}

export default App;
