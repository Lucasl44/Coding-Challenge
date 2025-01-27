import React, { useState, useRef, useEffect } from 'react';
import { SubmitButtonStyled } from './styledComponents/submitButtonStyled.js';

export const SubmitButton = ({handleVote}) => {
  return (
    <SubmitButtonStyled onClick={handleVote}>
      Submit
    </SubmitButtonStyled>
  )
}
