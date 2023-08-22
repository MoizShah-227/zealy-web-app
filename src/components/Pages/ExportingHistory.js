import React from 'react'
import '../../components_CSS/PagesCss/what_is_zealy.css'
import { Link } from 'react-router-dom'
import Zealy_Doc from './Zealy_Doc'
const ExportingHistory = () => {
  return (
    <div className='doc-container what-is-zealy'>        
        <div className='row'>
        <div className='col-3'>
        <Zealy_Doc/>
        </div>
        <div className='col-9'>
        <div className='contain-zealy-data container'>
          <div className='scroll-model '>
          <div className='content container'>
            <div>
                
              <h1 className='mt-3 mx-2'>Exporting the history</h1>
                <div className='mt-5'>
                <p><span className='bold-text px-2'>1.</span>Go to the Reviews tab</p>
                <p><span className='bold-text px-2'>2.</span>Click the History button </p>
                <p><span className='bold-text px-2'>3.</span>Click Export CSV</p>
                </div>
    
           
            <div className='bottom-btn mt-4'>
            
            <Link className='item-1 item d-flex'>
            
            <li>
            <Link to="/Zealy_Doc/what_is_zealy/Reviews" className='text-right'>Reviews</Link>
            </li>
            </Link>
            
            <div className='item-2 item d-flex'>
            <li><Link to="/Zealy_Doc/what_is_zealy/Integrations">Integrations</Link></li>
            </div>
                   
            </div>          
          </div>
          </div>

            
          {/* This is End */}
        </div>          
        </div>
        </div>
        </div>
    </div>
  )
}

export default ExportingHistory;
