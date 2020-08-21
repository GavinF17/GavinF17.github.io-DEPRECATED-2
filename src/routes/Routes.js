import React, {Suspense} from "react";
import {BrowserRouter, Switch} from "react-router-dom";
import {flattenedRoutes} from "./index";
import {Route} from "react-router-dom";

const GeneralLayout = React.lazy(() => import("../layouts/GeneralLayout"));

const Routes = () => {
  const Layout = (() => {
    return GeneralLayout;
  })();

  return (
    <BrowserRouter>
      <Suspense fallback={() => <div/>}>
        <Layout>
          <Switch>
            {flattenedRoutes.map(route => (
              !route.children && (
                <Route
                  path={route.path}
                  exact={route.exact}
                  component={route.component}
                />
              )
            ))}
          </Switch>
        </Layout>
      </Suspense>
    </BrowserRouter>
  );
};

export default Routes;
