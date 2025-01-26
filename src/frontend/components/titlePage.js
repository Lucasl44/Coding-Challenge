import React, { useState, useRef, useEffect } from 'react';
const style = {
  fontSize: '30px',
  marginBottom: '10px',
  color: 'white'
}
export const TitlePage = ({question, voted}) => {
  return (
    <div style={style}>
    {!voted ? question : "Thank you for voting"}
    </div>
  )
};
