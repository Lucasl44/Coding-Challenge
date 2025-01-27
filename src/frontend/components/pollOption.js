import React, { useState, useRef, useEffect } from 'react';

export const PollOption = ({option, setSelectedOption, selectedOption, percentage, voted, count}) => {
  const style = {
    width: '30%',
    padding: '10px',
    fontSize: selectedOption === option ? '2.1vw' : '2vw',
    marginBottom: '2%',
    background: voted ? `linear-gradient(to right, #4caf50 ${percentage}%, #f0f0f0 ${percentage}%)` : '#f0f0f0',
    border: selectedOption === option ? '3px solid #CBC3E3' : '3px solid #ccc',
    borderRadius: '8px',
    cursor: voted ? 'not-allowed' : 'pointer',
    opacity: 0.8
  }
  return (
    <button
      style={style}
      disabled={voted}
      onClick={() => setSelectedOption(option)}>
      {option}
      {voted && (
        <span style={{float: 'right'}}>{percentage.toFixed(1)}%</span>
      )}
    </button>
  )
}
