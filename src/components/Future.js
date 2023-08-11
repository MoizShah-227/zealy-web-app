import React from 'react'
import '../components_CSS/future.css'
const Future = () => {
  return (
    <div className='future-container mt-4'>
        <div className='row future-data'>
            <div className='col-12'>
                <img src='https://zealy.io/nstatic/discord-world.webp'/>
                <div className='future-content mt-lg-5 mx-lg-5 mt-md-0 mx-md-3 mt-sm-0 mx-sm-2'>
                    <h3>Dare to shape the future with us.</h3>
                    <p>Whether you are a contributor or a community manager, you will find what you are looking for.</p>
                    <a href='#'><button className='btn'>Join our community</button></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Future
