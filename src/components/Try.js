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

            
                <div className='contain-data short'>
          <span ><img src='https://crew3-production.s3.eu-west-3.amazonaws.com/public/7ir96qxldqr5kvkg2tkhkxx48l1yvexg-logo.png'/><h1>RocKDAO</h1></span>
          <p>Supports, Invests and Educates.🌐 It's just 
            zksync focused.</p>
          <div>
            <ul>
              <li><a><i class="bi bi-link-45deg"></i></a></li>
              <li><a><i class="bi bi-lightning-fill"></i></a>33</li>
              <li><a><i class="bi bi-person-fill"></i>9.6k</a></li>
              <li><a><i class="bi bi-twitter"></i></a>57k</li>
            </ul>
          </div>
          </div>  

              <div className='contain-data'>
          <span ><img src='https://crew3-production.s3.eu-west-3.amazonaws.com/public/fy89pjrzjfbjefzgu3twl3p-xsx6ohf--logo.png'/><h1>Money Heist</h1></span>
          <p>#HAQQnetwork is a scalable and interoperable Ethereum-compatible blockchain built on Proof-of-Stake with fast finality. ISLM is the native currency of HAQQ.</p>
          <div>
            <ul>
              <li><a><i class="bi bi-link-45deg"></i></a></li>
              <li><a><i class="bi bi-lightning-fill"></i></a>33</li>
              <li><a><i class="bi bi-person-fill"></i>9.6k</a></li>
              <li><a><i class="bi bi-twitter"></i></a>57k</li>
            </ul>
          </div>
          </div>

              <div className='contain-data'>
          <span ><img src='https://crew3-production.s3.eu-west-3.amazonaws.com/public/3b39d9a1-82b9-4401-ab82-f8e06598ce50-profile.png'/><h1>Venom Türkiye - Nft Müfettişi</h1></span>
          <p>Bu bir Venom Türkiye & Nft müfettişi ortak etkinliğidir. 31.07.23 - 21.08.23 tarihlerini kapsar. 200XP üzerine sahip 10 kişi toplam 300$ USDT ödülü paylaşacaktır. Kazananlar kura ile belirlenecek, https://t.me/Venom_Turkiye adresinden duyurulacaktır.</p>
          <div>
            <ul>
              <li><a><i class="bi bi-link-45deg"></i></a></li>
              <li><a><i class="bi bi-lightning-fill"></i></a>33</li>
              <li><a><i class="bi bi-person-fill"></i>9.6k</a></li>
              <li><a><i class="bi bi-twitter"></i></a>57k</li>
            </ul>
          </div>
          </div>
          
          
    </div>
    </div>
  )
}

export default New_communities