import React from 'react'
import '../../components_CSS/PagesCss/welcome.css'
import { Link } from 'react-router-dom'
const Welcome = () => {
  return (
    <div className='welcome-container'>
      <div className='side-nav '>
        <div className='contain-ul'>
        <ul>
          <li><Link to="/"><img  className='contain-side-img' width={30} src='https://ugc.production.linktr.ee/70MKy00yQESJzYTeawbx_zealy%20Logo_Mark_White.png'/></Link></li>
          <li><a className='side-icons'><i class="bi bi-search"></i></a></li>
          <li><a  className='side-icons'><i class="bi bi-plus-circle"></i></a></li>
          <li><a  className='side-icons'><i class="bi bi-globe"></i></a></li>
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

      <div className='welcome-left-side container'>
        <div className='row'>
          <div className='col-lg-2 col-md-12 '>
          <img  className='left-side-img px-2' width={200} src='https://ugc.production.linktr.ee/70MKy00yQESJzYTeawbx_zealy%20Logo_Mark_White.png'href ="/" />
          </div>
          <div className='col-lg-6 col-md-12 '>
            <h1>Welcome To Zealy</h1>
            <p>You're at the right place. Choose your path forward ✨</p>
            <div className='icons mx-3'>
              <a><i class="bi bi-link-45deg m-2"></i></a>
              <a><i class="bi bi-discord m-2"></i></a>
            </div>
          </div>

          
        </div>
        <div className='welcome-btn mt-3'>
          <a><button className='btn2 m-2'>👋 Find your Zeal</button></a>
          <a><button className='btn2 m-2'>🔥 Prepare for Lift-off </button></a>
          </div>

          <div className='welcome-section-1'>
            <h4 className='mt-3 mx-3'>#👋 Find your Zeal</h4>
            <div className='row'>
              <div className='col-lg-4 col-md-12'>
               
                <a><div className='welcome-box'>
                <h5 className='pt-3 px-2'>Contributor? Visit Planet Zealy 🪐</h5>
               
                <p>The Planet Zealy Questboard Adventure begins when players receive a mysterious </p>
               <div className='welcome-box-btn mt-5'>
                <a><button className='btn1 mt-5'>10 XP</button></a>
                <a><button className='btn2 mt-5'>DAILY</button></a>
               </div>
               </div></a>

              </div>
              <div className='col-lg-4 col-md-12'>
              <a><div className='welcome-box'>
                <h5 className='pt-3 px-2'> Check Zealy Academy 🧑🏼‍💻</h5>
               
                <p>Join our free CM360 Program to meet other  </p>
               <div className='welcome-box-btn mt-5'>
                <a><button className='btn1 mt-5'>10 XP</button></a>
                <a><button className='btn2 mt-5'>DAILY</button></a>
               </div>
               </div></a>

              </  div>              
            </div>
            <div className='row'>
            <div className='col-lg-4 col-md-12'>
            <a><div className='welcome-box'>
                <h5 className='pt-3 px-2'>🤝 Want to Collaborate on Zealy?</h5>
               
                <p>If you’re looking to collaborate with other projects on Zealy, this is your place to go!</p>
               <div className='welcome-box-btn mt-5'>
                <a><button className='btn1 mt-5'>10 XP</button></a>
                <a><button className='btn2 mt-5'>DAILY</button></a>
               </div>
               </div></a>

              </div>
            </div>

            <h4 className='mt-3 mx-4' style={{color:"#fac400"}}>#🔥 Prepare for Lift-off</h4>
            <div className='row section-2'>
              <div className='col-lg-4 col-md-12'>
               
                <a><div className='welcome-box'>
                <h5 className='pt-3 px-2'>Lift-off Checklist ✅</h5>
               
                <p>You meticulously prepare your spacecraft, to ensure all systems</p>
               <div className='welcome-box-btn mt-5'>
                
                <a><button className='btn2 mt-5'>ONCE</button></a>
               </div>
               </div></a>

              </div>
              <div className='col-lg-4 col-md-12'>
              <a><div className='welcome-box'>
                <h5 className='pt-3 px-2'>What is Zealy?</h5>
               
                <p>You delve into the history of Planet Zealy, unearthing fascinating tales </p>
               <div className='welcome-box-btn mt-5'>
                <a><button className='btn2 mt-5 text-right'>DAILY</button></a>
               </div>
               </div></a>

              </  div>              
            </div>

            <div className='row section-2'>
              <div className='col-lg-4 col-md-12'>
               
                <a><div className='welcome-box'>
                <h5 className='pt-3 px-2'>The Leaderboard</h5>
               
                <p>As your journey progresses, you encounter other explorers seeking the</p>
               <div className='welcome-box-btn mt-5'>
                
                <a><button className='btn2 mt-5'>DAILY</button></a>
               </div>
               </div></a>

              </div>
              <div className='col-lg-4 col-md-12'>
              <a><div className='welcome-box'>
                <h5 className='pt-3 px-2'>Don't just be a member</h5>
               
                <p>You seize the opportunity to enhance your abilities, gaining access</p>
               <div className='welcome-box-btn mt-5'>
                <a><button className='btn2 mt-5 text-right'>DAILY</button></a>
               </div>
               </div></a>

              </  div>              
            </div>

            <div className='row section-2'>
              <div className='col-lg-4 col-md-12'>
               
                <a><div className='welcome-box'>
                <h5 className='pt-3 px-2'>Our Latest Update</h5>
               
                <p>You eagerly await new information about the ancient civilization and its</p>
               <div className='welcome-box-btn mt-5'>
                
                <a><button className='btn2 mt-5'>DAILY</button></a>
               </div>
               </div></a>

              </div>
              <div className='col-lg-4 col-md-12'>
              <a><div className='welcome-box'>
                <h5 className='pt-3 px-2'>Upgraded systems ⚡️</h5>
               
                <p>You find an option to upgrade your systems onboard. Find the latest updates</p>
               <div className='welcome-box-btn mt-5'>
                <a><button className='btn2 mt-5 text-right'>DAILY</button></a>
               </div>
               </div></a>

              </  div>              
            </div>

          </div>
          {/* END */}
      </div>      
    </div>
  )
}

export default Welcome
