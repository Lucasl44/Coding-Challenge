import React, { useState, useRef, useEffect } from 'react';

export const PollOption = ({option, setSelectedOption, selectedOption, percentage, voted, count}) => {
  return (
    <button style={{
      width: '50%',
      padding: '10px',
      fontSize: '16px',
      marginBottom: '10px',
      background: voted ? `linear-gradient(to right, #4caf50 ${percentage}%, #f0f0f0 ${percentage}%)` : '#f0f0f0',
      border: selectedOption === option ? '2px solid #4caf50' : '1px solid #ccc',
      borderRadius: '8px',
      cursor: voted ? 'not-allowed' : 'pointer'              
    }} disabled={voted} onClick={() => setSelectedOption(option)}>
      {option}
      {voted && (
        <span style={{float: 'right'}}>{percentage.toFixed(1)}%</span>
      )}
    </button>
  )
}
