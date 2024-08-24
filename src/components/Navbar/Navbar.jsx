// Navbar.js
import React from 'react';
import './Navbar.css';

export default function Navbar({ worksRef, whoRef, contactRef }) {

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth',
    });
  };

  return (
    <div className="navbar">
      <div className="container">
        <div className="links">
          <img src="./img/logo.png" alt="" className="logo" />
          <ul className="list">
            <li className="list-item" >Home</li>
            <li className="list-item" onClick={() => scrollToSection(worksRef)}>Works</li>
            <li className="list-item" onClick={() => scrollToSection(whoRef)}>Studio</li>
            <li className="list-item" onClick={() => scrollToSection(contactRef)}>Contact</li>
          </ul>
        </div>
        <div className="icons">
          <img src="./img/search.png" alt="" className="icon" />
          <button className='hire'>Hire Now</button>
        </div>
      </div>
    </div>
  );
}
