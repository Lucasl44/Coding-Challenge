import React, { useState, useRef, useEffect } from 'react';
import { PollOption } from './pollOption.js';

export const Poll = () => {
  const getPollOptions = () => ['Option 1', 'Option 2', 'Option 3'];
  const pollOptions = getPollOptions();
  return (
    <div>
      {pollOptions.map(option => <PollOption option={option}/>)}
    </div>
  )
}
