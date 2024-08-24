import React from 'react';
import './Works.css';
import Curve from '../Curve/Curve';

const data = [
  "Web Design",
  "Development",
  "Illustration",
  "Product Design",
  "Social Media",
];

export default function Works() {
  return (
    <div className="works-section">
      <div className="work-container">
        <div className="work-left">
          <ul className="items">
            {data.map((item, index) => (
              <li key={index} className="item">
                {item.split('').map((char, i) => (
                  <span key={i}>{char}</span>
                ))}
              </li>
            ))}
          </ul>
        </div>
        <div className="work-right">
          {/* Right section content */}
          <Curve/>
        </div>
      </div>
    </div>
  );
}
