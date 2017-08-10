import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import SinglePostComment from './SinglePostComment'
import { LIGHTEST_GRAY, WHITE } from '../styles'

const SinglePostView = ({
  owner,
  photoUrl,
  isLiked,
  likesNumber,
  onTapLike,
  description,
  location,
  comments,
  commentsNumber,
  showComments,
  showLikes,
  date,
}) => {
  return (
    <Container>
      <Header />
      <Image src={photoUrl} />
      <Footer>
        <SinglePostComment
          author='author'
          text='Comment...'
        />
      </Footer>
    </Container>
  )
}

const Container = styled.div`
  margin: 0 auto 2.5rem auto;
  max-width: 30rem;
  border: 1px solid ${LIGHTEST_GRAY};
  border-radius: 0.2rem;
  
  background-color: ${WHITE};
`
const Header = styled.div`
  height: 3rem;
  border-bottom: 1px solid ${LIGHTEST_GRAY};
`
const Image = styled.img`
  display: block;
  width: 100%;
`
const Footer = styled.div`
  height: 10rem;
  border-top: 1px solid ${LIGHTEST_GRAY};
`

SinglePostView.propTypes = {
  owner: PropTypes.shape({
    id: PropTypes.string.isRequired,
    thumbUrl: PropTypes.string.isRequired,
  }).isRequired,
  photoUrl: PropTypes.string.isRequired,
  isLiked: PropTypes.bool.isRequired,
  likesNumber: PropTypes.number.isRequired,
  onTapLike: PropTypes.func.isRequired,
  description: PropTypes.string.isRequired,
  location: PropTypes.string,
  comments: PropTypes.array.isRequired,
  commentsNumber: PropTypes.number.isRequired,
  showComments: PropTypes.func.isRequired,
  showLikes: PropTypes.func.isRequired,
  date: PropTypes.number.isRequired,
}

export default SinglePostView
