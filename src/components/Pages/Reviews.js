import React from 'react'
import '../../components_CSS/PagesCss/what_is_zealy.css'
import { Link } from 'react-router-dom'
import Zealy_Doc from './Zealy_Doc'
const Reviews = () => {
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
                
              <h1 className='mt-3 mx-2'>👀 Reviews</h1>
              <p className='mt-4'>All the claimed quests in your community can be found under the Reviews tab. You can filter, sort and batch review them.</p>

                <p>Rewards</p>
              
              

            <p>XP and Discord role rewards are automatically added to the user when you accept their claim. </p>

            <p>If you experience issues with the role assignment, make sure that the Zealy bot's role is above all other in your Discord Channel. If you need it, there's a button under History to resend the roles. </p>

            <p>
            In the upcoming versions of Zealy, we will also automate tokens and NFTs rewards but as of today, you will need to send them manually. The easiest way to do that is to export the history CSV, where you can see the rewards and addresses of the users.
            </p>

              </div>

            <div className='bottom-btn mt-4'>
            
            <Link className='item-1 item d-flex'>
            
            <li>
            <Link to="/Zealy_Doc/what_is_zealy/LeaderBoard/OrganizeSprint" className='text-right'>Organize a Sprint</Link>
            </li>
            </Link>
            
            <div className='item-2 item d-flex'>
            <li><Link to="/Zealy_Doc/what_is_zealy/Reviews/ExportingHistory">Exporting the history</Link></li>
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

export default Reviews;
