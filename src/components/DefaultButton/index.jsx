import React, { useState } from 'react';

import './defaultButton.css'

const DefaultButton = (props) => {
  const [isHovered, setIsHovered] = useState(false);

  const style = {
    backgroundColor: props.backgroundColor,
    color: props.color,
    opacity: isHovered ? 0.8 : 1
  };

  return (
    <div
      style={style}
      onClick={props.onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className='default-button'
    >
      {props.text}
    </div>
  );
};

export default DefaultButton;
