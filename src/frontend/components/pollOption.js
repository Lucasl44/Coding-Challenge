import React, { useState, useRef, useEffect } from 'react';

export const PollOption = ({option}) => {
  const handleVote = () => {
    fetch(`/api/polls/${poll.id}`)
  }
  return (
    <button>
      {option}
    </button>
  )
}
