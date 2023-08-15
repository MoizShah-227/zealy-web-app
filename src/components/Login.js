import React from 'react'
import '../components_CSS/login.css'
const Login = () => {
  return (
    <div className='login-container'>
      <div className='row'>
        <div className=' login-left col-5'>
        <ul className='mt-1'>
          <li><img src='https://ugc.production.linktr.ee/70MKy00yQESJzYTeawbx_zealy%20Logo_Mark_White.png' /></li>
          <li className='d-flex'>
            <p className='m-3 pt-2'>First time on Zealy?</p>
            <a className='m-3' href='#'><button>Create an account</button></a>
          </li>
        </ul>

        <div className='login-body'>
        <div className='col'>
          <div className='contain-login-data'>
            <h3>Login To Zealy</h3>
            <p>Welcome back!</p>
            <div className='buttons mt-5'>
            <a><button className='btn'>Log in with Discord</button></a><br/>
            <a><button className='btn'>Log in with WalletConnect</button></a>
            </div>
            <div
              style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}
            >
              <div style={{flex: 1, height: '1px', backgroundColor: '#ffffff97'}} />

              <div>
                <p style={{width: '70px', textAlign: 'center'}}>or</p>
              </div>

              <div style={{flex: 1, height: '1px', backgroundColor: '#ffffff97'}} />
            </div>
            
            <form>
              <p>Email address</p>
              <input type='text' placeholder='Kanny@zealy.io'/>
            </form>
            <div className='email-btn'>
            <a><button>Log in with Email</button></a>
            </div>

          </div>
        </div>
        </div>
        </div>

        {/* RIGHT SECTION  */}
        <div className=' login-right col-7 bg-danger'>
          <img src='https://zealy.io/_next/static/media/portal-lg.9a17dc83.webp'/>
        </div>
      </div>
      {/* HEADER DONE HERE */}
      
    </div>
  )
}

export default Login
