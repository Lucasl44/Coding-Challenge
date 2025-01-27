import React, { useState, useRef, useEffect } from 'react';
import { TitlePageStyled } from './styledComponents/titlePageStyled.js';

export const TitlePage = ({question, voted}) => {
  return (
    <TitlePageStyled>
      {!voted ? question : "Thank you for your response"}
    </TitlePageStyled>
  )
};
