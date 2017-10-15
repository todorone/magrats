import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Container from '../components/Container'
import Content from '../components/Content'
import PostsList from '../components/PostsList'
import Header from '../components/Header'
import { getTabIcon } from '../components/TabIcon'
import { getPostsArray, getUsers, getComments } from '../selectors/selectors'
import { logoImage } from '../styles'

class HomeScreen extends Component {
  static navigationOptions = {
    tabBarIcon: getTabIcon('home'),
  }

  static propTypes = {
    posts: PropTypes.array,
    users: PropTypes.object,
    comments: PropTypes.object,
  }

  render() {
    const { posts, users, comments } = this.props
    return (
      <Container>
        <Header titleImage={logoImage} />

        <Content>
          <PostsList posts={posts} users={users} comments={comments} />
        </Content>
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  posts: getPostsArray(state),
  users: getUsers(state),
  comments: getComments(state),
})

export default connect(mapStateToProps)(HomeScreen)
