import React from 'react'
import '../../components_CSS/PagesCss/what_is_zealy.css'
import { Link } from 'react-router-dom'
import Zealy_Doc from './Zealy_Doc'
const Quests = () => {
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
                
              <h1 className='mt-3 mx-2'>Quests</h1>
              <p className='mt-4'>The quest board is how you differentiate yourself on Zealy. It's where and how you make it possible for your amazing community to engage and provide actual value. </p>
                
              
              <h3>Top 4 tips:</h3>
                <div className='main-li-text mx-3'>
                            <div className='mt-3'><span className='bold-text px-2'>1.</span><span>Create some quests that members can complete easily. Once they started with one they are more likely to do more.</span><br/></div>

                            <div className='mt-3'><span className='bold-text px-2'>2.</span>Use our conditions to set up sequences from easy to difficult so that the users are not overwhelmed with options when they first arrive. <br/></div>
                        
                            <div className='mt-3'>
                            <span className='bold-text px-2'>3.</span>Give rewards in proportion to the value they provide! The better rewards the more people you will attract to your community.<br/> 
    
                            </div>                        
                        
                            <div className='mt-3'>
                            <span className='bold-text px-2'>4.</span>Create an onboarding sequence where the last quest gives a Discord role to access everything!<br/>
                        
                            </div>
                </div>

                    <h6 className='mt-4'>
                    Recurrence 
                    </h6>
                    <p>The daily quests are resetting at 12am UTC time. So it doesn't matter when during the previous day the contributor completed their quest, they will all be able to do it at the same time. </p>
                    <p>
                    The weekly quests reset every week on Monday.
                    </p>
                    <p>The monthly quests reset on the 1st of every month. </p>
                    
                  </div>

            <div className='bottom-btn mt-4'>
            
            <Link className='item-1 item d-flex'>
            
            <li>
            <Link to="/Zealy_Doc/what_is_zealy/DocHome" className='text-right'>Home</Link>
            </li>
            </Link>
            
            <div className='item-2 item d-flex'>
            <li><Link to="/Zealy_Doc/what_is_zealy/Quests/UnlockableQuests">Unlockable quests</Link></li>
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

export default Quests;
