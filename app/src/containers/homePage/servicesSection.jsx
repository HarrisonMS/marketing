import React from 'react'
import { Element } from 'react-scroll'
import { SectionTitle } from '../../components/sectionTitle'
import styled from 'styled-components'
import { Marginer } from '../../components/marginer'
import { OurService } from '../../components/ourService'
import Service1Img from '../../assets/illustrations/web_development_.png'
import Service2Img from '../../assets/illustrations/mobile_phone.png'
import Service3Img from '../../assets/illustrations/bug_fixed.png'

const ServicesContainer = styled(Element)`
  width: 100%;
  min-height: 1400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
  background-color: #121212;
`
var imgstyle = {
  height: '100px',
}

export function ServicesSection(props) {
  console.log(props)
  return (
    <ServicesContainer name='servicesSection'>
      <SectionTitle>Best Quality Software</SectionTitle>
      <Marginer direction='vertical' margin='3em' />
      <OurService
        title='Fully integrated services'
        description='We build and deliver fully integrated web apps with customized control panels that fit your company needs'
        imgUrl={Service1Img}
      ></OurService>
      <OurService
        style={imgstyle}
        isReversed
        title='Mobile optimized'
        description='From Desktop to Mobile our team of designers and developers will provide you a smooth transition'
        imgUrl={Service2Img}
      ></OurService>
      <OurService
        title='Quality is our priority'
        description='We have tteams of professional developers, designers and managers that ensures delivering the best software quality for your company'
        imgUrl={Service3Img}
      ></OurService>
    </ServicesContainer>
  )
}
