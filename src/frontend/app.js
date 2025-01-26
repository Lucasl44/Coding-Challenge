import React, { useState, useRef, useEffect } from 'react';
import { PollComponent } from './components/pollComponent.js';

export const App = () => {
  const [poll, setPoll] = useState();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch('api/polls/active/poll')
      .then((response) => response.json())
      .then((data) => {
        setPoll(data);
        setIsLoading(false);
      })
      .catch((err) => console.error('Error fetching poll:', err))
  }, []);
  if (isLoading) {
    return <p>Loading active poll</p>
  }

  if (!poll) {
    return <p>No active poll available</p>
  }
  
  return (
    <div>
      <PollComponent poll={poll}/>
    </div>
  );
};
