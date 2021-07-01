import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import LandingPages from "./pages/LandingPages.js";
import About from "./pages/About.js";
import Help from "./pages/Help.js";
import News from "./pages/News.js";
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={LandingPages}></Route>
          <Route exact path="/about" component={About}></Route>
          <Route exact path="/help" component={Help}></Route>
          <Route exact path="/news" component={News}></Route>
        </Switch>
      
      </div>
      
    </Router>
  );
}


export default App;