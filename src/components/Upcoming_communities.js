import React, { useState } from 'react';
import '../components_CSS/upcoming_communities.css'; // Import your CSS file

const HorizontalScrollBar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [time,setTime]= useState(2);
  const handleScroll = (direction) => {
    const scrollAmount = 800; // Adjust the scroll amount as needed
    if (direction === 'right') {
      setScrollPosition(scrollPosition - scrollAmount);
    } else if (direction === 'left') {
      setScrollPosition(scrollPosition + scrollAmount);
    }
  };

  return (
    <div className="community-container mt-5">
      <div className='contain-heading'>
        <ul>
          <li>
            <h1>Upcoming communities</h1>
          </li>
          <li className='d-flex align-items-center show-more-btn'>
              <a href="#">Show all (34)</a>
          <button className="scroll-button" onClick={() => handleScroll('left')}>
          <i class="bi bi-arrow-left"></i>
          </button> 
          <button className="scroll-button" onClick={() => handleScroll('right')}>
          <i class="bi bi-arrow-right"></i>
          </button>
          </li>
        </ul>
      
      </div>

      <div className="community-scroll-content" >
        {/* Your scrollable content goes here */}
          <div className='contain-communities d-flex'>

            <div className='community-data' style={{ transform: `translateX(${scrollPosition}px)` }}>
            
           

            <div className='contain-data'>
            <span ><img className='dackieSwap' src='https://crew3-production.s3.eu-west-3.amazonaws.com/public/fudy4s0-dgiz0myze74a20wv42wmkmzs-logo.png'/><h1>meerac_Insights</h1><span className='time'>in {time} hours</span></span>
            <p>At meerac, we're all about tracking phygitals on-chain in real-time.</p>
            <div>
              <ul>
                <li><a href="#"><i class="bi bi-link-45deg"></i></a></li>
                <li><a href="#"><i class="bi bi-lightning-fill"></i></a>33</li>
                <li><a href="#"><i class="bi bi-person-fill"></i>9.6k</a></li>
                <li><a href="#"><i class="bi bi-twitter"></i></a>57k</li>
                <li><a href="#"><i class="bi bi-discord"></i></a></li>
              </ul>
            </div>
            </div>

            <div className='contain-data'>
            <span ><img className='dackieSwap' src='https://crew3-production.s3.eu-west-3.amazonaws.com/public/slc85yedfd-veqzjmxagxyesmd6tevic-logo.png'/><h1>ProLeague.gg</h1><span className='time'>in {time} hours</span></span>
            <p>The premier social competitive gaming platform that utilizes the latest technologies.</p>
            <div>
              <ul>
                <li><a href="#"><i class="bi bi-link-45deg"></i></a></li>
                <li><a href="#"><i class="bi bi-lightning-fill"></i></a>33</li>
                <li><a href="#"><i class="bi bi-person-fill"></i>9.6k</a></li>
                <li><a href="#"><i class="bi bi-twitter"></i></a>57k</li>
                <li><a href="#"><i class="bi bi-discord"></i></a></li>
              </ul>
            </div>
            </div>

            <div className='contain-data'>
            <span ><img className='dackieSwap' src='https://crew3-production.s3.eu-west-3.amazonaws.com/public/iikhvgb9ljhq6ywf9thbcteuirntaxm3-logo.png'/><h1>CM:Protocol</h1><span className='time'>in {time} hours</span></span>
            <p>Cyborg Mercenaries Protocol is the home of the CGV Token. Allows governance of the Cyborg Mercenaries NFT, GlitchAiA and future projects.</p>
            <div>
              <ul>
                <li><a href="#"><i class="bi bi-link-45deg"></i></a></li>
                <li><a href="#"><i class="bi bi-lightning-fill"></i></a>33</li>
                <li><a href="#"><i class="bi bi-person-fill"></i>9.6k</a></li>
                <li><a href="#"><i class="bi bi-twitter"></i></a>57k</li>
                <li><a href="#"><i class="bi bi-discord"></i></a></li>
              </ul>
            </div>
            </div>


            <div className='contain-data'>
            <span ><img className='dackieSwap' src='https://crew3-production.s3.eu-west-3.amazonaws.com/public/xj9dmybep05-nqycsiau_sluz0dprujx-logo.png'/><h1>PERL.eco</h1><span className='time'>in {time} hours</span></span>
            <p>Democratize the biosphere economy through liquidity pools and tokenization of biodiversity and carbon credits to the Decentralized Finance (DeFi)</p>
            <div>
              <ul>
                <li><a href="#"><i class="bi bi-link-45deg"></i></a></li>
                <li><a href="#"><i class="bi bi-lightning-fill"></i></a>33</li>
                <li><a href="#"><i class="bi bi-person-fill"></i>9.6k</a></li>
                <li><a href="#"><i class="bi bi-twitter"></i></a>57k</li>
                <li><a href="#"><i class="bi bi-discord"></i></a></li>
              </ul>
            </div>
            </div>


            <div className='contain-data'>
            <span ><img className='dackieSwap' src='https://crew3-production.s3.eu-west-3.amazonaws.com/public/uxm_efmqseeq60wg6jrblyfyrbz0dbqc-logo.png'/><h1>Morra Games</h1><span className='time'>in {time} hours</span></span>
            <p>Morra Games is an indie game studio dedicated to contributing quality games to the web3 gaming industry. Our mission is to create fun to play video games with player-owned economies, empowering players with true control and ownership over their assets</p>
            <div>
              <ul>
                <li><a href="#"><i class="bi bi-link-45deg"></i></a></li>
                <li><a href="#"><i class="bi bi-lightning-fill"></i></a>33</li>
                <li><a href="#"><i class="bi bi-person-fill"></i>9.6k</a></li>
                <li><a href="#"><i class="bi bi-twitter"></i></a>57k</li>
                <li><a href="#"><i class="bi bi-discord"></i></a></li>
              </ul>
            </div>
            </div>

          {/* DEAD LINE */}
          </div>
          </div>
      </div>
      
     
    </div>
  );
};

export default HorizontalScrollBar;
