import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import PropTypes from 'prop-types'

import Container from '../components/Container'
import Content from '../components/Content'
import Header from '../components/Header'
import ProfileInfo from '../components/ProfileInfo'
import ProfileFeeds from '../components/ProfileFeeds'
import { getTabIcon } from '../components/TabIcon'
import { getUsers, getComments, getPosts, getPostsOfUser } from '../selectors/selectors'

class ProfileScreen extends Component {
  static navigationOptions = {
    tabBarIcon: getTabIcon('happy'),
  }

  static propTypes = {
    user: PropTypes.object,
  }

  editProfile = () => {}

  onItemClick = postId => Actions.Post({ postId })

  render () {
    const { userId, posts, users, comments } = this.props
    const user = users[userId]
    if (!user) return null // Data is not ready yet

    const postsOfUser = getPostsOfUser(posts, user)

    return (
      <Container>
        <Header title={user.id} />

        <Content>
          <ProfileInfo user={user} editProfile={this.editProfile} />

          <ProfileFeeds
            posts={postsOfUser}
            users={users}
            comments={comments}
            onItemClick={this.onItemClick}
          />
        </Content>
      </Container>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  users: getUsers(state),
  posts: getPosts(state),
  comments: getComments(state),
})

export default connect(mapStateToProps)(ProfileScreen)
