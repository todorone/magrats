import React from 'react'
import styled from 'styled-components'
import { media, LIGHTEST_GRAY, ALMOST_WHITE, WHITE, DARK_GRAY, LIGHT_GRAY } from '../styles'

const SearchInput = () => {
  return (
    <Container>
      <Input placeholder='Search' />
    </Container>
  )
}

const Container = styled.div`
  margin: 0 0.25rem;
  width: 10rem;
  ${media.medium`width: 8rem;`}
  ${media.small`width: 7rem;`}
  height: 1.25rem;
  
  position: relative;
`
const Input = styled.input`
  width: 100%;
  height: 100%;
  border: 1px solid ${LIGHTEST_GRAY};
  border-radius: 0.2rem;
  padding: 0 0 0 37%;
  ${media.medium`padding: 0 0 0 35%;`}
  ${media.small`padding: 0 0 0 33%;`}
  outline: none;
  
  background-color: ${ALMOST_WHITE};
  font-size: 0.75rem;
  font-weight: 300;
  color: ${DARK_GRAY};
  &::-webkit-input-placeholder { color: ${LIGHT_GRAY}; }
  &::-moz-placeholder { color: ${LIGHT_GRAY}; }
  transition: all 0.2s;
  
  &:focus {
    padding: 0 10% 0 10%;
    
    background-color: ${WHITE};
    text-align: left;
  }
`

export default SearchInput
