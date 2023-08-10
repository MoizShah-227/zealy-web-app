import React, { useState } from 'react';
import '../components_CSS/browse.css'; // Import your CSS file

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
    <div className="browse-container mt-5">
      <div className='contain-heading'>
        <ul>
          <li>
            <h1>Browse by community categories</h1>
          </li>
          <li className='d-flex align-items-center show-more-btn '>
          <button className="scroll-button" onClick={() => handleScroll('left')}>
          <i class="bi bi-arrow-left"></i>
          </button> 
          <button className="scroll-button" onClick={() => handleScroll('right')}>
          <i class="bi bi-arrow-right"></i>
          </button>
          </li>
        </ul>
      
      </div>

      <div className="browse-scroll-content" >
        {/* Your scrollable content goes here */}
          <div className='contain-browse d-flex'>

            <div className='browse-data' style={{ transform: `translateX(${scrollPosition}px)` }}>
                 
                  <a href='#' className='browse-btn'>
                    <img src='https://zealy.io/_next/static/media/blue.31ec5b2c.webp'/>
                    <a>All</a> 
                  </a>
                  
                  <a href='#' className='browse-btn'>
                    <img src='https://zealy.io/_next/static/media/hotpink.98e189fa.webp'/>
                    <a>Startup</a> 
                  </a>

                  <a href='#' className='browse-btn'>
                    <img src='https://zealy.io/_next/static/media/yellow.bb09033a.webp'/>
                    <a>Gaming</a> 
                  </a>

                  <a href='#' className='browse-btn'>
                    <img src='https://zealy.io/_next/static/media/cyan.f9d6a004.webp'/>
                    <a>Infrastructure</a> 
                  </a>

                  <a href='#' className='browse-btn'>
                    <img src='https://zealy.io/_next/static/media/pink.6f0d49bc.webp'/>
                    <a>DeFi</a> 
                  </a>

                  <a href='#' className='browse-btn'>
                    <img src='https://zealy.io/_next/static/media/blue.31ec5b2c.webp'/>
                    <a>Music</a> 
                  </a>

                  <a href='#' className='browse-btn'>
                    <img src='https://zealy.io/_next/static/media/hotpink.98e189fa.webp/'/>
                    <a>Metaverse</a> 
                  </a>

                  <a href='#' className='browse-btn'>
                    <img src='https://zealy.io/_next/static/media/yellow.bb09033a.webp'/>
                    <a>Collectable</a> 
                  </a>

                  <a href='#' className='browse-btn'>
                    <img src='https://zealy.io/_next/static/media/cyan.f9d6a004.webp'/>
                    <a>Education</a> 
                  </a>

                  <a href='#' className='browse-btn'>
                    <img src='https://zealy.io/_next/static/media/pink.6f0d49bc.webp'/>
                    <a>Art</a> 
                  </a>

                  <a href='#' className='browse-btn'>
                    <img src='https://zealy.io/_next/static/media/blue.31ec5b2c.webp'/>
                    <a>NFT</a> 
                  </a>

                  <a href='#' className='browse-btn'>
                    <img src='https://zealy.io/_next/static/media/hotpink.98e189fa.webp/'/>
                    <a>DAO</a> 
                  </a>
                  

          {/* DEAD LINE */}
          </div>
          </div>
      </div>
      
     
    </div>
  );
};

export default HorizontalScrollBar;
