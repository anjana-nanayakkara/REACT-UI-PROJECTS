import React from 'react'
import { NavLink } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import PersonIcon from "@material-ui/icons/Person";
import CallIcon from "@material-ui/icons/Call";

const List = () => {
  return (
    <>
      <div>
        <nav
          className="navbar navbar-expand-lg bg-dark border-bottom border-bottom-dark"
          data-bs-theme="dark"
        >
          <div className="container-fluid ">
            <img
              style={{ width: "100px", height: "55px", margin: "10px" }}
              src="https://images.unsplash.com/photo-1496200186974-4293800e2c20?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bG9nb3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60"
            />

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <NavLink to="/" className="nav-link active">
                  Home
                </NavLink>
                <NavLink to="/about" className="nav-link active">
                  About
                </NavLink>
                <NavLink to="/services" className="nav-link active">
                  Services
                </NavLink>
                <NavLink to="/contact" className="nav-link active">
                  Contact
                </NavLink>
                <NavLink to="/policy" className="nav-link active">
                  Policy
                </NavLink>
              </div>
            </div>
          </div>
        </nav>
        <div className="icons">
          <SearchIcon />
          <PersonIcon />
          <CallIcon />
        </div>
      </div>
    </>
  );
}

export default List