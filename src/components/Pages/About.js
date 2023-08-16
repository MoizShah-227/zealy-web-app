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

    <div className='row mt-5 pb-5'>
        <div className='col-lg-6 col-md-12'>
        <div className='aboutlog-header pb-5 mx-5'>
            <h5 className='text-left mt-3 mx-3'>QUESTS</h5>
            <h2 className='mt-3 text-left mx-3'>The ultimate community experience</h2>
            <p className='mt-4 text-left'>We got you covered. With bite-sized tasks it’s easy to get started, and for anyone to provide value. To create them is easy too - select from a variation of battle-tested templates!</p>
        </div>
        </div>
        <div className='col-lg-6 col-md-12  right'><img src='https://zealy.io/nstatic/about/quests.webp'/></div>
    </div>

    <div className='row mt-5 pb-5'>
        <div className='col-lg-6 col-md-12 '>
        <div className='aboutlog-header pb-5 mx-5'>
            <h5 className='text-left mt-3 mx-3'>SPRINT</h5>
            <h2 className='mt-3 text-left mx-3'>Autopilot on</h2>
            <p className='mt-4 text-left'>Bring back momentum and keep the contribution fun with community sprints. Whether you launch a new feature, organize an event, or sell digital assets, getting community engagement is a snap with periodic leaderboard rewards.</p>
        </div>
        </div>
        <div className='col-lg-6 col-md-12  right'><img src='https://zealy.io/nstatic/about/sprint.webp'/></div>
    </div>

    <div className='row mt-5 pb-5'>
        <div className='col-lg-6 col-md-12 '>
        <div className='aboutlog-header pb-5 mx-5'>
            <h5 className='text-left mt-3 mx-3'>ANALYTICS & CRM</h5>
            <h2 className='mt-3 text-left mx-3'>Get a 360° view of your<br/>community</h2>
            <p className='mt-4 text-left'>Great communities are built by teams who know their members. Make data-driven decisions to improve your community and grow your business. Detect superstars. Segment your users based on on-chain and off-chain data. Enable personalized, consistent, and real-time community members' experiences.</p>
        </div>
        </div>
        <div className='col-lg-6 col-md-12  right'><img src='https://zealy.io/nstatic/about/analytics.webp  '/></div>
    </div>


    <Footer/>
    {/* THESE IS END */}
    </div>
    )
}

export default About;
