import React from 'react'
import '../../components_CSS/PagesCss/what_is_zealy.css'
import { Link } from 'react-router-dom'
import Zealy_Doc from './Zealy_Doc'
const CreateYourCommunity = () => {
  return (
    <div className='doc-container what-is-zealy'>        
        <div className='row'>
        <div className='col-3'>
        <Zealy_Doc/>
        </div>
        <div className='col-9'>
        <div className='contain-zealy-data container'>
          <div className='scroll-model '>
          <div className='content container'>
            <div>
              <h1 className='mt-3'>😄Create your community</h1>
              <p className='mt-3'>To create your Zealy, just head to <Link style={{color:"#d6409f"}}> Our website</Link> and click on 'Create your community'.</p>

              <p>Among a few other basic things, you will be asked to choose a subdomain. A subdomain is what will define the URL of your Zealy space. For example, if you enter boredape as a subdomain, you will find your Zealy at boredape.crew3.xyz.</p>

              <p>The tags and goals you select will help us customize your experience and suggest quest templates.</p>
              <video className='video mt-3' src='https://cdn.loom.com/sessions/thumbnails/55ee7b912c6642d591a9df388f8b1476-1653995190498.mp4'  autoPlay >
            </video>

            </div>

            <div className='bottom-btn mt-4'>
            
            <Link className='item-1 item d-flex' to="/Zealy_Doc/what_is_zealy">
            <li><i class="bi bi-arrow-left"></i></li>
            <li>
            <Link to="/Zealy_Doc/what_is_zealy">What is zealy?</Link>
            </li>
            </Link>
            
            <div className='item-2 item d-flex'>
            <li><Link to="/Zealy_Doc/what_is_zealy/CreateYourFirstQuest">Creating your first quest</Link></li>
            <li><i class="bi bi-arrow-right"></i></li>
            </div>

              <div className='page-footer'>
                
              </div>     
            </div>          
          </div>
          </div>

            
          {/* This is End */}
        </div>          
        </div>
        </div>
    </div>
  )
}

export default CreateYourCommunity;
