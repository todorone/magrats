import React from 'react'
import styled from 'styled-components'
import { LIGHTEST_GRAY, GRAY, media } from '../styles'

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
