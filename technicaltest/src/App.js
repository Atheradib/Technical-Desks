import "./App.css";
import { NavBar } from "./components/NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./components/Home";
import { Registration } from "./components/Registration";
import { PopulationData } from "./components/PopulationData";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <div>
            <Route path="/populationData">
              <PopulationData />
            </Route>
            <Route path="/Home">
              <Home />
            </Route>
            <Route path="/Registration">
              <Registration />
            </Route>
          </div>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
