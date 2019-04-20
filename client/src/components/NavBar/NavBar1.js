import React from "react";
import './Style.css'
// import { Link, BrowserRouter } from "react-router-dom";


// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const NavBar1 = () => {
    
  return (
    <nav className="navbar navbar-light bg-info">
    <div className="navbar-brand">FIXTIX</div>
    <form className="form-inline">
      <button className="btn btn-success my-2 my-sm-0 mr-2" type="submit">Sign-In</button>
      <button className="btn btn-secondary my-2 my-sm-0" type="submit">Reset Password</button>
    </form>
    </nav>
  );
}

export default NavBar1;