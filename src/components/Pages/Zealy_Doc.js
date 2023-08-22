import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Routes,
    Link
  } from "react-router-dom";
  
import '../../components_CSS/PagesCss/zealy_Doc.css'
import What_is_Zealy from './What_is_Zealy';
const Zealy_Doc = () => {
  return (
<div className='doc-container bg-light'>
<div className='zealy_doc_Body '>   
        {/* NAVGATION-BAR */}
        <nav className="navbar navbar-expand-lg navbar-light ">
      <div className="container-fluid">
     <Link to="/"><img src='https://1505557047-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FQvTIrayABkLCC3fDPMH6%2Ficon%2FbzQXuJsxksnxGJGrNFs5%2FZealy_Logo_Mark_BW.svg?alt=media&token=d280612b-5371-4741-80dd-afde0212bece' width={40}/></Link>   
    <a className="navbar-brand mx-2 logo-heading">Zealy Documentation</a>
  
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button> 
  
    <div className="collapse navbar-collapse mx-5 px-5" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item1">
          <a className="nav-link active" aria-current="page" href="#" style={{color:"#db58ab"}}>Create my community</a>
        </li>
        <li className="nav-item1">
          <a className="nav-link" href="#" style={{color:"#db58ab"}}>Contact support</a>
        </li>
    
      </ul>

        <div className="doc-nav-input input-group mx-5" >
            <input type="text" className="form-control" placeholder="Search" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
            </div>
    </div>
  </div>
</nav>



<div className='doc-side-bar' >
    <div className='doc-side-bar-data m-3 '>
        <Link to="/Zealy_Doc/what_is_zealy"><h5>😄&nbsp;What is Zealy?</h5></Link>

      <h4 className='mt-4'>GETTING STARTED</h4>
       <div className='contain'>
       <Link to="/Zealy_Doc/what_is_zealy/Create_your_community" >👏 Create your community</Link>
        <Link to="/Zealy_Doc/what_is_zealy/CreateYourFirstQuest">🛬Create your first quest</Link>
       </div>

       <h4 className='mt-4'>GUIDES</h4>
       <div className='contain'>
        <Link to="/Zealy_Doc/what_is_zealy/DocHome" className='mx-1'>🏠 Home</Link>
        
        <div class="btn-group dropdown">
          <Link to="/Zealy_Doc/what_is_zealy/Quests">🤑Quest</Link>
          <button type="button" class="dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <span class="sr-only">Toggle Dropright</span>
          </button>
          <div class="dropdown-menu">
            <Link to="/Zealy_Doc/what_is_zealy/Quests/UnlockableQuests" className='extend-bar'>Unlockable quest</Link>
          </div>
        </div>

        <div class="btn-group dropdown">
          <Link to="/Zealy_Doc/what_is_zealy/LeaderBoard">🏆 Leaderboard</Link>
          <button type="button" class="dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <span class="sr-only">Toggle Dropright</span>
          </button>
          <div class="dropdown-menu">
            <Link to="/Zealy_Doc/what_is_zealy/LeaderBoard/XPTable" className='extend-bar'>XP table</Link>
            <Link to="/Zealy_Doc/what_is_zealy/LeaderBoard/OrganizeSprint" className='extend-bar'>Organize a sprint</Link>
          </div>
        </div>

        <div class="btn-group dropdown">
          <Link to="/Zealy_Doc/what_is_zealy/Reviews">👀 Reviews</Link>
          <button type="button" class="dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <span class="sr-only">Toggle Dropright</span>
          </button>
          <div class="dropdown-menu">
            <Link to="/Zealy_Doc/what_is_zealy/Reviews/ExportingHistory" className='extend-bar'>Exporting the history</Link>
          </div>
        </div>

        <div class="btn-group dropdown">
          <Link to="/Zealy_Doc/what_is_zealy/Integrations">🔌 Integrations</Link>
          <button type="button" class="dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <span class="sr-only">Toggle Dropright</span>
          </button>
          <div class="dropdown-menu">
            <Link to="/Zealy_Doc/what_is_zealy/Integrations/DiscordActivation" className='extend-bar'>Disord bot activation</Link>
            <Link to="" className='extend-bar'>Disord bots commands</Link>
          </div>
        </div>

        <a className='mx-1'>✨ Roles</a>
        <a className='mx-1'>📊 Analytics</a>
        <a className='mx-1'>🦸‍♂️ Members</a>

        <div class="btn-group dropdown">
          <a>💻 API</a>
          <button type="button" class="dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <span class="sr-only">Toggle Dropright</span>
          </button>
          <div class="dropdown-menu">
            <a className='extend-bar'>Give XP</a>
          </div>
        </div>

        <a className='mx-1'>👍 Best practices</a>

          <h4 className='mt-4'>USE CASES</h4>
          <a className='mx-1'>⛵ Onboarding</a>
          <a className='mx-1'>🦜 Boost your Twitter</a>
          <a className='mx-1'>🍏 Zealy Branding</a>
       
          <h4 className='mt-4'>FAQ</h4>
          <a>❔FAQ</a>

       </div>
    </div>
</div>


{/* END */}
    </div>
</div>
    )
}

export default Zealy_Doc
