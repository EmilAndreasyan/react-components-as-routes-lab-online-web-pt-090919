import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      {/*{code here}*/}
      <NavLink to="/" exact activeStyle={{background: 'darkblue'}}>Home</NavLink>
      <NavLink to="/movies" exact activeStyle={{background: 'darkblue'}}>Movies</NavLink>
      <NavLink to="/directors" exact activeStyle={{background: 'darkblue'}}>Directors</NavLink>
      <NavLink to="/actors" exact activeStyle={{background: 'darkblue'}}>Actors</NavLink>
      <NavLink to="/"  activeStyle={{background: 'darkblue'}}>Home</NavLink>
      <NavLink to="/movies" activeStyle={{background: 'darkblue'}}>Movies</NavLink>
      <NavLink to="/directors" activeStyle={{background: 'darkblue'}}>Directors</NavLink>
      <NavLink to="actors" activeStyle={{background: 'darkblue'}}>Actors</NavLink>
      <NavLink to="/" activeStyle={{background: 'darkblue'}}/>
      <NavLink to="/movies" activeStyle={{background: 'darkblue'}}/>
      <NavLink to="/directors" activeStyle={{background: 'darkblue'}}/>
      <NavLink to="actors" activeStyle={{background: 'darkblue'}}/>
    </div>
  );
};

export default NavBar;
