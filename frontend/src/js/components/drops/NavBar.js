import React from 'react';
import { Link } from 'react-router-dom';
import '../../../styles/navBar.css';

export const NavBar = props => {
  return (
    <nav className="primary">
      <div className="nav">
        <Link to="/">
          <div className="flex align">
            <div className="logo" /> <div>d r o p i n</div>
          </div>
        </Link>
      </div>
      <div className="nav">
        <Link to="/">Landing</Link>
        <Link to="/events">Events</Link>
        <Link to="/signin">Signin</Link>
      </div>
    </nav>
  );
};
