import React from 'react'
import '../../components_CSS/PagesCss/welcome.css'
import { Link } from 'react-router-dom'
const Welcome = () => {
  return (
    <div className='welcome-container'>
      <div className='side-nav '>
        <div className='contain-ul'>
        <ul>
          <li><img  className='contain-side-img' width={30} src='https://ugc.production.linktr.ee/70MKy00yQESJzYTeawbx_zealy%20Logo_Mark_White.png'href ="/" /></li>
          <li><a><i class="bi bi-search"></i></a></li>
          <li><a><i class="bi bi-plus-circle"></i></a></li>
          <li><a><i class="bi bi-globe"></i></a></li>
        </ul>
        </div>
      </div>

      <div className='side-nav-2'>
        <div><img src='https://ugc.production.linktr.ee/70MKy00yQESJzYTeawbx_zealy%20Logo_Mark_White.png'/>
        </div>
        <p >Welcome To Zealy</p>
          <div class="dropdown">
          <a class=""  id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
          <i class="bi bi-three-dots "></i>
          </a>
          <ul class="dropdown-menu nav-dropdown" aria-labelledby="dropdownMenuButton1">
            <li><Link class="dropdown-item" to="/"><i class="bi bi-link-45deg"></i>Website</Link></li>
            <li><a class="dropdown-item" href="#"><i class="bi bi-discord"></i>Discord</a></li>
            <li  className='colored'><Link class="dropdown-item colored" to="/Login"><i class="bi bi-box-arrow-right"></i>Join community</Link></li>
            <li className='colored'><a class="dropdown-item " href="#"><i class="bi bi-flag"></i>Report community</a></li>
          </ul>
        </div>

        <div className='mt-4 nav-menu'>
         
            <a><button className='btn text-left'>Quests</button></a><br/>
            <a><button  className='btn text-left'>Leaderboard</button></a>

         
        </div>
      </div>        
    </div>
  )
}

export default Welcome
