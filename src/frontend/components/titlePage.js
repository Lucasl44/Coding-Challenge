import React, { useState, useRef, useEffect } from 'react';
const style = {
  fontSize: '3vw',
  marginBottom: '2.5%',
  color: 'white',
  marginTop: '5%'
}
export const TitlePage = ({question, voted}) => {
  return (
    <div style={style}>
    {!voted ? question : "Thank you for your response"}
    </div>
  )
};
