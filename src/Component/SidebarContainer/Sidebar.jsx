import React, { Component } from 'react'
import './Sidebar.css'

function Sidebar() {
  return (
    <>
     <div className='sidecontainer'>
      <div className="top-bar">
      <img src="https://cdn-icons-png.flaticon.com/128/1828/1828765.png" alt=""className='sideimg'/>
      <div className="head">Dashboard</div>
      </div> 
      <div className="middle">
        <div className="sideElement">
        <img src="https://cdn-icons-png.flaticon.com/128/1828/1828765.png" alt=""className='sideimg'/>
        <div className="innerelement">Dashboard</div>
        </div>
        <div className="sideElement">
        <img src="https://cdn-icons-png.flaticon.com/128/9083/9083261.png" alt=""className='sideimg'/>
        <div className="innerelement">Product</div>
        </div>
        <div className="sideElement">
         <img src="https://cdn-icons-png.flaticon.com/128/11478/11478510.png" alt=""className='sideimg'/>
        <div className="innerelement">Costomers</div>
        </div>
        <div className="sideElement">
        <img src="https://cdn-icons-png.flaticon.com/128/2655/2655312.png" alt=""className='sideimg'/>
        <div className="innerelement">Income</div>
        </div>
        <div className="sideElement">
        <img src="https://cdn-icons-png.flaticon.com/128/372/372754.png" alt=""className='sideimg'/>
        <div className="innerelement">Promote</div>
        </div>
        <div className="sideElement">
         <img src="https://cdn-icons-png.flaticon.com/128/11647/11647246.png" alt=""className='sideimg' />
        <div className="innerelement">Help</div>
        </div>      
        </div> 
      <div className="bottom"></div> 
      </div>
    </>
  )
}

export default Sidebar
