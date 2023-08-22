import React from 'react'
import '../../components_CSS/PagesCss/what_is_zealy.css'
import { Link } from 'react-router-dom'
import Zealy_Doc from './Zealy_Doc'
const XPTable = () => {
  return (
    <div className='doc-container what-is-zealy'>        
        <div className='row'>
        <div className='col-3'>
        <Zealy_Doc/>
        </div>
        <div className='col-9'>
        <div className='contain-zealy-data container xp-table'>
          <div className='scroll-model '>
          <div className='content xp-content container'>
            <div>
                
              <h1 className='mt-3'>XP table</h1>

            <p className='mt-4 xp-text'>
            In Zealy each <span className='bold-text'>step to next level</span> is defined by the following calculation: <span className='bold-text'>level * 300 - 500</span>
            </p>

            <div className='box-1'>
                <p className='pt-1 px-4'><span className='equ-text'> 150 * </span>lvl <span className='equ-text'>^2 - 350 * </span> lvl <span className='equ-text'>+200</span> TOTAL XP</p>
            </div>
            </div>
            <p className='mt-4'>For example, to reach Level 3 you need a total of 500 XP:</p>
            
            <div className='mx-4'>
                <li className='m-2'>100 XP to get Level 2,</li>
                <li className='m-2'>and 400 XP to get Level 3.</li>

            </div>

                <div className='table-container mt-5'>
                <table class="table">
                        <thead>
                            <tr className='head'>

                            <th scope="col">Level</th>
                            <th scope="col">Required XP</th>
                            <th scope="col">Total XP</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                            <tr>
                            <td scope="row">1</td>
                            <td>0</td>
                            <td>0</td>
                            </tr>

                            <tr>
                            <td scope="row">2</td>
                            <td>100</td>
                            <td>100</td>
                            </tr>
                            
                            <tr>
                            <td scope="row">3</td>
                            <td>400</td>
                            <td>500</td>
                            </tr>

                            <tr>
                            <td scope="row">4</td>
                            <td>700</td>
                            <td>1200</td>
                            </tr>

                            <tr>
                            <td scope="row">5</td>
                            <td>1000</td>
                            <td>2200</td>
                            </tr>
                            
                            <tr>
                            <td scope="row">6</td>
                            <td>1300</td>
                            <td>3500</td>
                            </tr>
                            
                            <tr>
                            <td scope="row">7</td>
                            <td>1600</td>
                            <td>5100</td>
                            </tr>
                            <tr>
                            <td scope="row">8</td>
                            <td>1900</td>
                            <td>7000</td>
                            </tr>
                            
                            <tr>
                            <td scope="row">9</td>
                            <td>2200</td>
                            <td>9200</td>
                            </tr>


                        </tbody>
                        </table>
                </div>

            <div className='bottom-btn mt-4'>
            
            <Link className='item-1 item d-flex' to="/Zealy_Doc/what_is_zealy/Create_your_community">
            
            <li>
            <Link to="/Zealy_Doc/what_is_zealy/LeaderBoard" className='text-right'>LeaderBoard</Link>
            </li>
            </Link>
            
            <div className='item-2 item d-flex'>
            <li><Link to="/Zealy_Doc/what_is_zealy/LeaderBoard/OrganizeSprint">Organize a sprint</Link></li>
            </div>
                   
            </div>          
          </div>
          </div>

            
          {/* This is End */}
        </div>          
        </div>
        </div>
    </div>
  )
}

export default XPTable;
