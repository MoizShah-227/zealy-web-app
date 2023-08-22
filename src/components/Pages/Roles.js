import React from 'react'
import '../../components_CSS/PagesCss/what_is_zealy.css'
import { Link } from 'react-router-dom'
import Zealy_Doc from './Zealy_Doc'
const Roles = () => {
  return (
    <div className='doc-container what-is-zealy'>        
        <div className='row'>
        <div className='col-3'>
        <Zealy_Doc/>
        </div>
        <div className='col-9 container'>
        <div className='contain-zealy-data container'>
          <div className='scroll-model '>
          <div className='content container'>
            <div>
                
              <h1 className='mt-3 mx-2'>⭐ Roles</h1>
              <p className='mt-4'>In Zealy there are 3 roles with different permissions:</p>
              
                <div className='main-li-text mx-3'>
                            <li><span className='bold-text'>admins: </span>are the captains of the ship, they can create/update quests, review quests, add/remove members, and access all the settings. They cannot complete quests.</li>
                        
                        <li><span className='bold-text'>reviewers: </span>They are usually trustworthy community members that have been promoted. They can claim quests and review other people.</li>

                        <li><span className='bold-text'>guest:</span> The guest role is only useful if your community is private, it gives the right to access your Zealy and claim quests. </li>

                        
                </div>
                        <p>
                        To invite someone to join your Zealy, head to Settings / Roles and click the 'Invite people' button.
                        </p>

                    <p><span className='bold-text'>
                        We recommend hiring reviewers ASAP to review the quests and help you scale the community.</span>They are like moderators in Discord.</p>

                    <video className='video' src='https://cdn.loom.com/sessions/thumbnails/1c7f2f6c922d4b189fb96a998ad0488d-1669920004211.mp4' loop autoPlay>

                    </video>

              </div>

            <div className='bottom-btn mt-4'>
            
            <Link className='item-1 item d-flex'>
            
            <li>
            <Link to="/Zealy_Doc/what_is_zealy/Integrations/DiscordCommand" className='text-right'>Discord bots commands</Link>
            </li>
            </Link>
            
            <div className='item-2 item d-flex'>
            <li><Link to="">Analytics</Link></li>
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

export default Roles;
