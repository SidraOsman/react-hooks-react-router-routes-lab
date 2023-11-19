import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
  <nav className="navbar">
    <div>
    <NavLink to= "/">Home</NavLink>
    </div>
   <div> <NavLink to="/directors">Directors</NavLink>
   </div>
   <div>
    <NavLink to="/actors">Actors</NavLink>
    </div>
    <NavLink to="/movies">Movies</NavLink>
  </nav>
  )
}

export default NavBar;
