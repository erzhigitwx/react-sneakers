import React from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "./routes";

const Layout = function () {
  return (
    <Routes>
      {routes.map(({ path, element }) => (
        <Route path={path} element={element} key={path}/>
      ))}
    </Routes>
  );
};

export default Layout;
