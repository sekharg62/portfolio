import React from 'react'
import './Hero.css'
import Navbar from '../Navbar/Navbar'
export default function Hero({ heroRef, worksRef, whoRef, contactRef }) {
  return (
    <div className="hero-section">
      <Navbar
      heroRef={heroRef}
      worksRef={worksRef}
      whoRef={whoRef}
      contactRef={contactRef} />
      <div className="hero-container">
        <div className='hero-left'>
          <h1 className='hero-title'>Think. Make.
            Solve.</h1>
          <div className='what-we-do'>
            <img src="./img/line.png" />
            <h2 className='subtitle'>What we Do</h2>
          </div>
          <div className='hero-description'>
            we enjoy creating delightful, human-centered digital experiences.
          </div>
          <button className='hero-btn'>Learn More</button>
        </div>
        <div className="hero-right">
          <img src="./img/moon.png" alt="" className='hero-image' />
        </div>

      </div>
    </div>
  )
}
