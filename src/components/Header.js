import React from 'react'
import '../components_CSS/Header.css';
import sideimg from '../Imges/portal-lg.9a17dc83.svg'
import sideimg2 from '../Imges/Header.sidepic.jpg'
const Header = () => {
  return (
    <div className=" components-wrapper">
            <img className='header-img' src='https://zealy.io/_next/static/media/top.5b046145.webp'/>
      <div className="container contain-header">
           <div className="row">
            <div className=" info col-lg-6 col-md-12 z-index-0 mb-sm-5">
                <h1>YOUR</h1>
                <h1>ADVENTURE</h1>
                <h1>STARTS HERE</h1>
                <p>Join exciting communities, have fun and make a difference.</p>
                
                <div className="input-group mt-4 mx-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="inputGroup-sizing-default"><i className="bi bi-search "></i></span>
                </div>
                <input type="text"  className="form-control" placeholder='Search' aria-label="Default" aria-describedby="inputGroup-sizing-default"/>
                </div>

            </div>
        

            <div className=" sideimg col-lg-6 col-md-12">
                {/* <img src={sideimg}/> */}
                <img src='https://zealy.io/_next/static/media/portal-md.c9156ec2.webp'/>
            </div>

                

           </div>
      </div>
    </div>
  )
}

export default Header
