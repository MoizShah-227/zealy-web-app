import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Routes,
    Link
  } from "react-router-dom";
  
import '../../components_CSS/PagesCss/zealy_Doc.css'
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
        <a><h5>😄&nbsp;What is Zealy?</h5></a>

      <h4 className='mt-4'>GETTING STARTED</h4>
       <div className='contain'>
       <a >👏 Create your community</a>
        <a>🛬Create your first quest</a>
       </div>

       <h4 className='mt-4'>GUIDES</h4>
       <div className='contain'>
        <a className='mx-1'>🏠 Home</a>
        
        <div class="btn-group dropdown">
          <a>🤑Quest</a>
          <button type="button" class="dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <span class="sr-only">Toggle Dropright</span>
          </button>
          <div class="dropdown-menu">
            <a className='extend-bar'>Unlockable quest</a>
          </div>
        </div>

        <div class="btn-group dropdown">
          <a>🏆 Leaderboard</a>
          <button type="button" class="dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <span class="sr-only">Toggle Dropright</span>
          </button>
          <div class="dropdown-menu">
            <a className='extend-bar'>XP table</a>
            <a className='extend-bar'>Organize a sprint</a>
          </div>
        </div>

        <div class="btn-group dropdown">
          <a>👀 Reviews</a>
          <button type="button" class="dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <span class="sr-only">Toggle Dropright</span>
          </button>
          <div class="dropdown-menu">
            <a className='extend-bar'>Exporting the history</a>
          </div>
        </div>

        <div class="btn-group dropdown">
          <a>🔌 Integrations</a>
          <button type="button" class="dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <span class="sr-only">Toggle Dropright</span>
          </button>
          <div class="dropdown-menu">
            <a className='extend-bar'>Disord bot activation</a>
            <a className='extend-bar'>Disord bots commands</a>
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
