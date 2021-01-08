import React from 'react'
import styled from 'styled-components'
import { theme } from '../../theme'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ArrowContainer = styled.div`
  width: 4.6rem;
  height: 4.6rem;
  border-radius: 50%;
  background-color: rgba(113, 113, 113, 0.48);
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid transparent;
  cursor: pointer;
  transition: all 220ms ease-in-out;

  &:hover {
    border: 2px solid ${theme.primary};
  }
`

const ArrowIcon = styled.div`
  margin-top: 3px;
  color: #fff;
  font-size: 3.2rem;
  transition: all 220ms ease-in-out;

  &:hover {
    color: ${theme.primary};
  }

  &:active {
    margin-top: 10px;
  }
`

export function DownArrow() {
  return (
    <ArrowContainer>
      <ArrowIcon>
        <FontAwesomeIcon icon={faAngleDown} />
      </ArrowIcon>
    </ArrowContainer>
  )
}
