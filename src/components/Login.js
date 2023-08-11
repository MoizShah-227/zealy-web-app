import React from 'react'
import '../components_CSS/login.css'
const Login = () => {
  return (
    <div className='login-container'>
      <div className='row'>
        <div className=' login-left col-5 '>
        <ul className='mt-4'>
          <li><img src='https://ugc.production.linktr.ee/70MKy00yQESJzYTeawbx_zealy%20Logo_Mark_White.png' /></li>
          <li className='d-flex'>
            <p>First time on Zealy?</p>
            <a href=''><button>Create an account</button></a>
          </li>
        </ul>
        </div>
        <div className=' login-right col-7 bg-danger'>
          <img src='https://zealy.io/_next/static/media/portal-lg.9a17dc83.webp'/>
        </div>
      </div>
    </div>
  )
}

export default Login
