import React from "react";
// import { Link, BrowserRouter } from "react-router-dom";


// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const NavBar2 = () => {
    
  return (
    <nav className="navbar navbar-light bg-light">
    <a className="navbar-brand">Navbar</a>
    <form className="form-inline">
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Create Ticket</button>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Sign-Out</button>
    </form>
    </nav>
  );
}

export default NavBar2;