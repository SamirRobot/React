import React from 'react'
import "./hero.css"
import Star from "../assets/star.png"
import Smile from "../assets/Smile.png"
import "../index.css"
import { BsGoogle } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { SiFacebook } from "react-icons/si";


const Hero = () => {
  return (
    <div className='main '> 
      <div className="content2 container">
        <div className="leftText">
          <h1>Keep your Plant alive</h1>
          <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquav</h3>
          <div className="buttons">
            <button className='button1'>Grow Now</button>
            <button className='button2'>Demo Video+</button>
          </div>
        </div>
        <img src="https://garden-2qdn.vercel.app/assets/hiro-img-BUqFi1Gx.svg" alt="" />
        <div className="rigthText">
          <div className="fermerBorder">
            <h3>Garden Maintainer</h3>
            <div className="textStar">
              <h5>4.6 <img src={Star} alt="star" /></h5>
              <h5>|</h5>
              <h5>1.1K<img src={Smile} alt="Smile"/></h5>
            </div>
            <img src="https://garden-2qdn.vercel.app/assets/adam-DCyHHiNB.svg" alt="Fermer" />
          </div>
          <div className="icons">
            <SiFacebook  className='icon'/>
            <FaTwitter  className='icon'/>
            <FaLinkedin  className='icon'/>
            <BsGoogle className='icon' />
          </div>
        </div>
          <div className="h1">Our Products</div>
      </div>
    </div>
  )
}

export default Hero