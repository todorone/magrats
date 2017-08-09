import React from 'react'
import styled from 'styled-components'
import { ABSOLUTE_FILL_POSITION, LIGHTEST_GRAY, GRAY } from '../styles'

const SearchInput = () => {
  return (
    <Wrapper>
      <Input placeholder='Search' />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 10rem;
  height: 1.25rem;
  
  border-radius: 0.2rem;
  position: relative;
`
const Input = styled.input`
  ${ABSOLUTE_FILL_POSITION}
  border: 1px solid ${LIGHTEST_GRAY};
  padding: 0 1rem 0 1.25rem;
  outline: none;
  
  font-size: 0.75rem;
  color: ${GRAY};
  &::-webkit-input-placeholder { /* Chrome/Opera/Safari */
    color: ${LIGHTEST_GRAY};
  }
  &::-moz-placeholder { /* Firefox */
    color: ${LIGHTEST_GRAY};
  }
`

export default SearchInput
