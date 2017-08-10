import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import PostsList from '../posts/PostsList'
import { getPostsArray, getUsers, getComments } from '../../shared/selectors/selectors'
import { media, OVERALL_CONTAINER_WIDTH } from '../styles'

const Home = ({ posts, users, comments }) => {
  return (
    <Container>
      <PostsList
        posts={posts}
        users={users}
        comments={comments}
      />
    </Container>
  )
}

const Container = styled.div`
  margin: 0 auto;
  max-width: ${OVERALL_CONTAINER_WIDTH};
  padding: 2.5rem 1.5rem;
  ${media.medium`padding: 0 1rem;`}
  ${media.small`padding: 0;`}
`

const mapStateToProps = state => ({
  posts: getPostsArray(state),
  users: getUsers(state),
  comments: getComments(state),
})

export default connect(mapStateToProps)(Home)
