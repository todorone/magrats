import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Explore from 'react-icons/lib/md/explore'
import Profile from 'react-icons/lib/md/face'

import Search from './Search'
import { LIGHT_GRAY, OFF_WHITE, ORANGE } from '../styles'

import 'react-hint/css/index.css'

const Header = () => {
  return (
    <Wrapper>
      <Container>
        <StyledLink to='/'>MAGRATS</StyledLink>
        <Search />
        <RightIcons>
          <Link data-rh='Explore' data-rh-at='bottom' to='/explore'><Explore /></Link>
          <Link data-rh='Profile' data-rh-at='bottom' to='/profile'><Profile /></Link>
        </RightIcons>
      </Container>
    </Wrapper>
  )
}

export default Header

// === STYLES ===
const Wrapper = styled.div`
  height: 50px;
  border-bottom: 1px solid ${LIGHT_GRAY};
  
  background-color: ${OFF_WHITE};
`
const Container = styled.div`
  margin: 0 auto;
  max-width: 800px;
  height: 100%;
  
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const StyledLink = styled(Link)`
  color: ${ORANGE};
`
const RightIcons = styled.div`
  width: 150px;
  height: 100%;
  
  display: flex;
  align-items: center;
  justify-content: space-between;
`
