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
    <div className='contain-components'>
    <Navbar/> 
    <div className='changeLog center-item'>
        <div className='changelog-header pb-5'>
            <h5>CHANGELOG</h5>
            <h1>WHAT'S NEW</h1>
            <p>New updates and improvements to Zealy</p>
            <ul>
                <li><Link className="link" to=""><i class="bi bi-twitter"></i>Follow us on Twitter</Link></li>
                <li><Link className="link" to="">Read our docs</Link></li>
            </ul>
        </div>  
    </div>
    
    {/* THESE IS UNDERLINE */}
    <div>
    <hr className=' mt-5' style={{background:'#464646'}}/>
    <p className='mt-5'>Jul 21,2023</p>
    </div>    
    

    <div className='changeLog-section-2 center-item'>
        <div className='changelog-header'>
        <img src='https://crew3-production.s3.eu-west-3.amazonaws.com/public/changelog/ai-summary.jpg' alt='#'/>
        <div className='texts'>
        <h1 className='text-left mt-4 mx-2'>AI response summary</h1>
        <p className='text-left'>Some of you have mentioned the difficulty of getting an overview of feedback as your community grows. We've heard you and are excited to introduce our new AI response summary feature! Get actionable insights from your community members within seconds.</p>
        <br/>
        <p className='text-left'>Available to premium communities!</p>
        </div>
        
        <video className='video mt-3'  autoPlay muted loop>
            <source src='https://crew3-production.s3.eu-west-3.amazonaws.com/public/changelog/ai-summary.mp4'
            type='video/mp4'/>
        </video>

        <div className='texts'>
        <h1 className='text-left mt-4 mx-2'>Configure invites condition</h1>
        <p className='text-left'>We've listened to your feedback and made a wave of upgrades to our invite system. Say goodbye to the one-quest limit. With our new system, you get to define the XP needed for an invite to count, giving you more control and ensuring quality over quantity.</p>
        <br/>
        <p className='text-left'>Ever wondered about the status of your invites or wanted to see the users someone has invited? Now, you can inspect all invites directly from a user's profile, and easily distinguish between those that have been counted, not counted, or even consumed.</p>
        <br/>

        <p className='text-left'>And here's the best part - our new system is fully compatible with recurring quests! Now, claiming will consume the invite, paving the way for seamless recurring quests. Dive into the world of our improved invites system and experience quality, clarity, and control like never before.
        </p>
        <br/>
        <p className='text-left'>Available to everyone from community settings!</p>

        <img src='https://crew3-production.s3.eu-west-3.amazonaws.com/public/changelog/invite-preview.webp' alt='#'/>
        <h1 className='text-left mt-4 mx-2'>Improved sidebars</h1>
        <p className='text-left'>We've upgraded the community bar to make it easy to find and reorder your communities. You can now search for a community, and drag and drop to reorder them. You can now access community information from the sidebar on any page as well.</p>        
        </div>
        
        <video className='video mt-3'  autoPlay muted loop>
            <   source src='https://crew3-production.s3.eu-west-3.amazonaws.com/public/changelog/communitybar.mp4'
            type='video/mp4'/>
        </video>

        <div className='texts  contain-list'>
        <h1 className='text-left mt-4 mx-2'>Other fixes & improvements</h1>
        <p className='text-left'><a className='px-2 mt-1' style={{color:"#f65cb6"}}>*</a>Fixing NFT reward status when they are all claimed</p>
        <p className='text-left'><a className='px-2 mt-1' style={{color:"#f65cb6"}}>*</a>Fix bug when deleting user when user name is not set</p>
        <p className='text-left'><a className='px-2 mt-1' style={{color:"#f65cb6"}}>*</a>Fix updating Twitter followers count on communities</p>
        </div>

        </div>
    </div>
    </div>
  )
}

export default ChangeLog
