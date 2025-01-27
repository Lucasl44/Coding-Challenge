import React, { useState, useRef, useEffect } from 'react';
import { SubmitButton } from './submitButton.js';
import { PollOption } from './pollOption.js';

const style = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  width: '100%'
}

export const PollOptions = ({poll, setVoted, voted}) => {
  const [selectedOption, setSelectedOption] = useState('');
  const {options, id, votes} = poll;
  const handleVote = () => {
    try {
    fetch(`/api/polls/${id}/vote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        pollId: id,
        option: selectedOption
      })
    }).then(() => {
      setVoted(true);
      setSelectedOption('')
    });
    } catch (err) {
      console.error('Failed to submit vote', err);
    }
  }
  const totalVotes = votes.length;
  const optionPercentages = options.map((option) => {
    const count = votes.filter((vote) => vote.option === option).length;
    const percentage = totalVotes ? (count / totalVotes) * 100 : 0;
    return {option, percentage};
  });
  
  return (
    <div style={style}>
      {optionPercentages.map(({option, percentage}, index) => 
        <PollOption key={index} option={option} percentage={percentage} setSelectedOption={setSelectedOption} selectedOption={selectedOption} voted={voted}/>
      )}
      {!voted && <SubmitButton handleVote={handleVote}/>}
    </div>
  )
}
