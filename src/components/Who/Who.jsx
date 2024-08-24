import React from 'react'
import './Who.css'
import Box from '../Box/Box'
export default function Who() {
  return (
    <div className="who-section">
      <div className="who-container">
        <div className="who-left">
        <Box/>
        </div>
        <div className="who-right">
          <h1>Think outside the square space.</h1>
          <div className='who-what-we-do'>
            <img src="./img/line.png" alt="hii"/>
            <h2>Who we Are</h2>
          </div>
          <p className='who-desc'>
            A creative group of designers and developers with a passion for the
            arts.
          </p>
          <button className='who-btn'>See our works</button>

        </div>
      </div>
    </div>
  )
}
