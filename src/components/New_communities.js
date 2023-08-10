import React, { useState } from 'react';
import '../components_CSS/new_ communities.css'; // Import your CSS file

const HorizontalScrollBar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = (direction) => {
    const scrollAmount = 800; // Adjust the scroll amount as needed
    if (direction === 'right') {
      setScrollPosition(scrollPosition - scrollAmount);
    } else if (direction === 'left') {
      setScrollPosition(scrollPosition + scrollAmount);
    }
  };

  return (
    <div className="community-container">
      <div className='contain-heading'>
        <ul>
          <li>
            <h1>New communities</h1>
          </li>
          <li className='d-flex align-items-center show-more-btn'>
              <a>Show More (132)</a>
          <button className="scroll-button" onClick={() => handleScroll('left')}>
          <i class="bi bi-arrow-left"></i>
          </button> 
          <button className="scroll-button" onClick={() => handleScroll('right')}>
          <i class="bi bi-arrow-right"></i>
          </button>
          </li>
        </ul>
      
      </div>

      <div className="community-scroll-content" >
        {/* Your scrollable content goes here */}
          <div className='contain-communities d-flex'>

            <div className='community-data' style={{ transform: `translateX(${scrollPosition}px)` }}>
            <div className='contain-data'>
            <span ><img src='https://crew3-production.s3.eu-west-3.amazonaws.com/public/k-tfyh19pj-tbcvbejogvvuoj5yzwbli-logo.png'/><h1>Haqq</h1></span>
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
            

            
          <div className='contain-data'>
          <span ><img src='https://crew3-production.s3.eu-west-3.amazonaws.com/public/ectrus3dva2mfd33_v6uusq31o0ixx-o-logo.png'/>
          <h1>StepApp</h1></span>
          <p>MOVE. EARN. REPEAT. Web3 move-to-earn app. Get paid for every step you take. Thrive physically, mentally, financially. 👟💪</p>
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
          <span ><img src='https://crew3-production.s3.eu-west-3.amazonaws.com/public/ctixxiokae868fk03f0pp_ki4bhj90mw-logo.png'/><h1>BAKAC</h1></span>
          <p>Aiming to lead the betting & gambling market. Community-driven, fostering innovation & transparency. Empowering game builders & users with BAKAC.</p>
          <div>
            <ul>
              <li><a><i class="bi bi-link-45deg"></i></a></li>
              <li><a><i class="bi bi-lightning-fill"></i></a>40</li>
              <li><a><i class="bi bi-person-fill"></i>2.5k</a></li>
              <li><a><i class="bi bi-twitter"></i></a>11k</li>
            </ul>
          </div>
          </div>


          <div className='contain-data'>
          <span ><img src='https://crew3-production.s3.eu-west-3.amazonaws.com/public/cgkiu0nymi9urtrwwnuoe8a0mkzsbyj9-logo.png'/><h1>Strom Warfare</h1></span>
          <p>A free-to-play strategic card game that features the revolutionary True Ownership model. Storm Warfare players fight on epic WWII battlefronts, collect cards, truly own, control and trade their in-game assets.</p>
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
          <span ><img src='https://crew3-production.s3.eu-west-3.amazonaws.com/public/-mrnvz1cnteb4apirg4a45h_-u02yguy-logo.png'/>
          <h1>Digard - Gaming Universe</h1></span>
          <p>Enjoy the fun with the modern gaming market, convert your in-game assets into NFT collections, upgrade them, earn with our strong community</p>
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
          <span ><img src='https://crew3-production.s3.eu-west-3.amazonaws.com/public/xz8k1gyz-q2w-zvrnwfmxosm6gwe_jsh-logo.png'/>
          <h1>Bitflow</h1></span>
          <p>The Decentralized Exchange for Bitcoiners Trade and earn with bitcoin, without malicious middlemen.</p>
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
          <span ><img src='https://crew3-production.s3.eu-west-3.amazonaws.com/public/hoywnwhywrzeojhsbowiokdbfg3dega6-logo.png'/>
          <h1>ScorpionAI</h1></span>
          <p>ScorpionAI is a project aimed at creating secure AI products, including a platform for intelligent project management and a platform for intelligent security monitoring. The project is also to be distinguished by two NFT products, including Scorpland.</p>
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
          <span ><img src='https://crew3-production.s3.eu-west-3.amazonaws.com/public/i6s8at_zf2hiwpaao_beaq4ql4gdh72i-logo.png'/>
          <h1>Tracker Academy</h1></span>
          <p>A community of Web3 and NFT enthusiasts🤞 First prize pool: 500$</p>
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
          <span ><img src='https://crew3-production.s3.eu-west-3.amazonaws.com/public/4ce2c02f-6659-4176-9227-634c94703197-profile.png'/>
          <h1>CeluvPlay</h1></span>
          <p>“We design, develop and produce original content.” Centering on the celebrity concept, generate NFTs using our original IP “NERDi MOODi”. We are progressing towards expanding our BaaS to various WEB3 online services.</p>
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
          <span ><img src='https://crew3-production.s3.eu-west-3.amazonaws.com/public/sstld7u9ixr9ageknbmb1i57arpvd7we-logo.png'/>
          <h1>YumiCat</h1></span>
          <p>YumiCat is a pioneering Web3 desktop pet that merges AI, GameFi, and SocialFi, creating a unique GameFi experience. YumiCat features a GPT-4 AI voice assistant and enables interactions with users and other virtual cats.</p>
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
          <span ><img src='https://crew3-production.s3.eu-west-3.amazonaws.com/public/b2lwqpv5bbjyf9uoq6znmmbosir_8ivz-logo.png'/>
          <h1>BaseStarter</h1></span>
          <p>Base starter is first launchpad build on Base L2. 100% community own, 0% team token</p>
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
          <span ><img src='https://crew3-production.s3.eu-west-3.amazonaws.com/public/ulpe2psjuzp5-8ynjypfcmz_npkzxuax-logo.png'/>
          <h1>Hunters of Web3</h1></span>
          <p>Biggest Web3 Alpha discord in the world. Provides professional sector solutions and consultancy services.</p>
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
          <span ><img src='https://crew3-production.s3.eu-west-3.amazonaws.com/public/tni9z79rk8lqd1h6odor1chplslnbjss-logo.png'/>
          <h1>Junkyard</h1></span>
          <p>The Junkyard is a decentralized dump owned by a bunch of crazy rats! It's a place where you can throw away your shitty NFTs to clean your wallet while earning some Junkcoins, but it's also a nice way to try your luck at winning some rare NFTs too!</p>
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
          <span ><img src='https://crew3-production.s3.eu-west-3.amazonaws.com/public/cu8qd4khzb7son2-_f2rnyorslkiq_ux-logo.png'/>
          <h1>BaseSwapFi</h1></span>
          <p>Because you really only live once. Decentralized finance leverages the individual and collective capacity of all of us, without interference. Join us on BASE chain now.</p>
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
          <span ><img src='https://crew3-production.s3.eu-west-3.amazonaws.com/public/2qp48zbv3k7v-o0gdbeecgc7c0s4z45h-logo.png'/>
          <h1>zkNebula</h1></span>
          <p>zkNebula is an extraordinary decentralized autonomous organization (DAO) project that has been developed to be entirely community-driven, providing the blockchain community with complete control over all decisions, contributions, and participation.</p>
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
          <span ><img src='https://crew3-production.s3.eu-west-3.amazonaws.com/public/flpkaaz95ay1y4tegmblfyjka5wm_eux-logo.png'/>
          <h1>Twitter Bird</h1></span>
          <p>Twitter Bird Based on Twitter(2006-2023) #TBIRD #TwitterBird #memecoin Bird never die TwitterBird is og is lifestyle is good memory.</p>
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
          <span ><img src='https://crew3-production.s3.eu-west-3.amazonaws.com/public/1e109e23-2d79-40b1-99ed-a092e2e9e1a6-profile.png'/>
          <h1>Galvan Blockchain Community</h1></span>
          <p>New Sprint! At end of Sprint 100,000 IZE Tokens to be Split by Top 50 (Higher Rank = Higher Reward) based on Current Sprint Leaderboard. This is a community to promote Galvan Blockchain and IZE Token. Managed by community not the company.</p>
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
          <span ><img src='https://crew3-production.s3.eu-west-3.amazonaws.com/public/66btmn9tlu7qrv-af62lg2a5arvkjaxz-logo.png'/>
          <h1>Silky Finance</h1></span>
          <p>Silky Finance is a one stop DeFi protocol, providing a series of products on ZKsync to solve the liquidity needs of various projects</p>
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
          <span ><img src='https://crew3-production.s3.eu-west-3.amazonaws.com/public/d6xot2qytppsz9d4ekdfikizybh7ktdv-logo.png'/>
          <h1>Venomart</h1></span>
          <p>First fully-fledged NFT marketplace on venom blockchain 🎨</p>
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
          <span ><img src='https://crew3-production.s3.eu-west-3.amazonaws.com/public/7aud6drpxylm970kiv_dujvf_eujfenb-logo.png'/>
          <h1>Hexton</h1></span>
          <p>Hexton is a crypto asset on Hexa Chain ecosystem, our focus on the Blockchain, defi, schools apps development. we are bron from community and have strongs fundamental</p>
          <div>
            <ul>
              <li><a><i class="bi bi-link-45deg"></i></a></li>
              <li><a><i class="bi bi-lightning-fill"></i></a>33</li>
              <li><a><i class="bi bi-person-fill"></i>9.6k</a></li>
              <li><a><i class="bi bi-twitter"></i></a>57k</li>
            </ul>
          </div>
          </div>

          {/* DEAD LINE */}
          </div>
          </div>
      </div>
      
     
    </div>
  );
};

export default HorizontalScrollBar;
