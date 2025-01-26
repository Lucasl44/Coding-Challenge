import React, { useState, useRef, useEffect } from 'react';
import { PollOption } from './pollOption.js';

export const PollComponent = ({poll}) => {
  console.log(poll);
  return (
    <div>
      {poll.question}
      {poll.options.map((option, index) => <PollOption option={option} key={index}/>)}
    </div>
  )
}
