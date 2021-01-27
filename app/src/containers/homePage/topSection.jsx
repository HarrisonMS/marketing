import React from 'react'
import styled from 'styled-components'
import { Element, scroller } from 'react-scroll'

import BackgroundImg from '../../assets/pictures/company_team.jpg'
import { Logo } from '../../components/logo'
import { Marginer } from '../../components/marginer'
import { NavBar } from '../../components/navBar'
import { Button } from '../../components/button'
import { DownArrow } from '../../components/downArrow'

const TopContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0;
  background-image: url(${BackgroundImg});
  position: relative;
  background-repeat: no-repeat;
`

const BackgroundFilter = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(55, 55, 55, 0.6);
  display: flex;
  flex-direction: column;
  align-items: center;
`

const MotivationalText = styled.h1`
  font-size: 3.4rem;
  font-weight: bold;
  color: #fff;
  margin: 0;
`
const DownArrowContainer = styled.div`
  position: absolute;
  bottom: 25px;
  left: 50%;
  transform: translateX(-50%);
`
export function TopSection(props) {
  const scrollToNextSection = () => {
    scroller.scrollTo('servicesSection', { smooth: true, duration: 1500 })
  }
  return (
    <Element name='topSection'>
      <TopContainer>
        <BackgroundFilter>
          <NavBar />
          <Marginer direction='vertical' margin='10em' />
          <Logo />
          <Marginer direction='vertical' margin='4em' />
          <MotivationalText>We Build It For You</MotivationalText>
          <MotivationalText>
            Full Customization For Your Business Needs
          </MotivationalText>
          <Marginer direction='vertical' margin='4em' />
          <Button>Read More</Button>
          <DownArrowContainer onClick={scrollToNextSection}>
            <DownArrow />
          </DownArrowContainer>
        </BackgroundFilter>
      </TopContainer>
    </Element>
  )
}
