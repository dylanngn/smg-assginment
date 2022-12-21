import React from "react";
import {
  BrowserRouter as ReactRouter,
  Switch,
  Route,
} from "react-router-dom";

import HomePage from "./containers/HomePage";
import DetailsPage from "./containers/DetailsPage";
import NotFoundPage from "./containers/NotFoundPage";

import ScrollToTop from "./components/ScrollToTop";


const Router = () => (
    <ReactRouter>
       <ScrollToTop />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/details/:listingId">
          <DetailsPage />
        </Route>
        <Route exact path="/404">
          <NotFoundPage />
        </Route>
      </Switch>
    </ReactRouter>
);

export default Router;
