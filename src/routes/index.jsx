import Layout from "components/layout";
import React from "react";
import { Route, Routes } from "react-router-dom";

import { routes } from "./helper";

const Routing = () => (
  <Routes>
    {routes.map(({ path, ele }) => (
      <Route path={path} element={<Layout>{ele}</Layout>} key={path} />
    ))}
  </Routes>
);

export default Routing;
