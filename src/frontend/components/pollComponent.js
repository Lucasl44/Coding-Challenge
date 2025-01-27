import React, { useState, useRef, useEffect } from 'react';
import { PollOptions } from './pollOptions.js';
import { TitlePage } from './titlePage.js';
import { ErrorStyled } from './styledComponents/errorStyled.js';
import { PollComponentStyled } from './styledComponents/pollComponentStyled.js';

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
    return <ErrorStyled>Loading active poll</ErrorStyled>
  }

  if (!poll.question) {
    return <ErrorStyled>No active poll available</ErrorStyled>
  }
  return (
    <PollComponentStyled>
      <TitlePage question={poll.question} voted={voted}/>
      <PollOptions poll={poll} setVoted={setVoted} voted={voted}/>
    </PollComponentStyled>
  )
}
