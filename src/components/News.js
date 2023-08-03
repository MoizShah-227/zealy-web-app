import React from 'react'

import '../components_CSS/news.css';
const News = () => {
  return (
    <div className='news news-container mt-5'>
    <div className='contain-news'>
        <div className='row '>
            <div className='col-lg-6 col-md-12 mb-sm-3 trans-1'>
            <div className='img1'>
                <a href=''>
                <img src="https://zealy.io/_next/static/media/blue.a730ee33.webp"/>
                    <img className='flower-img' src="https://zealy.io/_next/static/media/plant.ee0d6081.webp"/>
                <div className='news-info pt-5 px-5 mb-sm-3'>
                <h3>Exciting news!</h3>
                <h3>Zealy's community is</h3>
                <h3>launching</h3>
                <p className='mt-1'>join us to part of the movement</p>
                <button>Learn more<i class="bi bi-arrow-right mx-1"></i></button>
                </div>
                </a>
            </div>
            </div>
            
            <div className='col-lg-6 col-md-12 trans-1'>
            <div className='img2'>
                <a href=''>
                <img src="https://zealy.io/_next/static/media/pink.2ba25a53.webp"/>
                <div className='news-info pt-5 px-5'>
                <h3>New name,</h3>
                <h3>same awesome product</h3>
                <p className='mt-1'>Crew3 is now Zealy. We're excited to share <br/>our new name and bradn with you</p>
                <button className='btn new-btn-2' href="#">Learn more<i class="bi bi-arrow-right mx-1"></i></button>
                </div>
                </a>
            </div>
            
            </div>
        </div>
    </div>
    </div>
  )
}

export default News
