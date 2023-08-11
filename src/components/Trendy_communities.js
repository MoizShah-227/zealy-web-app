import React, { useState } from 'react';
import '../components_CSS/trendy_communities.css'; // Import your CSS file

const HorizontalScrollBar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

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
            <h1>Trendy communities</h1>
          </li>
          <li className='d-flex align-items-center show-more-btn'>
              <a href="#">Show More (132)</a>
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
            <span ><img className='dackieSwap' src='https://crew3-production.s3.eu-west-3.amazonaws.com/public/9efe9001-b275-4c19-87c5-5112c6b6eb82-profile.png'/><spanc className="count">2</spanc><h1>DackieSwap - Mainnet on BASE</h1></span>
            <p>#1 Native and Most Trusted DEX on Base. Every EXP will be transferred to QuackPoints for potential Quackdrop and NFT DackList 🤫 Let's quack together! 🦆🦆🦆</p>
            <div>
              <ul>
                <li><a href="#"><i class="bi bi-link-45deg"></i></a></li>
                <li><a href="#"><i class="bi bi-lightning-fill"></i></a>33</li>
                <li><a href="#"><i class="bi bi-person-fill"></i>9.6k</a></li>
                <li><a href="#"><i class="bi bi-twitter"></i></a>57k</li>
                <li><a href="#"><i class="bi bi-discord"></i></a>57k</li>
              </ul>
            </div>
            </div>

            <div className='contain-data'>
            <span ><img src='https://crew3-production.s3.eu-west-3.amazonaws.com/public/3b1a6cc2-8ec3-40a1-92f9-4e3d4e520fce-profile.png'/><spanc className="count">2</spanc><h1>Melon🍉</h1></span>
            <p>Shaping the future of web3 culture with Content NFTs. Join the MELON campaign now!</p>
            <div>
              <ul>
                <li><a href="#"><i class="bi bi-link-45deg"></i></a></li>
                <li><a href="#"><i class="bi bi-lightning-fill"></i></a>33</li>
                <li><a href="#"><i class="bi bi-person-fill"></i>9.6k</a></li>
                <li><a href="#"><i class="bi bi-twitter"></i></a>57k</li>
                <li><a href="#"><i class="bi bi-discord"></i></a>57k</li>
              </ul>
            </div>
            </div>


            <div className='contain-data'>
            <span ><img src='https://crew3-production.s3.eu-west-3.amazonaws.com/public/ded01c87-01df-4930-b44d-1cd69f07faff-profile.png'/><spanc className="count">2</spanc><h1>Tapio Finance</h1></span>
            <p>Tapio Finance serves as the middle layer between LST liquidity and downstream DeFi applications. Deposit ETH and/or LSTs to mint TapETH and start earning some of the best real yield on your ETH in the ecosystem!</p>
            <div>
              <ul>
                <li><a href="#"><i class="bi bi-link-45deg"></i></a></li>
                <li><a href="#"><i class="bi bi-lightning-fill"></i></a>33</li>
                <li><a href="#"><i class="bi bi-person-fill"></i>9.6k</a></li>
                <li><a href="#"><i class="bi bi-twitter"></i></a>57k</li>
                <li><a href="#"><i class="bi bi-discord"></i></a>57k</li>
              </ul>
            </div>
            </div>


            <div className='contain-data'>
            <span ><img src='https://crew3-production.s3.eu-west-3.amazonaws.com/public/bac3dcd6-db83-4250-9c84-90b6b9790ab0-profile.png'/><spanc className="count">2</spanc><h1>Pira Finance | Live on BASE 🛡️</h1></span>
            <p>#1 native community-owned DEX built on Base Every XP will be converted to Pira tokens, and the most active members will receive more benefits in the future. Build on Base together!</p>
            <div>
              <ul>
                <li><a href="#"><i class="bi bi-link-45deg"></i></a></li>
                <li><a href="#"><i class="bi bi-lightning-fill"></i></a>33</li>
                <li><a href="#"><i class="bi bi-person-fill"></i>9.6k</a></li>
                <li><a href="#"><i class="bi bi-twitter"></i></a>57k</li>
                <li><a href="#"><i class="bi bi-discord"></i></a>57k</li>
              </ul>
            </div>
            </div>


            <div className='contain-data'>
            <span ><img src='https://crew3-production.s3.eu-west-3.amazonaws.com/public/a9be6195-6014-47f1-9c43-28e022fd0a56-profile.png'/><spanc className="count">2</spanc><h1>FireDAO</h1></span>
            <p>FireDAO is a social DAO based on PID and FID soul bound accounts initiated by RainbowCity Foundation whose mission is to fuel the evolution of decentralized civilization, light the fire of civilization, pass on wisdom and prosper civilization.</p>
            <div>
              <ul>
                <li><a href="#"><i class="bi bi-link-45deg"></i></a></li>
                <li><a href="#"><i class="bi bi-lightning-fill"></i></a>33</li>
                <li><a href="#"><i class="bi bi-person-fill"></i>9.6k</a></li>
                <li><a href="#"><i class="bi bi-twitter"></i></a>57k</li>
                <li><a href="#"><i class="bi bi-discord"></i></a>57k</li>
              </ul>
            </div>
            </div>


            <div className='contain-data'>
            <span ><img src='https://crew3-production.s3.eu-west-3.amazonaws.com/public/2ae52b02-bbb5-4adf-a5e7-5aa46b9a504c-profile.png'/><spanc className="count">2</spanc><h1>BullBear AI Community</h1></span>
            <p>The first project using AI to predict BULL and BEAR markets through User Behaviours and Price Action, generating profit for users. BullBear AI - A revolution in the #Arbitrum Ecosystem.</p>
            <div>
              <ul>
                <li><a href="#"><i class="bi bi-link-45deg"></i></a></li>
                <li><a href="#"><i class="bi bi-lightning-fill"></i></a>33</li>
                <li><a href="#"><i class="bi bi-person-fill"></i>9.6k</a></li>
                <li><a href="#"><i class="bi bi-twitter"></i></a>57k</li>
                <li><a href="#"><i class="bi bi-discord"></i></a>57k</li>
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
