import React from 'react'
import {BrowserRouter as Router, Route, Routes, BrowserRouter, Link} from "react-router-dom";

const Navbar = () => {
    return ( 
        <div className="navbar">
      <div className="navbar__items">
        <Link to="/about">|About...|</Link>
        <Link to="/posts">|Post List|</Link>
        <Link to="/counter">|Counter|</Link>
      </div>
    </div>
     );
}
 
export default Navbar;