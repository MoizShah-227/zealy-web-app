import React from 'react'
import '../../components_CSS/PagesCss/welcome.css'
import { Link } from 'react-router-dom'
const Welcome = () => {
  return (
    <div className='welcome-container'>
      <div className='side-nav '>
        <div className='contain-ul'>
        <ul>
          <li><img  className='contain-side-img' width={30} src='https://ugc.production.linktr.ee/70MKy00yQESJzYTeawbx_zealy%20Logo_Mark_White.png' /></li>
          <li><a><i class="bi bi-search"></i></a></li>
          <li><a><i class="bi bi-plus-circle"></i></a></li>
          <li><a><i class="bi bi-globe"></i></a></li>
        </ul>
        </div>
      </div>      
    </div>
  )
}

export default Welcome
