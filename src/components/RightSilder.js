import React from 'react'
import '../components_CSS/rightsilder.css';
const RightSilder = () => {
  return (
    <div className='right-slider'>
      <ul>
        <li>
                  <button className='btn'><a>All</a></button>
                  <button className='btn'><a>Startup</a></button>
                  <button className='btn'><a>Gaming</a></button>
                  <button className='btn'><a>Infrastructure</a></button>
                  <button className='btn'><a>DeFi</a></button>
                  <button className='btn'><a>Music</a></button>
                  <button className='btn'><a>Metaverse</a></button>
                  <button className='btn'><a>Collectable</a></button>
                  <button className='btn'><a>Education</a></button>
                  <button className='btn'><a>Art</a></button>
                  <button className='btn'><a>NFT</a></button>
                  <button className='btn'><a>DAO</a></button>
        </li>
      </ul>
    </div>
  )
}

export default RightSilder
