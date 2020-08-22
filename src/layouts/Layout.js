import React from "react";
import {Route, Switch, useLocation} from "react-router-dom";
import GeneralLayout from "./GeneralLayout";
import ContentLayout from "./ContentLayout";
import BlogLayout from "./BlogLayout";

export const Layout = ({routes}) => {
  const location = useLocation();

  const Layout = (() => {
    if (location.pathname.match("^/blog")) {
      return BlogLayout;
    } else if (location.pathname.match("^/experience")) {
      return ContentLayout;
    } else {
      return GeneralLayout;
    }
  })();

  return (
    <Layout>
      <Switch>
        {routes.map(route => (
          !route.children && (
            <Route
              key={route.path}
              path={route.path}
              exact={route.exact}
              component={route.component}
            />
          )
        ))}
      </Switch>
    </Layout>
  )
};
