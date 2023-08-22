import React from 'react'
import '../../components_CSS/PagesCss/what_is_zealy.css'
import { Link } from 'react-router-dom'
import Zealy_Doc from './Zealy_Doc'
const Integrations = () => {
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
                
              <h1 className='mt-3 mx-2'>🔌 Integrations</h1>
              <h3>Bring visibility to your Zealy with our Discord Bot</h3>
              <p className='mt-4'>To get your community to contribute to your Zealy you will need to communicate about it. Making announcements is great, but keeping people updated about what's happening in your Zealy is even better.</p>

                <p>For that, we developed a set of features:</p>
              
              
                <div className='main-li-text mx-3'>
                            <li><span className='bold-text'>Daily Summary: </span>Every day, you will receive a message summarizing the events that took place in your community.</li>
                        
                        <li><span className='bold-text'>New quest announcement: </span>Every time you create a quest, the bot will send an embedded message that redirects to the newly created quest in the channel of your choice.</li>

                        <li><span className='bold-text'>Quest completed:</span> Bring transparency by sharing all the information related to a completed quest in a channel (user, reward, proof...) </li>

                        <li><span className='bold-text'>Sprint winners announcement:</span>when a sprint is over, all the winners and their rewards will be announced in the channel of your choice.</li>

                        <li><span className='bold-text'>Give-xp/remove-xp</span> with a Discord command.</li>

                </div>

            <p>The Popular Quests are displayed based on how many times they have been claimed. These provide an easy entry point for your community members.   </p>


              </div>

            <div className='bottom-btn mt-4'>
            
            <Link className='item-1 item d-flex'>
            
            <li>
            <Link to="/Zealy_Doc/what_is_zealy/Reviews/ExportingHistory" className='text-right'>Exporting The History</Link>
            </li>
            </Link>
            
            <div className='item-2 item d-flex'>
            <li><Link to="/Zealy_Doc/what_is_zealy/Integrations/DiscordActivation">Discord bot activation</Link></li>
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

export default Integrations;
