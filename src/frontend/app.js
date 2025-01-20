import React, { useState, useRef, useEffect } from 'react';
import { TitlePage } from './components/titlePage.js';
import { Poll } from './components/poll.js';

export const App = () => {
  const [el, setEl] = useState(null);
  const style = {
  };
  const currentPollQuestion = () => 'A question?';
  return (
    <div>
      <TitlePage currentPollQuestion={currentPollQuestion}/>
      <Poll/>
    </div>
  );
};
