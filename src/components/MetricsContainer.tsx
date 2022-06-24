import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin-left: 623px;
  padding-top: 150px;
`;
const MetricItem = styled.div`
  font-size: 36px;
  letter-spacing: -1px;
  margin-bottom: 20px;
  color: rgb(58, 58, 58);
  font-family: sans-serif;
`;

export default function MetricsContainer() {
  return (
    <Wrapper>
      <MetricItem>
        <strong><span>700</span>만 명</strong>의 여행자
      </MetricItem>
      <MetricItem>
        <strong><span>100</span>만 개</strong>의 여행 리뷰
      </MetricItem>
      <MetricItem>
        <strong><span>470</span>만 개</strong>의 여행 일정
      </MetricItem>
    </Wrapper>
  )
}
