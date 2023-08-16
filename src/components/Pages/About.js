import React from 'react'
import '../../components_CSS/PagesCss/changeLog.css';
import '../../components_CSS/PagesCss/about.css';
import  Navbar  from '../Navbar';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Routes,
    Link
  } from "react-router-dom";
import Future from '../Future';
import Footer from '../Footer';
  
const About = () => {
  return (
    <div className='contain-components'>
    <Navbar/> 
    <div className='about center-item'>
        <div className='aboutlog-header pb-5'>
            <h5>WHAT WE DO</h5>
            <h1 className='mt-4' >ENGAGE, ANALYZE, AND <br/> SCALE YOUR COMMUNITY</h1>
            <p className='mt-4'>Zealy is the operating system for communities. We help you automate your entire workflow from onboarding to delegation. Let's build communities that are meaningful, joyful, and rewarding for <br/>everyone!</p>
        <Link to="/Login" ><button className='btn mt-5'> Try it for free <i class="bi bi-arrow-right"></i></button></Link>
        </div>  
    </div>
    <div >
    <img className='img-1' src='https://zealy.io/nstatic/about/preview.webp' alt='#'/>
    </div>
    
    <div className='about center-item'>
        <div className='aboutlog-header pb-5'>
            <h5>IN GOOD COMPANY</h5>
            <h1 className='mt-4' >Thousands of communities,<br/> millions of contributors</h1>
            <p className='mt-4'>Powering the world’s most successful communities, from startups to Fortune 500<br/> companies, in web3 and beyond</p>
        <Link to="/Login" ><button className='btn2 mt-5'> Read customer stories<i class="bi bi-arrow-right"></i></button></Link>
        </div>  
    </div>

    <div className='changeLog-section-2 center-item'>
        <div className='changelog-header'>
        
        </div>
    </div>



      
    {/* <Future/> */}
    {/* <Footer/> */}
    </div>
  )
}

export default About
