import React, { useState } from 'react';
import '../components_CSS/featured_communities.css'; // Import your CSS file

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
            <h1>Featured communities</h1>
          </li>
          <li className='d-flex align-items-center show-more-btn'>
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
            <span ><img src='https://crew3-production.s3.eu-west-3.amazonaws.com/public/8f3bb98f-440e-4714-a837-1d7d7002f2ed-Crew3.png'/><h1>Suipiens</h1></span>
            <p>Community to discover the latest news on #Sui🌊 Blockchain Ecosystem. Race to OG Diamond! Keep grinding🔥</p>
            <div>
              <ul>
                <li><a><i class="bi bi-link-45deg"></i></a></li>
                <li><a><i class="bi bi-lightning-fill"></i></a>33</li>
                <li><a><i class="bi bi-person-fill"></i>9.6k</a></li>
                <li><a><i class="bi bi-twitter"></i></a>57k</li>
              </ul>
            </div>
            </div>


            <div className='contain-data '>
          <span ><img src='https://crew3-production.s3.eu-west-3.amazonaws.com/public/3b1a6cc2-8ec3-40a1-92f9-4e3d4e520fce-profile.png'/><h1>Melon🍉</h1></span>
          <p>Shaping the future of web3 culture with Content NFTs. Join the MELON campaign now!</p>
          <div>
            <ul>
              <li><a><i class="bi bi-link-45deg"></i></a></li>
              <li><a><i class="bi bi-lightning-fill"></i></a>33</li>
              <li><a><i class="bi bi-person-fill"></i>9.6k</a></li>
              <li><a><i class="bi bi-twitter"></i></a>57k</li>
            </ul>
          </div>
          </div>


          <div className='contain-data'>
          <span ><img src='https://crew3-production.s3.eu-west-3.amazonaws.com/public/f0482b67-994f-4466-8c72-1001ef44a6f9-profile.png'/><h1>Michelin 3xplorer Club</h1></span>
          <p>Official Michelin 3xplorer Club to create unique experiences around mobility, motorsport, travel and gastr Top leaderboard members will get exclusive advantages</p>
          <div>
            <ul>
              <li><a><i class="bi bi-link-45deg"></i></a></li>
              <li><a><i class="bi bi-lightning-fill"></i></a>33</li>
              <li><a><i class="bi bi-person-fill"></i>9.6k</a></li>
              <li><a><i class="bi bi-twitter"></i></a>57k</li>
            </ul>
          </div>
          </div>


          <div className='contain-data'>
          <span ><img src='https://crew3-production.s3.eu-west-3.amazonaws.com/public/95557aec-76e2-4222-8557-17172e82c2c3-Profilebanner.png'/><h1>Mantle</h1></span>
          <p>A high-performance Ethereum layer-2 network with modular design, low fees & high security. Mantle is a product of #BitDAO, and is governed by the $BIT community.</p>
          <div>
            <ul>
              <li><a><i class="bi bi-link-45deg"></i></a></li>
              <li><a><i class="bi bi-lightning-fill"></i></a>33</li>
              <li><a><i class="bi bi-person-fill"></i>9.6k</a></li>
              <li><a><i class="bi bi-twitter"></i></a>57k</li>
            </ul>
          </div>
          </div>
            

            
          <div className='contain-data'>
          <span ><img src='https://crew3-production.s3.eu-west-3.amazonaws.com/public/b16d4d9c-9583-40b1-97d1-adaaf9214bf7-profile.png'/>
          <h1>Moonbeam</h1></span>
          <p>Moonriver & Moonbeam are smart contract platforms uniting Ethereum, Cosmos, Polkadot — and beyond. Paving the way for the next generation of apps & true interoperability. 🌝Moonriver and Moonbeam projects - contact us to be featured in a quest! 👟💪</p>
          <div>
            <ul>
              <li><a><i class="bi bi-link-45deg"></i></a></li>
              <li><a><i class="bi bi-lightning-fill"></i></a>33</li>
              <li><a><i class="bi bi-person-fill"></i>9.6k</a></li>
              <li><a><i class="bi bi-twitter"></i></a>57k</li>
            </ul>
          </div>
          </div>


          <div className='contain-data'>
          <span ><img src='https://crew3-production.s3.eu-west-3.amazonaws.com/public/ffcb33e8-e1d3-454f-a824-b389c5b2d7ee-profile.png'/><h1>Native</h1></span>
          <p>Modular DEX infrastructure for every project - Crypto’s invisible DEX Layer</p>
          <div>
            <ul>
              <li><a><i class="bi bi-link-45deg"></i></a></li>
              <li><a><i class="bi bi-lightning-fill"></i></a>40</li>
              <li><a><i class="bi bi-person-fill"></i>2.5k</a></li>
              <li><a><i class="bi bi-twitter"></i></a>11k</li>
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
