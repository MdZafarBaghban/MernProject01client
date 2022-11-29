import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from 'react-router-dom';
import logo from '../components/images/zafytech.gif';
import {UserContext} from '../App';

export const Navbar = () => {
  const {state, dispatch} = useContext(UserContext);

  const RenderMenu = () => {
    if(state){
      return (
        <>
                    <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" to="/contact">Contact</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" to="/signup">Registration</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" to="/logout">Logout</NavLink>
                        </li>
                    </ul>
        </>
      )
    }else{
      return (
        <>
                    <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" to="/contact">Contact</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" to="/login">Login</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" to="/signup">Registration</NavLink>
                        </li>
                    </ul>
        </>
      )
    }
  }


  return (
    <>
            <nav className="navbar navbar-expand-lg bg-dark nav navbar-light text-white">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" href="http://www.google.com"><img className='img-fluid w-50' src={logo} alt='Zafy Logo' /></NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <RenderMenu />
                    </div>
                </div>
            </nav>
    </>
  );
}

export default Navbar;













/*
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from 'react-router-dom';
import logo from '../components/images/zafytech.gif';

export const Navbar = () => {
  return (
    <>
            <nav className="navbar navbar-expand-lg bg-dark nav navbar-light text-white">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" href="http://www.google.com"><img className='img-fluid w-50' src={logo} alt='Zafy Logo' /></NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" to="/contact">Contact</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" to="/login">Login</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" to="/signup">Registration</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" to="/logout">Logout</NavLink>
                        </li>{/* creating Logout Button router */
                        /* <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                        </li> 
                        </ul>*/
                        /* <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form> 
                        </div>
                    </div>
                </nav>
        </>
      );
    }
    
    export default Navbar;
*/