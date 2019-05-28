import React from "react";
import { Route, Switch, Router } from "react-router";
import { history } from "./store";
import Animals from "./pages/Animals";
import Animal from "./pages/Animal";
import Layout from "./layouts";

const App = () => (
  <Layout>
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Animals} />
        <Route exact path="/animal/:id" component={Animal} />
      </Switch>
    </Router>
  </Layout>
);

export default App;
