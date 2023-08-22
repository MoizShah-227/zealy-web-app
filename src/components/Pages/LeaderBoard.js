import React from 'react'
import '../../components_CSS/PagesCss/what_is_zealy.css'
import { Link } from 'react-router-dom'
import Zealy_Doc from './Zealy_Doc'
const LeaderBoard = () => {
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
                
              <h1 className='mt-3'>🏆 LeaderBoard</h1>

            <p className='mt-4'>
            The leaderboard ranks users based on the number of XP acquired. In the case of equality, the user that submitted his first quest the earlier will have the advantage.
            </p>
              <video className='video mt-3' src='https://cdn.loom.com/sessions/thumbnails/3abea4e5c2d14803b82746e6d1973b06-1669065028572.mp4'  autoPlay >
            </video>

            </div>

            <div className='bottom-btn mt-4'>
            
            <Link className='item-1 item d-flex' to="/Zealy_Doc/what_is_zealy/Create_your_community">
            
            <li>
            <Link to="/Zealy_Doc/what_is_zealy/Quests/UnlockableQuests" className='text-right'>Unlockable Quests</Link>
            </li>
            </Link>
            
            <div className='item-2 item d-flex'>
            <li><Link to="/Zealy_Doc/what_is_zealy/LeaderBoard/XPTable"> XP table</Link></li>
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

export default LeaderBoard;
