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
<>
<div className='zealy_doc_Body bg-light'>   
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
    </div>


</>
    )
}

export default Zealy_Doc
