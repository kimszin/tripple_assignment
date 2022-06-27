import React from 'react'
import styled from 'styled-components'
import AwardsContainer from './AwardsContainer'
import ContentLogo from './ContentLogo'
import MetricsContainer from './MetricsContainer'

export default function StatisticSection() {
  return (
    <Wrapper>
      <ContentLogo />
      <MetricsContainer />
      <AwardsContainer />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin: 0px auto;
  position: relative;
  width: 1040px;
  height: auto;
`;
