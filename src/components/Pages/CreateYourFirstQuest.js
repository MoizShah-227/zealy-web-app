import React from 'react'
import '../../components_CSS/PagesCss/what_is_zealy.css'
import { Link } from 'react-router-dom'
import Zealy_Doc from './Zealy_Doc'
const CreateYourFirstQuest = () => {
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
                
              <h1 className='mt-3'>Creating your first quest</h1>
              <h5 className='mt-5'>The basic</h5>
              <p className='mt-4'>A quest is a task that your community members can perform.</p>

              <p>There are 5 different <span className='blue-text'>submission types:</span> URL, text, image, none, and Twitter. Twitter quests are always automatically verified, and it's available as an option for text and none. </p>

              <p>The <span className='blue-text'>recurrence</span> sets how often a user will be able to complete a quest. </p>

              <p><span className='blue-text'>Conditions</span> limits the quests to only be claimable during a certain timeframe or by users fulfilling the requirements, either in level, other quests completed or Discord roles.</p>

            <p>You can set as many <span className='blue-text'>rewards</span> as you like. XP and Discord Roles will be automatically sent out on successfully completed quests, while other rewards will need to be manually sent out. To do this you can export the reviews history.</p>

            <p>In the <span className='blue-text'>content</span> you can write anything you want. Just be sure to keep it clear, fun and concise. </p>

            <h3>Quick setup with templates</h3>

            <p>We know that copywriting is hard, which is why we are doing the heavy lifting for you with our template library. It consists of the most performant quests among all our communities and is frequently updated with new ones.</p>
            <br/>           
            <p>The only thing you need to do is to adjust the reward and adapt the content to fit your needs.</p>

            <h3>Testing a quest</h3>
            <p>
            As an admin you are not able to claim a quest, the claim button is disabled. If you want to claim a quest for testing purposes, just connect to your Crew³ with another account that is not admin.
            </p>
              <video className='video mt-3' src='https://cdn.loom.com/sessions/thumbnails/becc401149c245c1a4bd2a80ed1de8c7-1654422356201.mp4'  autoPlay >
            </video>

            </div>

            <div className='bottom-btn mt-4'>
            
            <Link className='item-1 item d-flex' to="/Zealy_Doc/what_is_zealy/Create_your_community">
            
            <li>
            <Link to="/Zealy_Doc/what_is_zealy/Create_your_community" className='text-right'>Create your community</Link>
            </li>
            </Link>
            
            <div className='item-2 item d-flex'>
            <li><Link to="/Zealy_Doc/what_is_zealy/DocHome"> Home</Link></li>
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

export default CreateYourFirstQuest;
