
import React from 'react'

import './Footer.css'

function Footer() {
  return (
       <div className="lower-box">
         <div className="heading">
           <div className="name-of">Product Sell</div>
           <input type="search" placeholder='Search' className='search-bar' />
           <select name="" id="" placeholder='last 30 days' className='select-box' >
            <option value="last 30 days">last 30 days</option>
           </select>
         </div>
         <div className="middle-bar">
           <div className="product-name">Product Name</div>
           <div className="stock-heading">stock</div>
           <div className="price-heading">price</div>
           <div className="Total-sales">Total sales</div>
         </div>
         <div className="item">
           <img src="https://images.unsplash.com/photo-1618172193763-c511deb635ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fDNkJTIwYWJzdHJhY3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="" className='photo'/>
           <div className="item-list">
             <div className="item-name">Abstract 3d</div>
             <div className="item-name">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
           </div>
             <div className="stock-rate">32 in stock</div>
             <div className="price-of">$45.99</div>
             <div className="total-sale">20</div>
         </div>
         <div className="item" id='bottom-item'>
           <img src="https://images.unsplash.com/photo-1625014618427-fbc980b974f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8M2QlMjBhYnN0cmFjdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt=""className='photo' />
           <div className="item-list">
             <div className="item-name">Abstract 3d</div>
             <div className="item-name">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
           </div>
             <div className="stock-rate">32 in stock</div>
             <div className="price-of">$45.99</div>
             <div className="total-sale">20</div>
         </div>
       </div>
  )
}

export default Footer
