import React from 'react'
import '../../components_CSS/PagesCss/what_is_zealy.css'
import { Link } from 'react-router-dom'
import Zealy_Doc from './Zealy_Doc'
const DocHome = () => {
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
                
              <h1 className='mt-3 mx-2'>🏠 Home</h1>
              <h6 className='mt-4 mx-2 upper-text'>Make yourself at home!</h6>
              <p className='mt-4'>Your Zealy homepage is the entry point for your community members, so let them feel at home!</p>

                <p>Click on the edit button on the upper right of your home page and edit:</p>
              
              
                <div className='main-li-text mx-3'>
                            <li><span className='bold-text'>Description: </span>This is probably the first thing they will read when joining your Zealy and the description shown on the Zealy landing page - make sure to give them some context about your community. </li>
                        
                        <li><span className='bold-text'>Image: </span>This is the image that will be displayed on your homepage, by default it's your logo. Editing it won't change your logo, which you can do under Settings.</li>

                        <li><span className='bold-text'>Useful links: </span> Discord, Twitter, OpenSea.</li>

                </div>

            <p>The Popular Quests are displayed based on how many times they have been claimed. These provide an easy entry point for your community members.   </p>


              </div>

            <div className='bottom-btn mt-4'>
            
            <Link className='item-1 item d-flex'>
            
            <li>
            <Link to="/Zealy_Doc/what_is_zealy/CreateYourFirstQuest" className='text-right'>Creating your first quest</Link>
            </li>
            </Link>
            
            <div className='item-2 item d-flex'>
            <li><Link to="/Zealy_Doc/what_is_zealy/Quests"> Quests</Link></li>
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

export default DocHome;
