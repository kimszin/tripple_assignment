import React from 'react'
import styled, {keyframes} from 'styled-components'
import img from '/public/img/triple2x.png';

export default function ContentLogo() {
  return (
    <Wrapper>2021년 12월 기준</Wrapper>
  )
}

const move = keyframes`
  0% {
    opacity: 0;
    transform: translateY(10px);
  }
  100% {
    opacity: 1;
    transform: none;
  }
`;

const Wrapper = styled.div`
  box-sizing: border-box;
  background-image: url(${img.src});
  background-repeat: no-repeat;
  text-align: center;
  font-family: sans-serif;
  color: rgba(58, 58, 58, 0.7);
  position: absolute;
  top: 150px;
  width: 400px;
  height: 338px;
  background-size: 400px 338px;
  padding-top: 280px;
  font-size: 15px;
  animation: ${move} 700ms ease-in;
`;
