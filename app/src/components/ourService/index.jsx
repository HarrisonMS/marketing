import React from 'react'
import styled from 'styled-components'

const ServicesContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: ${({ isReversed }) => isReversed && 'row-reverse'};
  margin-bottom: 5em;
`
const ServiceImg = styled.img`
  width: 40rem;
  height: 28rem;
`

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 60%;
`

const TitleContainer = styled.h2`
  color: #ffffff;
  font-size: 22px;
  font-weight: 700;
  margin: 5px 0;
`

const Details = styled.p`
  color: #b0bec5;
  font-size: 19px;
  text-align: center;
  max-width: 55%;
`

export function OurService(props) {
  const { imgUrl, title, description, isReversed } = props
  return (
    <ServicesContainer isReversed={isReversed}>
      <DescriptionContainer>
        <TitleContainer>{title}</TitleContainer>
        <Details>{description}</Details>
      </DescriptionContainer>
      <ServiceImg src={imgUrl} />
    </ServicesContainer>
  )
}
