import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import GistsPage from "./Gists";
import OwnerProfilePage from "./OwnerProfile";

function Index() {
  const match = useRouteMatch();
  const url = `${match.url}/profile`;
  console.log(url);

  return (
    <div>
      <Switch>
        <Route exact path={match.url}>
          kalo
          <GistsPage />
        </Route>
        <Route path={`${match.url}profile`}>
          <OwnerProfilePage />
        </Route>
      </Switch>
    </div>
  );
}

export default Index;
