import React from 'react'
import "./Footer.css"
import "../index.css"
import { BsGoogle } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { SiFacebook } from "react-icons/si";

const Footer = () => {
  return (
    <div className="content4">
        <div className="Footer container">
            <div className="pickImg">
                <img src="https://garden-2qdn.vercel.app/assets/log45-DenVOc-k.svg" alt="" />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
            </div>  
            <div className="icons11">
                <p>Social</p>
                <div className="image">
                    <SiFacebook  className='icon'/>
                    <FaTwitter  className='icon'/>
                    <FaLinkedin  className='icon'/>
                    <BsGoogle className='icon' />
                </div>
            </div>      
        </div>
            <h1>gardena.com© all right reserve</h1>
    </div>
  )
}

export default Footer