import React from 'react'
import styled from 'styled-components'
import googleAward from '/public/img/play-store2x.png';
import appleAward from '/public/img/badge-apple4x.png';

interface Props {
  img?: {
    src: string
  }
}

const Wrapper = styled.div`
  margin: 50px 0px 140px 623px;
  white-space: nowrap;
`;
const AwardItem = styled.div<Props>`
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
