import React, { useState, useRef, useEffect } from 'react';

export const TitlePage = () => {
  const [poll, setPoll] = useState('');
  useEffect(() => {
    fetch('api/active')
      .then((response) => response.json())
      .then((data) => setPoll(data))
      .catch((err) => console.error('Error fetching poll:', err))
  })
  return (
    <div>
      {poll}
    </div>
  )
};
