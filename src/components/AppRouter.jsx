import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { routes } from "../router/Routes";

const AppRouter = () => {
  return (
    <Routes>
      {routes.map((route) => (
        <Route
          Component={route.component}
          path={route.path}
          exact={route.exact}
        />
      ))}
      <Route path="*" element={<Navigate to="/posts" replace />} />
    </Routes>
  );
};

export default AppRouter;
