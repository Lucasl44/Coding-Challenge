import styled from 'styled-components';

export const PollOptionStyled = styled.button`
  width: 30%;
  padding: 10px;
  margin-bottom: 2%;
  border-radius: 8px;
  opacity: 0.8;
  cursor: ${props => props.voted ? 'not-allowed' : 'pointer'};
  font-size: ${props => props.selectedOption === props.option ? '2.1vw' : '2vw'};
  background: ${props => props.voted ? `linear-gradient(to right, #cbc3e3 ${props.percentage}%, #f0f0f0 ${props.percentage}%)` : '#f0f0f0'};
  border: ${props => props.selectedOption === props.option ? '3px solid #5d3fd3' : '3px solid #ccc'};
`;
