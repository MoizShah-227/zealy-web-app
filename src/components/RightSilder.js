import React, { useState } from 'react';
import '../components_CSS/rightsilder.css'; // Import your CSS file

const HorizontalScrollBar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = (direction) => {
    const scrollAmount = 50; // Adjust the scroll amount as needed
    if (direction === 'left') {
      setScrollPosition(scrollPosition - scrollAmount);
    } else if (direction === 'right') {
      setScrollPosition(scrollPosition + scrollAmount);
    }
  };

  return (
    <div className="horizontal-scroll-container">
       <button className="scroll-button" onClick={() => handleScroll('left')}>
       <i class="bi bi-arrow-left"></i>
      </button> 
      <div className="scroll-content" >
        {/* Your scrollable content goes here */}
          <div className='buttons' style={{ transform: `translateX(${scrollPosition}px)` }}>
                  <button className='btn'><a href='#'>All</a></button>
                  <button className='btn'><a href='#'>Startup</a></button>
                  <button className='btn'><a href='#'>Gaming</a></button>
                  <button className='btn'><a href='#'>Infrastructure</a></button>
                  <button className='btn'><a href='#'>DeFi</a></button>
                  <button className='btn'><a href='#'>Music</a></button>
                  <button className='btn'><a href='#'>Metaverse</a></button>
                  <button className='btn'><a href='#'>Collectable</a></button>
                  <button className='btn'><a href='#'>Education</a></button>
                  <button className='btn'><a href='#'>Art</a></button>
                  <button className='btn'><a href='#'>NFT</a></button>
                  <button className='btn'><a href='#'>DAO</a></button>
      
          </div>
      </div>
      <button className="scroll-button" onClick={() => handleScroll('right')}>
      <i class="bi bi-arrow-right"></i>
      </button>
     
    </div>
  );
};

export default HorizontalScrollBar;
