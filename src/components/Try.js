import React,{useState} from 'react'
import '../components_CSS/new_ communities.css';
const New_communities = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
  
    const handleScroll = (direction) => {
      const scrollAmount = 100; // Adjust the scroll amount as needed
      if (direction === 'left') {
        setScrollPosition(scrollPosition - scrollAmount);
      } else if (direction === 'right') {
        setScrollPosition(scrollPosition + scrollAmount);
      }
    };
  

  return (
    <div className='community mt-5 mx-5'>
        <div className='heading-content d-flex'>
          <div>
        <h2>New communities</h2>
          </div>
          <div className='buttons d-flex'>
          <button className="scroll-button" onClick={() => handleScroll('left')}>
          <i class="bi bi-arrow-left"></i>
          </button>
          <button className="scroll-button" onClick={() => handleScroll('right')}>
          <i class="bi bi-arrow-right"></i>
          </button>
          </div>

        </div>

      <div className='scroll-content d-flex' style={{ transform: `translateX(${scrollPosition}px)` }}>

            
               

              

              
          
          
    </div>
    </div>
  )
}

export default New_communities