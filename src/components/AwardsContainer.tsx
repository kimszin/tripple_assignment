import React from 'react'
import styled, {keyframes} from 'styled-components'
import googleAward from '/public/img/play-store2x.png';
import appleAward from '/public/img/badge-apple4x.png';

export default function AwardsContainer() {
  return (
    <Wrapper>
      <AwardItem img={googleAward}>
        2018 구글 플레이스토어<br />올해의 앱 최우수상 수상
      </AwardItem>
      <AwardItem img={appleAward}>
        2018 애플 앱스토어<br />오늘의 여행앱 선정
      </AwardItem>
    </Wrapper>
  )
}

interface ItemProps {
  img?: {
    src: string
  }
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
  margin: 50px 0px 140px 623px;
  white-space: nowrap;
  animation: ${move} 700ms ease-in 200ms;
`;
const AwardItem = styled.div<ItemProps>`
  background-size: 54px 54px;
  height: 54px;
  padding: 5px 0px 5px 62px;
  font-size: 14px;
  line-height: 22px;
  margin-right: 39px;
  display: inline-block;
  font-family: sans-serif;
  background-image: url(${props => props.img?.src});
  background-position: left top;
  background-repeat: no-repeat;
  color: rgba(58, 58, 58, 0.8);
  font-weight: bold;
`;
