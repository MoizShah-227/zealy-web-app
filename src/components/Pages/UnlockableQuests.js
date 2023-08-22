import React from 'react'
import '../../components_CSS/PagesCss/what_is_zealy.css'
import { Link } from 'react-router-dom'
import Zealy_Doc from './Zealy_Doc'
const UnlockableQuests = () => {
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
                
              <h1 className='mt-3 mx-2'>Unlockable quests</h1>
              <h6 className='mt-4 mx-2 upper-text'>Make yourself at home!</h6>
              <p className='mt-4'>When creating or updating a quest, you can specify a condition that is going to determine if the user can see and claim the quest.</p>

                <p>There are 4 types of conditions:</p>
              
              
                <div className='main-li-text mx-3'>
                            <li><span className='bold-text'>Discord role: </span>You need to have our <Link className='pink-text' style={{color:"#d640b8"}}>Discord bot</Link> enabled to use this one. There are 2 possibles operator for this condition: is (the user has the role) and is not (the user doesn't have the role). The user won't be able to claim unless he connected his Discord account.</li>
                        
                        <li><span className='bold-text'>Level: </span>This condition allows you to lock/unlock quest based on the user's Zealy level. If the condition requires the user to have a level above a certain threshold the quest will still be displayed to the user, but shown as locked to incentivize the user to unlock it. On the other hand, if the condition requires the to be under a level to claim it and the user is above it, the quest is simply not shown to that user.</li>

                        <li><span className='bold-text'>Date: </span>The date condition is straightforward. You can lock and unlock a quest based on the date. Either by locking a quest until a certain date, in that case, the quest will be shown but locked, it's a good way to tease new quests before they are released. Or you can create a time-limited quest that won't be claimable and disappear after a date, which is awesome to create FOMO.</li>

                        <li><span className='bold-text'>Quest: </span>This allows you to create quest sequences, which is very useful for onboarding purposes. You can specify that you need to have done quest X before doing quest Y. In that case, as for the level condition, the quest will still be shown to the user but locked. You can also restrict the access to quest Y to people that didn't complete quest X, in that case, if quest X is completed, the quest Y won't be shown to the user. </li>

                </div>
              </div>

            <div className='bottom-btn mt-4'>
            
            <Link className='item-1 item d-flex'>
            
            <li>
            <Link to="/Zealy_Doc/what_is_zealy/Quests" className='text-right'>Quests</Link>
            </li>
            </Link>
            
            <div className='item-2 item d-flex'>
            <li><Link to="/Zealy_Doc/what_is_zealy/LeaderBoard">Leaderboard</Link></li>
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

export default UnlockableQuests;
