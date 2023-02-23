import './Service.css';
//import { useState } from 'react';

import React, { useState } from "react";

function Service() {
  // Use state hook to store whether the mouse is over the box or not
  const [isHovered, setIsHovered] = useState(false);

  // Define a function to handle mouse enter event
  const handleMouseEnter = () => {
    setIsHovered(true); // Set state to true
  };

  // Define a function to handle mouse leave event
  const handleMouseLeave = () => {
    setIsHovered(false); // Set state to false
  };

  return (
    <div className="scontainer mica">
      {/* This is the box element that triggers the hover effect */}
      <div
        className="sbox"
        onMouseEnter={handleMouseEnter} // Attach mouse enter handler
        onMouseLeave={handleMouseLeave} // Attach mouse leave handler
      >
        Hover over me!
      </div>
      {/* This is the content element that shows up when hovered */}
      {isHovered && ( // Use conditional rendering based on state
        <div className="scontent">
          Hello! I'm a hover box!
        </div>
      )}
    </div>
  );
}

export default Service;

