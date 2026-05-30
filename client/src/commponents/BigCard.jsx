import React from 'react'
import "./BigCard.css"
import "../index.css"
import Star from "../assets/star.png"

const BigCard = () => {
  return (
    <div className="fon2">
      <div className="qutu container">
        <h1>Customer Review</h1>
        <div className="foto_text">
          <div className="foto">
            <img src="https://garden-2qdn.vercel.app/assets/people-DFYU4EQD.jpg" alt="" />
          </div>
          <div className="text_center">
              <div className="text">
                  <h1>4.2</h1>
                  <img src={Star} alt="" />
                </div>
                <div className="text2">
                  <h1>Danny Sena</h1>
                  <h3>Co-Founder of XYZ Company</h3>
                </div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                  <h2>Drop Comment</h2>
              </div>
        </div>
      </div>
    </div>
  )
}

export default BigCard