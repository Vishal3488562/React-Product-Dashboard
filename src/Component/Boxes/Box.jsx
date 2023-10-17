import React from 'react'
import './Box.css'

function Box() {
  return (
    <div className='second-container'>
       <div className="container">
         <div className="img">
            <img src="https://cdn-icons-png.flaticon.com/128/8079/8079768.png" className='image' alt=""/>
         </div>
         <div className="about">
            <div id="type">Earning</div>
            <div id="money">$190k</div>
            <div id="month"><span class="material-symbols-outlined" id='up'>
arrow_upward 
</span><span id='inc-percent'>37.8%</span> this month</div>
         </div>
        </div> 
       <div className="container">
         <div className="img">
            <img src="https://cdn-icons-png.flaticon.com/128/10109/10109276.png" className='image' alt=""/>
         </div>
         <div className="about">
         <div id="type">Orders</div>
            <div id="money">$2.4k</div>
            <div id="month"><span class="material-symbols-outlined" id='down'>
arrow_downward
</span><span id='dec-percent'>2.8%</span> this month</div>
         </div>
        </div> 
       <div className="container">
         <div className="img">
            <img src="https://cdn-icons-png.flaticon.com/128/4402/4402521.png" className='image' alt=""/>
         </div>
         <div className="about">
         <div id="type">Balance</div>
            <div id="money">$190k</div>
            <div id="month"><span class="material-symbols-outlined" id='down'>
arrow_downward
</span><span id='dec-percent'>2%</span> this month</div>
         </div>
        </div> 
       <div className="container">
         <div className="img">
            <img src="https://cdn-icons-png.flaticon.com/128/6427/6427243.png"  className='image' alt=""/>
         </div>
         <div className="about">
            <div id="type">Total Sales</div>
            <div id="money">$89k</div>
            <div id="month"><span class="material-symbols-outlined" id='up'>
arrow_upward 
</span><span id='inc-percent'>11%</span> this month</div>
         </div>
        </div> 
    </div>
  )
}

export default Box
