import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import ExploreIcon from 'react-icons/lib/md/explore'
import ProfileIcon from 'react-icons/lib/md/face'
import HeartIcon from 'react-icons/lib/md/favorite'
import CameraIcon from 'react-icons/lib/md/camera-enhance'

import SearchInput from './SearchInput'
import { BLACK, LIGHTEST_GRAY, media, WHITE } from '../styles'

import 'react-hint/css/index.css'

const Header = () => {
  return (
    <Wrapper>
      <Container>
        <StyledLink to='/'>
          <StyledCameraIcon />
          <Title>MAGRATS</Title>
        </StyledLink>
        <SearchInput />
        <RightIcons>
          <StyledLink data-rh='Explore' data-rh-at='bottom' to='/explore'>
            <ExploreIcon />
          </StyledLink>
          <StyledLink data-rh='Social' data-rh-at='bottom' to='/profile'>
            <HeartIcon />
          </StyledLink>
          <StyledLink data-rh='Profile' data-rh-at='bottom' to='/profile'>
            <ProfileIcon />
          </StyledLink>
        </RightIcons>
      </Container>
    </Wrapper>
  )
}

export default Header

// === STYLES ===
const Wrapper = styled.div`
  height: 3.5rem;
  border-bottom: 1px solid ${LIGHTEST_GRAY};
  padding: 0 1.5rem;
  ${media.medium`padding: 0 1rem;`}
  ${media.small`padding: 0 0.5rem;`}
  
  background-color: ${WHITE};
`
const Container = styled.div`
  margin: 0 auto;
  max-width: 45rem;
  height: 100%;
  
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const StyledCameraIcon = styled(CameraIcon)`
  display: none;
  ${media.small`display: block;`}
  font-size: 1.6rem;
`
const Title = styled.div`
  ${media.small`display: none;`}
`
const StyledLink = styled(Link)`
  color: ${BLACK};
  line-height: 80%;
`
const RightIcons = styled.div`
  width: 9rem;
  ${media.big`width: 8rem;`}
  ${media.medium`width: 7rem;`}
  ${media.small`width: 6rem;`}
  height: 100%;
  
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  font-size: 1.5rem;
`
