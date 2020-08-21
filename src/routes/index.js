import React from "react";

const HomePage = React.lazy(() => import("../pages/Homepage"))

const routes = {
  children: [
    {
      path: "/",
      exact: true,
      component: HomePage
    }
  ]
}

const flatten = routes => {
  let flatRoutes = [];

  routes = routes || [];
  routes.forEach(item => {
    flatRoutes.push(item);

    if (typeof item.children !== "undefined") {
      flatRoutes = [...flatRoutes, ...flatten(item.children)];
    }
  })

  return flatRoutes;
}

const flattenedRoutes = flatten([routes]);

export {routes, flattenedRoutes};
