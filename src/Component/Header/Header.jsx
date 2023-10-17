import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className='top'>
      <div className="name-of-seller">
        <div className="nameof">Hi Vishal Gupta</div>
        <img src="https://cdn-icons-png.flaticon.com/128/2339/2339874.png" alt="" className='imageofhii'/>
      </div>
      <div className="search-box">
        <input type= "search" placeholder='Search-box' className='header-search'/>
      </div>
    </div>
  )
}

export default Header
