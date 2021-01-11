import React from 'react'
import Logo1 from '../../assets/logo/logo.png'
import styled, { css } from 'styled-components'
import { theme } from '../../theme'

const LogoContainer = styled.div`
  display: flex;
  flex-direction: ${({ inline }) => (inline ? 'row' : 'column')};
  align-items: ${({ inline }) => inline && 'center'};
  align-items: center;
`

const LogoImg = styled.img`
  width: 8rem;
  height: 8rem;
  ${({ inline }) =>
    inline &&
    css`
      width: 2.5rem;
      height: 2.5rem;
      margin-right: 6px;
    `};

  ${({ small }) =>
    small &&
    css`
      width: 3rem;
      height: 3rem;
    `};
`

const LogoText = styled.div`
  margin-top: ${({ inline }) => (inline ? 0 : '6px')};
  font-size: ${({ inline, small }) =>
    inline ? '18px' : small ? '23px' : '40px'};
  color: ${({ inline }) => (inline ? '#fff' : theme.primary)};
  font-weight: 900;
`

export function Logo(props) {
  const { inline, small } = props

  return (
    <LogoContainer inline={inline} small={small}>
      <LogoImg src={Logo1} inline={inline} small={small} />
      <LogoText inline={inline} small={small}>
        HMS
      </LogoText>
    </LogoContainer>
  )
}
