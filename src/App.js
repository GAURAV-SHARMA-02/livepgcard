import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./Home";
import Next from './nextpage/Next';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
 
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/Home">
              <Home />
            </Route>
            <Route path="/Next">
              <Next />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
