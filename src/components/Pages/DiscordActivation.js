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
                
              <h1 className='mt-3 mx-2'>Discord bot activation</h1>
              <p className='mt-4'>To enable the Discord bot, click on the 'Integrations' menu and connect your Discord. Be sure to accept all the permissions.</p>

                <p>You can now enable the features you want to integrate into your Discord.</p>
              
              
                

            <div className='warning-container mt-2 mb-5'>
            <p><i class="bi bi-info-circle p-2" style={{color:"#346ddb"}}></i>If you choose a private channel for announcements, make sure that the bot is added or it won't work</p>
            </div>

              </div>

            <div className='bottom-btn mt-4'>
            
            <Link className='item-1 item d-flex'>
            
            <li>
            <Link to="/Zealy_Doc/what_is_zealy/Integrations" className='text-right'>Integrations</Link>
            </li>
            </Link>
            
            <div className='item-2 item d-flex'>
            <li><Link to="/Zealy_Doc/what_is_zealy/Integrations/DiscordCommand">Discord bots commands</Link></li>
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
