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
import About from "./pages/About";
import Posts from "./pages/Posts";
import Navbar from "./components/UI/Navbar/navbar";
import CounterPage from "./pages/CounterPage";
import Error from "./pages/Error";
import PostIdPage from "./pages/PostIdPage";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/about" element={<About />}></Route>
        <Route exact path="/posts" element={<Posts />}></Route>
        <Route path="/counter" element={<CounterPage />}></Route>
        <Route path="/error" element={<Error />}></Route>
        <Route path="*" element={<Navigate to="/error" replace />} />
        <Route exact path="/posts/:id" element={<PostIdPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
