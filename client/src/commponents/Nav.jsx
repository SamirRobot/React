import React from 'react'
import "./nav.css"
import "../index.css"

const Nav = () => {
  return (
      <div className="nav container">
        <div className="logo">
          <img src="https://garden-2qdn.vercel.app/assets/logo-Bs1hipos.svg" alt="" />
          <h1>Gardena</h1>
        </div>
        <div className="input">
          <input type="text"  placeholder='Search...'/>
          <h1>Menu</h1>
          <img src="data:image/svg+xml,%3csvg%20width='46'%20height='46'%20viewBox='0%200%2046%2046'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3ccircle%20cx='4.6'%20cy='4.6'%20r='4.6'%20fill='white'/%3e%3ccircle%20cx='4.6'%20cy='23'%20r='4.6'%20fill='white'/%3e%3ccircle%20cx='4.6'%20cy='41.4'%20r='4.6'%20fill='white'/%3e%3ccircle%20cx='23'%20cy='4.6'%20r='4.6'%20fill='white'/%3e%3ccircle%20cx='23'%20cy='23'%20r='4.6'%20fill='white'/%3e%3ccircle%20cx='23'%20cy='41.4'%20r='4.6'%20fill='white'/%3e%3ccircle%20cx='41.4'%20cy='4.6'%20r='4.6'%20fill='white'/%3e%3ccircle%20cx='41.4'%20cy='23'%20r='4.6'%20fill='white'/%3e%3ccircle%20cx='41.4'%20cy='41.4'%20r='4.6'%20fill='white'/%3e%3c/svg%3e" alt="" />
        </div>
      </div>
  )
}

export default Nav