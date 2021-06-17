import "@patternfly/patternfly/base/patternfly-shield-inheritable.css";
import "@patternfly/patternfly/patternfly.min.css";
import "@patternfly/patternfly/utilities/Accessibility/accessibility.css";
import "@patternfly/react-catalog-view-extension/dist/css/react-catalog-view-extension.css";
import "@patternfly/quickstarts/dist/quickstarts.css";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './i18n/i18n';
import App from "./App";
import {
  QuickStartCatalogPage,
  QuickStart,
  LoadingBox,
} from "@patternfly/quickstarts";
import { Home } from "./Home";
import { CustomCatalog } from "./CustomCatalog";

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/">
        <App>
          <Home />
        </App>
      </Route>
      <Route exact path="/quickstarts">
        <App showCardFooters={false}>
          <QuickStartCatalogPage
            showFilter
            hint="Learn how to create, import, and run applications with step-by-step instructions and tasks."
          />
        </App>
      </Route>
      <Route exact path="/custom-catalog">
        <App showCardFooters>
          <CustomCatalog />
        </App>
      </Route>
    </Switch>
  </Router>,
  document.getElementById("root")
);
