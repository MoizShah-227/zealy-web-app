import React from 'react'
import '../../components_CSS/PagesCss/what_is_zealy.css'
import { Link } from 'react-router-dom'
import Zealy_Doc from './Zealy_Doc'
const DiscordCommand = () => {
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
                
              <h1 className='mt-3 mx-2'>Discord bots commands</h1>
              <p className='mt-4'>Once Zealy bot is connected to your server, you can give XP and remove XP straight from a Discord command.</p>

                <p>Type /give-xp in Discord to give XP to a user. Specify a label to justify the XP attribution. The label will appear on the user profile, in the activity section.</p>
              
              <img width={700} src='https://1505557047-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FQvTIrayABkLCC3fDPMH6%2Fuploads%2FQhrqtSscz9w1nU0WUp8d%2FScreenshot%202022-07-18%20at%2014.43.39.png?alt=media&token=f36c2df6-6d46-47ac-ba82-a0612da41f68'/>

              <p>
              Type /remove-xp in Discord to remove XP from a user. Specify a label to justify the XP deletion. The label will appear on the user profile, in the activity section.
              </p>
                
            <img width={700} src='https://1505557047-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FQvTIrayABkLCC3fDPMH6%2Fuploads%2FSs4zQKNrmRbPExtno9IV%2FScreenshot%202022-08-25%20at%2012.49.25.png?alt=media&token=4b2c5d3b-9f90-4363-abec-0cf046de8ec6'/>

            <div className='warning-container mt-2 mb-5'>
            <p><i class="bi bi-info-circle p-2" style={{color:"#346ddb"}}></i>If you choose a private channel for announcements, make sure that the bot is added or it won't work</p>
            </div>

              </div>

            <div className='bottom-btn mt-4'>
            
            <Link className='item-1 item d-flex'>
            
            <li>
            <Link to="/Zealy_Doc/what_is_zealy/Integrations/DiscordActivation" className='text-right'>Discord bots Activation</Link>
            </li>
            </Link>
            
            <div className='item-2 item d-flex'>
            <li><Link to="/Zealy_Doc/what_is_zealy/Roles">Roles</Link></li>
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

export default DiscordCommand;
