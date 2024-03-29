import React, {Suspense} from "react";
import {BrowserRouter} from "react-router-dom";
import {Layout} from "../layouts/Layout";
import {flattenedRoutes} from "./index";

const Routes = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div/>}>
        <Layout routes={flattenedRoutes}/>
      </Suspense>
    </BrowserRouter>
  );
};

export default Routes;
