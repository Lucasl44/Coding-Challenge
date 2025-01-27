import React, { useState, useRef, useEffect } from 'react';
import { PollOptionStyled } from './styledComponents/pollOptionStyled.js';
import { PercentageStyled } from './styledComponents/percentageStyled.js';

export const PollOption = ({option, setSelectedOption, selectedOption, percentage, voted, count}) => {
  return (
    <PollOptionStyled
      voted={voted}
      percentage={percentage}
      selectedOption={selectedOption}
      option={option}
      disabled={voted}
      onClick={() => setSelectedOption(option)}>
      {option}
      {voted && (
        <PercentageStyled>{percentage.toFixed(1)}%</PercentageStyled>
      )}
    </PollOptionStyled>
  )
}
