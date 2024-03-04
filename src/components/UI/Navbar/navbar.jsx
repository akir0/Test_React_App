import React, { useContext } from 'react'
import {BrowserRouter as Router, Route, Routes, BrowserRouter, Link} from "react-router-dom";
import MyButton from '../button/MyButton';
import { AuthContext } from '../../../context';

const Navbar = () => {
  const {isAuth, setIsAuth} = useContext(AuthContext);
    return ( 
        <div className="navbar">
          <MyButton onClick={() => setIsAuth(false)}>Sign Out</MyButton>
      <div className="navbar__items">
        <Link to="/about">|About...|</Link>
        <Link to="/posts">|Post List|</Link>
        <Link to="/counter">|Counter|</Link>
      </div>
    </div>
     );
}
 
export default Navbar;