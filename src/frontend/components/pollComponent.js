import React, { useState, useRef, useEffect } from 'react';
import { PollOptions } from './pollOptions.js';
import { TitlePage } from './titlePage.js';

const style = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  width: '100%'
}

export const PollComponent = () => {
  const [poll, setPoll] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [voted, setVoted] = useState(false);
  useEffect(() => {
    fetch('api/polls/active/poll')
      .then((response) => response.json())
      .then((data) => {
        setPoll(data);
        setIsLoading(false);
      })
      .catch((err) => console.error('Error fetching poll:', err))
  }, [voted]);
  if (isLoading) {
    return <p>Loading active poll</p>
  }

  if (!poll) {
    return <p>No active poll available</p>
  }
  return (
    <div style={style}>
      <TitlePage question={poll.question} voted={voted}/>
      <PollOptions poll={poll} setVoted={setVoted} voted={voted}/>
    </div>
  )
}
