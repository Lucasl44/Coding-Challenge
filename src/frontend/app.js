import React, { useState, useRef, useEffect } from 'react';
import { PollComponent } from './components/pollComponent.js';
import backgroundImage from '../../images/backgroundimage.jpg';

const style = {
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: 'cover',
  height: '100vh',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat'
}

export const App = () => {
  return (
    <div style={style}>
      <PollComponent/>
    </div>
  );
};
