import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Container from '../dumb/Container'
import Content from '../dumb/Content'
import PostsList from '../dumb/PostsList'
import Header from '../dumb/Header'
import { getTabIcon } from '../config/navigationUtils'
import { getPostsArray, getUsers, getComments } from '../../selectors/selectors'

class HomeScreen extends React.Component {
  static navigationOptions = {
    tabBarIcon: getTabIcon('home'),
  }

  static propTypes = {
    posts: PropTypes.array,
    users: PropTypes.object,
    comments: PropTypes.object,
  }

  render () {
    const { posts, users, comments } = this.props
    return (
      <Container>
        <Header title='Magrats' />

        <Content>
          <PostsList
            posts={posts}
            users={users}
            comments={comments}
            navigation={this.props.navigation}
          />
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
