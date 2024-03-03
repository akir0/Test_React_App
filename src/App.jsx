import React from "react";
import "./styles/App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
  Link,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/UI/Navbar/navbar";
import AppRouter from "./components/AppRouter";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRouter/>
    </BrowserRouter>
  );
}

export default App;
