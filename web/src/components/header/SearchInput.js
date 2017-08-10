import React from 'react'
import styled from 'styled-components'
import { media, LIGHTEST_GRAY, GRAY, ALMOST_WHITE, WHITE } from '../styles'

const SearchInput = () => {
  return (
    <Wrapper>
      <Input placeholder='Search' />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin: 0 0.25rem;
  width: 10rem;
  ${media.medium`width: 8rem;`}
  ${media.small`width: 7rem;`}
  height: 1.25rem;
  
  border-radius: 0.2rem;
  position: relative;
`
const Input = styled.input`
  width: 100%;
  height: 100%;
  border: 1px solid ${LIGHTEST_GRAY};
  padding: 0 0 0 37%;
  ${media.medium`padding: 0 0 0 35%;`}
  ${media.small`padding: 0 0 0 33%;`}
  outline: none;
  
  background-color: ${ALMOST_WHITE};
  font-size: 0.75rem;
  color: ${GRAY};
  &::-webkit-input-placeholder { color: ${LIGHTEST_GRAY}; } // Chrome/Opera/Safari
  &::-moz-placeholder { color: ${LIGHTEST_GRAY}; } // Firefox
  transition: all 0.2s;
  
  &:focus {
    padding: 0 10% 0 10%;
    
    background-color: ${WHITE};
    text-align: left;
  }
`

export default SearchInput
