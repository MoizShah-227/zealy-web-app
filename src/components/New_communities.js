import React, { useState } from 'react';
import '../components_CSS/new_ communities.css'; // Import your CSS file

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
    <div className="community-container">
      <div className='contain-heading'>
        <ul>
          <li>
            <h1>New communities</h1>
          </li>
          <li className='d-flex align-items-center '>
              <a>Show More</a>
          <button className="scroll-button" onClick={() => handleScroll('left')}>
          <i class="bi bi-arrow-left"></i>
          </button> 
          <button className="scroll-button" onClick={() => handleScroll('right')}>
          <i class="bi bi-arrow-right"></i>
          </button>
          </li>
        </ul>
      
      </div>
      <div className="scroll-content" >
        {/* Your scrollable content goes here */}
          <div className='contain-communities' style={{ transform: `translateX(${scrollPosition}px)` }}>

          </div>
      </div>
      
     
    </div>
  );
};

export default HorizontalScrollBar;
