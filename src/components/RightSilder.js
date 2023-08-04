import React from 'react'
import Slider from "eact-slick";
const RightSilder = () => {
     
        const settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1
        };
    return (
        <>
        <h2>It's Working...</h2>
        <Slider {...settings}>
        {[1,2,3,4].map ((item, index) => {return <div key={index}>{}</div>})}
        </Slider>
        </>
  )
}

export default RightSilder;
