import React from 'react'
import '../../components_CSS/PagesCss/changeLog.css';
import  Navbar  from '../Navbar';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Routes,
    Link
  } from "react-router-dom";
  
const ChangeLog = () => {
  return (
    <>
    <Navbar/> 
    <div className='changeLog'>
        <div className='changelog-header center-items'>
            <h5>CHANGELOG</h5>
            <h1>WHAT'S NEW</h1>
            <p>New updates and improvements to Zealy</p>
            <ul>
                <li><Link to=""><i class="bi bi-twitter"></i>Follow us on Twitter</Link></li>
                <li><Link to="">Read our docs</Link></li>
            </ul>
        </div>
    </div>
    </>
  )
}

export default ChangeLog
