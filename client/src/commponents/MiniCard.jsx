import React from 'react'
import "../commponents/MiniCard.css"
import "../index.css"
import Heart from "../assets/Heart.png"
import basket from "../assets/basket.png"

const MiniCard = () => {
  return (
    <div className="fon">
        <div className="bigBoxs container">
            <div className="box1">
                <img src="https://garden-2qdn.vercel.app/assets/Rose-BwspZQ1f.svg" alt="" />
                    <div className="heart">
                        <img src={Heart} alt="" />
                    </div>
                <h1>Air Bedroom Plant</h1>
                <h2>₹450.00</h2>
                <div className="basket">
                    <img src={basket} alt="basket" />
                </div>
            </div>
            <div className="box1">
                <img src="https://garden-2qdn.vercel.app/assets/Rose2-ERkG1HW-.svg" alt="" />
                    <div className="heart">
                        <img src={Heart} alt="" />
                    </div>
                <h1>&ensp; Air Show Plant</h1>
                <h2>₹450.00</h2>
                <div className="basket">
                    <img src={basket} alt="basket" />
                </div>
            </div>
            <div className="box1">
                <img src="https://garden-2qdn.vercel.app/assets/Rose3-Bss9jhHb.svg" alt="" />
                    <div className="heart">
                        <img src={Heart} alt="" />
                    </div>
                <h1>Air Bedroom Plant</h1>
                <h2>₹450.00</h2>
                <div className="basket">
                    <img src={basket} alt="basket" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default MiniCard