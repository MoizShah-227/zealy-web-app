import React from 'react'
import '../../components_CSS/PagesCss/what_is_zealy.css'
import { Link } from 'react-router-dom'
import Zealy_Doc from './Zealy_Doc'
const DiscordActivation = () => {
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
                
              <h1 className='mt-3 mx-2'>Organize a sprint</h1>
              <p className='mt-4'>n addition to the reward distributed on the completion of a quest, you can organize a community <span className='bold-text'>sprint</span></p>

                <p>A sprint is a community contest that lasts a given time -an epoch. At the end of the epoch, rewards are distributed according to the XP accumulated during the competition. For example, you can set personalized rewards for the top 100 of your leaderboard.</p>
              
              
                <div className='main-li-text mx-3'>
                    <p>It's the best way to engage your community on a specific goal:</p>
                           <li>sell tokens & digital assets </li>
                           <li>launch a new product or feature </li>
                           <li> organize a physical or virtual event</li>

                </div>

            <p>To create a sprint, click on "Add reward for top contributors" on the top right of the leaderboard. Then, you can choose a start/end date and the associated reward for each position on the leaderboard.   </p>
            <p>In sprint mode, the leaderboard ranking is based on the XP won during the epoch only.</p>


            <div className='warning-container mt-2 mb-5'>
            <p><i class="bi bi-info-circle p-2" style={{color:"#346ddb"}}></i>Reward distribution is not automatic, yet! You can export the leaderboard and get a CSV with contributors' information -including wallet addresses, Discord handler, etc</p>
            </div>

              </div>

            <div className='bottom-btn mt-4'>
            
            <Link className='item-1 item d-flex'>
            
            <li>
            <Link to="/Zealy_Doc/what_is_zealy/LeaderBoard/XPTable" className='text-right'>XP table</Link>
            </li>
            </Link>
            
            <div className='item-2 item d-flex'>
            <li><Link to="/Zealy_Doc/what_is_zealy/Reviews">Reviews</Link></li>
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

export default DiscordActivation;
