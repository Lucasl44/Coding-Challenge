import React, { useState, useRef, useEffect } from 'react';

const style = {
  marginTop: '20px',
  padding: '10px 20px',
  fontSize: '16px',
  background: '#007bff',
  color: 'white',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer'
};

export const SubmitButton = ({handleVote}) => {
  return (
    <button
      onClick={handleVote}
      style={style}>
      Submit
    </button>
  )
}
