import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import GistsPage from "./Gists";

function Index() {
  const match = useRouteMatch();

  return (
    <div>
      <Switch>
        <Route exact path={match.url}>
          <GistsPage />
        </Route>
      </Switch>
    </div>
  );
}

export default Index;
