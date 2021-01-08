import React from 'react'
import styled from 'styled-components'
import { Button } from '../button'
import { Logo } from '../logo'
import { Marginer } from '../marginer'

const NavBarContainer = styled.div`
  width: 100%;
  height: 50px;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const LogoContainer = styled.div``

const NavLinksContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const LoginButton = styled(Button)`
  background-color: transparent;
  border: none;

  &:hover {
    background-color: transparent;
    border: none;
    color: rgb(212, 212, 212);
  }
`

export function NavBar() {
  return (
    <NavBarContainer>
      <LogoContainer>
        <Logo inline />
      </LogoContainer>
      <NavLinksContainer>
        <Button small>Get Started</Button>
        <Marginer direction='horizontal' margin='14px' />
        <LoginButton small>Login</LoginButton>
      </NavLinksContainer>
    </NavBarContainer>
  )
}
