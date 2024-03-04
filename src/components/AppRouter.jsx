import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { AuthContext } from "../context";
import { publicRoutes, privateRoutes } from "../router/Routes";

const AppRouter = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    return (
    isAuth 
    ?
    <Routes>
    {privateRoutes.map(route => (
      <Route
        Component={route.component}
        path={route.path}
        exact={route.exact}
        key={route.path}
      />
    ))}
    <Route path="*" element={<Navigate to="/posts" replace />} />
  </Routes>
    : <Routes>
    {publicRoutes.map((route) => (
      <Route
        Component={route.component}
        path={route.path}
        exact={route.exact}
        key={route.path}
      />
    ))}
    <Route path="*" element={<Navigate to="/login" replace />} />
  </Routes>
    )
};

export default AppRouter;
