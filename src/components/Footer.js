import React from 'react'
import '../components_CSS/footer.css';
import Logo from '../Imges/Logo2.svg'
const Footer = () => {
  return (
    <div className='footer-container'>
      <section className="footer mt-4">
                <div className="footer-data">
                    <div className="row pt-3">
                        <div className=" logo-side text-left col-md-3 col-12">
                            <img src={Logo} alt="#" width={100} />
                            <p className='text mt-4'>Become part of the most exciting communities in the world. Explore new horizons, achieve the impossible, and make a difference - all while having fun and earning rewards. It's that simple.</p>
                            <div className=" icons m-0">
                            <a href="#" ><i className="fab fa-snapchat-ghost p-2"></i></a>
                            <a href="#"><i className="fab fa-facebook-f p-2 "></i></a>
                            <a href="#"><i className="fab fa-instagram p-2 "></i></a>
                            </div>

                        </div>

                        <div className="col-md-3 col-12 ">
                            <div>
                            <h4 className="text-left footer-heading mx-3">LEARN</h4>
                            <div  className=" text-left "><a href="#" ><button  type="button" className="btn" >Blog</button></a></div>
                            <div  className=" text-left "><a href="#" ><button  type="button" className="btn ">FAQs</button></a></div>
                            <div  className=" text-left "><a href="#" ><button  type="button" className="btn ">Documention</button></a></div>
                           </div>
                        </div>

                        <div className="mt-md-0 mt-4 col-md-3 col-12">
                            <div>
                                <h4 className="text-left footer-heading mx-3">GET STARTED</h4>
                                <div  className=" text-left "><a href="#" ><button  type="button" className="btn ">Create an account</button></a></div>
                                <div  className=" text-left "><a href="#" ><button  type="button" className="btn ">Log in</button></a></div>
                                <div  className=" text-left "><a href="#" ><button  type="button" className="btn ">Create a community</button></a></div>
                                
                            </div>
                        </div>

                        <div className="mt-md-0 mt-4 col-md-3 col-12">
                            <div>
                                <h4 className="text-left footer-heading mx-3">Resources</h4>
                                <div  className=" text-left "><a href="#" ><button  type="button" className="btn ">About</button></a></div>
                                <div  className=" text-left "><a href="#" ><button  type="button" className="btn ">Careers</button></a></div>
                                <div  className=" text-left "><a href="#" ><button  type="button" className="btn ">Email us</button></a></div>
                                <div  className=" text-left "><a href="#" ><button  type="button" className="btn ">Contact support</button></a></div>
                                <div  className=" text-left "><a href="#" ><button  type="button" className="btn ">Cookie preferences</button></a></div>
                                
                            </div>
                        </div>
                    </div>
                </div>
              </section>
        
        <div className='last-data'>
            <div className='row'>
                <ul>
                    <li>
                        <p></p>
                    <a href=''></a>
                    <a href=''></a>
                    <a href=''></a>
                    </li>
                    <li>
                        <a>logo</a>
                        <a>logo</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer
