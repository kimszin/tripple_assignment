import React, { useEffect } from 'react'
import styled, {keyframes} from 'styled-components'

export default function MetricsContainer() {
  const counter = ($counter: any, max: number, divideNum: number) => {
    let now = max;
    const handle = setInterval(() => {
      $counter.innerHTML = Math.ceil(max - now);
      if (now < 0) {
        clearInterval(handle);
      }
      const step = now / divideNum;
      now -= step;
    }, 50);
  }

  useEffect(() => {
    counter(document.querySelector(".traveler"), 700, 6);
    counter(document.querySelector(".review"), 100, 8);
    counter(document.querySelector(".schedule"), 470, 6);
  }, []);
  
  return (
    <Wrapper>
      <MetricItem>
        <strong><span className='traveler'></span>만 명</strong>의 여행자
      </MetricItem>
      <MetricItem>
        <strong><span className='review'></span>만 개</strong>의 여행 리뷰
      </MetricItem>
      <MetricItem>
        <strong><span className='schedule'></span>만 개</strong>의 여행 일정
      </MetricItem>
    </Wrapper>    
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
  margin-left: 623px;
  padding-top: 150px;
  animation: ${move} 700ms ease-in 100ms;
`;
const MetricItem = styled.div`
  font-size: 36px;
  letter-spacing: -1px;
  margin-bottom: 20px;
  color: rgb(58, 58, 58);
  font-family: sans-serif;
`;
