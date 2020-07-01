import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GistsPage from "./components/gistsPage/Index";
import DeveloperPage from "./components/Developer";

function App() {
  return (
    <Router>
      <div className="d-flex d-row">
        <div style={{ height: "100vh", width: "75px" }}>TES</div>
        <div>
          <Switch>
            {/* kalau route parent, ngga boleh pakai exact. kalau gtu ntar ngga bsa childnya. */}
            {/* exact harus paling atas */}

            <Route exact path="/developer">
              <DeveloperPage />
            </Route>

            <Route path="/">
              <GistsPage />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
