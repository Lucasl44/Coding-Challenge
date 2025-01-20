import React, { useState, useRef, useEffect } from 'react';

export const TitlePage = ({currentPollQuestion}) => {
  return (
    <div>
      {currentPollQuestion()}
    </div>
  )
}
