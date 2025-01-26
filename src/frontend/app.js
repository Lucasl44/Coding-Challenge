import React, { useState, useRef, useEffect } from 'react';
import { TitlePage } from './components/titlePage.js';
import { Poll } from './components/poll.js';

export const App = () => {
  return (
    <div>
      <TitlePage/>
      <Poll/>
    </div>
  );
};
