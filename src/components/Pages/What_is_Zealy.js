import React from 'react'
import '../../components_CSS/PagesCss/what_is_zealy.css'
import Zealy_Doc from './Zealy_Doc'
const What_is_Zealy = () => {
  return (
    <div className='doc-container what-is-zealy'>        
        <div className='row'>
        <div className='col-3'>
        < Zealy_Doc/>
        </div>
        <div className='col-9'>
        <div className='contain-zealy-data container'>
          <div className='upper-img'>
          <img src='https://1505557047-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FQvTIrayABkLCC3fDPMH6%2Fuploads%2FsCeEFJHcP7dDChWom1OT%2FTeam%20banner.png?alt=media&token=a469b401-7fee-41fd-a54d-631913eb05d9'/>
          </div>


          <div className='scroll-model '>

          <div id="list-example" className="list-group" >
          <p>ON THIS PAGE</p>
          <a style={{color:"#d6409f"}} href="#list-item-1">Getting Started</a>
          <a href="#list-item-2">Guides: Jump right in</a>
          <a href="#FAQ">DO you have questions?</a>
          </div>

          <div className='content container'>
            <div>
              <h1 className='mt-3'>😄 What is Zealy?</h1>
              <p className='mt-3'>Zealy is a platform that helps web3 communities drive growth and engagement by turning their members into contributors 🚀</p>

              <p>With Zealy, community members compete for the leaderboard's top spots and get instant rewards by completing quests.</p>

              <p>Our platform is used by renowned blockchain games, metaverses, digital asset marketplaces, and DeFi protocols such as zkSync, ImmutableX, dYdX, and web2 companies like Renault, PMU, or LVMH.</p>

              <p>Zealy enables you to onboard, entertain, educate, and grow your community in a scalable way.</p>

              <h3 id='list-item-1'>Getting Started</h3>
              <p><span>Got just 1 minute?</span> Check out a quick intro to our product:</p>

              <video className='video mt-3'  autoPlay >
                <   source src='https://cdn.loom.com/sessions/thumbnails/487222abe52e4c7f8307f6054c728686-1671105104920.mp4'
                type='video/mp4'/>
            </video>

            <p><span>Got just 6 minute?</span> Here's an overview of all the functionality:</p>

            <video className='video mt-3'  autoPlay >
                <   source src='https://cdn.loom.com/sessions/thumbnails/91f447bbcc064d8e8856b78b52108214-1671102238807.mp4'
                type='video/mp4'/>
            </video>



            <h3 id='list-item-2'>Guides: Jump right in</h3>
            <p>Follow our handy guides to get started on the basics as quickly as possible:</p>
            <div className='guides'>
              <ul>
                <li> <a>👏 Create your community</a></li>
              
                <li><a>🤠 Creating your first quest</a></li>
              
                <li><a>🔌 Integrations</a></li>
              </ul>
             
            </div>

            <h3 id='FAQ'>Do you have questions?</h3>
            <p>Check our FAQ or contact us at hello@crew3.xyz</p>
            <div className='guides'>
              <ul>
                <li> <a>❔FAQ - Genera</a></li>
              
                <li><a>Create your community</a></li>
            </ul>
             
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

export default What_is_Zealy
