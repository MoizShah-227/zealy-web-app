import React from 'react';
import Logo from '../Imges/Logo2.svg';
import Login from './Login';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Routes,
    Link
  } from "react-router-dom";
  
const Navbar = () => {
    // ONCLICK FUNCTIONS
  return (
    <div className='nav nav-components-wrapper'>
        <nav className="navbar navbar-expand-lg nav ">
        <Link className="navbar-Logo"  to="/"><img src={Logo}/></Link>

        <button className="navbar-toggler bg-light" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">       
            <span className="navbar-toggler-icon "></span>
        </button>

        <div className="collapse first-nav navbar-collapse navbarNavDropdown" id="">
            <ul className="navbar-nav">

            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle " href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Resources
                </a>

                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                
                <div className="row">
                    <a className="col-6 res-img" href="#"><h6 className='mt-3'>Community</h6>
                    <p>Join the fun</p>
                    </a>                   
                    <div className="col-6 p-0 m-0">
                    <a className="dropdown-item" href="#"><h6>Help Center</h6><p>Answer to your Questions</p></a>
                    <a className="dropdown-item" href="#"><h6>Events</h6><p>Join us for a live event</p></a>
                    <a className="dropdown-item" href="#"><h6>Blog</h6><p>Latest on web3 community</p></a>
                
                    </div>
                </div>
                </div>
            </li>

            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Company
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a className="dropdown-item" href="#"><h6>About</h6><p>Learn more about Zealy</p></a>
                <a className="dropdown-item" href="#"><h6>Careers</h6><p>Join our Team</p></a>
                <a className="dropdown-item" href="#"><h6>Media Kit</h6><p>Logos and assets</p></a>
                </div>
            </li>

            <li className="nav-item active">
                <Link className="nav-link link" to="/ChangeLog">ChangeLog <span className="sr-only">(current)</span></Link>
            </li>
            </ul>
        </div>

                    

        <div className="collapse navbar-collapse navbarNavDropdown">
        <ul className="second-ul">
                    <li className="nav-item active">
                    <Link className=" nav-item dropdown-item btn1" to="/Login">Create a community</Link>
                    </li>
                    <li>
                        <button className="btn btn1 login" ><Link to="/Login" style={{color:"white"}}>Login</Link></button>
                    </li>
                    <li>
                        <button className="btn btn2" ><Link to='/Login' style={{color:"Black",textdecoration:"None"}}>Create a Account</Link></button>
                    </li>
                </ul>
        </div>
        </nav>          
    </div>
    
  )
}

export default Navbar
