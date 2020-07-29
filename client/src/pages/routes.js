import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import AuthPage from "./AuthPage";
import MainPage from "./MainPage";
import CreateHero from "./CreateHero";
import Vault from "./Vault";

export const useRoutes = (isAuthenticated) => {

  if (isAuthenticated) {
    return (
      <Switch>
        <Route path='/' exact>
          <MainPage />
        </Route>

        <Route path='/create' >
          <CreateHero />
        </Route>

        <Route path='/vault/:id' exact>
          <Vault />
        </Route>

        <Redirect to='/create' />
      </Switch>
    );
  }

  return (
    <Switch>
      <Route path='/' exact>
        <MainPage />
      </Route>
      <Route path='/auth' exact>
        <AuthPage />
      </Route>
      <Route path='/create' >
        <CreateHero />
      </Route>
      <Redirect to='/' />
    </Switch>
  );
};
